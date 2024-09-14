// OtherCards.jsx
import React from "react";
import { otherCardsData } from "../../data/BlogCard";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";

const OtherCards = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-10">
        {otherCardsData && otherCardsData.length > 0 ? (
          otherCardsData.map((item, index) => (
              <Tilt
                key={`tilt-${index}`}
                glareEnable={true}
                glareMaxOpacity={0.8}
                glareColor="#f8f8f8"
                glarePosition="bottom"
                glareBorderRadius="20px"
              >
                <div
                  key={`card-${index}`}
                  className="sm:flex  bg-white shadow-[0_3px_15px_rgb(0,0,0,0.2)] gap-5 p-6 rounded-[20px]"
                >
                  <div className="w-[128px] h-[160px] mb-5 sm:mb-0" key={`image-container-${index}`}>
                    <Image
                      width={129}
                      height={160}
                      src={item.logoimg}
                      className="rounded-[20px] w-full h-full object-cover"
                      alt={item.name}
                      key={`image-${index}`}
                    />
                  </div>
                  <div className="flex flex-col justify-between" key={`content-${index}`}>
                    <div key={`text-${index}`}>
                      <h3 className="text-[20px] font-inter font-semibold leading-6">{item.name}</h3>
                      <p
                        className="text-[16px] font-inter font-normal leading-5 mt-3 opacity-[60%]"
                        dangerouslySetInnerHTML={{ __html: item.data }}
                      />
                    </div>
                    <button className="w-[134px] h-[40px] bg-gradient-to-r from-[#B56AFF] via-[#B56AFF] to-[#FFE1B4] bg-[length:110%_100%] text-white text-[16px] font-regular rounded-lg mt-5 mt-sm-0">
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
  );
};

export default OtherCards;
