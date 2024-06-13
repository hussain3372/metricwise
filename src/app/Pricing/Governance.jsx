"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Governance = () => {
  const [isInference, setIsInference] = useState(false);
  const [isPerformance, setIsPerformance] = useState(false);
  const [isFeature, setIsFeature] = useState(false);
  const [isBenchmarking, setIsBenchmarking] = useState(false);
  const [isCompliance, setIsCompliance] = useState(false);
  const [isSupport, setIsSupport] = useState(false);

  return (
    <div>
      {/* Explainability */}
      <div className="mt-10 shadow-sm rounded-lg">
        <button
          onClick={() => setIsInference(!isInference)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
          <div>
            {/* 1 */}
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Model Explainability & Interpretability</div>
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
            {/* 2 */}
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div>Model Fairness</div>
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
      {/* Security & Privacy */}
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsPerformance(!isPerformance)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>PII Detection</div>
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
              <div>Data Completeness </div>
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
              <div>Data Corruption </div>
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
              <div>Data Encryption / Pseudonymisation</div>
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
      {/* Compliance Monitoring */}
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsBenchmarking(!isBenchmarking)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Against AI Standards & Regulations</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div>Control Performance Assessment</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 bg-[#F4F4F4] rounded-md">
              <div>Audit evidence Collection</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center"></div>
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
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>RBAC</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div>SSO</div>
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
      {/* Compliance */}
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsCompliance(!isCompliance)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>SOC 2 Certified</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div>PII filtration (on demand)</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>HIPAA compliance</div>
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
      {/* Support */}
      <div className="mt-5 shadow-sm rounded-lg">
        <button
          onClick={() => setIsSupport(!isSupport)}
          className="w-full text-left p-4 bg-[#DCEAF7] font-20 font-inter font-normal leading-6 rounded-lg border border-[#0000001F]"
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
          <div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>Support (Email and Slack)</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div>24x7 support engineering</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 bg-[#F4F4F4] p-5 rounded-md">
              <div>SLA</div>
              <div className="flex justify-center items-center"></div>
              <div className="flex justify-center items-center">
              </div>
              <div className="flex justify-center items-center">
                <Image width={20} height={20} src="/tick.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 rounded-md">
              <div>Customer Support Engineering</div>
              <div className="flex justify-center items-center"></div>
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

export default Governance;
