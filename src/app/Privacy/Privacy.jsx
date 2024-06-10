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
             <PiGreaterThanLight/> Company <PiGreaterThanLight/> Privacy Policy
            </span>
          </h1>
        </div>
        <div className="grid md:grid-cols-2 items-center white pl-16 relative widthclass">
          <div>
            <div className="absolute -top-16 left-0">
            <Image width={138} height={138} src="/hrblack1.png" alt="" />
            </div>
            <h1 className="font-64 fontbold lg:leading-40 mb-5">
            Privacy Policy
            </h1>
            {/* <div className="absolute left-0 bottom-2">
              <img src="hr2.png" alt="" />
            </div> */}
          </div>
          <div className="flex justify-center md:justify-end mt-10 md:mt-0">
            <Image width={529} height={508} src="/policy.png" alt="" />
          </div>
        </div>
      </div>

      <div className="p-16 widthclass">
        <h1 className="font-36 font-inter font-semibold leading-10">
          Metricwise Inc Privacy Policy
        </h1>
        <div className="mt-16">
          <div>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              Welcome to MetricWise! Here, we explain how MetricWise AI, LLC.
              (“MetricWise”) gathers, uses, and shares information from visitors
              to our website metricwise.com (the “Site”).
              <br />
              <br />
              When you visit the Site, you agree to how we handle your personal
              information as described in this Policy. Any privacy concerns or
              disagreements are subject to this Policy and our Terms of Service,
              including its limits on damages and dispute resolution. You can
              find our Terms of Service on our website, and they are part of
              this Policy.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
              What We Collect About You
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              We gather information about you directly and automatically through
              your use of our Site.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
              Information Directly From You:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              While access to Metricwise is currently free, we may charge fees
              in the future. Any applicable charges will be clearly
              communicated.The details we collect depend on how you use our
              Site. To create an account, you’ll need to provide your email
              address.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
              Information Automatically Collected:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              We automatically collect data about how you use our Site using
              cookies, web beacons, and similar technologies. We combine this
              with other information, including personal details, where
              permitted by law. For more information, see the “Cookies and Other
              Tracking Mechanisms” section below. This includes:
            </p>
            <div>
              <ul className="list-disc pl-8 space-y-2 pb-6">
                <li className="font-20 font-normal font-inter leading-6 mt-5">
                  Domain name
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  Browser type and operating system
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  Web pages visited and links clicked
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  IP address
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  Time spent on the Site
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  Referring URL
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
              How We Use Your Information
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              We use your information, including personal details, for various
              purposes:
            </p>
            <div>
              <ul className="list-disc pl-8 space-y-2 pb-6">
                <li className="font-20 font-normal font-inter leading-6 mt-5">
                  Providing and improving our Site
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  Communicating with you about your use of the Site and
                  responding to your inquiries
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  Customizing content and experiences on the Site
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  Sending you email marketing and newsletters
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  Assisting with advertising and evaluating its success
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  Understanding how users interact with our Site
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  Research and analytics
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  Administering surveys
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  Complying with legal obligations
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  Investigating and preventing illegal activities or violations
                  of our Terms of Service or Policy
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                  We may also inform you about other purposes from time to time.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
            How We Share Your Information
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
            We may share your information, including personal details, with contractors or agents who help us operate our Site. We also share information in these situations:
            </p>
            <div>
              <ul className="list-disc pl-8 space-y-2 pb-6">
                <li className="font-20 font-normal font-inter leading-6 mt-5">
                Business Transfers: If MetricWise is involved in a business transfer, your information may be transferred as part of that process.
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                Legal Process: We may disclose your information in response to a legal request or to protect our rights or safety.
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                Aggregate Information: We share anonymized information about users for marketing, advertising, research, and similar purposes.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
            Our Use of Cookies and Other Tracking Mechanisms
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
            We and our third-party service providers use cookies and other tracking mechanisms to monitor your interaction with our Site. We may merge this data with other personal information collected from you (and our third-party service providers may do so on our behalf).
            </p>
            <div>
              <ul className="list-disc pl-8 space-y-2 pb-6">
                <li className="font-20 font-normal font-inter leading-6 mt-5">
                  <span className="font-24 font-inter font-semibold">Cookies:</span>These are alphanumeric identifiers transferred to your device’s hard drive through your web browser for record-keeping purposes. Some cookies facilitate navigation on our Site, while others expedite the login process or help us track your activities. There are two types: session and persistent cookies.
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                <span className="font-24 font-inter font-semibold">Session Cookies:</span>These exist only during an online session, disappearing when you close your browser or turn off your device. They enable us to identify you uniquely during a session or while logged in, facilitating online transactions and verifying your identity as you navigate our Site.
                </li>
                <li className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
                <span className="font-24 font-inter font-semibold">Persistent Cookies:</span>These remain on your device after browser closure or device shutdown, allowing us to track aggregate and statistical information about user activity.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
            Disabling Cookies:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
            While most web browsers automatically accept cookies, you can adjust your browser settings to block them in the future. The Help section of most browsers provides instructions on how to manage cookies. Disabling cookies may limit certain features, though browsing will still be possible.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
            Clear GIFs, Pixel Tags, and Other Technologies:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
            Clear GIFs, akin to cookies but embedded invisibly on web and app pages, are used to track user activities, manage content, and compile usage statistics. They are also employed in HTML emails to track email response rates, view times, and forwarding activities.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
            Third-Party Analytics:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
            We utilize automated devices like Google Analytics to assess Site usage, aiding in performance improvement. These tools may use cookies and other tracking technologies. To learn about Google’s privacy practices and opt-out options, refer to the Google Privacy Policy and the Google Analytics Opt-out Browser Add-on.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
            Cross-Device Use:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
            We and our third-party service providers, including Google, may utilize collected information to identify other devices you use, serving targeted advertising and emails. Opt-out instructions for cross-device advertising are provided in the Third Party Ad Networks section.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
            Do-Not-Track:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
            While our systems do not currently recognize browser "do-not-track" requests, you can disable certain tracking as discussed in this section or opt-out of targeted advertising through Third Party Ad Networks.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">Third-Party Links:</h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
            Links to third-party websites on our Site operate under their respective privacy policies, not ours. We bear no responsibility for the information practices of such third-party websites.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
            Security of Personal Information:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
            We have implemented reasonable measures to safeguard collected information against unauthorized access, alteration, or destruction. However, no security measures are entirely foolproof.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
            Access to Personal Information:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
            You can modify personal information by logging into your account and updating your profile. Please note that updated, modified, or deleted information may persist in cached and archived pages for a period.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">Choices Regarding Personal Information Use:</h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
            You may opt-out of promotional emails, though transactional emails related to your account or requested services may still be sent.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
            Children Under 13:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
            Our Site is not intended for children under 13. If we discover such information provided by a child, we will delete it promptly.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
            Contact Us:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
            For privacy inquiries or complaints, contact us at support@metricwise.ai.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">
            Changes to this Policy:
            </h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
            This Policy is effective as of the above date. We may update it periodically, with changes posted on our Site. Material changes affecting previously collected personal information will be notified in advance on our Site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Term;
