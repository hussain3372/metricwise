import React from 'react'
import HeroSection from './components/HeroSection'
import Platform from './components/Platform'
import Performance from "./components/Performance"
import Card from './components/Card'
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