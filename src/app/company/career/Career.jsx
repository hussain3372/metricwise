import React from "react";
import Team from "./Team";

const Career = () => {
  return (
    <div>
      <div className="faq">
        <div className="widthclass relative">
          <div className="flex flex-col p-4 pt-10 md:pt-[158px] pb-10 md:pb-[278px] justify-center items-center m-auto text-[#2E2E2E] opacity-80 widthclass">
            <h5 className="font-44 font-semibold leading-[60px] text-center ">
              Shape The{" "}
              <span className="text-[#7736B7]">Future Of Technology</span> By{" "}
              <br /> Working On Cutting-Edge{" "}
              <span className="text-[#7736B7]">AI Solutions</span>
            </h5>
          </div>
        </div>
      </div>

      <Team />
    </div>
  );
};

export default Career;
