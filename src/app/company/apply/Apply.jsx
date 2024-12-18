import React from "react";
import Data from "./Data";
import Form from "./Form";

const Apply = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-[#CFC2FF99] to-[#FFF0BC99]">
        <div className="widthclass pt-[67px] pb-[131px]">
          <div className="flex flex-col justify-center items-center m-auto text-center">
            <h1 className="font-36 font-bold leading-10 textcolor">
              Full Stack Engineer
            </h1>
            <p className="font-16 font-inter font-normal leading-5 pt-5">
              Remote - Full Time
            </p>
          </div>
        </div>
      </div>
        <div className="pt-[119px] pb-[50px] px-5 sm:px-10 md:px-20 xl:px-[207px]">
          <Data />
        </div>

      <div className="bg-[url('/positionbg.png')] bg-no-repeat bg-cover mt-10">
        <div className="widthclass pt-[50px] pb-20 px-5 sm:px-10 md:px-20 xl:px-[272px]">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Apply;
