"use client";
import React from "react";
import { useState } from "react";
import Calendar from "./CalendarFiles/Calendar";
import Image from "next/image";
import Schedule from "./Shedule/Schedule";
import { Fade } from "react-awesome-reveal";
const Demo = () => {
  const [section, setSection] = useState(1);

  const handleNext = () => {
    setSection(section + 1);
  };

  const handleBack = () => {
    setSection(section - 1);
  };

  return (
    <div className="relative">
      <div className="px-5 md:px-10 py-10 md:py-14 demoparent">
        {section === 1 && (
          <div className="grid lg:grid-cols-2 max-w-[1040px] bg-[#FFFFFF] m-auto rounded-[40px] p-5 md:p-20 gap-10 shadow-xl">
            <div>
              <Image
                width={140}
                height={20}
                src="/logo.png"
                alt="logo"
                className="mb-5"
              />
              <label
                htmlFor=""
                className="font-16 fontregular leading-5 paragraph"
              >
                Metricwise
              </label>
              <h1 className="fontsemibold font-20 leading-6 textcolor mt-5">
                A Comprehensive AI Observability and Governance Platform
              </h1>
              <ul className="mt-8">
                <li className="flex items-center gap-4 font-16 fontsemibold leading-5 text-[#747273]">
                  <Image width={24} height={24} src="/demo1.png" alt="demo1" />
                  Find a time to explore the capabilities of Metricwise tailored
                  to your needs.
                </li>
                <li className="flex items-center gap-4 font-16 fontsemibold leading-5 text-[#747273] mt-5">
                  <Image width={24} height={24} src="/demo2.png" alt="demo2" />
                  Upon confirmation, you will receive the details for the web
                  conferencing session.
                </li>
              </ul>
              <p className="mt-8 font-16 fonregular black">
                We are eager to delve into your monitoring and observability
                objectives. Feel free to get in touch for any inquiries or to
                reschedule.
              </p>
            </div>
            <div className="">
              <Fade direction="top-right">
                <div className="flex flex-col justify-center items-center">
                  {/* <img src="calendar.png" alt="calendar" /> */}
                  <Calendar />
                </div>
              </Fade>
              <div className="flex items-end justify-end mt-5">
                <button
                  onClick={handleNext}
                  className="flex mt-5 sm:mt-0 items-end justify-end border border-[#042440] rounded-[10px] bg-[#042440] text-white font-16 fontregular leading-6 pt-2 pb-2 pl-5 pr-5"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {section === 2 && (
          <div className="grid lg:grid-cols-2 max-w-[1040px] bg-[#FFFFFF] m-auto rounded-[40px] p-5 md:p-20 gap-10 shadow-xl">
            <div>
              <div>
                <Image
                  width={140}
                  height={20}
                  src="/logo.png"
                  alt="logo"
                  className="mb-5"
                />
                <label
                  htmlFor=""
                  className="font-16 fontregular leading-5 paragraph"
                >
                  Metricwise
                </label>
                <h1 className="fontsemibold font-20 leading-6 textcolor mt-5">
                  A Comprehensive AI Observability and Governance Platform
                </h1>
                <ul className="mt-8">
                  <li className="flex items-center gap-4 font-16 fontsemibold leading-5 text-[#747273]">
                    <Image
                      width={24}
                      height={24}
                      src="/demo1.png"
                      alt="demo1"
                    />
                    Find a time to explore the capabilities of Metricwise
                    tailored to your needs.
                  </li>
                  <li className="flex items-center gap-4 font-16 fontsemibold leading-5 text-[#747273] mt-5">
                    <Image
                      width={24}
                      height={24}
                      src="/demo2.png"
                      alt="demo2"
                    />
                    Upon confirmation, you will receive the details for the web
                    conferencing session.
                  </li>
                </ul>
                <p className="mt-8 font-16 fonregular black">
                  We are eager to delve into your monitoring and observability
                  objectives. Feel free to get in touch for any inquiries or to
                  reschedule.
                </p>
              </div>
            </div>

            <div className="">
              <Fade direction="top-right">
                <div>
                  <Schedule />
                </div>
              </Fade>
              <div className="flex justify-end items-center mt-5 gap-5">
                <button
                  onClick={handleBack}
                  className="flex items-end justify-end border border-[#042440] rounded-[10px] text-[#042440] font-16 fontregular hover:bg-[#042440] hover:text-white leading-6 pt-2 pb-2 pl-5 pr-5"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-end justify-end border border-[#042440] rounded-[10px] bg-[#042440] text-white font-16 fontregular leading-6 pt-2 pb-2 pl-5 pr-5"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {section === 3 && (
          <div className="grid lg:grid-cols-2 max-w-[1040px] bg-[#FFFFFF] flex-col justify-center m-auto rounded-[40px] p-5 md:p-20 gap-10 shadow-xl">
            <div>
              <div>
                <Image
                  width={140}
                  height={20}
                  src="/logo.png"
                  alt="logo"
                  className="mb-5"
                />
                <label
                  htmlFor=""
                  className="font-16 fontregular leading-5 paragraph"
                >
                  Metricwise
                </label>
                <h1 className="fontsemibold font-20 leading-6 textcolor mt-5">
                  A Comprehensive AI Observability and Governance Platform
                </h1>
                <ul className="mt-8">
                  <li className="flex items-center gap-4 font-16 fontsemibold leading-5 text-[#747273]">
                    <Image
                      width={24}
                      height={24}
                      src="/demo1.png"
                      alt="demo1"
                    />
                    Find a time to explore the capabilities of Metricwise
                    tailored to your needs.
                  </li>
                  <li className="flex items-center gap-4 font-16 fontsemibold leading-5 text-[#747273] mt-5">
                    <Image
                      width={24}
                      height={24}
                      src="/demo2.png"
                      alt="demo2"
                    />
                    Upon confirmation, you will receive the details for the web
                    conferencing session.
                  </li>
                </ul>
                <p className="mt-8 font-16 fonregular black">
                  We are eager to delve into your monitoring and observability
                  objectives. Feel free to get in touch for any inquiries or to
                  reschedule.
                </p>
              </div>
            </div>
            <Fade direction="top-right">
              <div className="bg-[#FFFFFF] shadow-lg rounded-2xl">
                <form className="p-6">
                  <label
                    htmlFor=""
                    className="fontbold font-36 leading-10 textcolor"
                  >
                    Book a Demo
                  </label>
                  <div className="grid sm:grid-cols-2 gap-5 mt-4">
                    <input
                      type="text"
                      className="rounded-[36px] p-3 border border-[#0000001F] font-16 fontregular leading-5 paragraph"
                      placeholder="First name"
                    />
                    <input
                      type="text"
                      className="rounded-[36px] p-3 border border-[#0000001F] font-16 fontregular leading-5 paragraph"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      className="w-full rounded-[36px] pl-10 p-3 border border-[#0000001F] font-16 fontregular leading-5 paragraph mt-5"
                      placeholder="Your email"
                    />
                    <div className="absolute top-8 left-3">
                      <Image width={20} height={20} src="/email.png" alt="" />
                    </div>
                  </div>
                  <div className="relative mt-5">
                    <input
                      type="tel"
                      required
                      className="w-full rounded-[36px] pl-24 p-3 border border-[#0000001F] font-16 fontregular leading-5 paragraph"
                      placeholder="Phone number"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <select className="appearance-none bg-transparent border border-t-0 border-l-0 border-b-0 border-r-2 border-[#0000001F] pr-8 pl-3 py-1">
                        <option>+92</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-[36px] p-3 border border-[#0000001F] font-16 fontregular leading-5 paragraph mt-5"
                    placeholder="Organization"
                  />
                  <input
                    type="text"
                    className="w-full rounded-[36px] p-3 border border-[#0000001F] font-16 fontregular leading-5 paragraph mt-5"
                    placeholder="Role"
                  />
                  <textarea
                    type="text"
                    maxLength={50}
                    className="w-full h-[144px] rounded-[17px] p-3 border border-[#0000001F] font-16 fontregular leading-5 paragraph mt-5"
                    placeholder="Tell us more about how we can help you:"
                  />
                  <input
                    type="text"
                    className="w-full rounded-[36px] p-3 border border-[#0000001F] font-16 fontregular leading-5 paragraph mt-5"
                    placeholder="How did you hear about us?"
                  />
                  <input
                    type="submit"
                    className="w-full flex items-center justify-center border border-[#042440] rounded-[36px] bg-[#042440] text-white font-16 fontmedium leading-5 p-3 mt-5 cursor-pointer"
                  />
                </form>
              </div>
            </Fade>
          </div>
        )}
      </div>

      {/* <div className="absolute top-0 -z-10">
        <video src="demovid.mp4" className=""></video>
      </div> */}
    </div>
  );
};

export default Demo;
