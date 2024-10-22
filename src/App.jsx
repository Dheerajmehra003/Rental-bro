import React from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import Title from './Components/Title'
import ServicesSection from './Components/ServicesSection'

const App = () => {
  return (
    <>
    <div id='imageContainer'>
      <Header />
      <HeroSection />
    </div>
     <ServicesSection />
    </>
  )
}

export default App