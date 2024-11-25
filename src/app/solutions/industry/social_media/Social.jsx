"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialCards from "./Social-cards";
import SocialServices from "./Social-services";

const Social = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="pt-10 pb-8 py-[120px] px-2 sm:px-10 flex flex-col justify-center items-center gap-7">
          <Image src="/social.png" width={452} height={423} alt="finance" />
          <h1 className="font-40 font-bold">Social Media</h1>
          <p className="font-24 font-normal leading-8 text-[#2E2E2E] text-center opacity-60 px-2 md:px-40 lg:px-64 xl:px-[420px]">
            AI revolutionizes content curation and user engagement on social
            media platforms. However, to maintain trust and integrity, vigilant
            supervision is essential to mitigate the risks associated with AI
            biases and misinformation.
          </p>
          <Link href="/Demo" className="primary-btn" type="button">
            <Image src="/demo-img.svg" width={20} height={20} alt="demo-img" />
            Book a Demo
          </Link>
        </div>

        <div>
          <SocialCards />
        </div>
      </div>

      <div className="bg-[url('/finance-bg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto p-8 sm:p-16">
            <h1 className="font-36 font-bold leading-8 md:leading-10 text-[#2E2E2E]">
              Revolutionize Your Social Media <br className="hidden md:block" />
              Strategy with AI Model <br className="hidden md:block" />
              Monitoring
            </h1>
            <p className="font-24 font-normal leading-6 md:leading-8 mt-4 text-[#2E2E2E99]">
              In the ever-evolving realm of healthcare, ensuring the reliability
              and <br className="hidden md:block" /> transparency of AI-powered
              systems is paramount to delivering
              <br className="hidden md:block" /> exceptional patient care and
              maintaining trust within the industry.
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
