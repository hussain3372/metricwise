import Image from "next/image";
import React from "react";
import { PiGreaterThanLight } from "react-icons/pi";

const Monitoring = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="p-16">
        <div className="flex items-center">
            <h1 className="pt-16 font-24 font-normal font-inter flex items-center gap-2">
              Metricwise
              <span className="font-20 font-normal font-inter opacity-50 flex items-center gap-2">
                <PiGreaterThanLight/> Products <PiGreaterThanLight/> Monitoring Hub
              </span>
            </h1>
          </div>
          <div className="grid md:grid-cols-2 items-center">
            <div>
              <h1 className="font-26 font-inter font-bold leading-10">
                Monitoring Hub
              </h1>
              <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                Optimize your AI/ML models effortlessly with our Monitoring Hub.
                Our user-friendly platform allows enterprises to easily monitor
                model performance and data integrity in real-time, enabling
                quick optimization and accurate predictions. With customizable
                dashboards and intuitive interfaces, implementation is seamless,
                ensuring rapid integration into existing workflows
              </p>
              <button className="font-20 font-normal font-inter leading-6 bg-[#042440] white rounded-[8px] w-[214px] h-[52px] flex gap-3 justify-center items-center">
                Book a Demo
                <Image width={24} height={24} src="/free.png" className="w-[26px]" alt="" />
              </button>
            </div>
            <div className="flex justify-end items-end">
            <Image src="/moni.png" width={483} height={590} alt="moni" />
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="grid md:grid-cols-2 items-center gap-36 mt-20">
              <div className=" order-2 md:order-1">
              <Image src="/mon1.png" width={690} height={717} alt="" />
              </div>
              <div className="p-16 order-1 md:order-2">
              <Image src="/lambu.png" width={32} height={56} alt="lambu" className="mb-10" />
                <h1 className="font-36 font-inter font-bold leading-10">
                  Data Integrity & Completeness
                </h1>
                <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                  Optimize your AI/ML models effortlessly with our Monitoring
                  Hub. Our user-friendly platform allows enterprises to easily
                  monitor model performance and data integrity in real-time,
                  enabling quick optimization and accurate predictions. With
                  customizable dashboards and intuitive interfaces,
                  implementation is seamless, ensuring rapid integration into
                  existing workflows
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-36 mt-20">
              <div className="order-2 md:order-2 flex justify-end">
              <Image width={483} height={590} src="/mon2.png" alt="" />
              </div>
              <div className="order-1 md:order-1 p-16">
                <Image src="/lambu.png" width={32} height={56} alt="lambu" className="mb-10" />
                <h1 className="font-36 font-inter font-bold leading-10">
                  Data Integrity & Completeness
                </h1>
                <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                  Optimize your AI/ML models effortlessly with our Monitoring
                  Hub. Our user-friendly platform allows enterprises to easily
                  monitor model performance and data integrity in real-time,
                  enabling quick optimization and accurate predictions. With
                  customizable dashboards and intuitive interfaces,
                  implementation is seamless, ensuring rapid integration into
                  existing workflows
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-36 mt-20">
              <div className="order-2 md:order-1">
              <Image width={483} height={590} src="/mon3.png" alt="" />
              </div>
              <div className="order-1 md:order-2 p-16">
                <Image src="/lambu.png" width={32} height={56} alt="lambu" className="mb-10" />
                <h1 className="font-36 font-inter font-bold leading-10">
                  Data Integrity & Completeness
                </h1>
                <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                  Optimize your AI/ML models effortlessly with our Monitoring
                  Hub. Our user-friendly platform allows enterprises to easily
                  monitor model performance and data integrity in real-time,
                  enabling quick optimization and accurate predictions. With
                  customizable dashboards and intuitive interfaces,
                  implementation is seamless, ensuring rapid integration into
                  existing workflows
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-36 mt-20">
              <div className="order-2 md:order-2 flex justify-end">
              <Image width={483} height={590} src="/mon4.png" alt="" />
              </div>
              <div className="order-1 md:order-1 p-16">
                <Image src="/lambu.png" width={32} height={56} alt="lambu" className="mb-10" />
                <h1 className="font-36 font-inter font-bold leading-10">
                  Data Integrity & Completeness
                </h1>
                <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                  Optimize your AI/ML models effortlessly with our Monitoring
                  Hub. Our user-friendly platform allows enterprises to easily
                  monitor model performance and data integrity in real-time,
                  enabling quick optimization and accurate predictions. With
                  customizable dashboards and intuitive interfaces,
                  implementation is seamless, ensuring rapid integration into
                  existing workflows
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-t-[#000000] border-b-0 border-l-0 border-r-0 border-opacity-[12%] monbg">
        <div className="widthclass ">
          <div className="flex flex-col justify-center items-center text-center p-16   pt-20 pb-20">
            <h1 className="font-36 font-inter font-bold leading-10">
              Monitoring Hub
            </h1>
            <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
              Optimize your AI/ML models effortlessly with our Monitoring Hub.
              Our user-friendly platform allows enterprises to easily monitor
              model performance and data integrity in real-time, enabling quick
              optimization and accurate predictions. With customizable
              dashboards and intuitive interfaces, implementation is seamless,
              ensuring rapid integration into existing workflows
            </p>
            <button className="font-20 font-normal font-inter leading-6 bg-[#042440] white rounded-[8px] w-[214px] h-[52px] flex gap-3 justify-center items-center">
              Book a Demo
              <Image width={24} height={24} src="/free.png" className="w-[26px]" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
