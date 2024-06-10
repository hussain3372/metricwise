"use client";

import React from "react";
import { BlogCard } from "../../data/BlogCard";
import OtherCards from "./OtherCards";
import Image from "next/image";
import { PiGreaterThanLight } from "react-icons/pi";

const Blog = () => {
  return (
    <div className="">
      <div className="blog">
        <div className="flex items-center widthclass">
          <h1 className="black pl-16 pt-16 pb-28  font-24 font-normal font-inter flex items-center gap-2">
            Metricwise
            <span className="text-black font-20 font-normal font-inter opacity-50 flex items-center gap-2">
              <PiGreaterThanLight /> Resources <PiGreaterThanLight /> Blogs
            </span>
          </h1>
        </div>
        <div className="grid md:grid-cols-2 items-center white pl-8 sm:pl-16 pb-24 relative widthclass ">
          <div>
            <div className="absolute -top-44 left-0">
              <Image width={138} height={138} src="/hr1.png" alt="" />
            </div>
            <h1 className="font-36 fontbold lg:leading-40 mb-5 text-black">
              Monitoring V/S Observability
            </h1>
            <p className="font-16 font-inter font-normal leading-5 text-black">
              The terms monitoring and observability are prevalent in the field
              of AI/ML systems. Although they may initially appear similar,
              there are notable distinctions between the two concepts. This
              article explores the precise definitions and subtleties associated
              with AI/ML monitoring and observability, providing insights into
              their respective roles and significant importance in the current
              landscape of machine learning.
            </p>
            <button className="w-[196px] h-[48px] flex justify-center items-center text-white rounded-lg mt-8 font-20 fontregular leading-6 gap-2 bg-[#042440]">
              Learn More
              <Image width={24} height={24} src="/free.png" alt="" />
            </button>
            <div className="absolute left-0 bottom-0 -z-10">
              <Image width={108} height={136} src="/hr2.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="widthclass p-10 md:p-16">
        <div className="bg-[#1D285614] p-5 md:p-10 mt-20 mb-20 rounded-[20px]">
          <div className="grid xl:grid-cols-2 gap-10">
            <div className="flex flex-col justify-end items-start cardbg white rounded-[20px] w-[100%] h-[680px] p-10">
              <h3 className="font-20 font-inter font-semibold leading-6">
                Consumer Sentiments in Housing...
              </h3>
              <p className="font-16 font-inter font-normal leading-5 mt-3  mb-8 opacity-60">
                The terms monitoring and observability are prevalent <br /> in
                the field. The terms monitoring and observability.
              </p>
              <button className="w-[134px] h-[40px] bg-[#042440] font-16 fontregular rounded-lg">
                Learn more
              </button>
            </div>
            <div>
              <div className="p-5 md:p-0">
                {BlogCard && BlogCard.length > 0 ? (
                  BlogCard.map((item, index) => (
                    <div
                      key={index}
                      className="sm:flex bg-white gap-4 p-5 rounded-[20px] mb-10"
                    >
                      <div className="w-[128px] h-[160px] mb-8 sm:mb-0">
                        <Image
                          width={128}
                          height={60}
                          src={item.logoimg}
                          className="rounded-[20px]"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-around">
                        <div>
                          <h3 className="text-[20px] font-inter font-semibold leading-6">
                            {item.name}
                          </h3>
                          <p
                            className="text-[16px] font-inter font-normal leading-5 mt-3 opacity-[60%]"
                            dangerouslySetInnerHTML={{ __html: item.data }}
                          />
                        </div>
                        <button className="w-[134px] h-[40px] bg-[#042440] text-white text-[16px] font-regular rounded-lg mt-3 sm:mt-0">
                          {item.btn}
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No blog posts available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <OtherCards />
        </div>
      </div>
    </div>
  );
};

export default Blog;
