import React ,{useContext, useState} from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const placeorder = () => {
  const [method,setMethod] = useState('instagram');
  const {navigate ,backendUrl ,token, cartItems,setCartItems, getCartAmount, delivery_fee, products} = useContext(ShopContext)
  const [formData, setFormData] =useState({
    firstname:'',
    lastname:'',
    email:'',
    street:'',
    city:'',
    state:'',
    pincode:'',
    landmark:'',
    phone:''

  })
  const onchangeHandler =(event)  => {
    const name = event.target.name
    const value = event.target.value
    setFormData(data => ({...data,[name]:value}))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      let orderItems = [];

      for (const productId in cartItems) {
        const productSizes = cartItems[productId];
      
        for (const size in productSizes) {
          if (productSizes[size] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === productId)
            );
      
            if (itemInfo) {
              itemInfo.size = size;
              itemInfo.quantity = productSizes[size];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      
      let orderData = {
        address: formData,
        items: orderItems,
        amountPaid: getCartAmount() + delivery_fee,
        paymentMethod: method

      }

      switch(method) {
        //API Calls for instagram
        case 'instagram':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, {headers: {token}})
          if (response.data.success){
            setCartItems({})
            navigate('/orders')
          }else{
            toast.error(response.data.message)
          }
          break;
        
          
        default:
          break;

      }
      
      
    } catch (error) {
      
    }

  }

  
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY"} text2={"INFORMATION"}></Title>
        </div>
        <div className='flex gap-3'>
          <input required onChange={onchangeHandler} name='firstname' value={formData.firstname} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name'/>
          <input required onChange={onchangeHandler} name='lastname' value={formData.lastname}  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name'/>

        </div>
        <div>
        <input required onChange={onchangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Email Address'/>


        </div>
        <div className='flex gap-3'>
          <input required onChange={onchangeHandler} name='pincode' value={formData.pincode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Pincode'/>
          <input required onChange={onchangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Mobile Number'/>
          </div>

          <div>
          <input required onChange={onchangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-4.5 px-3.5 w-full' type="text" placeholder='Address (area & street)'/>
          </div>

          <div className='flex gap-3'>
            <input required onChange={onchangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City/District/Town'/>
            <input required onChange={onchangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
          </div>

          <div className='flex gap-3'>
            <input required onChange={onchangeHandler} name='landmark' value={formData.landmark}  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Landmark'/>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Alternate Phone'/>
          </div>



      </div>
      {/* Right Side */}
      <div className='mt-10'>
         <div className='mt-8 min-w-90'>
          <CartTotal/>
        </div>
        <div className='mt-16'>
          <div className='text-2xl sm:text-2xl my-3 lg:text-2xl lg:my-3'>
            <Title text1={"PAYMENT"} text2={"METHOD"}></Title>
          </div>
          <div className='flex gap-3 flex-col lg:flex-row'>
          <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500 ': ''}`}></p>
            <img src={assets.stripe_logo} alt="" />
          </div>
          <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full  ${method === 'razorpay' ? 'bg-green-500 ': ''} `}></p>
            <img src={assets.razorpay_logo} alt="" />
          </div>
          <div onClick={()=>setMethod('instagram')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full  ${method === 'instagram' ? 'bg-green-500 ': ''} `}></p>
            <p className='text-gray-500 text-lg font-large mx-4'>INSTAGRAM DIRECT</p>
          </div>
          </div>
          <div className='w-full text-end mt-8'>
          <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
    
  )
}

export default placeorder