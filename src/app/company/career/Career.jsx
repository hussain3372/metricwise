import React from "react";
import Team from "./Team";
import { PiGreaterThanLight } from "react-icons/pi";

const Career = () => {
  return (
    <div>
      <div className=" career border-b border-[#042440]">
        <div className="widthclass relative">
          <div className="flex items-center widthclass">
            <h1 className="text-black pl-5 md:pl-16 pt-16 font-24 font-normal font-inter flex items-center gap-2">
              Metricwise
              <span className="text-black font-20 font-normal font-inter opacity-50 flex items-center gap-2">
                <PiGreaterThanLight/> Company <PiGreaterThanLight/> Career
              </span>
            </h1>
          </div>
          <div className="flex flex-col pt-36 pb-36 justify-center items-center m-auto text-black widthclass">
            <h1 className="font-24 font-inter font-normal leading-[32px] mb-4 opacity-60">
                Careers
            </h1>
            <h5 className="font-36 font-inter font-bold leading-10 text-center">
            Shape the future of technology by working on <br /> cutting-edge AI solutions.
            </h5>
          </div>
        </div>
      </div>

      <Team/>
    </div>
  );
};

export default Career;
