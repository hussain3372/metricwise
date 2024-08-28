"use client";

import React from "react";
import CardData from "../../data/CardData"; // Ensure this path is correct
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Card = () => {
  return (
    <div className="">
      <div className="widthclass">
        {CardData.map((item, index) => (
          <Fade key={`fade-${index}`} direction={index === 1 ? "right" : "left"}>
            <div
              className={`grid md:grid-cols-2 items-center ${index === 1 ? "md:flex-row-reverse" : ""}`}
              key={`card-${index}`}
            >
              <div className={`p-10 ${index === 1 ? "md:order-last" : ""}`} key={`text-${index}`}>
                <h1 className="text-4xl font-32 font-medium leading-10">{item.name}</h1>
                <p className="text-lg font-16 text-[#00000099] font-normal leading-6 mt-5">{item.para}</p>
                <ul className="mt-5">
                  {[item.list, item.list1, item.list2, item.list3, item.list4].map(
                    (listItem, listIndex) =>
                      listItem && (
                        <li
                          key={`list-${index}-${listIndex}`}
                          className="mb-5 font-14 font-normal leading-4 text-[#000000] flex items-center gap-3"
                        >
                          <Image src={item.logo} alt="List item icon" width={20} height={20} />
                          {listItem}
                        </li>
                      )
                  )}
                </ul>
              </div>
              <div
                className={`flex ${index % 2 === 0 ? "justify-center md:justify-end" : ""}`}
                key={`image-${index}`}
              >
                <Image src={item.img} alt="Card image" width={539} height={567} />
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Card;
