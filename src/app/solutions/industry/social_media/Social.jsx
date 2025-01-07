"use client";

import Image from "next/image";
import React from "react";
import SocialCards from "./Social-cards";
import SocialServices from "./Social-services";

const Social = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[151px] items-center mt-10 bg-[url('/industry-bg.svg')] bg-no-repeat bg-cover bg-center px-5 md:px-10 lg:px-[94px] pt-[82px] pb-[76px] mx-2.5 md:mx-20 lg:mx-24">
          <div className="flex flex-col">
            <Image src="/Dots.svg" width={36} height={8} alt="Dots" />
            <h1 className="font-40 font-medium text-[#7736B7] mt-4">
            Social Media
            </h1>
            <p className="font-14 font-normal leading-5 mt-5">
            AI revolutionizes content curation and user engagement on social media platforms. However, to maintain trust and integrity, vigilant supervision is essential to mitigate the risks associated with AI biases and misinformation.
            </p>
          </div>
          <div className="h-full w-full">
            <Image
              src="/social.png"
              width={450}
              height={365}
              alt="finance"
            />
          </div>
        </div>

        <div>
          <SocialCards />
        </div>
      </div>

      <div className="">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto py-20">
            <h1 className="font-40 font-medium leading-[48px] text-[#000]">
              <span className="text-[#7736B7]"><span className='italic'>R</span>evolutionize</span> Your Social Media Strategy
              <br className="hidden md:block" /> with
              <span className="text-[#7736B7]"> <span className='italic'>A</span>I <span className='italic'>R</span>isk <span className='italic'>M</span>onitoring</span>
            </h1>
            <p className="font-20 font-normal leading-6 mt-4 text-[#00000099]">
            In the ever-evolving realm of healthcare, ensuring the reliability and transparency of AI-powered systems is <br /> paramount to delivering exceptional patient care and maintaining trust within the industry.
            </p>
          </div>
        </div>
      </div>

      <div>
        <SocialServices />
      </div>
    </div>
  );
};

export default Social;
