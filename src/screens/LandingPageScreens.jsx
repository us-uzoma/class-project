import React from 'react'
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Testimony from '../components/Testimony/Testimony';
import Cta from '../components/Cta/Cta';



const LandingPageScreens = () => {
  return (
    <div>
      <Hero />
      <About />
      <Testimony /> 
      <Cta />
    </div>
  )
}

export default LandingPageScreens