"use client";

import Image from "next/image";
import React from "react";
import Terms from "../data/Term";
import { PiGreaterThanLight } from "react-icons/pi";
const Term = () => {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div>
      <div className="bg-[url('/term-bg.png')] bg-no-repeat bg-cover bg-center">
        <div className="flex items-center widthclass">
          <h1 className="text-black pl-16 pt-10  font-24 font-normal font-inter flex items-center gap-2">
            Metricwise
            <span className="paragraph font-20 font-normal font-inter opacity-50 flex items-center gap-2">
              <PiGreaterThanLight /> Resources <PiGreaterThanLight /> Blogs
            </span>
          </h1>
        </div>
        <div className="flex justify-center items-center py-28 relative widthclass">
          <div>
            <h1 className="font-64 font-bold lg:leading-40 mb-5 text-black">
              Terms of Use
            </h1>
          </div>
          {/* <div className="flex justify-center md:justify-end mt-10 md:mt-0">
            <Image width={1246} height={517} src="/gov.jpg" alt="" />
          </div> */}
        </div>
      </div>

      <div className="px-5 sm:px-10 lg:px-36 py-16 2xl:p-16 widthclass">
        <h1 className="font-36 font-inter font-bold leading-10 text-[#042440]">
          Terms of Use
        </h1>
        <div className="mt-16">
          {Terms.map((term, termIndex) => (
            <div key={termIndex}>
              <div>
                <h2 className="font-20 font-inter font-semibold mt-5">
                  {term.name}
                </h2>
                <p className="font-16 font-normal font-inter leading-6 mt-4 mb-6 opacity-70">
                  {term.para}
                  {/* Conditionally render the hyperlink if it exists */}
                  {term.linkText && (
                    <>
                      <button
                        onClick={() =>
                          handleEmailClick("support@metricwise.ai")
                        }
                        className="text-blue-600 underline"
                      >
                        {term.linkText}
                      </button>
                    </>
                  )}
                </p>
                {term.list && term.list1 && (
                  <div>
                    <ul className="list-disc pl-8 space-y-2 pb-6">
                      <li className="font-16 font-normal font-inter leading-6 mt-5 opacity-70">
                        {term.list}
                      </li>
                      <li className="font-16 font-normal font-inter leading-6 mt-5 opacity-70">
                        {term.list1}
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Term;
