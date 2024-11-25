import Image from "next/image";
import Link from "next/link";
import React from "react";
import Ecards from "./E-cards";
import Eservices from "./E-services";

const Ecommerce = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="pt-10 pb-8 py-[120px] px-2 sm:px-10 flex flex-col justify-center items-center gap-7">
          <Image src="/e-commerce.svg" width={566} height={483} alt="finance" />
          <h1 className="font-40 font-bold">Retail and Ecommerce</h1>
          <p className="font-24 font-normal leading-8 text-[#2E2E2E] text-center opacity-60 px-2 md:px-40 lg:px-64 xl:px-[420px]">
            AI optimizes retail operations, enhancing customer engagement and supply chain
            efficiency. However, to mitigate
            risks such as data privacy breaches and algorithmic biases, robust
            governance and continuous monitoring frameworks are indispensable.
          </p>
          <Link href="/Demo" className="primary-btn" type="button">
            <Image src="/demo-img.svg" width={20} height={20} alt="demo-img" />
            Book a Demo
          </Link>
        </div>

        <div>
          <Ecards />
        </div>
      </div>

      <div className="bg-[url('/finance-bg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto p-8 sm:p-16">
            <h1 className="font-36 font-bold leading-8 md:leading-10 text-[#2E2E2E]">
              Empower Your Retail and E-commerce <br className="hidden md:block"/> Operations with AI Risk
              Monitoring
            </h1>
            <p className="font-24 font-normal leading-6 md:leading-8 mt-4 text-[#2E2E2E99]">
            In the fast-paced world of financial services, maintaining trust and <br className="hidden md:block"/>  reliability in AI-powered systems is paramount. 
            </p>
          </div>
        </div>
      </div>

      <div>
        <Eservices />
      </div>
    </div>
  );
};

export default Ecommerce;
