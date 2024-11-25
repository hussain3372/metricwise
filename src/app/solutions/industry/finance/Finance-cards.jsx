import { financeCards } from "@/app/data/Finance";
import Image from "next/image";
import React from "react";

const FinanceCards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-10 lg:gap-20 px-2 sm:px-10 lg:px-20 xl:px-[158px] mt-10 mb-7">
        {financeCards.map((item, index) => (
          <div
            key={index}
            className="bg-[rgba(231,223,248,0.5)] rounded-lg flex flex-col justify-start items-center gap-4 pt-[57px] pb-[47px] px-5 relative"
          >
            <div className="absolute bg-white p-[6px] rounded-full -top-[46px]">
              <Image src={item.icon} width={80} height={80} alt="credit cards" />
            </div>
            <h1
              className="font-20 font-bold leading-6 text-[#2E2E2E] text-center"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
            <div>
              <ul className="list-disc list-outside px-5">
                {item.Items.map((listItem, listIndex) => (
                  <li
                    key={listIndex}
                    className="font-16 font-normal text-[#2E2E2E99] leading-5"
                  >
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinanceCards;
