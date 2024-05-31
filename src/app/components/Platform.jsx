import React from 'react'

const Platform = () => {
  return (
    <div className='mt-10 border-b border-[#042440] border-opacity-[12%]'>
        <div className='flex flex-col justify-center items-center text-center widthclass'>
            <h1 className='font-36 fontbold leading-10'>A Comprehensive AI Observability and <br /> Governance Platform</h1>
            <p className='font-24 fontregular leading-8 mt-10 black opacity-60 p-10'>Our platform empowers organizations to gain comprehensive insights into the inner workings of their <br className='hidden md:block'/> ML and AI solutions, ensuring optimal performance, reliability, and compliance.  We enable real-time <br className='hidden md:block'/> surveillance, alerting, and performance tracking throughout the entire AI life cycle.  With our <br className='hidden md:block'/> observability module, stakeholders get detailed insights, enabling them to understand system <br className='hidden md:block'/> behavior, identify anomalies, and enhance model performance. Additionally, our governance module <br className='hidden md:block'/> ensures compliance, fairness, and accountability in the ever-changing landscape of artificial <br className='hidden md:block'/>intelligence.</p>
            <div>
            <img src="/platformimg.png" className='mt-10' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Platform