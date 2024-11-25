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
        <div className="pt-10 pb-8 py-[120px] px-2 sm:px-10 flex flex-col justify-center items-center gap-7">
          <Image src="/vehicle.png" width={452} height={423} alt="finance" />
          <h1 className="font-40 font-bold">Autonomous Vehicles</h1>
          <p className="font-24 font-normal leading-8 text-[#2E2E2E] text-center opacity-60 px-2 md:px-40 lg:px-64 xl:px-[420px]">
            AI revolutionizes transportation with autonomous vehicles, enhancing
            safety and efficiency on the roads. However, effective oversight is
            critical to mitigate risks such as system malfunctions and ethical
            dilemmas.
          </p>
          <Link href="/Demo" className="primary-btn" type="button">
            <Image src="/demo-img.svg" width={20} height={20} alt="demo-img" />
            Book a Demo
          </Link>
        </div>

        <div>
          <VehicleCards />
        </div>
      </div>

      <div className="bg-[url('/finance-bg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto p-8 sm:p-16">
            <h1 className="font-36 font-bold leading-8 md:leading-10 text-[#2E2E2E]">
              Accelerate Your Autonomous <br className="hidden md:block" />
              Vehicle Innovation with AI Model{" "}
              <br className="hidden md:block" /> Monitoring
            </h1>
            <p className="font-24 font-normal leading-6 md:leading-8 mt-4 text-[#2E2E2E99]">
              In the rapidly evolving realm of autonomous vehicles, trust and
              safety <br className="hidden md:block" /> are paramount. Our
              platform is designed to empower autonomous
              <br className="hidden md:block" /> vehicle companies by providing
              real-time observability and monitoring
              <br className="hidden md:block" /> of AI models and data, ensuring
              the reliability and ethical integrity of
              <br className="hidden md:block" /> every decision made by
              autonomous systems.
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
