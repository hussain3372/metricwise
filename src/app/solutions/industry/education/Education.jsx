"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Educationcards from "./Education-cards";
import EstateServices from "../real_estate/Estate-services";

const RealEsatate = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="pt-10 pb-8 py-[120px] px-2 sm:px-10 flex flex-col justify-center items-center gap-7">
          <Image src="/education.png" width={775} height={422} alt="finance" />
          <h1 className="font-40 font-bold">Education</h1>
          <p className="font-24 font-normal leading-8 text-[#2E2E2E] text-center opacity-60 px-2 md:px-40 lg:px-64 xl:px-[420px]">
            AI revolutionizes teaching and learning experiences, providing personalized education
            and adaptive learning tools. However, to ensure equity and quality education for all, diligent oversight is
            essential to address concerns such as data privacy and algorithmic biases.
          </p>
          <Link href="/Demo" className="primary-btn" type="button">
            <Image src="/demo-img.svg" width={20} height={20} alt="demo-img" />
            Book a Demo
          </Link>
        </div>

        <div>
          <Educationcards />
        </div>
      </div>

      <div className="bg-[url('/finance-bg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto p-8 sm:p-16">
            <h1 className="font-36 font-bold leading-8 md:leading-10 text-[#2E2E2E]">
              Empower Your Education Efforts <br className="hidden md:block" />
              with AI Model Monitoring
            </h1>
            <p className="font-24 font-normal leading-6 md:leading-8 mt-4 text-[#2E2E2E99]">
              {`In today's educational landscape, building trust and transparency
              in <br className="hidden md:block" /> AI-powered systems is vital.`}
            </p>
          </div>
        </div>
      </div>

      <div>
        <EstateServices />
      </div>
    </div>
  );
};

export default RealEsatate;
