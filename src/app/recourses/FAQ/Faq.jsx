"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Tilt from "react-parallax-tilt";
import { Fade, Zoom } from "react-awesome-reveal";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-5 font-16 font-inter font-normal leading-6 border border-[#0000001F] rounded-lg shadow-[0_3px_5px_rgb(0,0,0,0.2)] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-[#FFFFFF] font-20 font-inter font-normal leading-6"
      >
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <span>
            {isOpen ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </span>
        </div>
      </button>
      {isOpen && <div className="p-4 bg-white">{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="rounded-md overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
};

const Faq = () => {
  const accordionItems = [
    {
      title: "What is Metricwise?",
      content:
        "Metricwise is a company that prioritizes product security and adheres to Agile principles in its SDLC.",
    },
    {
      title: "What can be done with Metricwise?",
      content:
        "We integrate security efforts throughout the Agile release cycle and conduct continuous security and vulnerability scanning.",
    },
    {
      title: "How can I begin using Metricwise?",
      content:
        "Our practices include monitoring containers, VM images, and network traffic, and engaging external organizations for penetration tests.",
    },
    {
      title: "How can I establish a partnership with Metricwise?",
      content:
        "Our practices include monitoring containers, VM images, and network traffic, and engaging external organizations for penetration tests.",
    },
    {
      title: "Can I access Metricwise without any charges?",
      content:
        "Our practices include monitoring containers, VM images, and network traffic, and engaging external organizations for penetration tests.",
    },
    {
      title: "What integrations do you support?",
      content:
        "Our practices include monitoring containers, VM images, and network traffic, and engaging external organizations for penetration tests.",
    },
    {
      title: "How do I get started?",
      content:
        "Our practices include monitoring containers, VM images, and network traffic, and engaging external organizations for penetration tests.",
    },
    {
      title: "What kinds of data can I use?",
      content:
        "Our practices include monitoring containers, VM images, and network traffic, and engaging external organizations for penetration tests.",
    },
    {
      title: "How to upgrade your plan?",
      content:
        "Our practices include monitoring containers, VM images, and network traffic, and engaging external organizations for penetration tests.",
    },
    {
      title: "How can I access support for Metricwise?",
      content:
        "Our practices include monitoring containers, VM images, and network traffic, and engaging external organizations for penetration tests.",
    },
    {
      title: "Which payment methods are accepted?",
      content:
        "Our practices include monitoring containers, VM images, and network traffic, and engaging external organizations for penetration tests.",
    },
    {
      title: "Has Metricwise obtained SOC 2 certification?",
      content:
        "Our practices include monitoring containers, VM images, and network traffic, and engaging external organizations for penetration tests.",
    },
  ];

  return (
    <div className="">
      <div className="faq relative">
        {/* <div className="flex items-center widthclass">
          <h1 className="text-black pl-16 pt-10 font-24 font-normal font-inter flex items-center flex-wrap gap-2">
            Metricwise
            <span className="text-black font-20 font-normal font-inter opacity-50 flex items-center gap-2">
              <PiGreaterThanLight /> Resources <PiGreaterThanLight /> FAQs
            </span>
          </h1>
        </div> */}
        <div className="flex flex-col pt-10 md:pt-40 pb-2 md:pb-20 justify-center items-center m-auto text-black widthclass">
          <h1 className="font-64 font-inter font-bold leading-[80px] mb-8">
            We are here to help you
          </h1>
          <div className="relative">
            <input
              type="text"
              style={{ boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)" }}
              className="relative rounded-xl w-[290px] sm:w-[500px] md:w-[700px] xl:w-[800px] h-[60px] sm:h-[72px] p-6 pl-16 pr-24 textcolor"
              placeholder="Ask a question..."
            />

            <div className="absolute top-4 sm:top-5 pl-3">
              <Image width={28} height={28} src="/search.png" alt="" />
            </div>
            <div className="absolute top-3 sm:top-4 right-0 pr-3">
              <button className="font-16 font-inter font-normal leading-5 text-white bg-[#042440] pt-2 pb-2 pl-3 pr-3 rounded-[8px]">
                Search
              </button>
            </div>
          </div>
          <h5 className="font-24 font-inter font-normal opacity-60 leading-7 mt-6 text-center">
            We are Collecting your search keywords to improve our FAQs.
          </h5>
          <h1 className="font-40 fontbold leading-[60px] mt-10">FAQ’s</h1>
        </div>
      </div>

      <div className="widthclass">
        <div>
          <Zoom>
            <div>
              <div className="px-7 py-20">
                <Head>
                  <title>FAQ - Metricwise</title>
                </Head>
                <main className=" mx-auto">
                  <Accordion items={accordionItems} />
                </main>
              </div>
            </div>
          </Zoom>
        </div>
      </div>

      <div className="widthclass p-3 md:p-16 flex-col flex justify-center items-center">
        <h1 className="font-40 fon-inter font-bold textcolor leading-[72px] mb-10">
          Support
        </h1>
        <Fade top>
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <Tilt>
              <div class="max-w-sm h-full rounded-lg border-2 border-[#EBECF2] flex flex-col justify-center items-center text-center p-7">
                <Image
                  width={55}
                  height={55}
                  class=""
                  src="/sup1.png"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-medium gont-inter font-20 leading-7 mb-2 mt-3">
                    Documentation:
                  </div>
                  <p class="text-gray-700 text-base">
                    Gain insights into how Metricwise operates and receive
                    assistance on common issues.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-[#042440] rounded-full px-8 py-2 text-sm font-semibold text-white mr-2 mb-2">
                    Head to Docs
                  </span>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div class="max-w-sm h-full rounded-lg overflow-hidden border-2 border-[#EBECF2] flex flex-col justify-center items-center text-center p-7">
                <Image
                  width={55}
                  height={55}
                  class=""
                  src="/sup2.png"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-medium gont-inter font-20 leading-7 mb-2 mt-3">
                    Demos:
                  </div>
                  <p class="text-gray-700 text-base">
                    Explore the features of Metricwise through brief and
                    informative video presentations.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-[#042440] rounded-full px-8 py-2 text-sm font-semibold text-white mr-2 mb-2">
                    Explore Demos
                  </span>
                </div>
              </div>
            </Tilt>

            <Tilt>
              <div class="max-w-sm h-full rounded-lg overflow-hidden border-2 border-[#EBECF2] flex flex-col justify-center items-center text-center p-7">
                <Image
                  width={55}
                  height={55}
                  class=""
                  src="/sup3.png"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-medium gont-inter font-20 leading-7 mb-2 mt-3">
                    Integrations:
                  </div>
                  <p class="text-gray-700 text-base">
                    Enable observability and governance for your ML model and
                    data monitoring.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-[#042440] rounded-full px-8 py-2 text-sm font-semibold text-white mr-2 mb-2">
                    Explore Guidebooks
                  </span>
                </div>
              </div>
            </Tilt>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Faq;
  