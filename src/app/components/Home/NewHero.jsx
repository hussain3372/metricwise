import Image from "next/image";
import React from "react";

const NewHero = () => {
  return (
    <div>
      <div className="relative">
        <div className="bg-[url('/hero-gradient.png')] bg-no-repeat bg-cover bg-center pt-20 pb-32 sm:pb-64 m-auto px-4 sm:px-0">
          <div className="flex flex-col justify-start items-center text-center">
            <h1 className="font-52 font-semibold leading-10 sm:leading-[50px] md:leading-[60px] ">
              Empowering AI with Unmatched <br />
              <span className="italic">Observability and Governance</span>
            </h1>
            <p className="text-[#00000099] font-20 font-normal leading-6 mt-5">
              Detect and analyze model and data issues with speed <br className="hidden md:block"/> .Mitigate
              challenges faster for optimal AI performance.
            </p>
            <div className="flex justify-center items-center gap-4 mt-5">
              <button className="bg-[#042440] border-none rounded-md px-5 py-3 font-12 font-medium text-white">Get Started Now</button>
              <button className="bg-none border border-[#042440] rounded-md px-4 py-3 font-12 font-medium text-[#042440]">Book a demo</button>
            </div>
          </div>
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
