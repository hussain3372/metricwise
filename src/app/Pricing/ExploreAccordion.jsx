"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const ExploreAccordion = () => {
  const [isPlatform, setIsPlatform] = useState(true);
  const [isScale, setIsScale] = useState(true);
  const [isData, setIsData] = useState(true);
  const [isModels, setIsModels] = useState(true);

  return (
    <div>
  {/* Platform Deployment */}
  <div className="mt-14 shadow-sm rounded-lg">
    <button
      onClick={() => setIsPlatform(!isPlatform)}
      className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
      <div className="border border-[#0000001F] mt-2">
        {/* Table Row 1 */}
        <div className="grid grid-cols-4">
          <div className="text-left border-r border-[#0000001F] p-5">SaaS</div>
          <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
            <Image width={20} height={20} src="/tick.png" alt="Tick" />
          </div>
          <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
            <Image width={20} height={20} src="/tick.png" alt="Tick" />
          </div>
          <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
            <Image width={20} height={20} src="/tick.png" alt="Tick" />
          </div>
        </div>

        {/* Table Row 2 */}
        <div className="grid grid-cols-4 border-t border-[#0000001F]">
          <div className="text-left border-r border-[#0000001F] p-5">Client VPC</div>
          <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
          <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
          <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
            <Image width={20} height={20} src="/tick.png" alt="Tick" />
          </div>
        </div>
      </div>
    )}
  </div>

  {/* Scale */}
  <div className="mt-5 shadow-sm rounded-lg">
    <button
      onClick={() => setIsScale(!isScale)}
      className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
      <div className="border border-[#0000001F] mt-2">
        <div className="grid grid-cols-4">
          <div className="text-left border-r border-[#0000001F] p-5"># of Hubs</div>
          <div className="flex justify-center items-center border-r border-[#0000001F] p-5">1</div>
          <div className="flex justify-center items-center border-r border-[#0000001F] p-5">1</div>
          <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
            Custom hubs
          </div>
        </div>
        {/* Add other rows following this pattern */}
      </div>
    )}
  </div>

  {/* Data */}
  <div className="mt-5 shadow-sm rounded-lg">
    <button
      onClick={() => setIsData(!isData)}
      className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
      <div className="border border-[#0000001F] mt-2">
        <div className="grid grid-cols-4">
          <div className="text-left border-r border-[#0000001F] p-5">Data Storage</div>
          <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
          <div className="flex justify-center items-center border-r border-[#0000001F] p-5">60GB/Month</div>
          <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
            Custom Storage
          </div>
        </div>
        {/* Add other rows following this pattern */}
      </div>
    )}
  </div>

  {/* AI/ML Models */}
  <div className="mt-5 shadow-sm rounded-lg">
    <button
      onClick={() => setIsModels(!isModels)}
      className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
      <div className="border border-[#0000001F] mt-2">
        <div className="grid grid-cols-4">
          <div className="text-left border-r border-[#0000001F] p-5">Model Comparison</div>
          <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
            <Image width={20} height={20} src="/tick.png" alt="Tick" />
          </div>
          <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
            <Image width={20} height={20} src="/tick.png" alt="Tick" />
          </div>
          <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
            <Image width={20} height={20} src="/tick.png" alt="Tick" />
          </div>
        </div>
        {/* Add other rows following this pattern */}
      </div>
    )}
  </div>
</div>

  );
};

export default ExploreAccordion;
