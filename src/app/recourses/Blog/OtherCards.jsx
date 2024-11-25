// OtherCards.jsx
import React from "react";
import { otherCardsData } from "../../data/BlogCard";
import Image from "next/image";
import Link from "next/link";

const OtherCards = () => {
  return (
    <div className="bg-[url('/blog-cta-bg.svg')] bg-no-repeat bg-cover bg-center px-2 sm:px-10 md:px-[60px] py-10 sm:py-[119px]">
      <div className="grid md:grid-cols-2 gap-5 xl:gap-20 widthclass">
        {otherCardsData && otherCardsData.length > 0 ? (
          otherCardsData.map((item, index) => (
            <div
              key={`card-${index}`}
              className="sm:flex bg-white shadow-[0_4px_20px_0_rgb(0,0,0,0.12)] gap-5 p-6 rounded-[20px]"
            >
              {/* Image container */}
              <div className="w-[128px] h-[160px] mb-5 sm:mb-0 flex-shrink-0">
                <Image
                  width={128}
                  height={160}
                  src={item.logoimg}
                  className="rounded-[20px] w-full h-full object-cover"
                  alt={item.name}
                />
              </div>

              {/* Content section */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-20 font-medium leading-6">
                    {item.name}
                  </h3>
                  <p
                    className="font-16 font-inter font-normal leading-5 mt-3 opacity-60"
                    dangerouslySetInnerHTML={{ __html: item.data }}
                  />
                </div>
                <Link href={`/recourses/Blog/${item.id}`} className="primary-small-btn mt-3 sm:mt-0"  >
                  {/* Link updated to pass dynamic blog ID */}
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
  );
};

export default OtherCards;
