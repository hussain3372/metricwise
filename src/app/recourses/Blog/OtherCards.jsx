// OtherCards.jsx
import React from "react";
import { otherCardsData } from "../../data/BlogCard";

const OtherCards = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-10 ">
        {otherCardsData && otherCardsData.length > 0 ? (
          otherCardsData.map((item, index) => (
            <div
              key={index}
              className="sm:flex bg-white shadow-lg gap-5 p-6 rounded-[20px] mb-10"
            >
              <div className="w-[128px] h-[160px] mb-5 sm:mb-0">
                <img
                  src={item.logoimg}
                  className="rounded-[20px] w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-[20px] font-inter font-semibold leading-6">
                    {item.name}
                  </h3>
                  <p
                    className="text-[16px] font-inter font-normal leading-5 mt-3 opacity-[60%]"
                    dangerouslySetInnerHTML={{ __html: item.data }}
                  />
                </div>
                <button className="w-[134px] h-[40px] bg-[#042440] text-white text-[16px] font-regular rounded-lg mt-5 mt-sm-0">
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
  );
};

export default OtherCards;
