"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Monitoring = () => {
  const [isIntegrity, setIsIntegrity] = useState(true);
  const [isPerformance, setIsPerformance] = useState(true);
  const [isFeature, setIsFeature] = useState(true);
  const [isDetection, setIsDetection] = useState(true);

  return (
    <div>
      {/* Data Integrity & Completeness */}
      <div className="mt-14 shadow-sm rounded-lg">
        <button
          onClick={() => setIsIntegrity(!isIntegrity)}
          className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
        >
          <div className="flex justify-between items-center">
            Data Integrity & Completeness
            {isIntegrity ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
        {isIntegrity && (
          <div className="border border-[#0000001F] mt-2">
            {[
              { title: "Data Integrity Checks" },
              { title: "Data Quality Checks" },
              { title: "Data Schema Validation" },
            ].map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 border-t border-[#0000001F] ${
                  index === 0 ? "" : ""
                }`}
              >
                <div className="text-left border-r border-[#0000001F] p-5">
                  {item.title}
                </div>
                <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                  <Image width={20} height={20} src="/tick.png" alt="Tick" />
                </div>
                <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                  <Image width={20} height={20} src="/tick.png" alt="Tick" />
                </div>
                <div className="flex justify-center items-center p-5">
                  <Image width={20} height={20} src="/tick.png" alt="Tick" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Model Performance */}
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsPerformance(!isPerformance)}
          className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
        >
          <div className="flex justify-between items-center">
            Model Performance
            {isPerformance ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
        {isPerformance && (
          <div className="border border-[#0000001F] mt-2">
            {[
              { title: "Model Monitoring", showTick: true },
              { title: "Model Inference Time", showTick: true },
              { title: "Embeddings Monitoring", showTick: false },
            ].map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 border-t border-[#0000001F] ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <div className="text-left border-r border-[#0000001F] p-5">
                  {item.title}
                </div>
                <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                  {item.showTick && (
                    <Image width={20} height={20} src="/tick.png" alt="Tick" />
                  )}
                </div>
                <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                  {item.showTick && (
                    <Image width={20} height={20} src="/tick.png" alt="Tick" />
                  )}
                </div>
                <div className="flex justify-center items-center p-5">
                  <Image width={20} height={20} src="/tick.png" alt="Tick" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Feature Performance */}
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsFeature(!isFeature)}
          className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
        >
          <div className="flex justify-between items-center">
            Feature Performance
            {isFeature ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
        {isFeature && (
          <div className="border border-[#0000001F] mt-2">
            {[
              { title: "Feature Monitoring" },
              { title: "Feature Statistics" },
            ].map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 border-t border-[#0000001F] ${
                  index === 0 ? "" : ""
                }`}
              >
                <div className="text-left border-r border-[#0000001F] p-5">
                  {item.title}
                </div>
                <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                  <Image width={20} height={20} src="/tick.png" alt="Tick" />
                </div>
                <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                  <Image width={20} height={20} src="/tick.png" alt="Tick" />
                </div>
                <div className="flex justify-center items-center p-5">
                  <Image width={20} height={20} src="/tick.png" alt="Tick" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Anomaly Detection */}
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsDetection(!isDetection)}
          className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
        >
          <div className="flex justify-between items-center">
            Anomaly Detection
            {isDetection ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
        {isDetection && (
          <div className="border border-[#0000001F] mt-2">
            {[
              { title: "Outlier Detection", showTick: true },
              { title: "Root Cause Analysis", showTick: false },
            ].map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 border-t border-[#0000001F] ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <div className="text-left border-r border-[#0000001F] p-5">
                  {item.title}
                </div>
                <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                  {item.showTick && (
                    <Image width={20} height={20} src="/tick.png" alt="Tick" />
                  )}
                </div>
                <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                  <Image width={20} height={20} src="/tick.png" alt="Tick" />
                </div>
                <div className="flex justify-center items-center p-5">
                  <Image width={20} height={20} src="/tick.png" alt="Tick" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Monitoring;
