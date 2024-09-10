"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Tilt from "react-parallax-tilt";
import { Fade, Zoom } from "react-awesome-reveal";

const AccordionItem = ({ title, content, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-5 mb-8 font-18 font-inter font-normal leading-6 border border-[#0000001F] rounded-lg shadow-[0_3px_5px_rgb(0,0,0,0.2)] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 pt-4 pb-4 bg-[#FFFFFF] text-[#00000099] font-20 font-light leading-5"
      >
        <div className="flex justify-between items-center">
          <span className="text-[#402604] font-20 font-normal">{title}</span>
          <span>
            {isOpen ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 bg-white font-normal text-[#00000099]">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>

          {/* Render the list if present */}
          {list && list.length > 0 && (
            <div>
              <ul className="mt-5 list-disc list-inside space-y-2">
                {list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
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
      title: "What is Metricwise?",
      content:
        "Metricwise serves as a platform for monitoring, observability, and governance, empowering AI practitioners with confidence in their AI endeavors. We simplify the process of model monitoring, offering real-time insights into both model and data health. Our platform facilitates context-driven, comprehensive, and continuous governance, oversight, and accountability of AI systems.",
      list: [
        "How is the model performing in real-time?",
        "Does the accuracy align with training expectations?",
        "Are variations in data quality impacting model outcomes?",
        "What alterations occurred in the model's behavior over time?",
        "Can the application explain the specifics of a particular prediction?",
        "Which features exerted the most significant influence on a given prediction?",
        "How is fairness maintained across various data subgroups?",
        "Is the model in compliance with regulatory requirements?",
      ],
    },
    {
      title: "What can be done with Metricwise?",
      content:
        "We integrate security efforts throughout the Agile release cycle and conduct continuous security and vulnerability scanning.",
        list: [
          "Monitor the real-time quality and health of both data and models.",
          "Establish a connection between predictions and contextual alignment with business values",
          "Ensure the clarity, reliability, and accuracy of every Large Language Model (LLM) response.",
          "Establish a baseline for tracking the behavior of models over time.",
          "Develop tailored dashboards for each of your production models.",
          "Apply governance effectively to unleash the full potential of your AI systems.",
          "Assign, monitor, and track controls for behavior and performance, effortlessly storing evidence and generating reports for various AI use cases.",
          "Visualize the risk posture of your AI applications, allowing you to identify critical areas that require prioritized governance measures.",
        ],
    },
    {
      title: "How can I begin using Metricwise?",
      content:
        "Starting your journey with Metricwise is both easy and straightforward. Dive into the Metricwise platform by registering for a free Basic Plan account. Explore the documentation available here, or feel free to contact us at info@metricwise.ai for additional details.",
    },
    {
      title: "How can I establish a partnership with Metricwise?",
      content:
        "Feel free to reach out to us; you can email us at sales@metricwise.ai.",
    },
    {
      title: "Can I access Metricwise without any charges?",
      content:
        "Absolutely! There are two options for using Metricwise at no cost.<br><br> The Metricwise Basic plan is currently free and will remain so indefinitely, allowing you to manage two projects.<br>This plan provides all the advantages of monitoring your model performance, coupled with data profiling and various other fantastic features, all at no cost.<br> <br> Additionally, the Metricwise Enterprise plan comes with a tailored free trial period designed to meet your specific needs.<br>Feel free to contact us, and we will be delighted to arrange a customized trial period for you.",
    },
    {
      title: "What integrations do you support?",
      content:
        "Our practices include monitoring containers, VM images, and network traffic, and engaging external organizations for penetration tests.",
    },
    {
      title: "How do I get started?",
      content:
        "Click here to register for a free account and kickstart your journey! The platform will guide you through the process in just a few minutes. <br> <br>If you prefer an overview of the process, check out the Getting Started guide available in the documentation center <br> <br> .Alternatively, contact us to arrange acall with our team. We're delighted to assist you in gaining more insights.",
    },
    {
      title: "What kinds of data can I use?",
      content:
        "Our platform accommodates both structured and unstructured data, including tabular, text, images, time series, and more.",
    },
    {
      title: "What integrations do you support?",
      content:
        "Our platform seamlessly integrates with your current data pipelines and ML deployment tools. For additional information on integrations, please visit this page.",
    },
    {
      title: "How to upgrade your plan?",
      content:
        "Upgrading becomes a breeze when you're ready to progress beyond the Basic plan! When you decide to monitor additional projects,  or add more users, you can simply choose the Specialist plan in your profile or contact us  to discuss your account upgrade for the Enterprise upgrade.",
    },
  ];

  return (
    <div className="">
      <div className="faq">
        <div className=" relative">
          <div className="flex flex-col pt-10 md:pt-40 pb-2 md:pb-14 justify-center items-center m-auto text-black widthclass">
            <h1 className="font-64 font-bold leading-[80px] mb-8">
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
                <button className="font-16 font-normal leading-5 text-white bg-[#042440] pt-2 pb-2 pl-3 pr-3 rounded-[8px]">
                  Search
                </button>
              </div>
            </div>
            <h5 className="font-24 font-normal opacity-60 leading-7 mt-6 text-center">
              We are Collecting your search keywords to improve our FAQs.
            </h5>
            <h1 className="font-40 font-bold leading-[60px] mt-10">FAQ’s</h1>
          </div>
        </div>

        <div className="widthclass">
          <div>
            <div>
              <div className="px-7">
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
    </div>
  );
};

export default Faq;
