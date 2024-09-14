"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Resumeinput from "./Resumeinput";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";

const Form = () => {
  useEffect(() => {
    // Use a small delay to ensure the DOM is fully rendered
    if (typeof window !== "undefined") {
      setTimeout(() => {
        const input = document.querySelector("#phone");
        console.log(input); // This should now log the input element, not null

        if (input) {
          const iti = intlTelInput(input, {
            initialCountry: "us",
            separateDialCode: true,
            nationalMode: false,
            utilsScript:
              "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
          });

          return () => {
            if (iti) iti.destroy();
          };
        }
      }, 100); // Adjust delay if necessary
    }
  }, []); // This ensures intlTelInput runs every time section changes

  return (
    <div>
      <div>
        <div className="">
          <div className="flex flex-col md:justify-start md:items-start gap-40">
            <div className="bg-[#FFFFFF] shadow-lg rounded-2xl">
              <form className="p-6">
                <label
                  htmlFor=""
                  className="font-bold font-20 leading-6 font-inter"
                >
                  Submit Your Application
                </label>
                <div>
                  <Resumeinput />
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mt-4">
                  <input
                    type="text"
                    className="rounded-[36px] p-3 border border-[#0000001F] hover:border-gray-500 transition-colors duration-300 font-16 font-normal leading-5 paragraph"
                    placeholder="First name*"
                    required
                  />
                  <input
                    type="text"
                    className="rounded-[36px] p-3 border border-[#0000001F] hover:border-gray-500 transition-colors duration-300 font-16 font-normal leading-5 paragraph"
                    placeholder="Last name*"
                    required
                  />
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    required
                    className="w-full rounded-[36px] pl-10 p-3 border border-[#0000001F] hover:border-gray-500 transition-colors duration-300 font-16 font-normal leading-5 paragraph mt-5"
                    placeholder="Your email*"
                  />
                  <div className="absolute top-8 left-3">
                    <Image width={20} height={20} src="/email.png" alt="" />
                  </div>
                </div>

                <div className="relative mt-5">
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-[36px] p-3 paragraph"
                    placeholder="Phone number"
                    required
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Only allow numeric input
                    }}
                  />
                </div>

                <input
                  type="text"
                  className="w-full rounded-[36px] p-3 border border-[#0000001F] hover:border-gray-500 transition-colors duration-300 font-16 font-normal leading-5 paragraph mt-5"
                  placeholder="Current Location"
                />
                <input
                  type="text"
                  className="w-full rounded-[36px] p-3 border border-[#0000001F] hover:border-gray-500 transition-colors duration-300 font-16 font-normal leading-5 paragraph mt-5 mb-5"
                  placeholder="Current Location"
                />
                <label
                  htmlFor=""
                  className=" font-20 leading-6 font-inter font-bold"
                >
                  Links
                </label>
                <input
                  type="url"
                  className="w-full rounded-[36px] p-3 border border-[#0000001F] hover:border-gray-500 transition-colors duration-300 font-16 font-normal leading-5 paragraph mt-5"
                  placeholder="LinkedIn URL*"
                  required
                />
                <input
                  type="url"
                  className="w-full rounded-[36px] p-3 border border-[#0000001F] hover:border-gray-500 transition-colors duration-300 font-16 font-normal leading-5 paragraph mt-5"
                  placeholder="GitHub URL*"
                  required
                />
                <div className="flex justify-center items-center mt-5">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#B56AFF] via-[#B56AFF] to-[#FFE1B4] bg-[length:110%_100%] font-medium w-[420px] h-[44px] text-white rounded-[36px]"
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
