import Image from "next/image";
import React from "react";

const WorkFlow = () => {
  return (
    <div className="bg-[#F8F8F8] py-14 px-10 xl:px-[218px]">
      <div className="widthclass">
        <div className="flex justify-center items-center text-center">
          <h1 className="text-[20px] sm:text-[40px] font-medium leading-5 sm:leading-[52px]">
            {`Start with `}
            <span className="text-[#7736B7]">Metricwise</span>
            {` in a way that `}
            <br className="hidden md:block" />
            {`fits your team's workflow.`}
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-11 mt-8">
          <div  className="rounded-2xl p-2 bg-white" style={{ boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)" }}>
            <div
              className="bg-[#FDFBFF] pt-3 pb-4 px-7 rounded-2xl"
            >
              <h1 className="font-24 text-[#161616] font-medium leading-7">
                Metricwise Platform
              </h1>
              <Image
                src="/work1.svg"
                width={380}
                height={252}
                alt="work flow image"
                className="w-full mt-8"
              />
            </div>
          </div>
          <div
            className="bg-[#FDFBFF] px-7 py-4 rounded-lg"
            style={{ boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)" }}
          >
            <h1 className="font-24 text-[#161616] font-medium leading-7">
              Metricwise SDK
            </h1>
            <p className="mt-2 font-12 text-[#00000099] font-normal leading-4">
              In the SaaS or managed deployment of Metricwise, data is logged or
              sent <br /> periodically to the Metricwise Hosted Service.
            </p>
            <Image
              src="/work2.svg"
              width={352}
              height={177}
              alt="work flow image"
              className="w-full mt-8"
            />
          </div>
          <div
            className="bg-[#FDFBFF] p-9 rounded-lg flex justify-between items-center"
            style={{ boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)" }}
          >
            <div>
              <h1 className="font-24 text-[#161616] font-medium leading-7">
                Client VPC
              </h1>
              <p className="mt-2 font-12 text-[#00000099] font-normal leading-4">
                 For On-Prem deployment, Metricwise can be installed in the <br />
                {` customer's chosen cloud or VPC.`}
              </p>
            </div>
            <div>
              <Image
                src="/work-logo1.svg"
                width={60}
                height={60}
                alt="work-logo"
              />
            </div>
          </div>
          <div
            className="bg-[#FDFBFF] p-9 rounded-lg flex justify-between items-center"
            style={{ boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)" }}
          >
            <div>
              <h1 className="font-24 text-[#161616] font-medium leading-7">
                Saas
              </h1>
              <p className="mt-2 font-12 text-[#00000099] font-normal leading-4">
                In the SaaS or managed deployment of Metricwise, data is <br />{" "}
                logged or sent periodically to the Metricwise Hosted Service.
              </p>
            </div>
            <div>
              <Image
                src="/work-logo2.svg"
                width={60}
                height={60}
                alt="work-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
