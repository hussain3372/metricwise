import Image from "next/image";
import React from "react";
import Resumeinput from "./Resumeinput";

const Form = () => {
  return (
    <div>
      <div>
        <div className="">
          <div className="flex flex-col md:justify-start md:items-start gap-40">
            <div className="bg-[#FFFFFF] shadow-lg rounded-2xl">
              <form className="p-6">
                <label
                  htmlFor=""
                  className="fontbold font-20 leading-6 font-inter font-semibold"
                >
                  Submit Your Application
                </label>
                <div>
                  <Resumeinput/>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mt-4">
                  <input
                    type="text"
                    className="rounded-[36px] p-3 border border-[#0000001F] hover:border-gray-500 transition-colors duration-300 font-16 fontregular leading-5 paragraph"
                    placeholder="First name*"
                    required
                  />
                  <input
                    type="text"
                    className="rounded-[36px] p-3 border border-[#0000001F] hover:border-gray-500 transition-colors duration-300 font-16 fontregular leading-5 paragraph"
                    placeholder="Last name*"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    required
                    className="w-full rounded-[36px] pl-10 p-3 border border-[#0000001F] hover:border-gray-500 transition-colors duration-300 font-16 fontregular leading-5 paragraph mt-5"
                    placeholder="Your email*"
                  />
                  <div className="absolute top-8 left-3">
                    <Image width={20} height={20} src="/email.png" alt="" />
                  </div>
                </div>
                <div className="relative mt-5">
                  <input
                    type="tel"
                    required
                    className="w-full rounded-[36px] pl-24 p-3 border border-[#0000001F] hover:border-gray-500 transition-colors duration-300 font-16 fontregular leading-5 paragraph"
                    placeholder="Phone number"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <select className=" border-t-0 border-b-0 border-l-0 border-r-2 border-[#0000001F]  pr-8 pl-3 py-1">
                      <option>+92</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                  </div>
                </div>
                <input
                  type="text"
                  className="w-full rounded-[36px] p-3 border border-[#0000001F] hover:border-gray-500 transition-colors duration-300 font-16 fontregular leading-5 paragraph mt-5"
                  placeholder="Current Location"
                />
                <input
                  type="text"
                  className="w-full rounded-[36px] p-3 border border-[#0000001F] hover:border-gray-500 transition-colors duration-300 font-16 fontregular leading-5 paragraph mt-5 mb-5"
                  placeholder="Current Location"
                />
                <label
                  htmlFor=""
                  className="fontbold font-20 leading-6 font-inter font-semibold"
                >
                  Links
                </label>
                <input
                  type="url"
                  className="w-full rounded-[36px] p-3 border border-[#0000001F] hover:border-gray-500 transition-colors duration-300 font-16 fontregular leading-5 paragraph mt-5"
                  placeholder="LinkedIn URL*"
                  required
                />
                <input
                  type="url"
                  className="w-full rounded-[36px] p-3 border border-[#0000001F] hover:border-gray-500 transition-colors duration-300 font-16 fontregular leading-5 paragraph mt-5"
                  placeholder="GitHub URL*"
                  required
                />
                <div className="flex justify-center items-center mt-5">
                  <button
                    type="submit"
                    className="bg-[#042440] w-[420px] h-[44px] text-white rounded-[36px]"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
