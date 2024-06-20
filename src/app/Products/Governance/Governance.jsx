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
                <PiGreaterThanLight/> Products <PiGreaterThanLight/> Governance Hub
              </span>
            </h1>
          </div> */}
          <div className="grid md:grid-cols-2 items-center">
            <div>
              <h1 className="font-36 font-inter font-bold leading-10">
                Governance Hub
              </h1>
              <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                Ensure compliance and accountability in your AI/ML initiatives
                with our Governance Hub. Our platform provides user-friendly
                tools for explainability, security, and compliance monitoring,
                with customizable settings and pre-configured templates for easy
                implementation. Empower your enterprise to mitigate risks and
                build confidence in your AI-driven decisions
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
              <Image width={483} height={590} src="/moni.png" alt="moni" />
            </div>
          </div>
        </div>

        <div>
          <div>
            <Fade direction="right">
              <div className="grid md:grid-cols-2 items-center md:gap-36 md:mt-20">
                <div className=" order-2 md:order-1">
                  <Image width={690} height={717} src="/mon1.png" alt="" />
                </div>
                <div className="p-5 md:p-16 order-1 md:order-2">
                  <Image
                    src="/lambu.png"
                    width={32}
                    height={56}
                    alt="lambu"
                    className="md:mb-10"
                  />
                  <h1 className="font-36 font-inter font-bold leading-10">
                    Model Explainability & Fairness
                  </h1>
                  <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                    This feature helps in demystifying the decision-making
                    processes and ethical considerations of machine learning
                    models. It helps provide users with insights into how a
                    model arrives at specific predictions or decisions,
                    enhancing transparency and interpretability. By visualizing
                    the factors influencing model outputs and generating
                    interpretable summaries, the platform enables stakeholders
                    to comprehend the rationale behind model decisions.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade direction="left">
              <div className="grid md:grid-cols-2 items-center md:gap-36">
                <div className="order-2 md:order-2 flex justify-end">
                  <Image width={690} height={717} src="/mon2.png" alt="" />
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
                    Regulatory Compliance Scorecards
                  </h1>
                  <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                    Monitor compliance with regulatory requirements through
                    intuitive scorecards that provide actionable insights and
                    recommendations for improvement.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade direction="right">
              <div className="grid md:grid-cols-2 items-center md:gap-36">
                <div className="order-2 md:order-1">
                  <Image width={690} height={717} src="/mon3.png" alt="" />
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
                    Granular Access Controls
                  </h1>
                  <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                    Implement fine-grained access controls to protect sensitive
                    data and ensure compliance with regulatory mandates, with
                    role-based permissions tailored to individual user roles and
                    responsibilities.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade direction="left">
              <div className="grid md:grid-cols-2 items-center md:gap-36">
                <div className="order-2 md:order-2 flex justify-end">
                  <Image width={690} height={717} src="/mon4.png" alt="" />
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
                    Automated Compliance Audits
                  </h1>
                  <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                    Streamline compliance audits with automated workflows that
                    track changes to models, data, and policies, ensuring
                    transparency and accountability at every stage of the model
                    lifecycle
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
              Governance Hub
            </h1>
            <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
              Ensure compliance and accountability in your AI/ML initiatives
              with our Governance Hub. Our platform provides user-friendly tools
              for explainability, security, and compliance monitoring, with
              customizable settings and pre-configured templates for easy
              implementation. Empower your enterprise to mitigate risks and
              build confidence in your AI-driven decisions
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
