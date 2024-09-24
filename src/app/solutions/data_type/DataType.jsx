import Link from "next/link";
import React from "react";
import DataTypecard from "./DataTypecard";
import Image from "next/image";
const DataType = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="p-8 sm:p-16 2xl:py-32 2xl:px-10">
          <div className="grid md:grid-cols-2 items-center md:mt-0">
            <div>
              <h1 className="font-36 font-inter font-bold leading-10 text-[#042440]">
                Data Type
              </h1>
              <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                A data type is an attribute associated with a piece of data that
                tells a computer system how to interpret its value.
                Understanding data types ensures that data is collected in the
                preferred format and the value of each property is as expected.
              </p>
              <Link href="/Demo" className="hero-btn">
                Book a Demo
                <Image src="/free.png" width={24} height={24} alt="free" />
              </Link>
            </div>
            <div className="flex justify-end items-end">
              <Image
                src="/datatypeimg.png"
                width={500}
                height={400}
                alt="moni"
              />
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
