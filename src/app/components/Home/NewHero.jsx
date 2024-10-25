"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Header from "@/app/components/Layout/Header";
import Platform from "@/app/components/Home/Platform";
import NewPerformance from "@/app/components/Home/NewPerformance";
import Card from "@/app/components/Home/Card";
import Blogs from "@/app/components/Home/Blogs";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const NewHero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const images = [
    "/hero2.svg",
    "/hero3.svg",
    "/hero4.svg", // Add your image paths here
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 2 seconds interval

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

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
        <div className="pt-20 pb-32 sm:pb-64 m-auto px-5">
          <div className="flex flex-col justify-start items-center text-center">
            <h1 className="font-52 font-semibold leading-10 sm:leading-[50px] md:leading-[60px] text-[#2E2E2E]">
              Empowering AI with Unmatched <br />
              <span className="italic text-[#042440]">Observability and Governance</span>
            </h1>
            <p className="text-[#00000099] font-20 font-normal leading-6 mt-5">
              Detect and analyze model and data issues with speed.
              <br className="hidden md:block" />
              Mitigate challenges faster for optimal AI performance.
            </p>
            <div className="flex justify-center items-center gap-4 mt-5">
              <Link href="/Demo" className="primary-btn" type="button">
                <Image
                  src="/demo-img.svg"
                  width={20}
                  height={20}
                  alt="demo-img"
                />
                Book a Demo
              </Link>

              <Link href="/company/contact_us" className="secondary-btn">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section Image */}
        <div className="flex justify-center items-center mt-20">
          <div className="absolute">
            <Fade key={currentImageIndex} duration={2000}>
              <Image
                src={images[currentImageIndex]}
                width={1128}
                height={508}
                alt="Hero section Image"
              />
            </Fade>
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
