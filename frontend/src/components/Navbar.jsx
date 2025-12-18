import React from 'react'
import { assets } from '../assets/assets.js'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { useContext } from 'react';

const Navbar = () => {


  // Error: 'useState' is not defined. 
  // Solution: You must import useState from 'react' to use it.
  // Example fix at the top of your file:
  // import React, { useState } from 'react'
  const [visible, setVisible] = useState(false);
  // Yes, there is an error. useContext is not imported. You need to import useContext from 'react'.
  // Correct usage:

  const { setShowSearch ,getCartCount,navigate, token, setToken , setCartItems} = useContext(ShopContext);

  const logout =() => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    
  }
  return (
    <div className="flex items-center justify-between py-5 font-medium">
        <Link to="/"><img src={assets.logo} className='w-36 rounded-sm' alt="Logo" /></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink to='/' className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to='/collection' className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to='/alteration' className="flex flex-col items-center gap-1">
            <p>ALTERATION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to='/about' className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to='/contact' className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

        </ul>

        <div className='flex items-center gap-6'>
          <img onClick={()=>setShowSearch(true)} src={assets.search} className='w-5 cursor-pointer' alt="search" />
            <div className='group relative'>
              <img onClick={()=> token ? null :navigate('/login')} src={assets.user} className= 'w-5 cursor-pointer' alt="" />
              {/* Dropdown */}
              {token && 
                            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                              <p className='cursor-pointer hover:text-black'>My Profile</p>
                              <p onClick={()=> navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                              <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                            </div>
                          </div>
                          }

            </div>
            <Link to= '/cart' className='relative'>
              <img src={assets.shoppingCart} className='w-5 min-w-5' alt="cart" />
             <p className='absolute right-[-3px] bottom-[-3px] w-3 text-center leading-3 bg-black text-white aspect-square rounded-full text-[6px]'>{getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu} className='w-5 cursor-pointer sm:hidden' alt="menu" />
        </div>
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all " ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img className='h-4 ' src={assets.back} alt='' />
              <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-[0.1px]' to='/'>HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-[0.1px]' to='/collection'>COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-[0.1px]' to='/alteration'>ALTERATION</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-[0.1px]' to='/about'>ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-[0.1px]' to='/contact'>CONTACT</NavLink>


          </div>
        </div>

    </div>
  )
}

export default Navbar