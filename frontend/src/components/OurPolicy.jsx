import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around items-center text-center my-25'>
      
      {/* Easy Delivery Policy */}
      <div>
        <img src={assets.exchange_icon} className='w-10 m-auto mb-4' alt='delivery icon' />
        <p className='font-semibold text-gray-700'>Hassle Free Delivery</p>
        <p className='text-gray-400 text-sm'>fast and reliable delivery right to your doorstep.</p>
      </div>

      {/* Replacement Policy */}
      <div>
        <img src={assets.quality_icon} className='w-10 m-auto mb-4' alt='replacement icon' />
        <p className='font-semibold text-gray-700'>7 Days Replacement Policy</p>
        <p className='text-gray-400 text-sm'>7-day product replacement for damaged or defective items.</p>
      </div>

      {/* 24/7 Customer Support */}
      <div>
        <img src={assets.support_img} className='w-10 m-auto mb-4' alt='support icon' />
        <p className='font-semibold text-gray-700'>Best Customer Support</p>
        <p className='text-gray-400 text-sm'>24/7 customer assistance for all your queries.</p>
      </div>
   
    </div>
  )
}

export default OurPolicy
