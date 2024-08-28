import React from 'react'
import Platform from './components/Home/Platform'
import NewPerformance from "./components/Home/NewPerformance"
import Card from './components/Home/Card'
import NewHero from './components/Home/NewHero'
import Blogs from './components/Home/Blogs'
const page = () => {
  return (
    <div>
      <NewHero />
      <Platform/>
      <NewPerformance />
      <Card/>
      <Blogs />
    </div>
  )
}

export default page