"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Header from "@/app/components/Layout/Header";
import Platform from "@/app/components/Home/Platform";
import NewPerformance from "@/app/components/Home/NewPerformance";
import Card from "@/app/components/Home/Card";
import Blogs from "@/app/components/Home/Blogs";
import Link from "next/link";
import Integrations from "./Integrations";
import WorkFlow from "./WorkFlow";

const NewHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const images = ["/hero2.svg", "/hero3.svg", "/hero4.svg"]; // Add your image paths here

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Trigger fade out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true); // Trigger fade in
      }, 500); // Fade-out duration
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <div className="relative bg-[url('/hero-gradient.png')] bg-no-repeat bg-cover bg-center p-5">
        <div className="pt-20 m-auto px-5">
          <div className="flex flex-col justify-start items-center text-center">
            <h1 className="font-44 font-bold leading-10 sm:leading-[50px] md:leading-[60px] text-[#000000]">
              Empowering AI with unmatched <br className="hidden sm:block" />
              <span className="font-semibold text-[#7736B7]">
                <span className="italic">O</span>bservability and
                <span className="italic">G</span>overnance
              </span>
            </h1>
            <p className="text-[#00000099] font-20 font-normal leading-6 mt-5">
              Detect and analyze model and data issues with speed. Mitigate
              challenges faster <br className="hidden md:block" /> for optimal
              AI performance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-7">
              <Link
                href="/company/contact_us"
                className="bg-[#2E2E2E] rounded-md px-7 py-4 font-16 font-bold text-white leading-5 text-center"
              >
                Get started for free
              </Link>
              <Link
                href="/company/contact_us"
                className="bg-white rounded-md px-7 py-4 font-16 font-normal leading-5 text-center"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section Image */}
        <div
          className="relative flex justify-center items-center mt-[212px] sm:mt-[311px] h-[20px]"
          style={{ height: "80px" }} // Set container height
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Hero image ${index + 1}`}
              width={828}
              height={524}
              className={`absolute transition-opacity duration-500 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Platform section below */}
      <Integrations />
      <Platform />
      <NewPerformance />
      <Card />
      <WorkFlow />
      <Blogs />
    </div>
  );
};

export default NewHero;
