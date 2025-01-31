import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Integrations = () => {
  const slides = [
    "/int1.svg",
    "/int2.svg",
    "/int3.svg",
    "/int4.svg",
    "/int5.svg",
    "/int6.svg",
    "/int7.svg",
    "/int8.svg",
    "/int9.svg",
    "/int10.svg",
    "/int11.svg",
    "/int12.svg",
    "/int13.svg",
    "/int14.svg",
    "/int15.svg",
    "/int16.svg",
    "/int17.svg",
    "/int18.svg",
    "/int19.svg",
  ]; // Add your image paths or content here.

  return (
    <div className="px-5">
      <div className="bg-[url('/int-bg.png')] bg-no-repeat bg-contain bg-center rounded-xl widthclass">
        <div className="flex flex-col justify-center items-center gap-9 mt-40 sm:mt-80 rounded-xl py-16">
          <div>
            <h1 className="font-medium font-32 leading-7 text-center">
             {` Harness the Power of Metricwise' Seamless Integrations`}
            </h1>
          </div>
          <div className="w-full h-auto">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={13}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={1000}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Image
                    width={90}
                    height={90}
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <Link
              href="/Integration"
              className="rounded-md bg-[#2E2E2E] text-white py-4 px-7 font-14 pro-medium leading-4"
              type="button"
            >
              See all integrations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
