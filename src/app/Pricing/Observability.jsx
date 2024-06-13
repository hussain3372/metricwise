"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Obsevability = () => {
  const [isInference, setIsInference] = useState(false);
  const [isPerformance, setIsPerformance] = useState(false);
  const [isFeature, setIsFeature] = useState(false);
  const [isBenchmarking, setIsBenchmarking] = useState(false);

  return (
    <div>
      {/* Model Inference */}
      <div className="mt-10 shadow-sm rounded-lg">
        <button
          onClick={() => setIsInference(!isInference)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Model Overview</div>
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
              <div>Feature Importance & Distribution</div>
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
              <div>Class Imbalance</div>
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
              <div>Adversarial Monitoring</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
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
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Drift Tracing</div>
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
              <div>Bias Tracing</div>
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
      {/* Benchmarking and Baselining */}
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsBenchmarking(!isBenchmarking)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Over Time</div>
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
              <div>Over Different Datasets</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 bg-[#F4F4F4] rounded-md">
              <div>Over Different Models</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5  rounded-md">
              <div>Benchmarking</div>
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
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsFeature(!isFeature)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Q&A Accuracy</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div>Context Accuracy</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 bg-[#F4F4F4] rounded-md">
              <div>Toxicity</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div>Summarization</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Hallucination</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center"></div>
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
