import React from "react";
import Data from "./Data";
import Form from "./Form";

const Apply = () => {
  return (
    <div className="">
      <div className="widthclass pt-16 pb-16">
        <div className="flex flex-col justify-center items-center m-auto text-center">
          <h1 className="font-36 fontbold leading-10">
            Senior Backend <br /> Software Engineer
          </h1>
          <p className="font-16 font-inter font-normal leading-5 pt-5">
            Vordx Technologies <br /> Remote — Full Time India
          </p>
        </div>

        <div className="pl-7 md:pl-20 lg:pl-56 pr-7 md:pr-20 lg:pr-56 pt-20">
          <Data/>
        </div>
      </div>


      <div className="bg-[#F4F4F4] mt-10 mb-20">
        <div className="widthclass pl-5 md:pl-20  lg:pl-56 pr-5 md:pr-20 lg:pr-56 pt-20 pb-20">
          <Form/>
        </div>
      </div>

    </div>
  );
};

export default Apply;
