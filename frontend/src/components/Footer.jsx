import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'


const footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-48 rounded-sm' alt="" />
                <p className='w-full md:w-3/3 text-gray-600 mb-6'>
                    Quality Clothing for Everybody. Crafted with care, delivered with pride.
                </p>
            </div>
            <div>
                <p className="font-semibold text-gray-800 mb-3 text-base">COMPANY</p>
                <ul className="space-y-1">
                    <Link to={'/'}><li className="text-gray-600 hover:text-black transition">Home</li></Link>
                    <Link to={'/products'}><li className="text-gray-600 hover:text-black transition">Products</li></Link>
                    <Link to={'/alteration'}><li className="text-gray-600 hover:text-black transition">Alteration</li></Link>
                    <Link to={'/about'}><li className="text-gray-600 hover:text-black transition">About Us</li></Link>
                </ul>
            </div>
            <div>
                <p className="font-semibold text-gray-800 mb-3 text-base ">GET IN TOUCH</p>
                <ul className="space-y-1 mt-3">
                    <li>
                        <span className="text-gray-600">Email: </span>
                        <a href="mailto:roothclothing.com" className="text-gray-600 hover:text-black transition">
                            roothclothing@gmail.com
                        </a>
                    </li>
                    <li>
                        <span className="text-gray-600">Phone: </span>
                        <a href="tel:+12345678" className="text-gray-600 hover:text-black transition">
                            +123456789
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/rooth_clothing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition"
                        >
                            <img src={assets.instagram} alt="Instagram" className="w-5 h-5 " />
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
        <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@roothclothing.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default footer