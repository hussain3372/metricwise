"use client";

import React, { useState } from "react";
import Head from "next/head";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-10 font-16 font-inter font-normal leading-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-[#FFFFFF] font-20 font-inter font-normal leading-6 shadow-lg"
      >
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <span>{isOpen ? "-" : "+"}</span>
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
    <div>
      <div className="faq relative">
        <div className="flex items-center widthclass">
          <h1 className="text-white pl-16 pt-16 font-24 font-normal font-inter">
            Metricwise{" "}
            <span className="text-white font-24 font-normal font-inter opacity-50">
              &gt; Resources &gt; FAQ's
            </span>
          </h1>
          <div className="absolute top-8">
            <img src="hr1.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col pt-36 pb-64 justify-center items-center m-auto text-white widthclass">
          <h1 className="font-64 font-inter font-bold leading-[80px] mb-8">
            We are here to help you
          </h1>
          <div className="relative">
            <input
              type="text"
              className="bg-[#FFFFFF] shadow-lg rounded-xl w-[290px] sm:w-[500px] md:w-[700px] xl:w-[800px] h-[60px] sm:h-[72px] p-6 pl-16 pr-24 textcolor"
              placeholder="Ask a question..."
            />
            <div className="absolute top-4 sm:top-5 pl-3">
              <img src="search.png" alt="" />
            </div>
            <div className="absolute top-3 sm:top-4 right-0 pr-3">
              <button className="font-16 fontregular leading-5 text-white bg-[#042440] pt-2 pb-2 pl-3 pr-3 rounded-[8px]">
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
          <div>
            <div className="min-h-screen p-6 bg-white">
              <Head>
                <title>FAQ - Metricwise</title>
              </Head>
              <main className=" mx-auto">
                <Accordion items={accordionItems} />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
