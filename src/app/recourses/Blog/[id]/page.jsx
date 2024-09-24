'use client'

import { useParams } from "next/navigation"; // Use useParams from next/navigation
import { blogDetailContent } from "@/app/data/blogdetailcontent"; // Import the blog content
import Image from "next/image";
import React from "react";
import { PiGreaterThanLight } from "react-icons/pi";

const BlogDetail = () => {
  const { id } = useParams(); // Get the dynamic id from the URL

  // Find the corresponding blog by id
  const blog = blogDetailContent.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div>
      {/* Blog Heading and Main Section */}
      <div className="bg-[#1D285614] relative">
        <div className="flex items-center widthclass relative">
          <h1 className="text-black pl-16 pt-10 font-24 font-normal font-inter hidden sm:flex items-center gap-2 z-10">
            Metricwise
            <span className="paragraph font-20 font-normal font-inter opacity-50 flex items-center gap-2">
              <PiGreaterThanLight /> Resources <PiGreaterThanLight /> Blogs
              <PiGreaterThanLight /> {blog.title}
            </span>
          </h1>

          <div className="absolute top-1 -left-1">
            <Image src="/hr1.png" width={138} height={138} alt="path-bg" />
          </div>
        </div>
        <div className="pt-20 pb-16 sm:pb-40 md:pb-64 lg:pb-96 relative widthclass px-10 xl:px-[165px] flex justify-center items-center flex-col">
          <div className="w-full text-left">
            <h1 className="font-36 font-bold lg:leading-10 mb-5 primaryblue z-10">
              {blog.title}
            </h1>
          </div>
          <div className="absolute top-40 z-10 p-2 sm:p-10">
            <Image
              src={blog.imgSrc}
              width={1110}
              height={541}
              alt="blog-detail"
            />
          </div>
        </div>

        <div className="absolute bottom-0">
          <Image src="/hr2.png" width={108} height={136} alt="path-bg" />
        </div>
      </div>

      {/* Blog Content */}
      <div className="sm:flex items-start gap-16 mt-32 sm:mt-56 md:mt-72 px-10 xl:px-20 2xl:px-[210px] container m-auto">
        <div className="w-full">
          <div className="lg:flex justify-between items-center lg:px-5">
            <span className="inline-flex items-center rounded-md bg-[#2E2E2E33] px-2 py-1 text-black font-20 font-medium">
              {blog.category}
            </span>
            <div className="text-gray-500 text-sm mt-3 lg:mt-0">
              <span className="primaryblue font-16 font-normal leading-5">
                {blog.date} . {blog.readTime}
              </span>
            </div>
          </div>

          <div className="font-16 font-normal leading-5 primaryblue mt-10">
            {blog.maindescription}
          </div>

          {/* Monitoring Section */}
          <div className="space-y-4 mt-10 lg:mt-16">
            <h1 className="font-24 font-semibold leading-7 primaryblue">
              {blog.monitoringData.name}
            </h1>
            <div className="font-16 font-normal leading-5 primaryblue">
              {blog.monitoringData.desc1}
            </div>

            <ul className="mt-8 border-l border-[#2E2E2E66] pl-7 space-y-5">
              {blog.monitoringData.ticks.map((tick, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Image src="/tick.svg" width={24} height={24} alt="tick" />
                  {tick}
                </li>
              ))}
            </ul>
          </div>

          {/* Observability Section */}
          <div className="space-y-4 mt-10 lg:mt-16">
            <h1 className="font-24 font-semibold leading-7 primaryblue">
              {blog.observabilityData.name}
            </h1>
            <div className="font-16 font-normal leading-5 primaryblue">
              {blog.observabilityData.desc1}
            </div>

            <ul className="mt-8 border-l border-[#2E2E2E66] pl-7 space-y-5">
              {blog.observabilityData.ticks.map((tick, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Image src="/tick.svg" width={24} height={24} alt="tick" />
                  {tick}
                </li>
              ))}
            </ul>
          </div>

          {/* Closing Remarks */}
          <div className="space-y-4 mt-10">
            <h1 className="font-24 font-semibold leading-7 primaryblue">
              {blog.closingremarks.name}
            </h1>
            <div className="font-16 font-normal leading-5 primaryblue">
              {blog.closingremarks.desc1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
