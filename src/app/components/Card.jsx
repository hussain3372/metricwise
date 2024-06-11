"use client";

import React from "react";
import CardData from "../data/CardData"; // Ensure this path is correct
import Image from "next/image";

const Card = () => {
  return (
    <div className="mt-10">
      <div className="border-b border-black border-opacity-[60%]">
        <div className="widthclass">
          {CardData.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 p-10 pb-20 items-center ${
                index === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index === 1 ? "order-last" : ""}`}>
                <h1 className="text-4xl font-36 fontbold leading-10">
                  {item.name}
                </h1>
                <p className="text-lg font-24 fontregular leading-8 mt-5">
                  {item.para}
                </p>
                <ul className="mt-4">
                  <li className="mb-5 font-24 fontregular leading-8 flex items-center gap-3">
                    <Image
                      src={item.logo}
                      alt="List item icon"
                      width={20}
                      height={20}
                    />
                    {item.list}
                  </li>
                  <li className="mb-5 font-24 fontregular leading-8 flex items-center gap-3">
                    <Image
                      src={item.logo}
                      alt="List item icon"
                      width={20}
                      height={20}
                    />
                    {item.list1}
                  </li>
                  <li className="mb-5 font-24 fontregular leading-8 flex items-center gap-3">
                    <Image
                      src={item.logo}
                      alt="List item icon"
                      width={20}
                      height={20}
                    />
                    {item.list2}
                  </li>
                  <li className="mb-5 font-24 fontregular leading-8 flex items-center gap-3">
                    <Image
                      src={item.logo}
                      alt="List item icon"
                      width={20}
                      height={20}
                    />
                    {item.list3}
                  </li>
                  {item.list4 && (
                    <li className="mb-5 font-24 fontregular leading-8 flex items-center gap-3">
                      <Image
                        src={item.logo}
                        alt="List item icon"
                        width={20}
                        height={20}
                      />
                      {item.list4}
                    </li>
                  )}
                </ul>
              </div>
              <div className={`${index % 2 === 0 ? "flex justify-end" : ""}`}>
                <Image
                  src={item.img}
                  alt="Card image"
                  width={539}
                  height={567}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="widthclass">
        <div className="bg-white flex flex-col mt-40 mb-36 justify-center items-center text-center shadow-lg rounded-[20px] p-10 sm:p-20 m-10">
          <h1 className="font-36 font-inter font-bold leading-10 textcolor">
            Lets Get Started
          </h1>
          <p className="font-24 font-inter font-normal leading-8 mt-4 textcolor opacity-60">
            you are looking to streamline operations, enhance customer
            experiences, or drive <br /> innovation, we have the expertise and
            technology to help you succeed.
          </p>
          <div className="mt-6">
            <button className="flex sm:mt-0 items-center gap-3 border border-[#042440] rounded-[10px] bg-[#042440] white font-20 fontmedium leading-6 pt-2 md:pt-3 pb-2 md:pb-3 pl-2 md:pl-5 pr-2 md:pr-5">
              Get Started For Free
              <Image width={24} height={24} src="/free.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
