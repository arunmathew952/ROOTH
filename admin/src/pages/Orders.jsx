import orderModel from "../models/orderModel.js";

// Get all orders (admin)
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Approve order (admin)
const approveOrder = async (req, res) => {
  try {
    const { orderId } = req.body;

    const order = await orderModel.findById(orderId);
    if (!order) return res.json({ success: false, message: "Order not found" });

    order.status = "Confirmed";
    order.payment = true;
    await order.save();

    res.json({ success: true, message: "Order confirmed" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Cancel order (admin)
const cancelOrder = async (req, res) => {
  try {
    const { orderId, reason } = req.body;

    const order = await orderModel.findById(orderId);
    if (!order) return res.json({ success: false, message: "Order not found" });

    order.status = "Cancelled";
    order.cancelReason = reason;
    await order.save();

    res.json({ success: true, message: "Order cancelled" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { allOrders, approveOrder, cancelOrder };
