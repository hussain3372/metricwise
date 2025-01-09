"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";
import { useState } from "react";
const About = () => {
  const [scale, setScale] = useState(1.15);

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <div>
      <div className="bg-gradient-to-l to-[#CFC2FF99] from-[#FFF0BC99]">
        <div className="widthclass ">
          <div className="pt-[50px] sm:pt-[123px] pl-[27px] sm:pl-[95px] pr-[27px] pb-[39px]">
            <div>
              <h1 className="font-44 font-semibold leading-[60px] text-[#2E2E2E] opacity-80">
                Our Mission: Ensuring Responsible
                <br className="hidden sm:block" />
                <span className="text-[#7736B7]">
                <span className="italic">A</span>I <span className="italic">T</span>hrough <span className="italic">C</span>ontinuous <span className="italic">O</span>versight
                </span>
              </h1>
            </div>
            <div className="flex flex-col justify-end items-end">
              <div className="flex flex-col justify-end items-start gap-6">
                <h1 className="font-36 font-bold leading-10 textcolor opacity-80">
                  Our Story
                </h1>
                <p className="font-22 font-normal leading-6 textcolor opacity-80">
                  As AI adoption accelerates, we saw a critical need for greater
                  <br className="hidden md:block" /> transparency and trust in
                  the AI ecosystem. Challenges around{" "}
                  <br className="hidden md:block" /> explainability, fairness,
                  and bias drove us to launch Metricwise,{" "}
                  <br className="hidden md:block" /> with a clear goal: to bring
                  accountability, clarity and demystifying{" "}
                  <br className="hidden md:block" /> the decision-making
                  processes for AI solutions. We are{" "}
                  <br className="hidden md:block" />
                  committed to ensuring that AI systems are transparent,
                  reliable, <br className="hidden md:block" /> and ethical,
                  setting a new standard for the future of AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="grid md:grid-cols-2 widthclass pl-[27px] sm:pl-[80px] pt-[58px] pb-[98px] pr-[20px] gap-[76px]">
          <div>
            <h1 className="font-36 font-bold leading-40 textcolor">
              Our Values
            </h1>
            <p className="font-20 font-normal textcolor leading-[28px] mt-6">
              {`We believe in AI's power to transform lives but recognize the need
              for accountability and trust. Our company is dedicated to building
              ethical, responsible AI solutions that empower our customers to
              create transparent and unbiased solutions. Our commitment is
              grounded in these guiding principles:`}
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <div className="flex items-start justify-start gap-5">
              <Image
                src="/our-value1.svg"
                width={40}
                height={40}
                alt="our value image"
              />
              <div className="flex flex-col justify-start items-start gap-1">
                <h1 className="font-26 font-bold leading-8 text-[#7736B7]">
                  Social Responsibility
                </h1>
                <p className="font-20 font-normal textcolor leading-[28px]">
                  We are committed to developing AI that contributes to the
                  greater good, prioritizing solutions that address societal
                  challenges and promote equity.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-5">
              <Image
                src="/our-value3.svg"
                width={40}
                height={40}
                alt="our value image"
              />
              <div className="flex flex-col justify-start items-start gap-1">
                <h1 className="font-26 font-bold leading-8 text-[#7736B7]">
                  Ethical Governance
                </h1>
                <p className="font-20 font-normal textcolor leading-[28px]">
                  We guide organizations in embedding ethical standards into
                  their AI systems, ensuring governance that upholds fairness
                  and integrity at every level.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-5">
              <Image
                src="/our-value3.svg"
                width={40}
                height={40}
                alt="our value image"
              />
              <div className="flex flex-col justify-start items-start gap-1">
                <h1 className="font-26 font-bold leading-8 text-[#7736B7]">
                  Transparent and Accountable
                </h1>
                <p className="font-20 font-normal textcolor leading-[28px]">
                  {` We provide solutions that help in understanding AI's
                  decision-making process, ensuring transparency and
                  accountability at every step.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:mt-[77px] px-[51px]">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="font-36 font-bold leading-tight text-primary">
            Get to Know The Team
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {/* Card 1 */}
            <div className="border border-[#EAECF0]">
              <Image
                src="/team1.svg"
                width={310}
                height={210}
                alt="team1 image"
                className="w-full"
              />
              <div className="flex flex-col justify-start items-start gap-2 p-4">
                <h2 className="text-lg font-semibold leading-6 text-[#282828]">
                  Varun Sharma
                </h2>
                <p className="text-sm font-normal text-[#3E3E59]">
                  Founder, CEO
                </p>
                <span className="text-sm font-normal text-[#5F6980]">
                  McKinsey, EY, Coherent
                </span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="border border-[#EAECF0]">
              <Image
                src="/team2.svg"
                width={310}
                height={210}
                alt="team1 image"
                className="w-full"
              />
              <div className="flex flex-col justify-start items-start gap-2 p-4">
                <h2 className="text-lg font-semibold leading-6 text-[#282828]">
                  Kaibalya Bhuyan
                </h2>
                <p className="text-sm font-normal text-[#3E3E59]">
                  Founder, CTO
                </p>
                <span className="text-sm font-normal text-[#5F6980]">
                  ZCLAP
                </span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="border border-[#EAECF0]">
              <Image
                src="/team3.svg"
                width={310}
                height={210}
                alt="team1 image"
                className="w-full"
              />
              <div className="flex flex-col justify-start items-start gap-2 p-4">
                <h2 className="text-lg font-semibold leading-6 text-[#282828]">
                  Vivek Gulati
                </h2>
                <p className="text-sm font-normal text-[#3E3E59]">
                  Founder, COO
                </p>
                <span className="text-sm font-normal text-[#5F6980]">
                  Morgan Stanley, EY
                </span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="border border-[#EAECF0]">
              <Image
                src="/team4.svg"
                width={310}
                height={210}
                alt="team1 image"
                className="w-full"
              />
              <div className="flex flex-col justify-start items-start gap-2 p-4">
                <h2 className="text-lg font-semibold leading-6 text-[#282828]">
                  Rahul Bhalla
                </h2>
                <p className="text-sm font-normal text-[#3E3E59]">
                  Founder, CFO
                </p>
                <span className="text-sm font-normal text-[#5F6980]">
                  ICW Group, Moodys, Unisys
                </span>
              </div>
            </div>
            {/* Card 5 */}
            <div className="border border-[#EAECF0]">
              <Image
                src="/team5.svg"
                width={310}
                height={210}
                alt="team1 image"
                className="w-full"
              />
              <div className="flex flex-col justify-start items-start gap-2 p-4">
                <h2 className="text-lg font-semibold leading-6 text-[#282828]">
                  Siddharth Singh
                </h2>
                <p className="text-sm font-normal text-[#3E3E59]">
                  Founder, CMO
                </p>
                <span className="text-sm font-normal text-[#5F6980]">
                  Discover, Amazon
                </span>
              </div>
            </div>
            {/* Card 6 */}
            <div className="border border-[#EAECF0]">
              <Image
                src="/team6.svg"
                width={310}
                height={210}
                alt="team1 image"
                className="w-full"
              />
              <div className="flex flex-col justify-start items-start gap-2 p-4">
                <h2 className="text-lg font-semibold leading-6 text-[#282828]">
                  TBD
                </h2>
                <p className="text-sm font-normal text-[#3E3E59]">
                  Software Engineer
                </p>
                <span className="text-sm font-normal text-[#5F6980]">TBD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center sm:mt-[127px] mb-[91px] mx-10 xl:mx-[132px] gap-[51px]">
        <h1 className="font-36 font-bold leading-10 textcolor">Get in Touch</h1>
        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              onClick={() => handleEmailClick("sales@metricwise.ai")}
              className="cursor-pointer grid grid-cols-2 bg-[#FFFFFF] p-5 rounded-lg shadow-sm"
            >
              <div className="flex flex-col font-20 font-semibold textcolor leading-6">
                Sales
                <span className="font-12 textcolor opacity-60 font-normal leading-4 mt-2">
                  sales@metricwise.ai
                </span>
              </div>
              <div className="flex justify-end items-center">
                <Image
                  width={44}
                  height={44}
                  src="/contact1.svg"
                  alt="Contact Icon"
                />
              </div>
            </div>

            <div
              onClick={() => handleEmailClick("support@metricwise.ai")}
              className="cursor-pointer grid grid-cols-2 bg-[#FFFFFF] p-5 rounded-lg shadow-sm"
            >
              <div className="flex flex-col font-20  font-semibold textcolor leading-6">
                Support
                <span className="font-12 textcolor opacity-60 font-normal leading-4 mt-2">
                  support@metricwise.ai
                </span>
              </div>
              <div className="flex justify-end items-center">
                <Image
                  width={44}
                  height={44}
                  src="/contact2.svg"
                  alt="Support Icon"
                />
              </div>
            </div>

            <div
              onClick={() => handleEmailClick("careers@metricwise.ai")}
              className="cursor-pointer grid grid-cols-2 bg-[#FFFFFF] p-5 rounded-lg shadow-sm"
            >
              <div className="flex flex-col font-20  font-semibold textcolor leading-6">
                Careers
                <span className="font-12 textcolor opacity-60 font-normal leading-4 mt-2">
                  careers@metricwise.ai
                </span>
              </div>
              <div className="flex justify-end items-center">
                <Image
                  width={44}
                  height={44}
                  src="/contact3.svg"
                  alt="Careers Icon"
                />
              </div>
            </div>

            <div
              onClick={() => handleEmailClick("info@metricwise.ai")}
              className="cursor-pointer grid grid-cols-2 bg-[#FFFFFF] p-5 rounded-lg shadow-sm"
            >
              <div className="flex flex-col font-20  font-semibold textcolor leading-6">
                General
                <span className="font-12 textcolor opacity-60 font-normal leading-4 mt-2">
                  info@metricwise.ai
                </span>
              </div>
              <div className="flex justify-end items-center">
                <Image
                  width={44}
                  height={44}
                  src="/contact4.svg"
                  alt="General Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
