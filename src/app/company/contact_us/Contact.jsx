"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div className="bg-[#F3F6FF]">
      <div className="contact1">
        <div className="widthclass">
          <div className="grid md:grid-cols-2 items-center p-5 md:p-10 gap-40">
            <div>
              <Fade direction="left">
                <div>
                  <label htmlFor="" className="font-64 fontbold leading-[80px]">
                    Contact Us
                  </label>
                  <p className="font-normal font-inter font-20 leading-6 mt-5">
                    Metricwise - A Comprehensive AI Observability and Governance
                    Platform If you fall into any of the following categories:
                  </p>
                  <ul className="mt-8 list-disc list-inside">
                    <li className="list-disc font-20 font-normal font-inter leading-6">
                      An inquisitive prospect
                    </li>
                    <li className="list-disc font-20 font-normal font-inter leading-6">
                      A potential partner
                    </li>
                    <li className="list-disc font-20 font-normal font-inter leading-6">
                      A vendor with a tool we should know about
                    </li>
                  </ul>
                </div>
              </Fade>
            </div>
            <Fade direction="right">
              <div className="bg-[#FFFFFF] shadow-lg rounded-2xl">
                <form className="p-6">
                  <div className="flex flex-col justify-center items-center">
                    <label
                      htmlFor=""
                      className="fontbold font-36 leading-10 textcolor"
                    >
                      Contact Us
                    </label>
                    <p className="font-16 font-inter font-normal leading-5 mt-5">
                      You can reach us anytime
                    </p>
                  </div>
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
                      className="w-full rounded-[36px] pl-10 p-3 border border-[#0000001F] font-16 fontregular leading-5 paragraph mt-3"
                      placeholder="Your email"
                    />
                    <div className="absolute top-6 left-3">
                      <Image width={20} height={20} src="/email.png" alt="" />
                    </div>
                  </div>
                  <div className="relative mt-3">
                    <input
                      type="tel"
                      required
                      className="w-full rounded-[36px] pl-24 p-3 border border-[#0000001F] font-16 fontregular leading-5 paragraph"
                      placeholder="Phone number"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <select className="appearance-none bg-transparent border-2 border-t-0 border-b-0 border-l-0 bprder-r border-[#00000066] pr-8 pl-3 py-1">
                        <option>+92</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-[36px] p-3 border border-[#0000001F] font-16 fontregular leading-5 paragraph mt-3"
                    placeholder="Organization"
                  />
                  <input
                    type="text"
                    className="w-full rounded-[36px] p-3 border border-[#0000001F] font-16 fontregular leading-5 paragraph mt-3"
                    placeholder="Role"
                  />
                  <input
                    type="text"
                    className="w-full rounded-[36px] p-3 border border-[#0000001F] font-16 fontregular leading-5 paragraph mt-3"
                    placeholder="How did you hear about Metricwise?"
                  />
                  <textarea
                    type="text"
                    maxLength={50}
                    className="w-full h-20 rounded-[17px] p-3 border border-[#0000001F] font-16 fontregular leading-5 paragraph mt-3"
                    placeholder="Message"
                  />
                  <input
                    type="submit"
                    className="w-full flex items-center justify-center border border-[#042440] rounded-[36px] bg-[#042440] text-white font-16 fontmedium leading-5 p-3 mt-3 cursor-pointer"
                  />
                </form>
                <p className="font-16 font-inter font-normal items-center flex-col flex justify-center text-center opacity-60 mb-4">
                  By contacting us, you agree to our terms of <br /> services
                  and Privacy Policy
                </p>
              </div>
            </Fade>
          </div>
          <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 p-5 sm:p-16">
              <Fade direction="left">
                <div className="grid grid-cols-2 bg-[#FFFFFF] p-5 border border-t-0 border-b-0 border-r-0 border-l-[#042440] border-l-4 rounded-lg">
                  <div className="flex flex-col font-20 font-inter font-semibold textcolor leading-6">
                    Sales
                    <span className="font-12 font-inter font-normal leading-4 mt-2">
                      sales@metricwise.ai
                    </span>
                  </div>
                  <div className="flex justify-end items-center">
                    <Image width={44} height={44} src="/contact1.png" alt="" />
                  </div>
                </div>
              </Fade>
              <Fade direction="left">
                <div className="grid grid-cols-2 bg-[#FFFFFF] p-5 border border-t-0 border-b-0 border-r-0 border-l-[#042440] border-l-4 rounded-lg">
                  <div className="flex flex-col font-20 font-inter font-semibold textcolor leading-6">
                    Support
                    <span className="font-12 font-inter font-normal leading-4 mt-2">
                      support@metricwise.ai
                    </span>
                  </div>
                  <div className="flex justify-end items-center">
                    <Image width={44} height={44} src="/contact2.png" alt="" />
                  </div>
                </div>
              </Fade>
              <Fade direction="right">
                <div className="grid grid-cols-2 bg-[#FFFFFF] p-5 border border-t-0 border-b-0 border-r-0 border-l-[#042440] border-l-4 rounded-lg">
                  <div className="flex flex-col font-20 font-inter font-semibold textcolor leading-6">
                    Careers
                    <span className="font-12 font-inter font-normal leading-4 mt-2">
                      careers@metricwise.ai
                    </span>
                  </div>
                  <div className="flex justify-end items-center">
                    <Image width={44} height={44} src="/contact3.png" alt="" />
                  </div>
                </div>
              </Fade>
              <Fade direction="right">
                <div className="grid grid-cols-2 bg-[#FFFFFF] p-5 border border-t-0 border-b-0 border-r-0 border-l-[#042440] border-l-4 rounded-lg">
                  <div className="flex flex-col font-20 font-inter font-semibold textcolor leading-6">
                    General
                    <span className="font-12 font-inter font-normal leading-4 mt-2">
                      info@metricwise.ai
                    </span>
                  </div>
                  <div className="flex justify-end items-center">
                    <Image width={44} height={44} src="/contact4.png" alt="" />
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
