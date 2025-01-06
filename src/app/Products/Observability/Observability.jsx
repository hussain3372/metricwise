"use client";

import { observability } from "@/app/data/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Observability = () => {
  return (
    <div>
      <div>
        <div className=" bg-[url('/hero-gradient.png')] bg-no-repeat bg-cover">
          <div className="px-10 md:px-20 xl:px-[120px] py-10 lg:py-[180px] mt-5 bg-center widthclass">
            <div className="grid gap-[38px] lg:grid-cols-2 items-center">
              <div>
                <h1 className="font-44 font-semibold leading-[60px] purple-color">
                  Observability Hub
                </h1>
                <p className="font-20 font-normal leading-7 mt-3 mb-9 opacity-60">
                  {`Empower your AI/ML workflows with Metricwise's Observability Hub, a comprehensive suite designed to bring transparency, reliability, and accountability to every stage of your AI models. Our platform offers deep insights into model behavior, detection of biases and drifts, and benchmarks performance against industry standards. With customizable features and intuitive tools, Metricwise’s Observability Hub helps organizations foster trust and achieve optimal results.`}
                </p>
                <Link href="/company/contact_us" className="hero-btn">
                  Get started for free
                </Link>
              </div>
              <div className="flex justify-end items-end mt-10 lg:mt-0">
                <Image
                  width={587}
                  height={543}
                  src="/observability.svg"
                  alt="moni"
                />
              </div>
            </div>
          </div>
        </div>

        {/* cards */}

        <div className="widthclass">
          <div>
            {observability.map((item, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 items-center gap-10 xl:gap-[125px] px-10 md:px-[90px] xl:px-[172px] mt-[125px]"
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
                  className={` ${
                    index % 2 !== 0 ? "order-1 lg:order-1" : "order-1"
                  }`}
                >
                  <Image
                    src={item.titleImage}
                    width={32}
                    height={56}
                    alt="lambu"
                    className="mb-5"
                  />
                  <h1 className="font-40 font-medium leading-12 purple-color">
                    {item.title}
                  </h1>
                  <p className="font-14 font-normal leading-85 my-6">
                    {item.para}
                  </p>
                  <ul className="mt-7">
                    {[item.list, item.list1, item.list2, item.list3].map(
                      (listItem, listIndex) =>
                        listItem && (
                          <li
                            key={`list-${index}-${listIndex}`}
                            className="mb-5 font-14 font-normal leading-5 text-[#000000] flex items-center gap-2"
                          >
                            <Image
                              src={item.logo}
                              alt="List item icon"
                              width={24}
                              height={24}
                            />
                            {listItem}
                          </li>
                        )
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="monbg mt-[119px]">
        <div className="widthclass ">
          <div className="flex flex-col justify-center items-center text-center p-10 md:p-16 pt-20 pb-20">
            <h1 className="font-36 font-inter font-bold leading-10">
              Observability Hub
            </h1>
            <p className="font-16 font-normal font-inter leading-5 mt-5 mb-10 opacity-60">
              With Metricwise Observability Hub, organizations can ensure that
              their AI models are transparent, reliable, and aligned with
              industry <br /> standards. By providing actionable insights, bias
              detection, and explainability tools, Metricwise helps build trust
              in AI systems, <br /> empowering enterprises to achieve fair,
              accountable, and high-performing AI solutions.
            </p>
            <Link href="/Demo" className="hero-btn flex">
              Book a Demo
              <Image src="/free.png" width={24} height={24} alt="free" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Observability;
