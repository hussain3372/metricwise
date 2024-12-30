"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import VehicleServices from "./Vehicle-services";
import VehicleCards from "./Vehicle-cards";

const Vehicle = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[151px] items-center mt-10 bg-[url('/industry-bg.svg')] bg-no-repeat bg-cover bg-center px-5 md:px-10 lg:px-[94px] pt-[82px] pb-[76px] mx-2.5 md:mx-20 lg:mx-24">
          <div className="flex flex-col">
            <Image src="/Dots.svg" width={36} height={8} alt="Dots" />
            <h1 className="font-40 font-medium text-[#7736B7] mt-4">
              Autonomous Vehicles
            </h1>
            <p className="font-14 font-normal leading-5 mt-5">
              AI revolutionizes transportation with autonomous vehicles,
              enhancing safety and efficiency on the roads. However, effective
              oversight is critical to mitigate risks such as system
              malfunctions and ethical dilemmas.
            </p>
          </div>
          <div className="h-full w-full">
            <Image src="/vehicle.png" width={450} height={365} alt="finance" />
          </div>
        </div>

        <div>
          <VehicleCards />
        </div>
      </div>

      <div className="">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto py-20">
            <h1 className="font-40 font-medium leading-[52px] text-[#000]">
              <span className="text-[#7736B7]">Accelerate</span> Your Autonomous Vehicle 
              <br className="hidden md:block" /> Innovation with
              <span className="text-[#7736B7]"> AI Model Monitoring</span>
            </h1>
            <p className="font-20 font-normal leading-6 mt-4 text-[#00000099]">
            In the rapidly evolving realm of autonomous vehicles, trust and safety are paramount. Our platform is designed to <br /> empower autonomous vehicle companies by providing real-time observability and monitoring of AI models and <br /> data, ensuring the reliability and ethical integrity of every decision made by autonomous systems.
            </p>
          </div>
        </div>
      </div>

      <div>
        <VehicleServices />
      </div>
    </div>
  );
};

export default Vehicle;
