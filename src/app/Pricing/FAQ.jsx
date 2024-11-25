"use client";

import React, { useState } from "react";
import Head from "next/head";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-10 font-16 font-inter font-normal leading-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-[#FFFFFF] font-20 font-inter font-normal leading-6 shadow-lg border border-[#0000001F] rounded-lg"
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
      title: "Can I access Metricwise without any charges?",
      content:
        "Absolutely! There are two options for using Metricwise at no cost. The Metricwise Basic plan is currently free and will remain so indefinitely, allowing you to manage two projects. This plan provides all the advantages of monitoring your model performance, coupled with data profiling and various other fantastic features, all at no cost. Additionally, the Metricwise Enterprise plan comes with a tailored free trial period designed to meet your specific needs. Feel free to contact us, and we will be delighted to arrange a customized trial period for you",
    },
    {
      title: "How do I get started?",
      content:
        "Click here to register for a free account and kickstart your journey! The platform will guide you through the process in just a few minutes.If you prefer an overview of the process, check out the Getting Started guide available in the documentation center. Alternatively, contact us to arrange a call with our team. We're delighted to assist youaining more insights.",
    },
    {
      title: "How to upgrade your plan?",
      content:
        "Upgrading becomes a breeze when you're ready to progress beyond the Basic plan! When you decide to monitor additional projects,  or add more users, you can simply choose the Specialist plan in your profile or contact us  to discuss your account upgrade for the Enterprise upgrade.",
    },
    {
      title: "How can I access support for Metricwise?",
      content:
        "For our Basic and Specialist customers, there are two avenues for assistance: opening a support ticket or posing a question in the community Slack. To initiate a ticket, log in to your Metricwise account, go to the top left-hand side, and select Support Center.Follow the prompts to submit your support request. To ask a question via Slack, join the Metricwise Slack Community.For Enterprise customers, you can use the two methods listed above, in addition to this we offer around-the-clock support availability, complemented by dedicated customer support engineers to assist them with their challenges and issues.",
    },
    {
      title: "Which payment methods are accepted?",
      content:
        "For the Specialist and Enterprise plans, we currently accept credit card payments through the Metricwise Platform, as well as ACH or wire payments. If you prefer, you can also contact us for a private offer. For inquiries regarding alternative payment options, please reach out to us at support@metricwise.ai.",
    },
    {
      title: "Has Metricwise obtained SOC 2 certification?",
      content:
        "Absolutely, Metricwise has successfully undergone our SOC 2 Type 2 examination without any exceptions. If you'd like to receive our SOC 2 Type 2 report, please reach out to us at support@metricwise.ai. For further insights into security at Metricwise, feel free to explore the data security and privacy page.",
    },
    {
      title: "How can I determine the amount of data required?",
      content:
        "To estimate the volume of data you'll be sending, calculate the size of the baseline data, model prediction volume, and the size of the model features and artifacts for each of your models, then aggregate these values.",
    },
    {
      title: "Is the pricing model for Metricwise based on consumption?",
      content:
        "No, a pre-commitment to a monthly volume is required, and users will baseline their usage throughout the duration of an annual commitment.",
    },
    {
      title: "What additional data does Metricwise gather?",
      content:
        "Metricwise refrains from collecting any additional data. All customer data is treated as confidential and Metricwise securely backs up the customer's encrypted data to guarantee its safety. For additional details, please refer to our data security and privacy page.",
    },
    {
      title: "What is the data retention policy of Metricwise?",
      content:
        "The data retention policy varies depending on the chosen plan. The Basic plan retains data for a period of 6 months, while the Specialist plan retains data for 12 months. Enterprise plan customers have the flexibility to select the duration of their data retention.",
    },
  ];

  return (
    <div>
      <div className="widthclass">
        <div>
          <div className="mt-16">
            <h1 className="font-36 font-inter  font-bold leading-10 flex justify-center items-center">
              FAQ’s
            </h1>

            <div className="p-6 bg-white">
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
