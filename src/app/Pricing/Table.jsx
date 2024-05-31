"use client";

import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-10 font-16 font-inter font-normal leading-6 shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg"
      >
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
      </button>
      {isOpen && (
        <div className="bg-white">
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>SaaS</div>
              <div className="flex justify-center items-center">
                <img src="tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <img src="tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <img src="tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div>Client VPC</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
                <img src="tick.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
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
      title: "Platform Deployment",
      content:
        "Metricwise is a company that prioritizes product security and adheres to Agile principles in its SDLC.",
    },
    {
      title: "Scale",
      content:
        "We integrate security efforts throughout the Agile release cycle and conduct continuous security and vulnerability scanning.",
    },
    {
      title: "Data",
      content:
        "Our practices include monitoring containers, VM images, and network traffic, and engaging external organizations for penetration tests.",
    },
    {
      title: "Data",
      content:
        "Our practices include monitoring containers, VM images, and network traffic, and engaging external organizations for penetration tests.",
    },
    {
      title: "AI/ML Models",
      content:
        "Our practices include monitoring containers, VM images, and network traffic, and engaging external organizations for penetration tests.",
    },
  ];

  return (
    <div>
      <div className="widthclass">
        <ul className="flex items-center justify-around mt-10">
          <li className="font-20 fontsemibold leading-6 opacity-60">
            Features
          </li>
          <li className="font-20 fontsemibold leading-6 opacity-60">Basic</li>
          <li className="font-20 fontsemibold leading-6 opacity-60">
            Specialist
          </li>
          <li className="font-20 fontsemibold leading-6 opacity-60">
            Enterprise{" "}
          </li>
        </ul>
        <div>
          <div>
            <div className="p-6 bg-white">
              <main className=" mx-auto">
                <Accordion items={accordionItems} />
              </main>
            </div>
          </div>
          <div>
            <h1 className="font-36 font-inter  font-bold leading-10 flex justify-center items-center">
              Monitoring Hub
            </h1>
            <div className="p-6 bg-white">
              <main className=" mx-auto">
                <Accordion items={accordionItems} />
              </main>
            </div>
          </div>
          <div>
            <h1 className="font-36 font-inter  font-bold leading-10 flex justify-center items-center">
            Observability Hub
            </h1>
            <div className="p-6 bg-white">
              <main className=" mx-auto">
                <Accordion items={accordionItems} />
              </main>
            </div>
          </div>
          <div>
            <h1 className="font-36 font-inter  font-bold leading-10 flex justify-center items-center">
            Governance Hub
            </h1>
            <div className="p-6 bg-white">
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
