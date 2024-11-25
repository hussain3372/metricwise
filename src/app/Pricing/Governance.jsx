"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Governance = () => {
  const [isInference, setIsInference] = useState(true);
  const [isPerformance, setIsPerformance] = useState(true);
  const [isFeature, setIsFeature] = useState(true);
  const [isBenchmarking, setIsBenchmarking] = useState(true);
  const [isCompliance, setIsCompliance] = useState(true);
  const [isSupport, setIsSupport] = useState(true);

  return (
    <div>
      {/* Explainability */}
      <div className="mt-10 shadow-sm rounded-lg">
        <button
          onClick={() => setIsInference(!isInference)}
          className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg "
        >
          <div className="flex justify-between items-center">
            Explainability
            {isInference ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
        {isInference && (
          <div className="border border-[#0000001F] mt-3">
            {/* 1 */}
            <div className="grid grid-cols-4">
              <div className="border-r border-[#0000001F] p-5">Model Explainability & Interpretability</div>
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
            {/* 2 */}
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">Model Fairness</div>
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
          </div>
        )}
      </div>
      {/* Security & Privacy */}
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsPerformance(!isPerformance)}
          className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg "
        >
          <div className="flex justify-between items-center">
            Security & Privacy
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
              <div className="border-r border-[#0000001F] p-5">PII Detection</div>
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
              <div className="border-r border-[#0000001F] p-5">Data Completeness </div>
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
              <div className="border-r border-[#0000001F] p-5">Data Corruption </div>
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
              <div className="border-r border-[#0000001F] p-5">Data Encryption / Pseudonymisation</div>
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
          </div>
        )}
      </div>
      {/* Compliance Monitoring */}
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsBenchmarking(!isBenchmarking)}
          className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg "
        >
          <div className="flex justify-between items-center">
            Compliance Monitoring
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
              <div className="border-r border-[#0000001F] p-5">Against AI Standards & Regulations</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">Control Performance Assessment</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">Audit evidence Collection</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Security */}
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsFeature(!isFeature)}
          className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg "
        >
          <div className="flex justify-between items-center">
            Security
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
              <div className="border-r border-[#0000001F] p-5">RBAC</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">SSO</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Compliance */}
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsCompliance(!isCompliance)}
          className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg "
        >
          <div className="flex justify-between items-center">
          Compliance
            {isCompliance ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
        {isCompliance && (
          <div className="border border-[#0000001F] mt-3">
            <div className="grid grid-cols-4 ">
              <div className="border-r border-[#0000001F] p-5">SOC 2 Certified</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">PII filtration (on demand)</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">HIPAA compliance</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Support */}
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsSupport(!isSupport)}
          className="w-full text-left p-4 bg-[#F4F4F4] font-20 font-inter font-normal leading-6 rounded-lg "
        >
          <div className="flex justify-between items-center">
          Support
            {isSupport ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
        {isSupport && (
          <div className="border border-[#0000001F] mt-3">
            <div className="grid grid-cols-4 ">
              <div className="border-r border-[#0000001F] p-5">Support (Email and Slack)</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">24x7 support engineering</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">SLA</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#0000001F]">
              <div className="border-r border-[#0000001F] p-5">Customer Support Engineering</div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5"></div>
              <div className="flex justify-center items-center border-r border-[#0000001F] p-5">
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

export default Governance;
