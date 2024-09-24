"use client";

import Image from "next/image";
import { useEffect } from "react";
import React from "react";
import { Fade } from "react-awesome-reveal";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";

const Contact = () => {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const input = document.querySelector("#mobile_code");

      // Initialize intlTelInput
      const iti = intlTelInput(input, {
        initialCountry: "am", // Specify your desired initial country
        separateDialCode: true,
      });

      // Cleanup function to destroy the instance when component unmounts or updates
      return () => {
        if (iti) iti.destroy();
      };
    }
  }, []);

  return (
    <div>
      <div className="bg-[url('/wavebg.png')] bg-cover bg-center bg-no-repeat">
        <div className="widthclass">
          <div className="grid lg:grid-cols-2 items-center p-5 pt-20 md:py-10 md:px-20 gap-20 2xl:gap-40">
            <div>
              <div className="text-center sm:text-start">
                <label
                  htmlFor=""
                  className="font-64 font-bold leading-10 md:leading-[80px] text-[#2E2E2E]"
                >
                  Let's connect!
                </label>

                <p className="font-normal font-20 leading-6 mt-8 sm:mt-2 opacity-60 text-start">
                  Metricwise - A Comprehensive AI Observability and Governance
                  Platform If you fall into any of the following categories:
                </p>
                <div className="mt-5 flex items-center flex-wrap gap-3">
                  <div className="bg-white py-1 px-2 rounded-sm shadow-xl flex justify-center items-center gap-2">
                    <Image
                      src="/search-contact.svg"
                      width={24}
                      height={24}
                      alt="search-contact"
                    />
                    An inquisitive prospect
                  </div>
                  <div className="bg-white py-1 px-2 rounded-sm shadow-xl flex justify-center items-center gap-2">
                    <Image
                      src="/hand-shake.svg"
                      width={24}
                      height={24}
                      alt="search-contact"
                    />
                    A potential partner
                  </div>
                  <div className="bg-white py-1 px-2 rounded-sm shadow-xl flex justify-center items-center gap-2">
                    <Image
                      src="/vendor.svg"
                      width={24}
                      height={24}
                      alt="search-contact"
                    />
                    A vendor with a tool we should know about
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-[#FFFFFF] rounded-2xl pb-2"
              style={{ boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)" }}
            >
              <form className="p-6">
                <div className="flex flex-col justify-start items-start">
                  <label
                    htmlFor=""
                    className="font-bold font-28 leading-10 text-[#2E2E2E]"
                  >
                    Send us a message!
                  </label>
                  <p className="font-14 font-normal leading-5">
                    You can reach us anytime
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mt-4">
                  <input
                    type="text"
                    className="rounded-lg p-3 border border-[#2E2E2E1F] font-16 font-normal leading-5 paragraph"
                    placeholder="First name"
                    name="name"
                  />
                  <input
                    type="text"
                    className="rounded-lg p-3 border border-[#2E2E2E1F] font-16 font-normal leading-5 paragraph"
                    placeholder="Last name"
                    name="name"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg p-3 border border-[#2E2E2E1F] font-16 font-normal leading-5 paragraph mt-3"
                    placeholder="Your email"
                  />
                </div>

                <div className="relative mt-3">
                  <input
                    type="tel" // Keep 'tel' to work with intl-tel-input
                    required
                    id="mobile_code"
                    className="w-full rounded-lg pl-96 p-3 border border-[#2E2E2E1F] font-16 font-normal leading-5 paragraph"
                    placeholder="Phone number"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Only allow numeric input
                    }}
                  />
                </div>

                <input
                  type="text"
                  className="w-full rounded-lg p-3 border border-[#2E2E2E1F] font-16 font-normal leading-5 paragraph mt-3"
                  placeholder="Organization"
                />
                <input
                  type="text"
                  className="w-full rounded-lg p-3 border border-[#2E2E2E1F] font-16 font-normal leading-5 paragraph mt-3"
                  placeholder="Role"
                />
                <input
                  type="text"
                  className="w-full rounded-lg p-3 border border-[#2E2E2E1F] font-16 font-normal leading-5 paragraph mt-3"
                  placeholder="How did you hear about Metricwise?"
                />
                <textarea
                  type="text"
                  maxLength={50}
                  className="w-full h-20 rounded-[17px] p-3 border border-[#2E2E2E1F] font-16 font-normal leading-5 paragraph mt-3"
                  placeholder="Message"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#2E2E2E] text-white font-16 font-medium leading-5 p-3 mt-3 cursor-pointer"
                >
                  Send message
                  <Image
                    src="/send-mes.svg"
                    width={24}
                    height={24}
                    alt="send-mes"
                  />
                </button>
              </form>
              <div className="font-12 font-inter font-normal text-center mb-4 text-[#2E2E2E80] leading-4">
                By contacting us, you agree to our{" "}
                <span className="text-[#2E2E2E]"> terms of services</span> and{" "}
                <span className="text-[#2E2E2E]"> Privacy Policy</span>
              </div>
            </div>
          </div>
          <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 p-5 sm:p-16">
              <div
                onClick={() => handleEmailClick("sales@metricwise.ai")}
                className="cursor-pointer grid grid-cols-2 bg-[#FFFFFF] p-5 rounded-lg shadow-md"
              >
                <div className="flex flex-col font-20 font-inter font-semibold textcolor leading-6">
                  Sales
                  <span className="font-12 font-inter font-normal leading-4 mt-2">
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
                className="cursor-pointer grid grid-cols-2 bg-[#FFFFFF] p-5 rounded-lg shadow-md"
              >
                <div className="flex flex-col font-20 font-inter font-semibold textcolor leading-6">
                  Support
                  <span className="font-12 font-inter font-normal leading-4 mt-2">
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
                className="cursor-pointer grid grid-cols-2 bg-[#FFFFFF] p-5 rounded-lg shadow-md"
              >
                <div className="flex flex-col font-20 font-inter font-semibold textcolor leading-6">
                  Careers
                  <span className="font-12 font-inter font-normal leading-4 mt-2">
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
                className="cursor-pointer grid grid-cols-2 bg-[#FFFFFF] p-5 rounded-lg shadow-md"
              >
                <div className="flex flex-col font-20 font-inter font-semibold textcolor leading-6">
                  General
                  <span className="font-12 font-inter font-normal leading-4 mt-2">
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
    </div>
  );
};

export default Contact;
