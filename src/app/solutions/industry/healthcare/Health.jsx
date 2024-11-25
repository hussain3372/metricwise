import Link from "next/link";
import React from "react";
import Healthcard from "./Health-cards";
import Image from "next/image";
import HealthServices from "./Health-services";

const Finance = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="pt-10 pb-8 py-[120px] px-2 sm:px-10 flex flex-col justify-center items-center gap-7">
          <Image src="/health.png" width={448} height={451} alt="finance" />
          <h1 className="font-40 font-bold">Healthcare</h1>
          <p className="font-24 font-normal leading-8 text-[#2E2E2E] text-center opacity-60 px-2 md:px-40 lg:px-64 xl:px-[420px]">
            AI fuels innovation in healthcare, refining diagnostics, treatments,
            and patient outcomes. To uphold patient safety and confidence,
            thorough monitoring is paramount, ensuring that AI algorithms are
            ethically developed, transparent, and accountable.
          </p>
          <Link href="/Demo" className="primary-btn" type="button">
            <Image src="/demo-img.svg" width={20} height={20} alt="demo-img" />
            Book a Demo
          </Link>
        </div>

        <div>
          <Healthcard />
        </div>
      </div>

      <div className="bg-[url('/finance-bg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto p-8 sm:p-16">
            <h1 className="font-36 font-bold leading-8 md:leading-10 text-[#2E2E2E]">
              Revolutionize Your Healthcare <br /> Operations with AI Model
              <br /> Monitoring
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
        <HealthServices />
      </div>
    </div>
  );
};

export default Finance;
