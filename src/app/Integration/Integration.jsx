import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  alertingInt,
  deploymentint,
  frameworkInt,
  IntegrationCards,
} from "../data/integrationCards";

const Integration = () => {
  return (
    <div>
      <div className="bg-gradient-to-l to-[#CFC2FF99] from-[#FFF0BC99]">
        <div className="widthclass pt-10 sm:pt-[102px] px-5 sm:px-[62px] pb-[46px]">
          <h1 className="font-44 font-semibold leading-[42px] text-[#2E2E2E]">
            Integrations
          </h1>
          <h2 className="text-[30px] font-medium mt-5 leading-10 mb-6 text-[#2E2E2E] opacity-80">
            Harness the Power of{" "}
            <span className="text-[#7736B7]">
            <span className="italic">M</span>etricwise <br className="hidden sm:block" />
            <span className="italic">S</span>eamless <span className="italic">I</span>ntegrations
            </span>
          </h2>
          <p className="font-22 font-normal textcolor leading-[26px] opacity-80">
            Explore our GenAI and ML integrations designed to streamline
            <br className="hidden md:block" /> operations and boost efficiency.
          </p>
          <div className="mt-[65px] opacity-80">
            <button>
              <Link
                href="/Demo"
                className="bg-[#2E2E2E] rounded-lg px-4 py-3 flex justify-center items-center gap-2 font-14 font-medium leading-4 text-white"
                type="button"
              >
                <Image
                  src="/demo-img.svg"
                  width={20}
                  height={20}
                  alt="demo-img"
                />
                Book a Demo
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Integrstion help */}
      <div className="widthclass flex flex-col justify-center items-center gap-20 pt-12 pb-[58px] px-5 sm:px-[91px]">
        <h1 className="font-36 font-bold leading-10 text-center textcolor">
          Our integrations help you:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
          <div className="flex items-center gap-6">
            <Image
              src="/int-help.svg"
              width={60}
              height={60}
              alt="Integration help image"
            />
            <p className="font-24 font-medium leading-[26px] textcolor">
              Continuously monitor performance across all models and datasets in
              a unified view.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Image
              src="/int-help1.svg"
              width={60}
              height={60}
              alt="Integration help image"
            />
            <p className="font-24 font-medium leading-[26px] textcolor">
              Receive instant notifications for potential issues.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Image
              src="/int-help2.svg"
              width={60}
              height={60}
              alt="Integration help image"
            />
            <p className="font-24 font-medium leading-[26px] textcolor">
              Ensure seamless, ongoing governance and compliance.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Image
              src="/int-help3.svg"
              width={60}
              height={60}
              alt="Integration help image"
            />
            <p className="font-24 font-medium leading-[26px] textcolor">
              Facilitate collaboration across teams.
            </p>
          </div>
        </div>
      </div>

      {/* Integration data model source */}

      <div>
        <div className="bg-[#F4F4F4]">
          <div className="widthclass pt-[58px] px-5 sm:px-[63px] pb-[133px] flex flex-col justify-start items-start gap-[61px]">
            <div>
              <h1 className="text-[30px] font-medium leading-10 textcolor">
                Data/Model Source
              </h1>
              <div className="mt-10 px-4 lg:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {IntegrationCards.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md px-5 md:px-12 py-6 flex items-center gap-4"
                    >
                      <Image
                        src={item.img}
                        width={60}
                        height={60}
                        alt={item.label}
                      />
                      <div className="flex flex-col justify-start items-start gap-2">
                        <h1 className="text-lg font-semibold textcolor">
                          {item.label}
                        </h1>
                        <p className="text-sm textcolor opacity-70">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-[30px] font-medium leading-10 textcolor">
                Alerting
              </h1>
              <div className="mt-10 px-4 lg:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {alertingInt.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md px-5 md:px-12 py-6 flex items-center gap-4"
                    >
                      <Image
                        src={item.img}
                        width={60}
                        height={60}
                        alt={item.label}
                      />
                      <div className="flex flex-col justify-start items-start gap-2">
                        <h1 className="text-lg font-semibold textcolor">
                          {item.label}
                        </h1>
                        <p className="text-sm textcolor opacity-70">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-[30px] font-medium leading-10 textcolor">
                LLM/ ML Frameworks
              </h1>
              <div className="mt-10 px-4 lg:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {frameworkInt.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md px-5 md:px-12 py-6 flex items-center gap-4"
                    >
                      <Image
                        src={item.img}
                        width={60}
                        height={60}
                        alt={item.label}
                      />
                      <div className="flex flex-col justify-start items-start gap-2">
                        <h1 className="text-lg font-semibold textcolor">
                          {item.label}
                        </h1>
                        <p className="text-sm textcolor opacity-70">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-[30px] font-medium leading-10 textcolor">
                Model Deployment
              </h1>
              <div className="mt-10 px-4 lg:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {deploymentint.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md px-5 md:px-12 py-6 flex items-center gap-4"
                    >
                      <Image
                        src={item.img}
                        width={60}
                        height={60}
                        alt={item.label}
                      />
                      <div className="flex flex-col justify-start items-start gap-2">
                        <h1 className="text-lg font-semibold textcolor">
                          {item.label}
                        </h1>
                        <p className="text-sm textcolor opacity-70">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
