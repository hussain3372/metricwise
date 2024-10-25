import React from "react";
import IndustryTabs from "./Industry-tabs";

const industry = () => {
  return (
    <div>
      <div className="py-[132px] xl:px-[562px] bg-[url('/wavebg1.png')] bg-no-repeat bg-top bg-cover">
        <div className="widthclass flex flex-col justify-center items-center">
          <div>
            <h1 className="font-64 font-bold text-[#2E2E2E]">Industries</h1>
          </div>
        </div>
      </div>

      <div>
        <IndustryTabs />
      </div>
    </div>
  );
};

export default industry;
