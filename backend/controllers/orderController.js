import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing order using Instagram/manual method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amountPaid, address, paymentMethod } = req.body;

    const orderData = {
      userId,
      items,
      amount: amountPaid,        // total amount
      amountPaid,
      address,
      paymentMethod,
      payment: false,            // payment not verified yet (admin will verify)
      status: "Pending",         // default for your manual flow
      date: Date.now()
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // clear cart
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// placing order using stripe Method
const placeOrderStripe = async (req, res) => {
}

// placing order using Razorpay Method
const placeOrderRazorpay = async (req, res) => {
}

// ALL orders data for admin page

const allOrders = async (req, res) => {

}


// ALL userdata for frontend page

const userOrders = async (req, res) => {
    try {
      const userId = req.user.id; // authUser middleware should set req.user
      const orders = await orderModel.find({ userId });
      res.json({ success: true, orders });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  };
  

//update order status from admin panel

const updateStatus = async (req, res) => {

}

export {placeOrder,placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus}