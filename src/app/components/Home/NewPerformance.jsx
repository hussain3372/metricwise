import Image from "next/image";
import React from "react";

const NewPlatform = () => {
  return (
    <div>
      <div className="pt-10">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <h1 className="text-[20px] sm:text-[40px] font-medium leading-5 sm:leading-[52px]">
            <span className="text-[#7736B7] "> <span className="italic">D</span>etect</span>, {""}
            <span className="text-[#7736B7] "><span className="italic">A</span>nalyze</span>, {""}
            <span className="text-[#7736B7] "><span className="italic">M</span>itigate</span> model and
            <br className="hidden md:block" /> data performance issues faster
          </h1>
          <p className="text-[#00000099] font-20 leading-6">
            Enhance the reliability of your AI systems and instill confidence
            with our platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewPlatform;
