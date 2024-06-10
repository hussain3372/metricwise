"use client";

import Image from "next/image";
import React from "react";
import { PiGreaterThanLight } from "react-icons/pi";

const Term = () => {
  return (
    <div>
      <div className="bg-[#042440]">
        <div className="flex items-center widthclass">
          <h1 className="text-white pl-16 pt-16  font-24 font-normal font-inter flex items-center gap-2">
            Metricwise
            <span className="text-white font-24 font-normal font-inter opacity-50 flex items-center gap-2">
            <PiGreaterThanLight/> Resources <PiGreaterThanLight/> Blogs
            </span>
          </h1>
        </div>
        <div className="grid md:grid-cols-2 items-center white p-16 relative widthclass">
          <div>
            <div className="absolute -top-16 left-0">
              <Image width={138} height={138} src="/hrblack1.png" alt="" />
            </div>
            <h1 className="font-64 fontbold lg:leading-40 mb-5">
              Terms of Use 
            </h1>
            {/* <div className="absolute left-0 bottom-2">
              <Image width={108} height={136} src="/hr2.png" alt="" />
            </div> */}
          </div>
          <div className="flex justify-center md:justify-end mt-10 md:mt-0">
            <Image width={1246} height={517} src="/gov.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="p-16 widthclass">
        <h1 className="font-36 font-inter font-semibold leading-10">
          Terms and Use
        </h1>
        <div className="mt-16">
          <div>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              Welcome to Metricwise (the "Platform"). By accessing or using
              Metricwise, you agree to be bound by the following Terms of Use
              ("Terms"). If you do not agree with these Terms, please refrain
              from using Metricwise. Acceptance of Terms: By accessing or using
              Metricwise, you acknowledge that you are entering into a legal
              agreement with us and agree to comply with these Terms.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
              Changes to Terms
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              We reserve the right to modify these Terms at any time. Your
              continued use of Metricwise after any such changes indicates your
              acceptance of the modified Terms. Age Requirement: Metricwise is
              intended for individuals aged eighteen (18) years or older. If you
              are under eighteen (18) years, please do not use Metricwise.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
              Access and Account:
            </h1>
            <div>
              <ul className="list-disc pl-8 space-y-2 pb-6">
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  Access to Platform: We grant you permission to access and use
                  Metricwise, provided you comply with these Terms and
                  applicable laws.
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  Account Creation: Some services may require account creation.
                  You must provide accurate information and keep your account
                  secure. You are responsible for all activity that occurs under
                  your account.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">Payments:</h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              While access to Metricwise is currently free, we may charge fees
              in the future. Any applicable charges will be clearly
              communicated.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
              Prohibited Actions:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              You agree not to copy, distribute, modify, or disrupt Metricwise,
              or interfere with its security features. You also agree not to
              create an account for anyone else without permission
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
              Intellectual Property:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              The content and trademarks on Metricwise are owned by us or our
              licensors. You may only use the content for personal purposes with
              our consent.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
              Information Accuracy and Disclosure:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              We strive for accuracy but do not guarantee it. Your use of
              Metricwise is at your own risk. We may access and disclose
              information as necessary to comply with legal requirements or
              protect our interests.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
              Third-Party Links and Linking to Metricwise:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              Metricwise may contain links to third-party websites. We are not
              responsible for their content or practices. You may link to
              Metricwise as long as you comply with our guidelines. Privacy:
              Your use of Metricwise is subject to our Privacy Policy
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
              Warranty Disclaimer and Limitation of Liability:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              Metricwise is provided "as is" without warranties. We do not
              guarantee its availability or security. We are not liable for any
              damages arising from your use of Metricwise
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">Indenity:</h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              You agree to indemnify us from any claims arising from your use of
              Metricwise.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
              Termination and Survival:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              We may terminate these Terms or your access to Metricwise at any
              time. Certain provisions of these Terms will survive termination.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
              Independent Contractors:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              You and Metricwise are independent contractors.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">Governing Law:</h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              These Terms are governed by the laws of the state of Delaware. Any
              disputes will be resolved in the courts of Delaware.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
              Entire Agreement and Severability:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              These Terms constitute the entire agreement between you and us
              regarding Metricwise. If any provision of these Terms is found
              invalid, the remaining provisions will still apply.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
              Limitation on Claims:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              Any claim related to Metricwise must be brought within one year.
              By using Metricwise, you agree to these Terms. If you have any
              questions, please contact us at support@metricwise.ai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Term;
