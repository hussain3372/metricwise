"use client";

import Image from "next/image";
import React from "react";
import { Zoom } from "react-awesome-reveal";

const Platform = () => {
  return (
    <div className="mt-10 border-b border-[#042440] border-opacity-[12%]">
      <Zoom>
        <div className="flex flex-col text-start p-10 widthclass">
          <h1 className="font-36 fontbold leading-10">
            Detect, Analyze, mitigate model and data <br /> performance issues
            faster
          </h1>
          <p className="font-24 fontregular leading-8 mt-10 black opacity-60">
            Enhance the reliability of your AI systems and instill confidence
            with our platform.
          </p>
          <div className="relative flex justify-center items-center p-5">
            <Image
              width={1102}
              height={364}
              src="/performanceimge.png"
              className="mt-10 z-10"
              alt="Performance Image"
            />
            <svg
              className="absolute inset-0 z-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1102 364"
            >
              <path
                d="M300,100 Q800,100 300,2000 T600,400"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                className="animated-path"
              />
              <path
                d="M250,250 Q400,400 700,200 T600,700"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                className="animated-path"
              />

              <path
                d="M150,150 Q200,300 500,150 T900,254"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                className="animated-path"
              />
            </svg>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Platform;
