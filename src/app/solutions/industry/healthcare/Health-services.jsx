"use client";

import React from "react";
import { health } from "../../../data/trust"; // Ensure this path is correct
import Image from "next/image";

const HealthServices = () => {
  return (
    <div className="widthclass">
      {health.map((item, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 items-center px-2 sm:px-20 xl:px-60 py-10 gap-10"
        >
          <div className={`${index % 2 === 1 ? "md:order-last" : ""}`}>
            <h1 className="font-36 font-medium font-inter leading-[48px] text-[#7736B7]">
              {item.main}
            </h1>
            <p className="font-14 font-inter font-normal leading-[18px] mt-[18px] text-[#2E2E2E]">
              {item.Paragraph}
            </p>
          </div>
          <div
            className={`flex justify-center mt-10 md:mt-0 ${
              index % 2 === 0 ? "md:justify-end" : ""
            } ${index % 1 === 0 ? "md:justify-start" : ""}`}
          >
            <Image src={item.pic} alt="Card image" width={400} height={200} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthServices;
