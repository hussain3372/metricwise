"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const ExploreAccordion = () => {
  const [isPlatform, setIsPlatform] = useState(false);
  const [isScale, setIsScale] = useState(false);
  const [isData, setIsData] = useState(false);
  const [isModels, setIsModels] = useState(false);

  return (
    <div>
      {/* Platform Deployment */}
      <div className="mt-14 shadow-sm rounded-lg">
        <button
          onClick={() => setIsPlatform(!isPlatform)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
        >
          <div className="flex justify-between items-center">
            Platform Deployment
            {isPlatform ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
        {isPlatform && (
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>SaaS</div>
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
              <div>Client VPC</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Scale */}
      <div className="mt-5 shadow-lg rounded-lg">
        <button
          onClick={() => setIsScale(!isScale)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
        >
          <div className="flex justify-between items-center">
            Scale
            {isScale ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
        {isScale && (
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div># of Hubs</div>
              <div className="flex justify-center items-center">1</div>
              <div className="flex justify-center items-center">1</div>
              <div className="flex justify-center items-center">
                Custom hubs
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div># of Spaces</div>
              <div className="flex justify-center items-center">1</div>
              <div className="flex justify-center items-center">1</div>
              <div className="flex justify-center items-center">
                Custom Spaces
              </div>
            </div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div># of Users</div>
              <div className="flex justify-center items-center">1</div>
              <div className="flex justify-center items-center">Up to 5</div>
              <div className="flex justify-center items-center">
                Custom Users
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div># of Predictions</div>
              <div className="flex justify-center items-center">
                500k per month
              </div>
              <div className="flex justify-center items-center">
                10M per Month
              </div>
              <div className="flex justify-center items-center">
                Custom Predictions
              </div>
            </div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div># of Features or columns</div>
              <div className="flex justify-center items-center">
                150 Features
              </div>
              <div className="flex justify-center items-center">
                300 Features
              </div>
              <div className="flex justify-center items-center">
                Custom Features
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Data */}
      <div className="mt-5 shadow-lg rounded-lg">
        <button
          onClick={() => setIsData(!isData)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
        >
          <div className="flex justify-between items-center">
            Data
            {isData ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
        {isData && (
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Data Storage</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">60GB/Month</div>
              <div className="flex justify-center items-center">
                Custom Storage
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div>Data Retention</div>
              <div className="flex justify-center items-center">6 Months</div>
              <div className="flex justify-center items-center">12 Months</div>
              <div className="flex justify-center items-center">
                Custom data retention
              </div>
            </div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Real-time metrics</div>
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
              <div>Streaming and batch data</div>
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
              <div>Data types(Tabular, text, image data)</div>
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
      {/* AI/ML Models */}
      <div className="mt-5 shadow-lg rounded-lg">
        <button
          onClick={() => setIsModels(!isModels)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
        >
          <div className="flex justify-between items-center">
          AI/ML Models
            {isModels ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
        {isModels && (
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Model Comparison</div>
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
              <div>Training data baseline monitoring</div>
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
              <div>All common model types</div>
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
              <div>Large language  Models (LLM)</div>
              <div className="flex justify-center items-center">
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Embeddings</div>
              <div className="flex justify-center items-center">
                
              </div>
              <div className="flex justify-center items-center">
                
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

export default ExploreAccordion;
