import Link from "next/link";
import React from "react";
import Healthcard from "./Health-cards";
import Image from "next/image";
import HealthServices from "./Health-services";

const Finance = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[151px] items-center mt-10 bg-[url('/industry-bg.svg')] bg-no-repeat bg-cover bg-center px-5 md:px-10 lg:px-[94px] pt-[82px] pb-[76px] mx-2.5 md:mx-20 lg:mx-24">
          <div className="flex flex-col">
            <Image src="/Dots.svg" width={36} height={8} alt="Dots" />
            <h1 className="font-40 font-medium text-[#7736B7] mt-4">
              Healthcare
            </h1>
            <p className="font-14 font-normal leading-5 mt-5">
              AI fuels innovation in healthcare, refining diagnostics,
              treatments, <br /> and patient outcomes. To uphold patient safety
              and confidence, <br /> thorough monitoring is paramount, ensuring
              that AI algorithms are <br /> ethically developed, transparent,
              and accountable.
            </p>
          </div>
          <div className="h-full w-full">
            <Image
              src="/health.png"
              width={450}
              height={365}
              alt="finance"
            />
          </div>
        </div>

        <div>
          <Healthcard />
        </div>
      </div>

      <div className="">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto py-20">
            <h1 className="font-40 font-medium leading-[52px] text-[#000]">
              <span className="text-[#7736B7]">Revolutionize</span> Your Healthcare Operations <br className="hidden md:block" /> with
              <span className="text-[#7736B7]"> AI Model Monitoring</span>
            </h1>
            <p className="font-20 font-normal leading-6 mt-4 text-[#00000099]">
            In the ever-evolving realm of healthcare, ensuring the reliability and transparency of <br /> AI-powered systems is paramount to delivering exceptional patient care and <br /> maintaining trust within the industry.
            </p>
          </div>
        </div>
      </div>

      <div>
        <HealthServices />
      </div>
    </div>
  );
};

export default Finance;
