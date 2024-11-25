import React from "react";
import Team from "./Team";

const Career = () => {
  return (
    <div>
      <div className=" career">
        <div className="widthclass relative">
          <div className="flex flex-col p-4 pt-10 md:pt-28 pb-10 md:pb-40 justify-center items-center m-auto text-black widthclass">
            <h5 className="font-36 font-bold leading-10 text-center">
              Shape the future of technology by working on <br className="hidden md:block"/> cutting-edge AI solutions.
            </h5>
          </div>
        </div>
      </div>

      <Team/>
    </div>
  );
};

export default Career;
