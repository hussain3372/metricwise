"use client";

import React from "react";
import { Trust } from "../../../data/trust"; // Ensure this path is correct
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Card = () => {
  return (
    <div className="">
      {Trust.map((item, index) => (
        <Fade key={index} direction={index % 2 === 0 ? "left" : "right"}>
          <div
            className={`grid md:grid-cols-2 items-center px-10 sm:px-20 xl:px-40 2xl:px-64 py-10 ${
              index % 2 === 0 ? "bg-[#F4F4F4]" : ""
            }`}
          >
            <div className={`${index % 2 === 1 ? "md:order-last" : ""}`}>
              <h1 className="font-36 fontbold font-inter leading-8 md:leading-10">
                {item.main}
              </h1>
              <p className="font-16 font-inter font-normal leading-[20px] mt-10">
                {item.Paragraph}
              </p>
            </div>
            <div
              className={`flex justify-center mt-10 md:mt-0 ${
                index % 2 === 0 ? "md:justify-end" : ""
              } ${
                index % 1 === 0 ? "md:justify-start" : ""
              }`}
            >
              <Image src={item.pic} alt="Card image" width={400} height={200} />
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default Card;
