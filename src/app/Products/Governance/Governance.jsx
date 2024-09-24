"use client";

import { governance } from "@/app/data/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Monitoring = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="px-16 mt-5">
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
              <Link href="/Demo" className="hero-btn">
                Book a Demo
                <Image src="/free.png" width={24} height={24} alt="free" />
              </Link>
            </div>
            <div className="flex justify-end items-end">
              <Image width={483} height={590} src="/moni.png" alt="moni" />
            </div>
          </div>
        </div>

         {/* cards */}

         <div>
          <div>
            {governance.map((item, index) => (
                <div key={index} className="grid lg:grid-cols-2 items-center xl:gap-36 md:mt-20 pb-10">
                  <div
                    className={`${
                      index % 2 !== 0
                        ? "order-2 lg:order-2"
                        : "order-2 lg:order-1"
                    }`}
                  >
                    <Image
                      src={item.src}
                      width={item.w}
                      height={item.h}
                      alt={item.alt}
                    />
                  </div>
                  <div
                    className={`p-10 md:p-16 ${
                      index % 2 !== 0 ? "order-1 lg:order-1" : "order-1"
                    }`}
                  >
                    <Image
                      src={item.titleImage}
                      width={32}
                      height={56}
                      alt="lambu"
                      className="mb-10"
                    />
                    <h1 className="font-36 font-inter font-bold leading-10">
                      {item.title}
                    </h1>
                    <p className="font-24 font-normal font-inter leading-8 mt-3 mb-10 opacity-60">
                      {item.para}
                    </p>
                  </div>
                </div>
            ))}
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
            <Link href="/Demo" className="hero-btn">
                Book a Demo
                <Image src="/free.png" width={24} height={24} alt="free" />
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
