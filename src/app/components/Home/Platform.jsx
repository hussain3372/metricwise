"use client";

import Image from "next/image";
import React from "react";

const Platform = () => {
  return (
    <div className="mt-9">
      <div className="flex flex-col justify-center items-center text-center widthclass px-4">
        <div>
          <h1 className="text-[20px] sm:text-[32px] md:text-[40px] lg:text-[48px] pro-medium leading-[30px] sm:leading-[52px]">
            A comprehensive AI&nbsp;
            <span className="text-[#7736B7] pro-semibold">
              <span className="pro-semibold italic">O</span>bservability
            </span>
            &nbsp;and&nbsp;
            <br />
            <span className="text-[#7736B7] pro-semibold">
              <span className="pro-semibold italic">G</span>overnance
            </span>
            &nbsp;platform
          </h1>

          <p className="font-20 text-[#00000099] pro-normal leading-6 mt-4 sm:mt-6 px-4">
            Metricwise enables confident deployment and management of AI models
            with tools for <br className="hidden md:block" /> monitoring,
            observability, and governance
          </p>
        </div>

        <div className="p-5">
          <Image
            width={1080}
            height={600}
            src="/Diagram.svg"
            className="mt-5 w-full h-auto"
            alt="Platform Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Platform;
