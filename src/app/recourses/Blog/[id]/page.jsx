"use client";

import { useParams } from "next/navigation"; // Use useParams from next/navigation
import { blogDetailContent } from "@/app/data/blogdetailcontent"; // Import the blog content
import Image from "next/image";
import React from "react";
import { PiGreaterThanLight } from "react-icons/pi";
import Link from "next/link";

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
              <PiGreaterThanLight /> Define Monitoring
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
              width={blog.w}
              height={blog.h}
              alt="blog-detail"
            />
          </div>
        </div>

        <div className="absolute bottom-0">
          <Image src="/hr2.png" width={108} height={136} alt="path-bg" />
        </div>
      </div>

      {/* Blog Content */}
      <div className="flex flex-col items-start gap-8 mt-64 px-10 xl:px-20 2xl:px-[210px] container m-auto">
        <div className="flex items-center gap-8">
          <Image src="/facebook.svg" width={24} height={24} alt="social-icon" />
          <Image src="/twitter.svg" width={24} height={24} alt="social-icon" />
          <Image
            src="/instagram.svg"
            width={24}
            height={24}
            alt="social-icon"
          />
          <Image src="/github.svg" width={24} height={24} alt="social-icon" />
        </div>

        <div className="w-full">
          <div className="lg:flex justify-between items-center">
            <span className="inline-flex items-center rounded-md bg-[#2E2E2E33] px-2 py-1 text-black font-20 font-medium">
              {blog.category}
            </span>
            <div className="text-gray-500 text-sm mt-3 lg:mt-0">
              <span className="primaryblue font-16 font-normal leading-5">
                {blog.date} . {blog.readTime}
              </span>
            </div>
          </div>

          {/* monitoring section */}

          <div className="space-y-4 mt-8">
            {/* Render maindescription */}
            <div
              className="font-16 font-normal leading-5 primaryblue"
              dangerouslySetInnerHTML={{ __html: blog.maindescription }}
            ></div>

            {/* Loop through nameAndDescription in monitoringData */}
            {blog.monitoringData &&
              blog.monitoringData.nameAndDescription &&
              blog.monitoringData.nameAndDescription.length > 0 &&
              blog.monitoringData.nameAndDescription.map((section, index) => (
                <div key={index}>
                  {section.name && (
                    <h1 className="font-24 font-semibold leading-7 primaryblue">
                      {section.name}
                    </h1>
                  )}
                  {section.description && (
                    <div
                      className="font-16 font-normal leading-5 primaryblue pt-4"
                      dangerouslySetInnerHTML={{ __html: section.description }}
                    ></div>
                  )}

                  {section.descriptionImage && (
                    <div className="flex justify-center items-center my-4">
                      <Image src={section.descriptionImage} width={800} height={364} alt="section descritption"/>
                    </div>
                  )}
                </div>
              ))}

            {/* Render subheading and headingandticks */}
            <div className="space-y-4 mt-10 lg:mt-16">
              {blog.monitoringData.headingandticks &&
                blog.monitoringData.headingandticks.length > 0 &&
                blog.monitoringData.headingandticks.map((section, index) => (
                  <div key={index}>
                    {section.name2 && (
                      <h1 className="font-20 font-bold leading-7 primaryblue">
                        {section.name2}
                      </h1>
                    )}
                    {section.ticksDescription && (
                      <div
                        className="font-16 font-normal leading-5 primaryblue pt-3 pb-3"
                        dangerouslySetInnerHTML={{
                          __html: section.ticksDescription,
                        }}
                      ></div>
                    )}
                    {section.subheading && (
                      <h1 className="font-20 font-semibold leading-7 primaryblue">
                        {section.subheading}
                      </h1>
                    )}

                    {/* Render ticks */}
                    {section.ticks && section.ticks.length > 0 && (
                      <div>
                        <ul className="mt-8 border-l border-[#2E2E2E66] pl-7 space-y-5">
                          {section.ticks.map((tick, tickIndex) => (
                            <li
                              key={tickIndex}
                              className="flex items-center gap-3"
                            >
                              <Image
                                src="/tick.svg"
                                width={24}
                                height={24}
                                alt="tick"
                              />
                              {tick}
                            </li>
                          ))}
                        </ul>
                        {/* After all ticks, render the image */}
                        {section.ticksImge && (
                          <div className="mt-4 flex justify-center items-center">
                            <Image
                              src={section.ticksImge}
                              width={512}
                              height={398}
                              alt="blog-image"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {/* Blog Heading and Paragraph rendered 3 times */}
            <div className="space-y-7 pt-3">
              {blog.monitoringData.heading && (
                <h1 className="font-20 font-semibold leading-7 primaryblue">
                  {blog.monitoringData.heading}
                </h1>
              )}
              {blog.monitoringData.description && (
                <div
                  className="font-16 font-normal leading-5 primaryblue"
                  dangerouslySetInnerHTML={{
                    __html: blog.monitoringData.description,
                  }}
                ></div>
              )}

              {/* Render blog sections */}
              {blog.monitoringData.blogSections &&
                blog.monitoringData.blogSections.length > 0 &&
                blog.monitoringData.blogSections.map((section, index) => (
                  <div
                    key={index}
                    className="font-16 font-bold leading-5 primaryblue"
                  >
                    {section.paraheading && (
                      <h3 className="font-16 font-bold">
                        {section.paraheading}
                      </h3>
                    )}
                    {section.para && (
                      <span className="font-normal">{section.para}</span>
                    )}
                  </div>
                ))}
            </div>

            {blog.monitoringData?.img && (
              <div className="flex justify-center items-center">
                <Image
                  src={blog.monitoringData.img}
                  width={blog.monitoringData.width}
                  height={blog.monitoringData.height}
                  alt="blog-image"
                />
              </div>
            )}
          </div>

          {/* Observability Section */}
          {/* Observability Section */}
          <div className="space-y-4 mt-10 lg:mt-16">
            {/* Loop through sections in observabilityData */}
            {blog.observabilityData &&
              blog.observabilityData.sections &&
              blog.observabilityData.sections.length > 0 &&
              blog.observabilityData.sections.map((section, index) => (
                <div key={index}>
                  {/* Render name if it exists */}
                  {section.name && (
                    <h1 className="font-24 font-semibold leading-7 primaryblue">
                      {section.name}
                    </h1>
                  )}

                  {/* Render description if it exists */}
                  {section.description && (
                    <div
                      className="font-16 font-normal leading-5 primaryblue mt-3"
                      dangerouslySetInnerHTML={{ __html: section.description }}
                    ></div>
                  )}

                  {/* Render name if it exists */}
                  {section.sectionsImage && (
                    <div className="flex justify-center items-center my-5">
                      <Image
                        src={section.sectionsImage}
                        width={533}
                        height={164}
                        alt="sectionimage"
                      />
                    </div>
                  )}
                </div>
              ))}

            {/* Render subheading and ticks */}
            <div className="space-y-4 mt-10 lg:mt-16">
              {/* Loop through headingandticks in observabilityData */}
              {blog.observabilityData &&
                blog.observabilityData.headingandticks &&
                blog.observabilityData.headingandticks.length > 0 &&
                blog.observabilityData.headingandticks.map((section, index) => (
                  <div key={index}>
                    {section.subheading && (
                      <h1 className="font-20 font-semibold leading-7 primaryblue">
                        {section.subheading}
                      </h1>
                    )}

                    {/* Render ticks */}
                    {section.ticks && section.ticks.length > 0 && (
                      <ul className="mt-8 border-l border-[#2E2E2E66] pl-7 space-y-5">
                        {section.ticks.map((tick, tickIndex) => (
                          <li
                            key={tickIndex}
                            className="flex items-center gap-3"
                          >
                            <Image
                              src="/tick.svg"
                              width={24}
                              height={24}
                              alt="tick"
                            />
                            {tick}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>

            <div className="space-y-7 pt-3">
              {blog.observabilityData && blog.observabilityData.heading && (
                <h1 className="font-20 font-semibold leading-7 primaryblue">
                  {blog.observabilityData.heading}
                </h1>
              )}
              {blog.observabilityData &&
                blog.observabilityData.blogSections &&
                blog.observabilityData.blogSections.length > 0 &&
                blog.observabilityData.blogSections.map((section, index) => (
                  <div
                    key={index}
                    className="font-16 font-bold leading-5 primaryblue"
                  >
                    {section.paraheading && (
                      <h3 className="font-16 font-bold">
                        {section.paraheading}
                      </h3>
                    )}
                    {section.para && (
                      <span className="font-normal">{section.para}</span>
                    )}
                  </div>
                ))}
            </div>

            <div className="space-y-7 pt-3">
              {blog.observabilityData && blog.observabilityData.heading1 && (
                <h1 className="font-20 font-semibold leading-7 primaryblue">
                  {blog.observabilityData.heading1}
                </h1>
              )}

              {blog.observabilityData && blog.observabilityData.desc2 && (
                <div className="font-16 font-normal leading-5 primaryblue">
                  {blog.observabilityData.desc2}
                </div>
              )}
            </div>
          </div>

          {/* Closing Remarks */}
          {blog.closingremarks && (
            <div className="space-y-4 mt-10">
              {blog.closingremarks.name && (
                <h1 className="font-24 font-semibold leading-7 primaryblue">
                  {blog.closingremarks.name}
                </h1>
              )}

              {blog.closingremarks.desc1 && (
                <div className="font-16 font-normal leading-5 primaryblue">
                  {blog.closingremarks.desc1}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Recommended Articles */}
      <div className="bg-[#1D285614] mt-16 px-10 md:px-20 2xl:px-52 py-10">
        <div className="container m-auto">
          <div className="flex justify-start items-start flex-col gap-5 relative">
            <h1 className="font-24 font-bold leading-10">
              Recommended Articles
            </h1>
            <p className="font-20 font-normal leading-6 md:leading-8 opacity-60">
              Sit omnis id iusto aliquam. Similique labore dolore nihil
              cupiditate natus <br className="hidden lg:block" /> accusantium
              saepe omnis. Fuga quod aliquid perferendis natus laudantium{" "}
              <br className="hidden lg:block" /> alias aut assumenda. Est autem
              maxime.
            </p>

            <div className="absolute -top-8 -left-20">
              <Image src="/hr1.png" width={138} height={138} alt="path-bg" />
            </div>
          </div>

          <div className="flex justify-center items-center gap-10 mt-11">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* First Card */}
              <div className="sm:flex bg-white shadow-[0_3px_15px_rgb(0,0,0,0.2)] gap-5 p-6 rounded-[20px]">
                <div className="w-[128px] h-[160px] mb-5 sm:mb-0 flex-shrink-0">
                  <Image
                    width={128}
                    height={160}
                    src="/other.png"
                    className="rounded-[20px] w-full h-full object-cover"
                    alt="img"
                  />
                </div>

                <div className="flex flex-col justify-between flex-grow gap-2">
                  <h3 className="text-[20px] font-inter font-semibold leading-6">
                    Insecure Output Handling
                  </h3>
                  <p className="text-[16px] font-inter font-normal leading-5 mt-3 opacity-[60%]">
                    Insecure output handling occurs when an application
                    indiscriminately accepts output from a Large Language Model
                    (LLM) without proper scrutiny.
                  </p>
                  <Link href="/recourses/Blog/4" className="primary-small-btn">
                    Learn more
                  </Link>
                </div>
              </div>

              {/* Second Card */}
              <div className="sm:flex bg-white shadow-[0_3px_15px_rgb(0,0,0,0.2)] gap-5 p-6 rounded-[20px]">
                <div className="w-[128px] h-[160px] mb-5 sm:mb-0 flex-shrink-0">
                  <Image
                    width={128}
                    height={160}
                    src="/other.png"
                    className="rounded-[20px] w-full h-full object-cover"
                    alt="img"
                  />
                </div>

                <div className="flex flex-col justify-between flex-grow gap-2">
                  <h3 className="text-[20px] font-inter font-semibold leading-6">
                    Metricwise: The AI Observability Platform
                  </h3>
                  <p className="text-[16px] font-inter font-normal leading-5 mt-3 opacity-[60%]">
                    At Metricwise, we are dedicated to making advanced AI tools
                    accessible to everyone, providing practitioners with the
                    resources and knowledge.
                  </p>
                  <Link href="/recourses/Blog/8" className="primary-small-btn">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-end mt-12">
            <Link href="/recourses/Blog" className="hero-btn">
              See More
              <Image src="/free.png" width={24} height={24} alt="free" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
