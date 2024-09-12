import Image from 'next/image'
import React from 'react'

const NewPlatform = () => {
  return (
    <div className='pt-24 pb-20 pl-5 md:pl-20 pr-5 md:pr-20'>
        <div className='widthclass bg-[url("/performance-bg.png")] bg-cover bg-center bg-no-repeat border border-[#0000001F] rounded-lg'>
            <div className='flex flex-col justify-center items-center p-5 sm:p-10 text-center'>
                <h1 className='text-[20px] sm:text-[40px] font-medium leading-5 sm:leading-10'>A comprehensive AI observability <br className="hidden md:block" /> and governance platform</h1>
                <div className='lg:grid grid-cols-2 gap-14 items-center mt-16'>
                    <div>
                        <Image src="/Visual.png" width={532} height={364} alt='visual'/>
                    </div>
                    <div className='flex flex-col justify-center items-start mt-10 lg:mt-0'>
                        <div className='mb-5'>
                            <Image src="/rocket.png" width={40} height={40} alt='rocket'/>
                        </div>
                        <h2 className='font-18 text-start font-semibold'>Real-time performance tracking</h2>
                        <p className=' font-16 text-start font-normal mt-3 opacity-60'>Our platform empowers organizations to gain <br className="hidden md:block" /> comprehensive insights into the inner workings of <br className="hidden md:block" /> their ML and AI solutions, ensuring optimal <br className="hidden md:block" /> performance, reliability, and compliance.  We enable <br className="hidden md:block" /> real-time surveillance, alerting, and performance <br className="hidden md:block" /> tracking throughout the entire AI life cycle.  With our <br className="hidden md:block" /> observability module, stakeholders get detailed <br className="hidden md:block" /> insights, enabling them to understand system <br className="hidden md:block" /> behavior, identify anomalies, and enhance model <br className="hidden md:block" /> performance. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewPlatform