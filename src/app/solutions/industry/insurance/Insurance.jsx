import Image from "next/image";
import Link from "next/link";
import React from "react";
import InsuranceCards from "./Insurance-cards";
import InsuranceServices from "./Insurance-services";

const Insurance = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[151px] items-center mt-10 bg-[url('/industry-bg.svg')] bg-no-repeat bg-cover bg-center px-5 md:px-10 lg:px-[94px] pt-[82px] pb-[76px] mx-2.5 md:mx-20 lg:mx-24">
          <div className="flex flex-col">
            <Image src="/Dots.svg" width={36} height={8} alt="Dots" />
            <h1 className="font-40 font-medium text-[#7736B7] mt-4">
              Insurance
            </h1>
            <p className="font-14 font-normal leading-5 mt-5">
              AI optimizes retail operations, enhancing customer engagement and
              supply chain efficiency. However, to mitigate risks such as data
              privacy breaches and algorithmic biases, robust governance and
              continuous monitoring frameworks are indispensable.
            </p>
          </div>
          <div className="h-full w-full">
            <Image
              src="/insurance.png"
              width={450}
              height={365}
              alt="finance"
            />
          </div>
        </div>

        <div>
          <InsuranceCards />
        </div>
      </div>

      <div className="">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto py-20">
            <h1 className="font-40 font-medium leading-[52px] text-[#000]">
              <span className="text-[#7736B7]">Predict and Mitigate</span> Risks
              with
              <span className="text-[#7736B7]"> Model</span>
              <br className="hidden md:block" />
              <span className="text-[#7736B7]"> Insights</span>
            </h1>
            <p className="font-20 font-normal leading-6 mt-4 text-[#00000099]">
            In the insurance sector, predicting and mitigating risks accurately is paramount. Our advanced AI models leverage <br className="hidden md:block" /> extensive data analysis to identify potential risks, ranging from property damage to health emergencies. By <br className="hidden md:block" /> examining historical patterns and real-time data streams, our platform empowers insurers to proactively manage <br className="hidden md:block" /> risks, minimize losses, and optimize underwriting strategies.
            </p>
          </div>
        </div>
      </div>

      <div>
        <InsuranceServices />
      </div>
    </div>
  );
};

export default Insurance;
