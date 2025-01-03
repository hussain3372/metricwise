import { HomeBolgs } from "@/app/data/HomeBlogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div className="widthclass">
      <div className="p-5 lg:px-[100px] 2xl:py-11">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h1 className="text-[20px] sm:text-[30px] md:text-[40px] pro-medium leading-8 md:leading-[48px] text-[#222222]">
            Go through our latest <br className="hidden sm:block"/> blogs to learn more
          </h1>
          <Link href="/recourses/Blog" className="primary-btn" type="button">
            See all Blogs
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
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:mt-[70px]">
          {HomeBolgs.map((item, index) => (
            <div
              key={index}
              className="flex flex-col mt-6 text-gray-700 bg-white border border-[#0000001F] rounded-xl w-full px-3 py-6"
            >
              <div className="relative text-white mb-4">
                <Image
                  src={item.img}
                  alt="card-image"
                  width={244}
                  height={176}
                  className="w-full"
                />
              </div>
              <div className="font-12 font-normal leading-4 border border-[#00000033] rounded-full px-2 py-1 ml-4 flex justify-center items-center w-[116px]">
                {item.date}
              </div>
              <div className="p-4 flex-1">
                <p className="block font-semibold font-16 leading-5">
                  {item.title}
                </p>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href={item.blogLink}
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
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
