import React from "react";
import { Price } from "../data/Price";
import Table from "./Table";
import Faq from "./Accordion";
import Image from "next/image";
const Pricing = () => {
  return (
    <div>
      <div className="pricebg">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center m-auto pt-36 xl:pb-56">
            <h1 className="font-36 font-inter font-bold leading-10 p-20">
              Unlock Business Potential with <br /> Scalable,
              <span className="underline underline-offset-8 decoration-[#D9C666]">
                Responsible
              </span>
              AI Solutions.
            </h1>
          </div>
        </div>
      </div>

      <div className="widthclass">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10 xl:p-20">
          {Price && Price.length > 0 ? (
            Price.map((item, index) => (
              <div
                key={index}
                className="bg-[#FFF] shadow-lg p-6 rounded-[20px] mb-10"
              >
                <h1 className="font-36 fontbold leading-40 textcolor">
                  {item.title}
                </h1>
                <ul className="mt-3">
                  {item.list.map((listItem, listIndex) => (
                    <li
                      key={listIndex}
                      className="font-20 fontregular leading-6 flex items-center gap-2 mb-3"
                    >
                      <Image width={24} height={24} src={item.icon} alt="tick" />
                      {listItem}
                    </li>
                  ))}
                  {item.list1.map((listItem, listIndex) => (
                    <li
                      key={listIndex}
                      className="font-20 fontregular leading-6 flex items-center gap-2 mb-3 opacity-50"
                    >
                      <Image width={24} height={24} src={item.icon2} alt="tick" />
                      {listItem}
                    </li>
                  ))}
                </ul>
                <div className="mt-20 font-20 leading-6 fontmedium">
                  {item.months}
                  <span className="font-16 fontmedium opacity-60 leading-5">
                    {item.span}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-3 mt-4">
                  <button className="font-20 font-inter font-bold leading-6 w-[211px] h-[52px] bg-[#042440] text-white rounded-lg">
                    {item.btn}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No cards available</p>
          )}
        </div>

        <div>
          <div className=" mt-28 mb-16 xl:p-20">
            <div className="flex flex-col justify-center m-auto text-center">
              <p className="font-24 font-inter font-normal leading-8 mb-4">Plan Comparison</p>
              <h1 className="font-36 font-inter font-bold leading-10 mb-10">Explore Detailed Plan Comparisons</h1>
            </div>  
              <Table/>
              <Faq/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
