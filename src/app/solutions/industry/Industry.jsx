"use client";

import React, { useEffect, useState } from "react";
import IndustryTabs from "./Industry-tabs";
import Image from "next/image";
import Blogs from "@/app/components/Home/Blogs";

const Industry = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const images = [
    "/industry-hero1.svg",
    "/industry-hero2.svg",
    "/industry-hero3.svg",
  ]; // Add your image paths here

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Trigger fade out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true); // Trigger fade in
      }, 300); // Fade-out duration
    }, 3000); // 5 seconds interval

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="pt-[102px] pb-[315px] md:pb-[530px] lg:pb-[129px] px-2.5 md:pl-[74px] md:pr-6 bg-[url('/hero-gradient.png')] bg-no-repeat bg-cover bg-center">
        <div className="widthclass grid gap-[92px] grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <h1 className="font-44 font-semibold leading-[60px]">
              Ensure <span className="text-[#7736B7]">robust</span> and
              <span className="text-[#7736B7]"> secure</span> AI systems across
              <span className="text-[#7736B7]"> industries</span>
            </h1>
            <p className="font-20 font-normal leading-7 text-[#00000099] pt-3">
              Safeguard mission-critical AI systems across industries with our
              scalable, structured solution. Seamlessly operationalize AI
              monitoring and governance to enhance efficiency and protect
              against malfunctions, driving increased customer lifetime value
              through precise predictions and optimized model performance.
            </p>
            <div className="flex flex-col lg:flex-row items-start justify-start gap-7 mt-9">
              <button className="font-16 font-bold leading-5 text-white flex justify-center items-center bg-[#2E2E2E] rounded-md py-4 px-7 border border-transparent">
                Get started for free
              </button>
              <button className="bg-white border-2 border-[#2E2E2E] rounded-md py-4 px-7 text-black flex justify-center items-center gap-2 font-16 font-bold leading-5">
                Talk to Sales
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M16.668 10L11.668 15M16.668 10L11.668 5M16.668 10H7.91797M3.33464 10H5.41797"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Hero image ${index + 1}`}
                layout="fill" // Ensures the image fills the container
                objectFit="cover" // Maintains aspect ratio while covering the container
                className={`absolute top-0 left-0 transition-opacity duration-500 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2">
        <IndustryTabs />
      </div>

      <div className="mt-32">
        <Blogs />
      </div>
    </div>
  );
};

export default Industry;
