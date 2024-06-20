"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Monitoring = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="px-9 mt-10 md:mt-20">
          {/* <div className="flex items-center">
            <h1 className="font-24 font-normal font-inter flex items-center gap-2">
              Metricwise
              <span className="font-20 font-normal font-inter opacity-50 flex items-center gap-2">
                <PiGreaterThanLight/> Products <PiGreaterThanLight/> Observability Hub
              </span>
            </h1>
          </div> */}
          <div className="grid md:grid-cols-2 items-center">
            <div>
              <h1 className="font-36 font-inter font-bold leading-10">
                Observability Hub
              </h1>
              <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                Enhance transparency and reliability in your AI/ML models with
                our Observability Hub. Gain deep insights into model inference,
                trace biases and drifts, and benchmark performance against
                industry standards. Our platform offers customizable features
                and intuitive tools, empowering enterprises to build trust and
                drive better outcomes.
              </p>
              <button className="font-20 font-normal font-inter leading-6 bg-[#042440] white rounded-[8px] w-[180px] md:w-[214px] h-[50px] md:h-[52px] flex gap-3 justify-center items-center">
                Book a Demo
                <Image
                  width={24}
                  height={24}
                  src="/free.png"
                  className="w-[26px]"
                  alt=""
                />
              </button>
            </div>
            <div className="flex justify-end items-end">
              <Image src="/moni.png" width={483} height={590} alt="moni" />
            </div>
          </div>
        </div>

        <div>
          <div>
            <Fade direction="right">
              <div className="grid md:grid-cols-2 items-center md:gap-36 md:mt-20">
                <div className=" order-2 md:order-1">
                  <Image src="/mon1.png" width={690} height={717} alt="" />
                </div>
                <div className="p-10 md:p-16 order-1 md:order-2">
                  <Image
                    src="/lambu.png"
                    width={32}
                    height={56}
                    alt="lambu"
                    className="mb-10"
                  />
                  <h1 className="font-36 font-inter font-bold leading-10">
                    Dynamic Bias and Drift Detection
                  </h1>
                  <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                    Detects and mitigate biases and drifts in real-time,
                    ensuring fairness and reliability throughout the model
                    lifecycle.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade direction="left">
              <div className="grid md:grid-cols-2 items-center md:gap-36">
                <div className="order-2 md:order-2 flex justify-end">
                  <Image width={483} height={590} src="/mon2.png" alt="" />
                </div>
                <div className="order-1 md:order-1 p-10 md:p-16">
                  <Image
                    src="/lambu.png"
                    width={32}
                    height={56}
                    alt="lambu"
                    className="mb-10"
                  />
                  <h1 className="font-36 font-inter font-bold leading-10">
                    Holistic Benchmarking
                  </h1>
                  <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                    Benchmark model performance against a comprehensive set of
                    standards and proprietary benchmarks, providing actionable
                    insights for continuous improvement.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade direction="right">
              <div className="grid md:grid-cols-2 items-center md:gap-36">
                <div className="order-2 md:order-1">
                  <Image width={483} height={590} src="/mon3.png" alt="" />
                </div>
                <div className="order-1 md:order-2 p-10 md:p-16">
                  <Image
                    src="/lambu.png"
                    width={32}
                    height={56}
                    alt="lambu"
                    className="mb-10"
                  />
                  <h1 className="font-36 font-inter font-bold leading-10">
                    Explainability AI Assistants
                  </h1>
                  <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                    Harness the power of AI-driven explainability assistants to
                    interpret model decisions and communicate complex concepts
                    in a clear and understandable manner.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade direction="left">
              <div className="grid md:grid-cols-2 items-center md:gap-36">
                <div className="order-2 md:order-2 flex justify-end">
                  <Image width={483} height={590} src="/mon4.png" alt="" />
                </div>
                <div className="order-1 md:order-1 p-10 md:p-16">
                  <Image
                    src="/lambu.png"
                    width={32}
                    height={56}
                    alt="lambu"
                    className="mb-10"
                  />
                  <h1 className="font-36 font-inter font-bold leading-10">
                    Interactive Model Profiling
                  </h1>
                  <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                    Dive deep into model behavior with interactive profiling
                    tools that enable detailed analysis of performance metrics,
                    feature importance, and prediction accuracy.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="border border-t-[#000000] border-b-0 border-l-0 border-r-0 border-opacity-[12%] monbg">
        <div className="widthclass ">
          <div className="flex flex-col justify-center items-center text-center p-10 md:p-16 pt-20 pb-20">
            <h1 className="font-36 font-inter font-bold leading-10">
              Observability Hub
            </h1>
            <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
              Enhance transparency and reliability in your AI/ML models with our
              Observability Hub. Gain deep insights into model inference, trace
              biases and drifts, and benchmark performance against industry
              standards. Our platform offers customizable features and intuitive
              tools, empowering enterprises to build trust and drive better
              outcomes.
            </p>
            <button className="font-20 font-normal font-inter leading-6 bg-[#042440] white rounded-[8px] w-[180px] md:w-[214px] h-[50px] md:h-[52px] flex gap-3 justify-center items-center">
              Book a Demo
              <Image
                width={24}
                height={24}
                src="/free.png"
                className="w-[26px]"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
