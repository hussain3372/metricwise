import { HomeBolgs } from "@/app/data/HomeBlogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div className="bg-[url('/platforms-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className=" widthclass p-5 lg:px-20">
        <div className="sm:flex justify-between items-center px-5 xl:px-24 2xl:px-44 space-y-5 sm:space-y-0">
          <h1 className="text-[20px] sm:text-[30px] md:text-[40px] font-semibold leadin-8 md:leading-[44px] text-[#222222]">
            Go through our latest <br /> blogs to learn more
          </h1>
          <div class="darksoul-glowing-button1 w-[166px] h-[50px]">
            <Link
              href="/Demo"
              className="font-16 leading-4 font-medium darksoul-button1 w-[160px] h-[44px]"
            >
              Book a demo
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 md:gap-8">
          {HomeBolgs.map((item, index) => (
            <div
              key={index}
              className="flex flex-col mt-6 text-gray-700 bg-white border border-[#0000001F] rounded-xl w-72"
            >
              <div className="relative mb-5 mx-4 mt-6 text-white">
                <Image
                  src={item.img}
                  alt="card-image"
                  width={244}
                  height={176}
                  className=""
                />
              </div>
              <div className="font-12 font-normal leading-3 border border-[#00000033] rounded-full p-2 ml-4 flex justify-center items-center w-[116px]">
                {item.date}
              </div>
              <div className="p-5">
                <p className="block font-semibold text-sm leading-relaxed text-inherit">
                  {item.title}
                </p>
              </div>
              <div className="p-5 pt-0">
                <button
                  className="font-12 font-semibold flex items-center gap-1"
                  type="button"
                >
                  {item.learn}
                  <Image
                    src="/left.png"
                    width={20}
                    height={20}
                    alt="left arrow"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
