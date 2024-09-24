import React from "react";
import Team from "./Team";

const Career = () => {
  return (
    <div>
      <div className=" career border-b border-[#042440]">
        <div className="widthclass relative">
          <div className="flex flex-col p-4 pt-10 md:pt-28 pb-10 md:pb-40 justify-center items-center m-auto text-black widthclass">
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
