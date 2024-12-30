import Image from "next/image";
import Link from "next/link";
import React from "react";
import FinanceCards from "./Finance-cards";
import FinanceServices from "./Finance-services";

const Finance = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[151px] items-center mt-10 bg-[url('/industry-bg.svg')] bg-no-repeat bg-cover bg-center px-5 md:px-10 lg:px-[94px] pt-[82px] pb-[76px] mx-2.5 md:mx-20 lg:mx-24">
          <div className="flex flex-col">
            <Image src="/Dots.svg" width={36} height={8} alt="Dots" />
            <h1 className="font-40 font-medium text-[#7736B7] mt-4">
              Financial & Banking
            </h1>
            <p className="font-14 font-normal leading-5 mt-5">
              AI drives unparalleled customer satisfaction and optimizes
              business <br /> strategies. Vigilant supervision ensures that
              these advantages are <br /> not compromised by the heightened
              risks associated with AI bias <br /> and opacity.
            </p>
          </div>
          <div className="h-full w-full">
            <Image
              src="/finance.png"
              className="h-full w-full"
              width={530} 
              height={459}
              alt="finance"
            />
          </div>
        </div>

        <div>
          <FinanceCards />
        </div>
      </div>

      <div className="">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto py-20">
            <h1 className="font-40 font-medium leading-[52px] text-[#000]">
              <span className="text-[#7736B7]">Empower</span> Your Financial
              Services <br className="hidden md:block" /> with{" "}
              <span className="text-[#7736B7]"> AI Model Monitoring</span>
            </h1>
            <p className="font-20 font-normal leading-6 mt-4 text-[#00000099]">
              In the fast-paced world of financial services, maintaining trust
              and reliability <br className="hidden md:block" /> in AI-powered
              systems is paramount.
            </p>
          </div>
        </div>
      </div>

      <div>
        <FinanceServices />
      </div>
    </div>
  );
};

export default Finance;
