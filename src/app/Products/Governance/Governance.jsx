"use client";

import { governance } from "@/app/data/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Governance = () => {
  return (
    <div>
      <div>
        <div className=" bg-[url('/hero-gradient.png')] bg-no-repeat bg-cover">
          <div className="px-10 md:px-20 xl:px-[120px] py-10 lg:py-[180px] mt-5 bg-center widthclass">
            <div className="grid lg:grid-cols-2 items-center gap-10">
              <div>
                <h1 className="font-44 font-semibold leading-[60px] purple-color">
                  Governance Hub
                </h1>
                <p className="font-20 font-normal leading-7 mt-3 mb-9 opacity-60">
                  {`Metricwise's Governance Hub is designed to help organizations
                  ensure compliance, accountability, and ethical AI practices
                  throughout the AI/ML lifecycle. With tools tailored to enhance
                  transparency, security, and regulatory alignment, Metricwise's
                  Governance Hub empowers enterprises to mitigate risks,
                  maintain ethical standards, and instill confidence in
                  AI-driven decisions. Our platform provides user-friendly
                  interfaces, customizable settings, and pre-configured
                  templates to support swift and effective governance
                  implementation.`}
                </p>
                <Link href="/company/contact_us" className="hero-btn">
                  Get started for free
                </Link>
              </div>
              <div className="flex justify-end items-end mt-10 lg:mt-0">
                <Image width={587} height={543} src="/moni.svg" alt="moni" />
              </div>
            </div>
          </div>
        </div>

        {/* cards */}

        <div className="widthclass">
          <div>
            {governance.map((item, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 items-center gap-10 xl:gap-[75px] px-10 md:px-[90px] xl:px-[148px] mt-[125px]"
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
              Governance Hub
            </h1>
            <p className="font-16 font-normal font-inter leading-5 mt-5 mb-10 opacity-60">
              With Metricwise Governance Hub, organizations can confidently
              navigate the complexities of AI compliance, ethical decision-{" "}
              <br /> making, and accountability. Our platform provides a
              structured approach to AI governance, enabling teams to mitigate
              risks, adhere <br /> to regulations, and maintain the highest
              standards of transparency and trustworthiness in AI initiatives.
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

export default Governance;
