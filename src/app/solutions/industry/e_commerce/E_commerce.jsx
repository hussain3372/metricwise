import Image from "next/image";
import Link from "next/link";
import React from "react";
import Ecards from "./E-cards";
import Eservices from "./E-services";

const Ecommerce = () => {
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
          <Ecards />
        </div>
      </div>

      <div className="bg-[url('/finance-bg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto p-8 sm:p-16">
            <h1 className="font-36 font-bold leading-8 md:leading-10 text-[#2E2E2E]">
              Empower Your Retail and E-commerce{" "}
              <br className="hidden md:block" /> Operations with AI Risk
              Monitoring
            </h1>
            <p className="font-24 font-normal leading-6 md:leading-8 mt-4 text-[#2E2E2E99]">
              In the fast-paced world of financial services, maintaining trust
              and <br className="hidden md:block" /> reliability in AI-powered
              systems is paramount.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Eservices />
      </div>
    </div>
  );
};

export default Ecommerce;
