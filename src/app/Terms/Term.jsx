"use client";

import Image from "next/image";
import React from "react";
import { PiGreaterThanLight } from "react-icons/pi";
import Terms from "../data/Term";
const Term = () => {
  return (
    <div>
      <div className="bg-[#042440]">
        {/* <div className="flex items-center widthclass">
          <h1 className="text-white pl-16 pt-10  font-24 font-normal font-inter flex items-center gap-2">
            Metricwise
            <span className="text-white font-20 font-normal font-inter opacity-50 flex items-center gap-2">
              <PiGreaterThanLight /> Resources <PiGreaterThanLight /> Blogs
            </span>
          </h1>
        </div> */}
        <div className="grid md:grid-cols-2 items-center white p-16 relative widthclass">
          <div>
            {/* <div className="absolute -top-16 left-0">
              <Image width={138} height={138} src="/hrblack1.png" alt="" />
            </div> */}
            <h1 className="font-64 fontbold lg:leading-40 mb-5">
              Terms of Use
            </h1>
            {/* <div className="absolute left-0 bottom-2">
              <Image width={108} height={136} src="/hr2.png" alt="" />
            </div> */}
          </div>
          <div className="flex justify-center md:justify-end mt-10 md:mt-0">
            <Image width={1246} height={517} src="/gov.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="p-16 widthclass">
      <h1 className="font-36 font-inter font-semibold leading-10">
        Terms and Use
      </h1>
      <div className="mt-16">
        {Terms.map((term, termIndex) => (
          <div key={termIndex}>
              <div>
                <h2 className="font-24 font-inter font-semibold mt-5">
                  {term.name}
                </h2>
                <p className="font-20 font-normal font-inter leading-6 mt-2 mb-6">
                  {term.para}
                </p>
                {term.list && term.list1 && (
                  <div>
                    <ul className="list-disc pl-8 space-y-2 pb-6">
                      <li className="font-20 font-normal font-inter leading-6 mt-5">
                        {term.list}
                      </li>
                      <li className="font-20 font-normal font-inter leading-6 mt-5">
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
