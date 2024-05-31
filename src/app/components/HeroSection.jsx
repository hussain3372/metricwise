"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import ForceGraph from "./Graph";
const HeroSection = () => {
  return (
    <div className="border-b border-[#042440] border-opacity-[12%]">
      <div className="flex items-center relative widthclass">
        <div className=" p-5 md:p-32">
          <h1 className=" font-64 fontbold leading-[43px] md:leading-[50px] xl:leading-[60px]">
            AI Observability <br className="hidden md:block"/> and Governance
          </h1>
          <div className="font-32 font-regular leading-[30px] md:leading-[40px] opacity-50 mt-4">
            <Typewriter
              options={{
                strings: [
                  "Detect, analyze, and mitigate",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                cursor: "|",
                wrapperClassName: "typewriter-wrapper",
                cursorClassName: "typewriter-cursor",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Detect, analyze, and mitigate")
                  .pauseFor(500)
                  // .typeString("<br /> model and data issues faster")
                  .start();
              }}
            />
          </div>
          <div className="sm:flex items-center gap-5 mt-16">
            <button className="border border-[#042440] rounded-[10px] textcolor font-20 fontmedium leading-6 pt-2 md:pt-3 pb-2 md:pb-3 pl-2 md:pl-5 pr-2 md:pr-5 hover:bg-[#042440] hover:text-white transition ease-in-out delay-100">
              Book a Demo
            </button>
            <button className="flex mt-5 sm:mt-0 items-center gap-3 border border-[#042440] rounded-[10px] bg-[#042440] white font-20 fontmedium leading-6 pt-2 md:pt-3 pb-2 md:pb-3 pl-2 md:pl-5 pr-2 md:pr-5">
              Get Started For Free
              <img src="/free.png" className="w-8 h-8" alt="" />
            </button>
          </div>
        </div>
        <div className=" absolute top-24 w-5xl md:top-20 -z-10">
          {/* <img src="herobg1.png" className="herobg" alt="" /> */}
          {/* <ForceGraph/> */}
        </div>
      </div>

    </div>
  );
};

export default HeroSection;