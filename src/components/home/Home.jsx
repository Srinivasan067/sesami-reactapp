import React from 'react'
import './Home.css'
import MainDisplay from './MainDisplay/MainDisplay'
import Bussinessinfo from './bussinessinfo/Bussinessinfo'
import Products from './products/Products'
import Landing from './MainDisplay/Landing'
import WhatGPT3 from '../what/what'
import CTA from '../cta/cta'
import contact from '../contact/contact'
const Home = () => {
  return (
    <div className='Home-display'>
      <Landing />
      <WhatGPT3 />
        <MainDisplay />
        <Bussinessinfo />
        <CTA />
        <Products />
        <contact />
      
    </div>
  )
}

export default Home