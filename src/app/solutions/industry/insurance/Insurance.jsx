import Link from "next/link";
import React from "react";
import Feature from "./Feature";
import Insurancecard from "./Insurancecard"
import Image from "next/image";

const Insurance = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="p-4 sm:p-16 2xl:p-10">
          <div className="grid md:grid-cols-2 items-center mt-10 md:mt-0">
            <div>
              <h1 className="font-36 font-inter font-bold leading-10">
                Insurance
              </h1>
              <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
              AI transforms the insurance landscape, enabling tailored services and precise risk assessment. Yet, to uphold integrity and fairness, rigorous monitoring is indispensable, guaranteeing that AI models are transparent, unbiased, and in line with regulatory requirements.
              </p>
              <Link href="/Demo" className="hero-btn">
                Book a Demo
                <Image src="/free.png" width={24} height={24} alt="free" />
              </Link>
            </div>
            <div className="flex justify-end items-end mt-10 md:mt-0">
              <Image src="/insurance.png" width={540} height={540} alt="moni" />
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
              Predict and Mitigate Risks with <br /> Precision Insights
            </h1>
            <p className="font-24 font-inter font-normal leading-6 md:leading-8 mt-5 opacity-60">
            In the insurance sector, predicting and mitigating risks accurately is <br /> paramount. Our advanced AI models leverage extensive data analysis <br /> to identify potential risks, ranging from property damage to health <br /> emergencies. By examining historical patterns and real-time data <br /> streams, our platform empowers insurers to proactively manage risks <br />, minimize losses, and optimize underwriting strategies.
            </p>
          </div>
        </div>
      </div>


      <div className="">
        <div>
          <Insurancecard/>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
