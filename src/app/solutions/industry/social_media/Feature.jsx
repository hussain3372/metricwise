'use client'
import React from "react";
import { social } from "../../../data/Finance";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Feature = () => {

  return (
    <div className="featurebg">
      <div className="widthclass">
        <div className="p-8 sm:p-16 2xl:p-10">
          <div className="flex flex-col justify-center items-center text-center m-auto">
            <h1 className="font-36 font-inter font-bold leading-10">
              Features
            </h1>
            <p className="font-24 font-normal font-inter leading-8 mt-4 opacity-60">
              Explore all the Features in Overflow, split by workflow steps
            </p>
          </div>
          <div>
            <div className="grid md:grid-cols-2 items-center gap-40 mt-24">
              <div>
              <Fade direction="left">
                {social.map((item, index) => (
                  <div
                  key={index}
                    className={`pb-5 mb-7 ${
                      index !== social.length - 1
                        ? "border border-t-0 border-l-0 border-r-0 border-[#000000] border-opacity-[40%] border-x-8"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-5">
                    <Image src={item.icon} width={60} height={60} alt="" />
                      <h1 className="font-20 font-inter font-bold leading-6">
                        {item.head}
                      </h1>
                    </div>
                    <ul className="list-disc list-inside mt-6">
                      {item.Items.map((listItem, idx) => (
                        <li
                          key={idx}
                          className="font-16 font-inter font-normal leading-6"
                        >
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                </Fade>
              </div>
              <Fade direction="right">
              <div className="">
                <Image src="/banking.png" width={990} height={540} alt="" />
              </div>
              </Fade>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
