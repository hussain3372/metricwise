"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Graph from "../Graphs/Graph";

const HeroSection = () => {
  return (
    <div className="border-b border-[#042440] border-opacity-[12%] mt-10 md:mt-0 dangerbgimg">
      <div className="md:flex items-center relative widthclass">
        <div className=" p-5 md:p-32">
          <h1 className=" font-64 fontbold leading-[30px] sm:leading-[40px] md:leading-[50px] xl:leading-[60px]">
            AI Observability <br className="hidden md:block" /> and Governance
          </h1>
          <div className="font-32 font-regular leading-[30px] md:leading-[40px] opacity-50 mt-4">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 75,
                cursor: "|",
                wrapperClassName: "typewriter-wrapper",
                cursorClassName: "typewriter-cursor",
              }}
              onInit={(typewriter) => {
                typewriter
                  // .typeString("Detect, analyze, and mitigate")
                  .typeString("Detect, analyze, and mitigate <br/> model and data issues faster")
                  .pauseFor(200) // Adjust the pause duration to your preference
                  .deleteAll()
                  .start();
              }}
            />
          </div>
          <div className="sm:flex items-center gap-5 mt-10">
            <button className="flex mt-5 sm:mt-0 items-center gap-3 border border-[#042440] rounded-[10px] bg-[#042440] white font-20 font-inter font-medium leading-6 pt-2 md:pt-3 pb-2 md:pb-3 pl-2 md:pl-5 pr-2 md:pr-5 mb-4 md:mb-0">
              Get Started For Free
              <Image width={24} height={24} src="/free.png" alt="" />
            </button>
            <button className="border border-[#042440] rounded-[10px] textcolor font-20 font-inter font-medium leading-6 pt-2 md:pt-3 pb-2 md:pb-3 pl-2 md:pl-5 pr-2 md:pr-5 hover:bg-[#042440] hover:text-white transition ease-in-out delay-100">
              Book a Demo
            </button>
          </div>
        </div>
        <div className=" absolute top-24 w-5xl md:top-20 -z-10 cubes">
          {/* <img src="herobg1.png" className="herobg" alt="" /> */}
          {/* <Cube/> */}
        </div>
      </div>

      {/* <Space/> */}

      <Graph/>

    </div>
  );
};

export default HeroSection;
