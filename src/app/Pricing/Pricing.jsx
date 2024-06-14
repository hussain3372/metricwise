"use client";

import React from "react";
import { Price } from "../data/Price";
import Table from "./Table";
import Faq from "./Accordion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { useState } from "react";
const Pricing = () => {
  const [scale, setScale] = useState(1.15);

  return (
    <div>
      <div className="pricebg">
        <div>
          <div className="widthclass">
            <div className="flex flex-col justify-center items-center text-center m-auto pt-10">
              <h1 className="font-36 font-inter font-bold leading-10 p-0 md:p-20">
                Unlock Business Potential with <br /> Scalable,
                <span className="underline underline-offset-8 decoration-[#D9C666]">
                  Responsible <br className="flex md:hidden" />
                </span>
                AI Solutions.
              </h1>
            </div>
          </div>
        </div>

        <div className="widthclass">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10 px-5 md:px-10 py-10 md:py-0">
            {Price && Price.length > 0 ? (
              Price.map((item, index) => (
                <Tilt scale={scale} transitionSpeed={2500}>
                  <div
                    key={index}
                    className="bg-[#FFF] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 rounded-[20px] mb-10"
                  >
                    <h1 className="font-36 fontbold leading-40 textcolor">
                      {item.title}
                    </h1>
                    <ul className="mt-3">
                      {item.list.map((listItem, listIndex) => (
                        <li
                          key={listIndex}
                          className="font-20 fontregular leading-6 flex items-center gap-2 mb-3"
                        >
                          <Image
                            width={24}
                            height={24}
                            src={item.icon}
                            alt="tick"
                          />
                          {listItem}
                        </li>
                      ))}
                      {item.list1.map((listItem, listIndex) => (
                        <li
                          key={listIndex}
                          className="font-20 fontregular leading-6 flex items-center gap-2 mb-3 opacity-50"
                        >
                          <Image
                            width={24}
                            height={24}
                            src={item.icon2}
                            alt="tick"
                          />
                          {listItem}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-20 font-20 leading-6 fontmedium">
                      {item.months}
                      <span className="font-16 fontmedium opacity-60 leading-5">
                        {item.span}
                      </span>
                    </div>
                    <div className="flex justify-center items-center gap-3 mt-4">
                      <button className="font-20 font-inter font-bold leading-6 w-[211px] h-[52px] bg-[#042440] text-white rounded-lg">
                        {item.btn}
                      </button>
                    </div>
                  </div>
                </Tilt>
              ))
            ) : (
              <p>No cards available</p>
            )}
          </div>
        </div>
      </div>
      <div className="widthclass">
        <div>
          <div className=" mt-10 mb-16 xl:p-10">
            <div className="flex flex-col justify-center m-auto text-center">
              <p className="font-24 font-inter font-normal leading-8 mb-4 opacity-60">
                Plan Comparison
              </p>
              <h1 className="font-36 font-inter font-bold leading-10 mb-10 textcolor">
                Explore Detailed Plan Comparisons
              </h1>
            </div>
            <Table />
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
