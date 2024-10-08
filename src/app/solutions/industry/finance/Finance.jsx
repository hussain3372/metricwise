import Link from "next/link";
import React from "react";
import Feature from "./Feature";
import Featurecard from "./Featurecard";
import Image from "next/image";

const Finance = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="p-4 sm:p-16 2xl:p-10">
          <div className="grid md:grid-cols-2 items-center mt-10 md:mt-0">
            <div>
              <h1 className="font-36 font-inter font-bold leading-10 text-[#042440]">
                Financial & Banking
              </h1>
              <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                AI drives unparalleled customer satisfaction and optimizes
                business strategies. Vigilant supervision ensures that these
                advantages are not compromised by the heightened risks
                associated with AI bias and opacity.
              </p>
              <Link href="/Demo" className="hero-btn">
                Book a Demo
                <Image src="/free.png" width={24} height={24} alt="free" />
              </Link>
            </div>
            <div className="flex justify-end items-end mt-10 md:mt-0">
              <Image src="/finance.png" width={540} height={540} alt="moni" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0424400A]">
        <Feature />
      </div>

      <div className="bg-[url('/finance-bg.png')] bg-cover bg-center bg-no-repeat text-black">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto p-8 sm:p-16">
            <h1 className="font-36 font-inter font-bold leading-8 md:leading-10">
              Empower Your Financial Services <br /> with AI Model Monitoring
            </h1>
            <p className="font-24 font-inter font-normal leading-6 md:leading-8 mt-5 opacity-60">
              In the fast-paced world of financial services, maintaining trust
              and <br /> reliability in AI-powered systems is paramount.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div>
          <Featurecard />
        </div>
      </div>
    </div>
  );
};

export default Finance;
