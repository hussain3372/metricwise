"use client";

import React, { useState } from "react";
import { Price } from "../data/Price";
import Table from "./Table";
import Faq from "./Accordion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const Pricing = () => {
  const [expandedIndexes, setExpandedIndexes] = useState({});

  const handleExpand = (index) => {
    setExpandedIndexes((prev) => {
      const currentCount = prev[index] || 7; // Get the current expanded count, default to 4
      const nextCount = currentCount + 4; // Increase by 4 or your dynamic value

      // If all items are shown, hide "many others..."
      if (nextCount >= Price[index].list.length) {
        return { ...prev, [index]: Price[index].list.length }; // Show all items
      }
      return { ...prev, [index]: nextCount }; // Expand by 4 items
    });
  };

  return (
    <div>
      <div className="pricebg">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto pt-10">
            <h1 className="font-36 font-bold leading-10 p-0 md:pt-24 md:pb-32">
              Unlock Business Growth with <br /> Scalable, Ethical AI Solutions
            </h1>
          </div>
        </div>
      </div>

      <div className="widthclass">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10 px-5 md:px-20 py-10 md:py-0">
          {Price && Price.length > 0 ? (
            Price.map((item, index) => {
              const expandedCount = expandedIndexes[index] || 7;

              return (
                <div
                  className="bg-[#FFF] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 rounded-[20px] mb-10"
                  key={`card-${index}`}
                >
                  <h1 className="font-36 font-bold leading-40 textcolor">
                    {item.title}
                  </h1>
                  <p className="font-20 font-normal textcolor leading-7 pt-5">
                    {item.teamHeading}
                  </p>
                  <ul className="mt-3 space-y-4">
                    {item.list
                      .slice(0, expandedCount)
                      .map((listItem, listIndex) => (
                        <li
                          key={`list-${index}-${listIndex}`}
                          className="font-20 font-normal leading-6 flex items-center gap-2 mb-3"
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
                  </ul>
                  {expandedCount < item.list.length && ( // Show "many others..." only if items remain
                    <button
                      onClick={() => handleExpand(index)}
                      className="text-[#B8B8B8] font-20 font-normal leading-7 mt-3"
                    >
                      {item.more}
                    </button>
                  )}
                  <div className="mt-24 font-32 leading-6 font-medium">
                    {item.months}
                    <span className="font-16 font-normal opacity-60 leading-5">
                      {item.span}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-center items-center gap-3 mt-6">
                    {item.showBtn1 && (
                      <button
                        className="font-20 font-inter font-normal leading-6 h-[52px] bg-none text-[#042440] border border-[#042440] rounded-lg"
                        style={{ width: item.width1 }}
                      >
                        {item.btn1}
                      </button>
                    )}
                    <button className="text-white font-20 font-medium leading-6 px- py-3.5 bg-[#2E2E2E]  rounded-lg" style={{ width: item.width }}>
                      {item.btn}
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No cards available</p>
          )}
        </div>
      </div>
      <div className="widthclass">
        <div>
          <div className="mt-20 mb-16 xl:p-10">
            <div className="flex flex-col justify-center m-auto text-center">
              <p className="font-24 font-inter font-normal leading-8 mb-4 opacity-60">
                Plan Comparison
              </p>
              <h1 className="font-36 font-inter font-bold leading-10 mb-16 textcolor">
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
