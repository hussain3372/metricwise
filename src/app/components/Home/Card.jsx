"use client";

import React from "react";
import CardData from "../../data/CardData"; // Ensure this path is correct
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Card = () => {
  return (
    <div className="">
      <div className="border-b border-black border-opacity-[60%]">
        <div className="widthclass">
          {CardData.map((item, index) => (
            <Fade key={`fade-${index}`} direction={index === 1 ? "right" : "left"}>
              <div
                className={`grid md:grid-cols-2 pb-20 items-center ${index === 1 ? "md:flex-row-reverse" : ""}`}
                key={`card-${index}`}
              >
                <div className={`p-10 ${index === 1 ? "md:order-last" : ""}`} key={`text-${index}`}>
                  <h1 className="text-4xl font-36 font-bold leading-10">{item.name}</h1>
                  <p className="text-lg font-24 font-normal opacity-60 leading-8 mt-5">{item.para}</p>
                  <ul className="mt-8">
                    {[item.list, item.list1, item.list2, item.list3, item.list4].map((listItem, listIndex) => 
                      listItem && (
                        <li key={`list-${index}-${listIndex}`} className="mb-5 font-24 font-normal opacity-60  leading-8 flex items-center gap-3">
                          <Image src={item.logo} alt="List item icon" width={20} height={20} />
                          {listItem}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className={`flex ${index % 2 === 0 ? "justify-center md:justify-end" : ""}`} key={`image-${index}`}>
                  <Image src={item.img} alt="Card image" width={539} height={567} />
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      <div className="widthclass">
        <div className="bg-white flex flex-col mt-20 md:mt-40 mb-36 justify-center items-center text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[20px] p-5 sm:p-20 m-5 md:m-10">
          <h1 className="font-36 font-inter font-bold leading-10 textcolor">Lets Get Started</h1>
          <p className="font-24 font-inter font-normal leading-8 mt-4 textcolor opacity-60">
            Whether you are looking to streamline operations, enhance customer experiences, or drive
            innovation, we have the expertise and technology to help you succeed.
          </p>
          <div className="mt-6">
            <button className="flex sm:mt-0 items-center gap-3 border border-[#042440] rounded-[10px] bg-[#042440] text-white font-20 font-medium leading-6 pt-2 md:pt-3 pb-2 md:pb-3 pl-2 md:pl-5 pr-2 md:pr-5">
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