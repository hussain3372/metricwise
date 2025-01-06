"use client";

import React from "react";
import Terms from "../data/Term";
import EmailButton from "../EmailButton .js"; // Corrected path


const Term = () => {

  return (
    <div>
      <div className="bg-[url('/term-bg.png')] bg-no-repeat bg-cover bg-center">
        <div className="flex justify-center items-center py-28 relative widthclass">
          <div>
            <h1 className="font-44 font-semibold lg:leading-[80px] mb-5 text-black">
              Terms of <span className="text-[#7736B7]">Use</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="px-10 md:px-[150px] lg:px-[224px] py-[80px] widthclass">
        <h1 className="font-36 font-inter font-bold leading-10 text-[#042440]">
          Terms of Use
        </h1>
        <div className="mt-12">
          {Terms.map((term, termIndex) => (
            <div key={termIndex}>
              <div>
                <h2 className="font-20 font-inter font-bold mt-5">
                  {term.name}
                </h2>
                <p className="font-16 font-normal font-inter leading-6 mt-4 mb-6 text-[#2E2E2E99]">
                  {term.para}
                  {/* Conditionally render the hyperlink if it exists */}
                  {term.linkText && (
                    <>
                      <EmailButton
                        email="support@metricwise.ai"
                        className="text-blue-600 underline"
                      >
                        {term.linkText}
                      </EmailButton>
                    </>
                  )}
                </p>
                {term.list && term.list1 && (
                  <div>
                    <ul className="list-disc pl-8 space-y-2 pb-6">
                      <li className="font-16 font-normal font-inter leading-6 mt-5 text-[#2E2E2E99]">
                        {term.list}
                      </li>
                      <li className="font-16 font-normal font-inter leading-6 mt-5 text-[#2E2E2E99]">
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
