"use client";

import { observability } from "@/app/data/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Monitoring = () => {
  return (
    <div>
      <div className="widthclass">
        {/* hero */}

        <div className="px-16 mt-5">
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
              <Link href="/Demo" className="hero-btn">
                Book a Demo
                <Image src="/free.png" width={24} height={24} alt="free" />
              </Link>
            </div>
            <div className="flex justify-end items-end">
              <Image src="/moni.png" width={483} height={590} alt="moni" />
            </div>
          </div>
        </div>

        {/* cards */}

        <div>
          <div>
            {observability.map((item, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 items-center xl:gap-36 md:mt-20 pb-10"
              >
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

      {/* cta Section */}

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
            <Link  href="/Demo" className="hero-btn">
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
