import React from "react";
import { BlogCard } from "../../data/BlogCard";
import Image from "next/image";
import Link from "next/link";
import OtherCards from "./OtherCards";

const Blog = () => {
  return (
    <div className="">
      <div className="blog mb-[76px]">
        <div className="grid md:grid-cols-2 gap-5 lg:gap-14 items-center white px-5 md:px-[61px] pt-20 md:pt-[135px] pb-[90px] relative widthclass">
          <div>
            <h1 className="font-36 font-bold leading-10 mb-6 bg-gradient-to-r from-[#6542E4] from-20% via-[#EFCD56] to-[#EFCD56] opacity-60 inline-block text-transparent bg-clip-text">
              Monitoring V/S Observability
            </h1>
            <p className="font-22 font-inter font-normal leading-6 text-[#2E2E2E] opacity-80">
              The terms monitoring and observability are prevalent in the field
              of AI/ML systems. Although they may initially appear similar,
              there are notable distinctions between the two concepts. This
              article explores the precise definitions and subtleties associated
              with AI/ML monitoring and observability, providing insights into
              their respective roles and significant importance in the current
              landscape of machine learning.
            </p>
            <div className="flex">
              <Link href={`/recourses/Blog/1`} className="new-btns mt-6">
                Learn More
                <Image
                  width={24}
                  height={24}
                  src="/free.png"
                  alt="Learn More"
                />
              </Link>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <Image
              src="/blog-hero.svg"
              width={533}
              height={305}
              alt="blog hero"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="widthclass px-3 md:px-[60px]">
          <div className="bg-[#1D285614] py-10 md:py-20 px-2 sm:px-10 mb-10 md:mb-28 rounded-[20px]">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col justify-between items-start cardbg rounded-[20px] w-[100%] h-full p-10">
                <div>
                  <Image
                    src="/factors-blog.svg"
                    width={475}
                    height={350}
                    alt="factors blog"
                  />
                </div>
                <div>
                  <h3 className="font-20 font-inter font-normal leading-6 text-black">
                    What factors should be taken...?
                  </h3>
                  <p className="font-16 font-normal leading-5 mt-3 mb-8 opacity-60 text-black">
                    During the configuration of ML monitoring for a specific
                    model, it is crucial to consider the following...
                  </p>
                  <Link
                    href={`/recourses/Blog/3`}
                    className="primary-small-btn"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-10">
                  {BlogCard && BlogCard.length > 0 ? (
                    BlogCard.map((item, index) => (
                      <div
                        key={index}
                        className="sm:flex bg-white p-5 gap-10 rounded-[20px]"
                      >
                        {/* Image container */}
                        <div className="sm:w-[154px] mb-8 sm:mb-0 flex-shrink-0">
                          <Image
                            width={254}
                            height={160}
                            src={item.logoimg}
                            className="rounded-[20px] w-full h-auto object-cover"
                            alt={item.name}
                          />
                        </div>

                        {/* Content section */}
                        <div className="flex flex-col justify-around flex-grow">
                          <div>
                            <h3 className="font-20 font-normal leading-6">
                              {item.name}
                            </h3>
                            <p
                              className="font-16 font-normal leading-5 mt-3 opacity-60"
                              dangerouslySetInnerHTML={{ __html: item.data }}
                            />
                          </div>
                          <Link
                            href={`/recourses/Blog/${item.id}`}
                            className="primary-small-btn mt-2"
                          >
                            {item.btn}
                          </Link>
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
        </div>
        <div>
          <OtherCards />
        </div>
      </div>
    </div>
  );
};

export default Blog;
