import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/order/all")
      .then(res => setOrders(res.data.orders));
  }, []);

  return (
    <div>
      <h1>Admin Orders</h1>
      {orders.map(order => (
        <div key={order._id}>
          <p>Status: {order.status}</p>
          <button>Approve</button>
          <button>Cancel</button>
        </div>
      ))}
    </div>
  );
};

export default Orders;
