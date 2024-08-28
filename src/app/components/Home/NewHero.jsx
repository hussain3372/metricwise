import Image from "next/image";
import React from "react";

const NewHero = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <Image
            src="/hero-gradient.png"
            className="w-full h-[316px] sm:h-[550px] lg:h-[550px] rounded-bl-[20px] rounded-br-[20px]"
            width={1440}
            height={680}
            alt="Hero section Image"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="absolute">
            <Image
              src="/hero-dashboard.png"
              className=""
              width={1128}
              height={508}
              alt="Hero section Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
