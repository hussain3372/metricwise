"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Obsevability = () => {
  const [isInference, setIsInference] = useState(true);
  const [isPerformance, setIsPerformance] = useState(true);
  const [isFeature, setIsFeature] = useState(true);
  const [isBenchmarking, setIsBenchmarking] = useState(true);

  return (
    <div>
      {/* Model Inference */}
      <div className="mt-10 shadow-sm rounded-lg">
        <button
          onClick={() => setIsInference(!isInference)}
          className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
        >
          <div className="flex justify-between items-center">
            Model Inference
            {isInference ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
        {isInference && (
          <div className="border border-[#0000001F] mt-3">
            <div className="grid grid-cols-4">
              <div className="border-r border-[#0000001F] p-5">Model Overview</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">Feature Importance & Distribution</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">Class Imbalance</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">Adversarial Monitoring</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center ">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Bias & Drift Tracing */}
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsPerformance(!isPerformance)}
          className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
        >
          <div className="flex justify-between items-center">
            Bias & Drift Tracing
            {isPerformance ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
        {isPerformance && (
          <div className="border border-[#0000001F] mt-3">
            <div className="grid grid-cols-4">
              <div className="border-r border-[#0000001F] p-5">Drift Tracing</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">Bias Tracing</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Benchmarking and Baselining */}
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsBenchmarking(!isBenchmarking)}
          className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
        >
          <div className="flex justify-between items-center">
            Benchmarking and Baselining
            {isBenchmarking ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
        {isBenchmarking && (
          <div className="border border-[#0000001F] mt-3">
            <div className="grid grid-cols-4">
              <div className="border-r border-[#0000001F] p-5">Over Time</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">Over Different Datasets</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">Over Different Models</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">Benchmarking</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
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
            LLM Assessment
            {isFeature ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
        {isFeature && (
          <div className="border border-[#0000001F] mt-3">
            <div className="grid grid-cols-4 ">
              <div className="border-r border-[#0000001F] p-5">Q&A Accuracy</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">Context Accuracy</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">Toxicity</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">Summarization</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">Hallucination</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
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

export default Obsevability;
