import React, { useState } from 'react'
import Title from '../components/Title'
import { alter } from '../assets/assets'

const Customization = () => {

  const [alterText, setAlterText] = useState("");

  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'CUSTOM'} text2={'ALTERATION'} />
      </div>

      {/* Updated Layout: Before & After images on left + Text on right */}
      <div className='my-10 flex flex-col md:flex-row items-center gap-12'>
        
        <div className='flex gap-6'>
          <img className='w-full md:max-w-[230px] rounded-lg shadow' src={alter.p_img10} alt="" />
          <img className='w-full md:max-w-[230px] rounded-lg shadow' src={alter.p_img17} alt="" />
        </div>

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-center md:text-left'>
          <p>
            We offer <b>personalized alteration services</b> to convert your
            comfortable clothes into <b>maternity-friendly outfits</b>.
          </p>
          <p>
            Our tailoring ensures your favorite clothes remain stylish, soft,
            and perfectly fitted throughout every stage of your motherhood journey.
          </p>
          <b className='text-gray-800'>What We Do</b>
          <p>
            - Resize outfits for bump-friendly comfort <br />
            - Add elastic & adjustable waistbands <br />
            - Modify dresses, tops, ethnic wear & more <br />
            - Gentle stitching to maintain original style
          </p>
        </div>
      </div>

      {/* Custom Request Box */}
      <div className='text-2xl py-8 text-center'>
        <Title text1={"REQUEST"} text2={'CUSTOMIZATION'} />
      </div>

      <div className='mb-20 flex flex-col items-center gap-6'>
        <textarea
          value={alterText}
          onChange={(e) => setAlterText(e.target.value)}
          className='border border-gray-300 w-full md:w-3/4 h-32 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400'
          placeholder='Describe your alteration requirement...'
        ></textarea>

        <button className='bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition duration-200'>
          Contact Us for Alteration
        </button>
      </div>
    </div>
  )
}

export default Customization
