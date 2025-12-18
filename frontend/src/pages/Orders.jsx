import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const { token, backendUrl, currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/order/user`, {
          headers: { token }
        });
        if (response.data.success) {
          setOrders(response.data.orders);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, [backendUrl, token]);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div className='mt-6 space-y-4'>
        {orders.length === 0 ? (
          <p className='text-gray-500'>You have no orders yet.</p>
        ) : (
          orders.map((order, index) => (
            <div
              key={index}
              className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
            >
              <div className='flex flex-col md:flex-row items-start gap-6 text-sm md:text-base'>
                {order.items.map((item, idx) => (
                  <div key={idx} className='flex items-center gap-4'>
                    <img className='w-16 sm:w-20' src={item.image[0]} alt='' />
                    <div className='font-medium'>
                      <p>{item.name}</p>
                      <div className='flex items-center gap-3 mt-1 text-gray-700'>
                        <p>{currency}{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Size: {item.size}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='md:w-1/2 flex flex-col md:flex-row justify-between mt-2 md:mt-0'>
                <div className='flex items-center gap-2'>
                  <p
                    className={`min-w-2 h-2 rounded-full ${
                      order.status === 'Pending'
                        ? 'bg-yellow-500'
                        : order.status === 'Confirmed'
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }`}
                  ></p>
                  <p className='text-sm md:text-base'>{order.status}</p>
                </div>
                {order.status === 'Cancelled' && order.cancelReason && (
                  <p className='text-sm text-red-600 mt-1 md:mt-0'>Reason: {order.cancelReason}</p>
                )}
                <div className='flex-1 flex justify-end mt-1 md:mt-0'>
                  <button className='border px-4 py-2 text-sm font-medium rounded-sm'>
                    TRACK ORDER
                  </button>
                </div>
              </div>

              <p className='text-gray-400 mt-2 md:mt-0'>
                Date: {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
