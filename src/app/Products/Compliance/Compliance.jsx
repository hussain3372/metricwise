"use client";

import { compliance } from "@/app/data/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Compliance = () => {
  return (
    <div>
      <div>
        <div className="bg-[url('/hero-gradient.png')] bg-no-repeat bg-cover">
          <div className="pt-6 px-6 sm:pl-[120px] pr-[42px] pb-10 sm:pb-[88px] mt-5 bg-center widthclass">
            {/* Heading Section */}
            <div className="flex justify-center items-center flex-col">
              <h1 className="font-44 font-semibold leading-8 sm:leading-10 md:leading-[60px] text-[#000000] text-center">
                Navigate the Future of&nbsp;
                <span className="block sm:inline font-semibold text-[#7736B7]">
                  <span className="italic">A</span>I{" "}
                  <span className="italic">C</span>ompliance
                </span>
                <br className="hidden sm:block" />
                with&nbsp;
                <span className="font-semibold text-[#7736B7]">
                  <span className="italic">C</span>onfidence
                </span>
              </h1>
            </div>

            {/* Content Section */}
            <div className="grid lg:grid-cols-2 gap-8 items-center mt-8 sm:mt-[77px]">
              {/* Text Content */}
              <div>
                <p className="font-20 font-normal leading-6 sm:leading-7 mt-3 mb-8 sm:mb-9 opacity-60 text-[#000000]">
                  {` In today's `} fast-paced AI landscape, businesses face{" "}
                  <br className="hidden md:block" /> evolving regulations and
                  heightened compliance risks.{" "}
                  <br className="hidden md:block" /> Non-compliance can lead to
                  legal issues, financial <br className="hidden md:block" />{" "}
                  penalties, and reputational damage. Metricwise{" "}
                  <br className="hidden md:block" /> specializes in guiding
                  organizations through these <br className="hidden md:block" />{" "}
                  complexities with confidence and clarity.
                </p>
                <Link href="/company/contact_us" className="hero-btn">
                  Get started for free
                </Link>
              </div>

              {/* Image Section */}
              <div className="flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
                <Image
                  width={729} // Adjusted for better responsiveness
                  height={505} // Adjusted for smaller screens
                  src="/compliance.svg"
                  alt="Compliance Illustration"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* cards */}

        <div className="widthclass">
          <div className="pt-[33px] px-5 md:px-[119px] flex flex-col justify-center items-center gap-3">
            <h1 className="font-44 font-semibold leading-10 sm:leading-[50px] md:leading-[60px] text-center">
              Why Compliance Matters
            </h1>
            <p className="font-20 font-normal leading-7 opacity-60 text-center">
              The landscape of AI regulations is constantly changing. Emerging
              guidelines not only protect consumers but also ensure that your AI
              applications are ethically sound and legally compliant. Failing to
              meet these standards can lead to severe consequences, including
              hefty fines and operational setbacks. By partnering with
              Metricwise, you mitigate these risks and establish a robust
              compliance strategy that aligns with the latest regulatory
              requirements.
            </p>
          </div>
          <div>
            {compliance.map((item, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 items-center px-10 md:px-[90px] xl:px-[148px] mt-[125px]"
              >
                <div
                  className={`${
                    index % 2 !== 0
                      ? "flex lg:justify-end order-2 lg:order-2"
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
                    {item.list.map((listItem, listIndex) => (
                      <li
                        key={`list-${index}-${listIndex}`}
                        className="mb-5 font-14 font-normal leading-5 text-[#000000] flex items-start gap-2"
                      >
                        <Image
                          src={item.logo}
                          alt="List item icon"
                          width={24}
                          height={24}
                        />
                        <div>
                          <div className="font-14 font-normal leading-5">
                            <span className="font-14 font-bold leading-5 mb-1">
                              {listItem.heading}
                            </span>
                            {listItem.content}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="monbg mt-[119px]">
        <div className="widthclass ">
          <div className="flex flex-col justify-center items-center text-center px-10 lg:px-[216px] py-[56px]">
            <h1 className="font-36 font-semibold leading-[40px] text-[#000000]">
              Future-Proof Your
              <span className="text-[#7736B7]"> <span className="italic">C</span>ompliance <span className="italic">S</span>trategy </span>
              with{""}
              <br className="hidden sm:block" />
              <span className="text-[#7736B7]"><span className="italic">M</span>etricwise</span>
            </h1>

            <p className="font-16 font-normal leading-5 mt-5 mb-10 opacity-60">
              {` The world of AI is complex and filled with potential pitfalls.
              Non-compliance is not an option—it can jeopardize your business
              and undermine consumer trust. Metricwise is committed to staying
              ahead of regulatory changes and ensuring that your organization is
              well-prepared for future challenges. Don't wait until it's too
              late. Partner with Metricwise today and secure your place in the
              future of responsible AI deployment. Together, we'll build a
              compliant framework that not only meets today's standards but
              anticipates tomorrow's challenges, ensuring your business thrives
              in an evolving landscape.`}
            </p>
            <Link href="/Demo" className="new-btns">
              Book a Demo
              <Image src="/free.png" width={24} height={24} alt="free" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
