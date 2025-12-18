import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const about = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'ABOUT'} text2={'US'}></Title>
     </div>
     <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className= 'w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>llorum ipsm llorum ipsm llorum ipsm llorum ipsm llorum ipsm llorum ipsm llorum ipsm llorum ipsm llorum ipsm llorum ipsm llorum ipsm llorum ipsm llorum ipsm llorum ipsm </p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Our mission is chumma oru rasam is lorum ipsum ipsum for rooth clthing la la la la </p>
      </div>
     </div>
     <div className='text-2xl py-4'>
      <Title text1={"WHY"} text2={'CHOOSE US'}></Title>
     </div>
     <div className='flex flex-col md:flex-row text-sm mb-20 gap-6'>
      <div className='border border-gray-200 px-10 md:px-16 sm:py-20 flex flex-col gap-5 flex-1'>
        <b>Quality Assurance: </b>
        <p className='text-gray-600'>We njoonji is the poli of the world and especially in the india</p>
      </div>
      <div className='border border-gray-200 px-10 md:px-16 sm:py-20 flex flex-col gap-5 flex-1'>
        <b>Convenience: </b>
        <p className='text-gray-600'>We njoonji is the poli of the world and especially in the india</p>
      </div>
      <div className='border border-gray-200 px-10 md:px-16 sm:py-20 flex flex-col gap-5 flex-1'>
        <b>Exceptional Customer Service: </b>
        <p className='text-gray-600'>We njoonji is the poli of the world and especially in the india</p>
      </div>
     </div>
    </div>
  )
}

export default about