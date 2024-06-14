import React from 'react'
import HeroSection from './components/Home/HeroSection'
import Platform from './components/Home/Platform'
import Performance from "./components/Home/Performance"
import Card from './components/Home/Card'
const page = () => {
  return (
    <div>
      <HeroSection/>
      <Platform/>
      <Performance/>
      <Card/>
    </div>
  )
}

export default page