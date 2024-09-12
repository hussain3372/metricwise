"use client";
import React from "react";
import { useState, useEffect } from "react";
import Calendar from "./CalendarFiles/Calendar";
import Image from "next/image";
import Schedule from "./Shedule/Schedule";
import { Fade } from "react-awesome-reveal";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const Demo = () => {
  const [section, setSection] = useState(1);

  useEffect(() => {
    // Use a small delay to ensure the DOM is fully rendered
    if (typeof window !== "undefined") {
      setTimeout(() => {
        const input = document.querySelector("#phone");
        console.log(input); // This should now log the input element, not null

        if (input) {
          const iti = intlTelInput(input, {
            initialCountry: "us",
            separateDialCode: true,
            nationalMode: false,
            utilsScript:
              "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
          });

          return () => {
            if (iti) iti.destroy();
          };
        }
      }, 100); // Adjust delay if necessary
    }
  }, [section]); // This ensures intlTelInput runs every time section changes

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
          <div className="grid lg:grid-cols-2 max-w-[1040px] bg-[#FFFFFF] m-auto rounded-[40px] p-5 md:p-20 gap-20 shadow-[0_0_10px_rgba(0,0,16,0.1)]">
            <div>
              <Image
                width={140}
                height={20}
                src="/logo.svg"
                alt="logo"
                className="mb-5"
              />
              <label
                htmlFor=""
                className="font-16 font-normal leading-5 paragraph"
              >
                Metricwise
              </label>
              <h1 className="font-semibold font-20 leading-6 textcolor mt-5 text-[#042440]">
                A Comprehensive AI Observability and Governance Platform
              </h1>
              <ul className="mt-8">
                <li className="flex items-center gap-4 font-16 font-medium leading-5 text-[#747273]">
                  <Image width={24} height={24} src="/demo1.svg" alt="demo1" />
                  Find a time to explore the capabilities of Metricwise tailored
                  to your needs.
                </li>
                <li className="flex items-center gap-4 font-16 font-medium leading-5 text-[#747273] mt-5">
                  <Image width={24} height={24} src="/demo2.svg" alt="demo2" />
                  Upon confirmation, you will receive the details for the web
                  conferencing session.
                </li>
              </ul>
              <p className="mt-8 font-16 font-normal paragraph">
                We are eager to delve into your monitoring and observability
                objectives. Feel free to get in touch for any inquiries or to
                reschedule.
              </p>
            </div>
            <div className="">
              <Fade direction="down">
                <div className="flex flex-col justify-center items-center">
                  {/* <img src="calendar.png" alt="calendar" /> */}
                  <Calendar />
                </div>
              </Fade>
              <div className="flex items-end justify-end mt-5">
                <button
                  onClick={handleNext}
                  className="flex mt-5 sm:mt-0 items-end justify-end border border-[#042440] rounded-[10px] bg-[#042440] text-white font-16 font-normal leading-6 pt-2 pb-2 pl-5 pr-5"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {section === 2 && (
          <div className="grid lg:grid-cols-2 max-w-[1040px] bg-[#FFFFFF] m-auto rounded-[40px] p-5 md:p-20 gap-10 shadow-[0_0_10px_rgba(0,0,16,0.1)]">
            <div>
              <div>
                <Image
                  width={140}
                  height={20}
                  src="/logo.svg"
                  alt="logo"
                  className="mb-5"
                />
                <label
                  htmlFor=""
                  className="font-16 font-normal leading-5 paragraph"
                >
                  Metricwise
                </label>
                <h1 className="font-semibold font-20 leading-6 textcolor mt-5 text-[#042440]">
                  A Comprehensive AI Observability and Governance Platform
                </h1>
                <ul className="mt-8">
                  <li className="flex items-center gap-4 font-16 font-medium leading-5 text-[#747273]">
                    <Image
                      width={24}
                      height={24}
                      src="/demo1.svg"
                      alt="demo1"
                    />
                    Find a time to explore the capabilities of Metricwise
                    tailored to your needs.
                  </li>
                  <li className="flex items-center gap-4 font-16 font-medium leading-5 text-[#747273] mt-5">
                    <Image
                      width={24}
                      height={24}
                      src="/demo2.svg"
                      alt="demo2"
                    />
                    Upon confirmation, you will receive the details for the web
                    conferencing session.
                  </li>
                </ul>
                <p className="mt-8 font-16 font-normal paragraph">
                  We are eager to delve into your monitoring and observability
                  objectives. Feel free to get in touch for any inquiries or to
                  reschedule.
                </p>
              </div>
            </div>

            <div className="">
              <Fade direction="down">
                <div>
                  <Schedule />
                </div>
              </Fade>
              <div className="flex justify-end items-center mt-5 gap-5">
                <button
                  onClick={handleBack}
                  className="flex items-end justify-end border border-[#042440] rounded-[10px] text-[#042440] font-16 font-normal hover:bg-[#042440] hover:text-white leading-6 pt-2 pb-2 pl-5 pr-5"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-end justify-end border border-[#042440] rounded-[10px] bg-[#042440] text-white font-16 font-normal leading-6 pt-2 pb-2 pl-5 pr-5"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {section === 3 && (
          <div className="grid lg:grid-cols-2 max-w-[1040px] bg-[#FFFFFF] flex-col justify-center m-auto rounded-[40px] p-5 md:p-20 gap-10 shadow-[0_0_10px_rgba(0,0,16,0.1)]">
            <div>
              <div>
                <Image
                  width={140}
                  height={20}
                  src="/logo.svg"
                  alt="logo"
                  className="mb-5"
                />
                <label
                  htmlFor=""
                  className="font-16 font-normal leading-5 paragraph"
                >
                  Metricwise
                </label>
                <h1 className="font-semibold font-20 leading-6 textcolor mt-5 text-[#042440]">
                  A Comprehensive AI Observability and Governance Platform
                </h1>
                <ul className="mt-8">
                  <li className="flex items-center gap-4 font-16 font-medium leading-5 text-[#747273]">
                    <Image
                      width={24}
                      height={24}
                      src="/demo1.svg"
                      alt="demo1"
                    />
                    Find a time to explore the capabilities of Metricwise
                    tailored to your needs.
                  </li>
                  <li className="flex items-center gap-4 font-16 font-medium leading-5 text-[#747273] mt-5">
                    <Image
                      width={24}
                      height={24}
                      src="/demo2.svg"
                      alt="demo2"
                    />
                    Upon confirmation, you will receive the details for the web
                    conferencing session.
                  </li>
                </ul>
                <p className="mt-8 font-16 font-normal paragraph">
                  We are eager to delve into your monitoring and observability
                  objectives. Feel free to get in touch for any inquiries or to
                  reschedule.
                </p>
              </div>
            </div>
            <Fade direction="down">
              <div className="bg-[#FFFFFF] shadow-lg rounded-2xl">
                <form className="p-6">
                  <label
                    htmlFor=""
                    className="font-bold font-36 leading-10 textcolor"
                  >
                    Book a Demo
                  </label>
                  <div className="grid sm:grid-cols-2 gap-5 mt-4">
                    <input
                      type="text"
                      className="rounded-[36px] p-3 border border-[#0000001F] font-16 font-normal leading-5 paragraph"
                      placeholder="First name"
                    />
                    <input
                      type="text"
                      className="rounded-[36px] p-3 border border-[#0000001F] font-16 font-normal leading-5 paragraph"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      className="w-full rounded-[36px] pl-10 p-3 border border-[#0000001F] font-16 font-normal leading-5 paragraph mt-5"
                      placeholder="Your email"
                    />
                    <div className="absolute top-8 left-3">
                      <Image width={20} height={20} src="/email.png" alt="" />
                    </div>
                  </div>

                  <div className="relative mt-5">
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-[36px] p-3 border border-gray-300 paragraph"
                      placeholder="Phone number"
                      required
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Only allow numeric input
                      }}  
                    />
                  </div>

                  <input
                    type="text"
                    className="w-full rounded-[36px] p-3 border border-[#0000001F] font-16 font-normal leading-5 paragraph mt-5"
                    placeholder="Organization"
                  />
                  <input
                    type="text"
                    className="w-full rounded-[36px] p-3 border border-[#0000001F] font-16 font-normal leading-5 paragraph mt-5"
                    placeholder="Role"
                  />
                  <textarea
                    type="text"
                    maxLength={50}
                    className="w-full h-[144px] rounded-[17px] p-3 border border-[#0000001F] font-16 font-normal leading-5 paragraph mt-5"
                    placeholder="Tell us more about how we can help you:"
                  />
                  <input
                    type="text"
                    className="w-full rounded-[36px] p-3 border border-[#0000001F] font-16 font-normal leading-5 paragraph mt-5"
                    placeholder="How did you hear about us?"
                  />
                  <input
                    type="submit"
                    className="w-full flex items-center justify-center border border-[#042440] rounded-[36px] bg-[#042440] text-white font-16 font-medium leading-5 p-3 mt-5 cursor-pointer"
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
