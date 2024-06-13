"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Monitoring = () => {
  const [isIntegrity, setIsIntegrity] = useState(false);
  const [isPerformance, setIsPerformance] = useState(false);
  const [isFeature, setIsFeature] = useState(false);
  const [isDetection, setIsDetection] = useState(false);

  return (
    <div>
      {/* Platform Deployment */}
      <div className="mt-10 shadow-md rounded-lg">
        <button
          onClick={() => setIsIntegrity(!isIntegrity)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Data Integrity Checks</div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div>Data Quality Checks</div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Data Schema Validation</div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Model Performance */}
      <div className="mt-5 shadow-lg rounded-lg">
        <button
          onClick={() => setIsPerformance(!isPerformance)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Model Monitoring</div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div>Model Inference Time</div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Embeddings monitoring</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Feature Performance */}
      <div className="mt-5 shadow-lg rounded-lg">
        <button
          onClick={() => setIsFeature(!isFeature)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Feature Monitoring</div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div>Feature Statistics</div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Anomaly Detection */}
      <div className="mt-5 shadow-lg rounded-lg">
        <button
          onClick={() => setIsDetection(!isDetection)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Outlier Detection</div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div>Root Cause Analysis</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Monitoring;
