import React from "react";

const Platform = () => {
  return (
    <div className="mt-10 border-b border-[#042440] border-opacity-[12%]">
      <div className="flex flex-col text-start p-10 widthclass">
        <h1 className="font-36 fontbold leading-10">
          Detect, Analyze, mitigate model and data <br /> performance issues faster
        </h1>
        <p className="font-24 fontregular leading-8 mt-10 black opacity-60">
        Enhance the reliability of your AI systems and instill confidence with our platform.
        </p>
        <div className="flex justify-center items-center">
            <img src="/performanceimg.png" className="mt-10" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Platform;
