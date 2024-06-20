"use client";

import React from "react";
import { BlogCard } from "../../data/BlogCard";
import OtherCards from "./OtherCards";
import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";

const Blog = () => {
  return (
    <div className="">
      <div className="blog mt-10 pb-20 xl:pb-36 xl:mt-20">
        <div className="grid md:grid-cols-2 items-center white px-5 md:px-10 py-20 relative widthclass ">
          <div>
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
            <button className=" w-[170px] md:w-[196px] h-[48px] flex justify-center items-center text-white rounded-lg mt-8 font-20 fontregular leading-6 gap-2 bg-[#042440]">
              Learn More
              <Image width={24} height={24} src="/free.png" alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="widthclass px-3 md:px-10">
        <Zoom>
          <div className="bg-[#1D285614] p-2 md:p-10 mb-10 md:mb-28 rounded-[20px]">
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
                <div className="">
                  {BlogCard && BlogCard.length > 0 ? (
                    BlogCard.map((item, index) => (
                      <Tilt>
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
                      </Tilt>
                    ))
                  ) : (
                    <p>No blog posts available.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Zoom>
        <div>
          <OtherCards />
        </div>
      </div>
    </div>
  );
};

export default Blog;
