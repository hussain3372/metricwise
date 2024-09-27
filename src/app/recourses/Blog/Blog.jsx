import React from "react";
import { BlogCard } from "../../data/BlogCard";
import Image from "next/image";
import Link from "next/link";
import OtherCards from "./OtherCards";

const Blog = () => {
  return (
    <div className="">
      <div className="blog mt-10 pb-20 xl:mt-20">
        <div className="grid md:grid-cols-2 items-center white px-5 md:px-20 py-20 relative widthclass">
          <div>
            <h1 className="font-36 font-bold lg:leading-40 mb-5 text-black">
              Monitoring V/S Observability
            </h1>
            <p className="font-16 font-inter font-normal leading-5 text-black">
              The terms monitoring and observability are prevalent in the field
              of AI/ML systems. Although they may initially appear similar,
              there are notable distinctions between the two concepts.
            </p>
            <Link href={`/recourses/Blog/1`} className="hero-btn mt-8">
              Learn More
              <Image width={24} height={24} src="/free.png" alt="Learn More" />
            </Link>
          </div>
        </div>
      </div>

      <div className="widthclass px-3 md:px-10">
        <div className="bg-[#1D285614] p-2 md:p-10 mb-10 md:mb-28 rounded-[20px]">
          <div className="grid xl:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col justify-end items-start cardbg white rounded-[20px] w-[100%] h-[680px] p-10">
              <h3 className="font-20 font-inter font-semibold leading-6">
                Consumer Sentiments in Housing...
              </h3>
              <p className="font-16 font-inter font-normal leading-5 mt-3 mb-8 opacity-60">
                The terms monitoring and observability are prevalent in the
                field.
              </p>
              <Link href={`/recourses/Blog/1`} className="primary-small-btn">
                Learn more
              </Link>
            </div>
            <div>
              <div className="flex flex-col gap-5">
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
                          <h3 className="text-[20px] font-inter font-semibold leading-6">
                            {item.name}
                          </h3>
                          <p
                            className="text-[16px] font-inter font-normal leading-5 mt-3 opacity-[60%]"
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
        <div>
          <OtherCards />
        </div>
      </div>
    </div>
  );
};

export default Blog;
