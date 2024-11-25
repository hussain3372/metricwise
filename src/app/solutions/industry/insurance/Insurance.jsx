import Image from "next/image";
import Link from "next/link";
import React from "react";
import InsuranceCards from "./Insurance-cards";
import InsuranceServices from "./Insurance-services";

const Insurance = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="pt-10 pb-8 py-[120px] px-2 sm:px-10 flex flex-col justify-center items-center gap-7">
          <Image src="/insurance.png" width={489} height={411} alt="finance" />
          <h1 className="font-40 font-bold">Insurance</h1>
          <p className="font-24 font-normal leading-8 text-[#2E2E2E] text-center opacity-60 px-2 md:px-40 lg:px-64 xl:px-[420px]">
            AI transforms the insurance landscape, enabling tailored services
            and precise risk assessment. Yet, to uphold integrity and fairness,
            rigorous monitoring is indispensable, guaranteeing that AI models
            are transparent, unbiased, and in line with regulatory requirements.
          </p>
          <Link href="/Demo" className="primary-btn" type="button">
            <Image src="/demo-img.svg" width={20} height={20} alt="demo-img" />
            Book a Demo
          </Link>
        </div>

        <div>
          <InsuranceCards />
        </div>
      </div>

      <div className="bg-[url('/finance-bg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto p-8 sm:p-16">
            <h1 className="font-36 font-bold leading-8 md:leading-10 text-[#2E2E2E]">
              Predict and Mitigate Risks with <br className="hidden md:block" />
              Precision Insights
            </h1>
            <p className="font-24 font-normal leading-6 md:leading-8 mt-4 text-[#2E2E2E99]">
              In the insurance sector, predicting and mitigating risks
              accurately is <br className="hidden md:block" /> paramount. Our
              advanced AI models leverage extensive data analysis{" "}
              <br className="hidden md:block" /> to identify potential risks,
              ranging from property damage to health{" "}
              <br className="hidden md:block" /> emergencies. By examining
              historical patterns and real-time data{" "}
              <br className="hidden md:block" /> streams, our platform empowers
              insurers to proactively manage risks,{" "}
              <br className="hidden md:block" /> minimize losses, and optimize
              underwriting strategies.
            </p>
          </div>
        </div>
      </div>

      <div>
        <InsuranceServices />
      </div>
    </div>
  );
};

export default Insurance;
