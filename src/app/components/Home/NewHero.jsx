"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Header from "@/app/components/Layout/Header";
import Platform from "@/app/components/Home/Platform";
import NewPerformance from "@/app/components/Home/NewPerformance";
import Card from "@/app/components/Home/Card";
import Blogs from "@/app/components/Home/Blogs";

const NewHero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past the hero section (e.g., 400px)
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Outside header, initially hidden, becomes visible when scrolled */}
      <div
        className={`sticky top-0 z-50 duration-[0.1s] ${
          isScrolled ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      >
        <Header />
      </div>

      {/* Hero Section with background image and internal header */}
      <div className="relative bg-[url('/hero-gradient.png')] bg-no-repeat bg-cover bg-center">
        {/* Inside header, hidden after scrolling */}
        <div
          className={`sticky top-0 z-50 transition-opacity duration-[0.1s] ${
            isScrolled ? "opacity-0 hidden" : "opacity-100 block"
          }`}
        >
          <Header />
        </div>

        {/* Hero Content */}
        <div className="pt-20 pb-32 sm:pb-64 m-auto px-4 sm:px-0">
          <div className="flex flex-col justify-start items-center text-center">
            <h1 className="font-52 font-semibold leading-10 sm:leading-[50px] md:leading-[60px]">
              Empowering AI with Unmatched <br />
              <span className="italic">Observability and Governance</span>
            </h1>
            <p className="text-[#00000099] font-20 font-normal leading-6 mt-5">
              Detect and analyze model and data issues with speed.<br className="hidden md:block" />Mitigate challenges faster for
              optimal AI performance.
            </p>
            <div className="flex justify-center items-center gap-4 mt-5">
              <button className="bg-[#042440] border-none rounded-md px-5 py-3 font-12 font-medium text-white">
                Get Started Now
              </button>
              <button className="bg-none border border-[#042440] rounded-md px-4 py-3 font-12 font-medium text-[#042440]">
                Book a demo
              </button>
            </div>
          </div>
        </div>

        {/* Hero Section Image */}
        <div className="flex justify-center items-center">
          <div className="absolute">
            <Image
              src="/hero-dashboard.png"
              width={1128}
              height={508}
              alt="Hero section Image"
            />
          </div>
        </div>
      </div>

      {/* Platform section below */}
      <Platform />
      <NewPerformance />
      <Card />
      <Blogs />
    </div>
  );
};

export default NewHero;
