"use client";

import React from "react";
import { dataType } from "../../data/trust"; // Ensure this path is correct
import Image from "next/image";

const DataTypecard = () => {
  return (
    <div className="">
      <div className="bg-[url('/type1-framebg.svg')] bg-no-repeat bg-center bg-cover px-5 sm:px-10 lg:pr-5 lg:pl-[77px] py-[95px]">
        <div className="grid lg:grid-cols-2 space-y-20 md:space-y-0 items-center widthclass">
          <div className="p-10 rounded-[24px] bg-[#E6E9EC] shadow-[0px_4px_24px_0_rgb(0,0,0,0.24)]">
            <h1 className="font-36 font-bold leading-10">Tabular</h1>
            <p className="font-16 textcolor font-normal leading-5 mt-10">
              Identify drift and monitor key metrics to ensure accuracy,
              efficacy, and resilience of <br className="hidden md:block" />
              tabular models. <br />
              <br /> Scrutinize production data to maintain performance in
              real-world applications. <br />
              <br /> Get real-time notifications via Slack, MS Teams, or email
              for issues like data integrity, bias, or performance degradation.
              <br />
              <br /> Customize monitors and metrics to fit your specific use
              case and requirements. <br /> <br /> Use explainability to
              quantify individual feature impact in machine learning{" "}
              <br className="hidden md:block" /> workflows. <br />
              <br /> Enhance model interpretability and provide clear insights
              for stakeholders. <br />
              <br /> Analyze production data by slicing and dicing to identify
              the root cause of machine <br /> learning issues. <br />
              <br /> Uncover patterns and refine model performance through
              detailed analysis of
              <br />
              production data.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image src="/type1.png" width={595} height={568} alt="type1" />
          </div>
        </div>
      </div>

      <div className="bg-[url('/type2-framebg.svg')] bg-no-repeat bg-center bg-cover px-5 sm:px-10 lg:pr-5 lg:pl-[77px] py-[95px]">
      <div className="grid lg:grid-cols-2 space-y-20 md:space-y-0 items-center widthclass">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <Image src="/type2.png" width={633} height={609} alt="type1" />
          </div>
          <div className="p-10 rounded-[24px] bg-[#E6E9EC] shadow-[0px_4px_24px_0_rgb(0,0,0,0.24)] order-1 lg:order-2">
            <h1 className="font-36 font-bold leading-10">Text</h1>
            <p className="font-16 textcolor font-normal leading-5 mt-10">
              Implement robust monitoring for unstructured models to handle
              high-dimensional vectors and ensure stability. <br />
              <br />
              Address unique challenges of monitoring unstructured data by
              tailoring mechanisms to its complexity.
              <br />
              <br />
              Enhance business decision-making by connecting unstructured model
              outcomes to key KPIs.
              <br />
              <br />
              Incorporate explainability, fairness, and toxicity assessments to
              boost confidence in unstructured model decisions.
              <br />
              <br />
              Monitor NLP and textual data to detect data distribution shifts
              and maintain performance.
              <br />
              <br />
              Compare baseline and production data to identify variations
              affecting model performance.
              <br />
              <br />
              Quantify data and concept drift to enhance the adaptability of NLP
              models in dynamic environments.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-l to-[#CFC2FF99] from-[#FFF0BC99] py-20 px-5 sm:px-10 lg:px-[165px] rounded-lg">
        <div className="md:flex justify-between items-center text-white space-y-10 md:space-y-0 widthclass">
          <div>
            <h1 className="font-48 font-semibold leaindg-12 text-black text-center">
              Get Started Now
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 z-20">
            <button className="border border-[#000000] rounded-[10px] bg-transparent text-black px-10 py-4 font-16 font-bold leading-6">
              Learn More
            </button>
            <button className="border border-[##2E2E2E] rounded-[10px] bg-[#2E2E2E] text-white px-10 py-4 font-16 font-bold leading-6">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[url('/type1-framebg.svg')] bg-no-repeat bg-center bg-cover px-5 sm:px-10 lg:pr-5 lg:pl-[77px] py-[95px]">
        <div className="grid xl:grid-cols-2 space-y-20 md:space-y-0 items-center widthclass">
          <div className="p-10 rounded-[24px] bg-[#E6E9EC] shadow-[0px_4px_24px_0_rgb(0,0,0,0.24)]">
            <h1 className="font-36 font-bold leading-10">LLM</h1>
            <p className="font-16 textcolor font-normal leading-5 mt-10">
              Monitor and track LLM embeddings to ensure value and reduce
              hallucinations.
              <br />
              <br />
              Quickly identify anomalies in LLMs to maintain quality and
              reliability.
              <br />
              <br />
              Make prompt adjustments to fine-tune LLMs for optimal performance.
              <br />
              <br />
              Ensure robustness and accuracy of LLMs in real-world use-cases.
              <br />
              <br />
              Use a unified dashboard to monitor LLM activities like data
              behavior, hallucinations, and contextual precision.
              <br />
              <br />
              Ensure swift responses to maintain high accuracy and performance
              in LLMs.
              <br />
              <br />
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image src="/type3.png" width={595} height={568} alt="type1" />
          </div>
        </div>
      </div>

      <div className="bg-[url('/type2-framebg.svg')] bg-no-repeat bg-center bg-cover px-5 sm:px-10 lg:pl-5 lg:pr-[77px] py-[95px]">
        <div className="grid xl:grid-cols-2 space-y-20 md:space-y-0 items-center widthclass">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <Image src="/type4.png" width={633} height={609} alt="type1" />
          </div>
          <div className="p-10 rounded-[24px] bg-[#E6E9EC] shadow-[0px_4px_24px_0_rgb(0,0,0,0.24)] order-1 lg:order-2">
            <h1 className="font-36 font-bold leading-10">Images</h1>
            <p className="font-16 textcolor font-normal leading-5 mt-10">
              Implement continuous monitoring to track data drift and ensure
              relevance in Computer Vision models.
              <br />
              <br />
              Detect model degradation and biases in object detection and
              classification to maintain accuracy and fairness.
              <br />
              <br />
              Monitor evolving data patterns to deliver optimal model
              performance across diverse scenarios.
              <br />
              <br />
              Gain a consolidated view of all vision models for enhanced
              oversight and management.
              <br />
              <br />
              Scrutinize pixel-level data integrity and detect changes in
              precision and accuracy in vision models.
              <br />
              <br />
              Use centralized insights for effective decision-making and
              sustained performance.
              <br />
              <br />
              Collaboratively assess drift, visualize features, and explore
              embedding projections with explainability insights.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTypecard;
