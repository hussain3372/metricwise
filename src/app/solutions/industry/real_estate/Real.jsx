import Link from "next/link";
import React from "react";
import Feature from "./Feature";
import Realcard from "./Realcard"
import { PiGreaterThanLight } from "react-icons/pi";
import Image from "next/image";
const Finance = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="p-4 sm:p-10 2xl:p-10">
          {/* <div className="flex items-center">
            <h1 className="font-24 black font-normal font-inter flex items-center flex-wrap gap-2">
              Metricwise
              <span className="font-20 font-normal font-inter opacity-50 flex items-center gap-2">
              <PiGreaterThanLight size={15}/> Solutions <PiGreaterThanLight size={15}/> Industries <PiGreaterThanLight size={15}/> Real Estate
              </span>
            </h1>
          </div> */}
          <div className="grid md:grid-cols-2 items-center mt-10 md:mt-0">
            <div>
              <h1 className="font-36 font-inter font-bold leading-10">
                Real Estate
              </h1>
              <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                AI transforms property management and investment decisions, optimizing processes and maximizing returns. However, effective oversight is crucial to mitigate risks such as data privacy breaches and algorithmic biases.
              </p>
              <Link
                href="/Demo"
                className="font-20 font-normal font-inter leading-6 bg-[#042440] white rounded-[8px] w-[180px] md:w-[214px] h-[50px] md:h-[52px] flex gap-3 justify-center   items-center"
              >
                Book a Demo
                <Image
                  src="/free.png"
                  width={24}
                  height={24}
                  className=" "
                  alt=""
                />
              </Link>
            </div>
            <div className="flex justify-end items-end mt-10 md:mt-0">
              <Image src="/estate.png" width={540} height={540} alt="moni" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0424400A]">
        <Feature />
      </div>

      <div className="bg-[#042440]">
        <div className="widthclass">  
          <div className="flex flex-col justify-center items-center text-center m-auto p-8 sm:p-16 white">
            <h1 className="font-36 font-inter font-bold leading-8 md:leading-10">
            Transform Your Real Estate <br /> Strategy with AI Model Monitoring
            </h1>
            <p className="font-24 font-inter font-normal leading-6 md:leading-8 mt-5 opacity-60">
            In the ever-evolving realm of healthcare, ensuring the reliability and <br /> transparency of AI-powered systems is paramount to delivering <br /> exceptional patient care and maintaining trust within the industry.
            </p>
          </div>
        </div>
      </div>


      <div className="mb-36">
        <div>
          <Realcard/>
        </div>
      </div>
    </div>
  );
};

export default Finance;
