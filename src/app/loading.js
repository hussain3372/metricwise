import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div>
    <div className='flex justify-center items-center m-auto h-96'>
      <Image src="/gif-metric.gif" width={300} height={300}/>
    </div>
    </div>
  )
}

export default loading