"use client";

import React from "react";
import CardData from "../../data/CardData"; // Ensure this path is correct
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Card = () => {
  return (
    <div>
      <div className="widthclass ">
        {CardData.map((item, index) => (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-[176px] mt-[px] px-8 xl:px-[128px] py-5 lg:py-[52px] ${
              index === 1 ? "md:flex-row-reverse" : ""
            }`}
            key={`card-${index}`}
          >
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "md:order-last" : ""
              }`}
            >
              <div className="mb-5">
                <Image src="/Dots.svg" width={36} height={8} alt="dots" />
              </div>
              <h1 className="font-40 font-medium leading-[48px]">
                <span className="text-[#7736B7]">{item.span}</span> <br />
                {item.name}
              </h1>
              <p className="font-14 text-[#000] font-normal leading-5 mt-6">
                {item.para}
              </p>
              <ul className="mt-7">
                {[item.list, item.list1, item.list2, item.list3, item.list4].map(
                  (listItem, listIndex) =>
                    listItem && (
                      <li
                        key={`list-${index}-${listIndex}`}
                        className="mb-5 font-16 font-medium leading-5 text-[#000000] flex items-center gap-2"
                      >
                        <Image
                          src={item.logo}
                          alt="List item icon"
                          width={24}
                          height={24}
                        />
                        {listItem}
                      </li>
                    )
                )}
              </ul>
              <div className="mt-10 flex">
                <Link
                  href="#"
                  className="rounded-md bg-[#2E2E2E] text-white py-4 px-7 font-14 font-medium leading-4 flex justify-center items-center gap-2"
                  type="button"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5.50823 14.8452L14.4926 5.8608M14.4926 5.8608V14.3461M14.4926 5.8608H6.00736"
                      stroke="white"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div
              className={`flex justify-center md:justify-${index % 2 === 0 ? "start" : "end"}`}
            >
              <Image
                src={item.img}
                alt={`Card image ${index + 1}`}
                width={460}
                height={428}
                className="rounded-lg w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
