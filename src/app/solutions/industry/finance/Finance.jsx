import Image from "next/image";
import Link from "next/link";
import React from "react";
import FinanceCards from "./Finance-cards";
import FinanceServices from "./Finance-services";

const Finance = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="pb-8 px-2 sm:px-10 flex flex-col justify-center items-center gap-7">
          <Image src="/finance.png" className="" width={530} height={459} alt="finance" />
          <h1 className="font-40 font-bold">Financial & Banking</h1>
          <p className="font-24 font-normal leading-8 text-[#2E2E2E] text-center opacity-60 px-2 md:px-40 lg:px-64 xl:px-[420px]">
            AI drives unparalleled customer satisfaction and optimizes business
            strategies. Vigilant supervision ensures
             that these advantages are not
            compromised by the heightened risks associated with AI bias and
            opacity.
          </p>
          <Link href="/Demo" className="primary-btn" type="button">
            <Image src="/demo-img.svg" width={20} height={20} alt="demo-img" />
            Book a Demo
          </Link>
        </div>

        <div>
          <FinanceCards />
        </div>
      </div>

      <div className="bg-[url('/finance-bg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto p-8 sm:p-16">
            <h1 className="font-36 font-bold leading-8 md:leading-10 text-[#2E2E2E]">
              Empower Your Financial Services <br className="hidden md:block" />{" "}
              with AI Model Monitoring
            </h1>
            <p className="font-24 font-normal leading-6 md:leading-8 mt-4 text-[#2E2E2E99]">
              In the fast-paced world of financial services, maintaining trust
              and <br className="hidden md:block" /> reliability in AI-powered
              systems is paramount.
            </p>
          </div>
        </div>
      </div>

      <div>
        <FinanceServices />
      </div>
    </div>
  );
};

export default Finance;
