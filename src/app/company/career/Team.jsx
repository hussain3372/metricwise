import Link from "next/link";
import { careerapply, careerdata } from "../../data/careerdata";
import { careerperks } from "../../data/careerdata";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div>
      <div>
        <div className="">
          <div className="widthclass">
            <div className="flex flex-col justif-center items-center m-auto p-10 md:p-20">
              <h1 className="font-36 font-inter font-bold leading-10 mb-10">
                Our Team
              </h1>
              <p className="font-24 font-inter font-normal leading-8 mb-10 text-center opacity-60">
                Embark on a journey with our dynamic tech team, where innovation
                and collaboration converge to shape the future. At Metricwise
                we're more than just colleagues – we're a family of diverse
                minds united by a shared passion for pushing boundaries to make
                AI responsible and accessible to all in a safe and secure way.
                Together, we redefine possibilities and make an impact that
                resonates across industries. Welcome to a place where your
                expertise is valued, your ideas are heard, and your growth is
                our priority.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-20 mt-10">
                <div className="flex flex-col gap-y-2 text-center">
                  <Image width={417} height={344} src="/t1.png" alt="" />
                  <h5 className="font-20 font-inter font-semibold leadin-6">
                    Varun Sharma
                  </h5>
                  <span className="font-16 font-inter font-normal">CEO</span>
                  <span className="font-16 font-inter font-normal">
                    McKinsey, EY, Coherent
                  </span>
                </div>
                <div className="flex flex-col gap-y-2 text-center">
                  <Image width={417} height={344} src="/t2.png" alt="" />
                  <h5 className="font-20 font-inter font-semibold leadin-6">
                    Varun Sharma
                  </h5>
                  <span className="font-16 font-inter font-normal">CEO</span>
                  <span className="font-16 font-inter font-normal">
                    McKinsey, EY, Coherent
                  </span>
                </div>
                <div className="flex flex-col gap-y-2 text-center">
                  <Image width={417} height={344} src="/t3.png" alt="" />
                  <h5 className="font-20 font-inter font-semibold leadin-6">
                    Varun Sharma
                  </h5>
                  <span className="font-16 font-inter font-normal">CEO</span>
                  <span className="font-16 font-inter font-normal">
                    McKinsey, EY, Coherent
                  </span>
                </div>
                <div className="flex flex-col gap-y-2 text-center">
                  <Image width={417} height={344} src="/t4.png" alt="" />
                  <h5 className="font-20 font-inter font-semibold leadin-6">
                    Varun Sharma
                  </h5>
                  <span className="font-16 font-inter font-normal">CEO</span>
                  <span className="font-16 font-inter font-normal">
                    McKinsey, EY, Coherent
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0424401F] border-t border-[#042440]">
        <div>
          <div className="widthclass p-8 md:p-16 flex-col flex justify-center items-center">
            <h1 className="font-40 fon-inter font-bold textcolor leading-[72px] mb-10">
              Our Values
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 items-center">
              {careerdata.map((item, index) => (
                <div key={index} class="max-w-sm h-full rounded-lg border-2 border-[#EBECF2] flex flex-col justify-start items-start text-start p-7 bg-white shadow-xl">
                  <Image
                    width={60}
                    height={60}
                    class=""
                    src={item.icon}
                    alt="Sunset in the mountains"
                  />
                  <div class="py-4">
                    <div class="font-bold gont-inter font-36 leading-10 mb-2 mt-3">
                      {item.name}
                    </div>
                    <p class="text-[#9F9E9E] font-16 leading-5 ">{item.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div>
          <div className="widthclass p-8 md:p-16 flex-col flex justify-center items-center">
            <h1 className="font-40 fon-inter font-bold textcolor leading-[72px] mb-10">
              Our Perks
            </h1>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {careerperks.map((item, perks) => (
                <div key={perks} class=" h-full rounded-lg flex flex-col justify-start items-start text-start p-7 bg-white shadow-xl">
                  <div className="grid md:grid-cols-2">
                    <div class="font-bold gont-inter font-36 leading-10 mb-2 mt-3">
                      {item.name}
                    </div>
                    <div className="flex md:justify-end">
                      <Image
                        width={60}
                        height={60}
                        class=""
                        src={item.icon}
                        alt="Sunset in the mountains"
                      />
                    </div>
                  </div>
                  <div class="py-4">
                    <p class="text-[#9F9E9E] font-16 leading-5 ">{item.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0424401F] p-8 md:p-16">
        <div className="widthclass">
          <div className=" p-16 pb-5 flex-col flex justify-center items-center">
            <h1 className="font-40 fon-inter font-bold textcolor md:leading-[72px]">
              List of Open Position
            </h1>
          </div>
          <div>
            {careerapply.map((apply, apple) => (
              <div key={apple} className="md:flex justify-between items-center bg-white rounded-lg p-4 mt-4">
                <div>
                  <h1 className="font-20 font-inter font-semibold leading-6">
                    {apply.position}
                  </h1>
                  <p className="font-16 font-inter font-normal leading-5">
                    {apply.location}
                  </p>
                </div>
                <div>
                  <button className="font-20 font-inter font-normal leading-6 bg-[#042440] rounded-lg w-[110px] h-[52px] white mt-5 md:mt-0">
                    <Link href="/company/apply">
                        {apply.applys}
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
