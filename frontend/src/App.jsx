import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Collection from './pages/Collection.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/cart.jsx'
import Login from './pages/Login.jsx'
import Footer from './components/Footer.jsx'
import Placeorder from './pages/Placeorder.jsx'
import Orders from './pages/Orders.jsx'
import Navbar from './components/Navbar'
import Loader from './components/Loader/Loader.jsx'
import Alteration from './pages/Alteration.jsx'
import SearchBar from './components/SearchBar.jsx'
import { ToastContainer, toast } from 'react-toastify';



const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // show loader for 3s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <ToastContainer /> 
          <Navbar />
          <SearchBar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/place-order' element={<Placeorder />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/alteration' element={<Alteration/>}/>
          
          </Routes>
          <Footer/>
          
        </div>
      )}
    </>
  );
};

export default App;
