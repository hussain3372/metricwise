import Link from "next/link";
import React from "react";
import DataTypecard from "./DataTypecard";
import Image from "next/image";
const DataType = () => {
  return (
    <div>
      <div className="bg-[url('/data-bg.svg')] bg-no-repeat bg-right-bottom">
        <div className="widthclass">
          <div className="p-8 sm:p-16 2xl:py-32 2xl:px-10">
            <div className="flex flex-col justify-center items-center md:mt-0">
              <div className="flex justify-end items-end">
                <Image
                  src="/datatypeimg.svg"
                  width={1000}
                  height={210}
                  alt="moni"
                />
              </div>
              <div className="flex flex-col justify-center items-center mt-12">
                <h1 className="font-44 font-bold leading-[42px] text-[#7736B7]">
                  Data Type
                </h1>
                <p className="font-20 font-normal font-inter leading-7 mt-8 mb-10 opacity-60 text-center">
                  A data type is an attribute associated with a piece of data
                  that tells a computer <br className="hidden md:block" />
                  system how to interpret its value. Understanding data types
                  ensures that data is <br className="hidden md:block" />
                  collected in the preferred format and the value of each
                  property is as expected.
                </p>
                <Link href="/Demo" className="new-btns">
                  Book a Demo
                  <Image src="/free.png" width={24} height={24} alt="free" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div>
          <DataTypecard />
        </div>
      </div>
    </div>
  );
};

export default DataType;
