import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import MaternityClothes from '../components/MaternityClothes'
import OurPolicy from '../components/OurPolicy'
import Footer from '../components/Footer'

const home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <MaternityClothes/>
      <OurPolicy/>
      <Footer/>
      </div>
  )
}

export default home