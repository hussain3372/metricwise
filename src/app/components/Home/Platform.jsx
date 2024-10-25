"use client";

import Image from "next/image";
import React from "react";

const Platform = () => {
  return (
    <div>
      <div className="mt-44 md:mt-72 lg:mt-96 bg-[url('/platforms-bg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col justify-center items-center text-center widthclass px-4">
          <div>
            <h1 className="text-[20px] sm:text-[40px] font-medium leading-5 sm:leading-10">
              Detect, Analyze, mitigate model <br className="hidden md:block" />
              and data performance issues faster
            </h1>
            <p className="font-16 font-normal leading-2 black opacity-60 p-4">
              Enhance the reliability of your AI systems and instill confidence
              <br className="hidden md:block" /> with our platform.
            </p>
          </div>

          <div className="p-5">
            <Image
              width={1140}
              height={962}
              src="/platforms.svg"
              className="mt-5"
              alt="Platform Image"
            />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Platform;
