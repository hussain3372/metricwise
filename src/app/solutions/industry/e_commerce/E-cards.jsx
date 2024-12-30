import { insurancecards } from "@/app/data/Finance";
import Image from "next/image";
import React from "react";

const Ecards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[27px] sm:px-10 xl:px-10 mt-10 mb-7">
        {insurancecards.map((item, index) => (
          <div
            key={index}
            className="rounded-lg flex flex-col justify-start gap-4 pt-[57px] pb-[47px] px-5 relative"
          >
            <div className="flex items-center justify-start gap-4">
              <div className="">
                <Image
                  src={item.icon}
                  width={60}
                  height={60}
                  className="h-[60px] w-[60px]"
                  alt="credit cards"
                />
              </div>
              <h1
                className="font-36 font-medium leading-12 text-[#7736B7] text-start"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </div>
            <div>
              <ul className="list-outside px-5 flex flex-col gap-6">
                {item.Items.map((listItem, listIndex) => (
                  <li
                    key={listIndex}
                    className="font-14 font-normal leading-5 flex items-center gap-2 w-full"
                  >
                    <Image
                      src="/list-items.svg"
                      width={24}
                      height={34}
                      alt="list-items"
                      className="h-6 w-6"
                    />
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

export default Ecards;
