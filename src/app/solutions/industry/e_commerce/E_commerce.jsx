import Link from "next/link";
import React from "react";
import Feature from "./Feature";
import E_commercecard from "./E_commercecard";
import Image from "next/image";

const e_commerce = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="p-4 sm:p-10 2xl:p-10">
          {/* <div className="flex items-center">
            <h1 className="font-24 black font-normal font-inter flex items-center flex-wrap gap-2">
              Metricwise
              <span className="font-20 font-normal font-inter opacity-50 flex items-center gap-2">
                <PiGreaterThanLight size={15}/> Solutions <PiGreaterThanLight size={15}/>
                Industries <PiGreaterThanLight size={15}/> Retail & Ecommerce
              </span>
            </h1>
          </div> */}
          <div className="grid md:grid-cols-2 items-center mt-10 md:mt-0">
            <div>
              <h1 className="font-36 font-inter font-bold leading-10">
                Retail and Ecommerce
              </h1>
              <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                AI optimizes retail operations, enhancing customer engagement
                and supply chain efficiency. However, to mitigate risks such as
                data privacy breaches and algorithmic biases, robust governance
                and continuous monitoring frameworks are indispensable.
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
              <Image src="/commerce.png" width={540} height={540} alt="moni" />
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
              Empower Your Retail and E-commerce <br /> Operations with AI Risk
              Monitoring
            </h1>
            <p className="font-24 font-inter font-normal leading-6 md:leading-8 mt-5 opacity-60">
              In the dynamic world of retail and e-commerce, vigilant monitoring{" "}
              <br /> and management of risks associated with AI-powered systems
              are <br /> essential for success.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div>
          <E_commercecard />
        </div>
      </div>
    </div>
  );
};

export default e_commerce;
