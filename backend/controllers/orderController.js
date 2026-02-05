import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// ================== PLACE ORDER (Manual / Instagram) ==================
const placeOrder = async (req, res) => {
  try {
    const { items, amountPaid, address, paymentMethod } = req.body;
    const userId = req.user.id; // from auth middleware

    const orderData = {
      userId,
      items,
      amount: amountPaid,
      amountPaid,
      address,
      paymentMethod,
      payment: false,
      status: "Pending",
      date: Date.now()
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ================== STRIPE (NOT USED NOW) ==================
const placeOrderStripe = async (req, res) => {
  res.json({ success: false, message: "Stripe not enabled" });
};

// ================== RAZORPAY (NOT USED NOW) ==================
const placeOrderRazorpay = async (req, res) => {
  res.json({ success: false, message: "Razorpay not enabled" });
};

// ================== ADMIN: ALL ORDERS ==================
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({}).sort({ date: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ================== USER: MY ORDERS ==================
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ userId: req.user.id })
      .sort({ date: -1 });

    res.json({ success: true, orders });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ================== ADMIN: UPDATE STATUS ==================
const updateStatus = async (req, res) => {
  try {
    const { orderId, status, reason } = req.body;

    const updateData = { status };

    if (status === "Cancelled") {
      updateData.cancelReason = reason || "Cancelled by admin";
    }

    if (status === "Confirmed") {
      updateData.payment = true;
    }

    await orderModel.findByIdAndUpdate(orderId, updateData);

    res.json({ success: true, message: "Order status updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus
};
