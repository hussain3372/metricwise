"use client";

import React from "react";
import CardData from "../data/CardData"; // Ensure this path is correct
import Image from "next/image";

const Card = () => {
  return (
    <div className="mt-10 widthclass  ">
      {CardData.map((item, index) => (
        <div 
          key={index} 
          className={`grid md:grid-cols-2 p-10 items-center ${index === 1 ? 'md:flex-row-reverse' : ''}`}
        >
          <div className={`${index === 1 ? 'order-last' : ''}`}>
            <h1 className="text-4xl font-36 fontbold leading-10">{item.name}</h1>
            <p className="text-lg font-24 fontregular leading-8 mt-5">
              {item.para}
            </p>
            <ul className="mt-4">
              <li className="mb-5 font-24 fontregular leading-8 flex items-center gap-3">
                <Image src={item.logo} alt="List item icon" width={20} height={20} />
                {item.list}
              </li>
              <li className="mb-5 font-24 fontregular leading-8 flex items-center gap-3">
                <Image src={item.logo} alt="List item icon" width={20} height={20} />
                {item.list1}
              </li>
              <li className="mb-5 font-24 fontregular leading-8 flex items-center gap-3">
                <Image src={item.logo} alt="List item icon" width={20} height={20} />
                {item.list2}
              </li>
              <li className="mb-5 font-24 fontregular leading-8 flex items-center gap-3">
                <Image src={item.logo} alt="List item icon" width={20} height={20} />
                {item.list3}
              </li>
              {item.list4 && (
                <li className="mb-5 font-24 fontregular leading-8 flex items-center gap-3">
                  <Image src={item.logo} alt="List item icon" width={20} height={20} />
                  {item.list4}
                </li>
              )}
            </ul>
          </div>
          <div>
            <Image src={item.img} alt="Card image" width={500} height={300} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
