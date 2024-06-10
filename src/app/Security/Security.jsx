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
            <PiGreaterThanLight/> Company <PiGreaterThanLight/> Data Security & Privacy Policy
            </span>
          </h1>
        </div>
        <div className="grid md:grid-cols-2 items-center white p-16 relative widthclass">
          <div>
            <div className="absolute -top-16 left-0">
              <Image width={138} height={138} src="/hrblack1.png" alt="" />
            </div>
            <h1 className="font-64 fontbold lg:leading-40 mb-5">
              Data Security & <br /> Privacy Policy
            </h1>
          </div>
          <div className="flex justify-center md:justify-end mt-10 md:mt-0">
            <Image width={637} height={359} src="/Security.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="p-16 widthclass">
        <h1 className="font-36 font-inter font-semibold leading-10">
          Metricwise Inc Data Security & Privacy Policy
        </h1>
        <div className="mt-16">
          <div>
            <h1 className="font-24 font-inter font-semibold">Data Security:</h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              <span className="pl-10"> At Metricwise,</span> we consider product
              security as an utmost priority. Our software development lifecycle
              (SDLC) adheres to Agile principles, ensuring a dynamic and
              responsive approach to security. By integrating security efforts
              throughout the Agile release cycle, we expedite the discovery and
              resolution of security-oriented software defects compared to
              lengthier release cycle methodologies. Continuous security and
              vulnerability scanning are ingrained in our infrastructure
              practices, encompassing monitoring of containers, VM images, and
              network traffic. Automated monitoring and notification services
              serve as proactive measures, ensuring swift awareness among our
              engineers in case of detected vulnerabilities or suspicious
              activities. To fortify our security stance further, we routinely
              engage external organizations to conduct penetration tests on our
              endpoints.
              <br />
              <br />
              <span className="pl-10">Metricwise,</span> adopts continuous
              integration to facilitate swift responses to both functional and
              security issues. Embracing well-defined change management policies
              and procedures, we meticulously govern when and how changes take
              place. This philosophy aligns seamlessly with DevSecOps and the
              overarching development methodologies guiding Metricwise. This
              concerted approach enables us to achieve an exceptionally short
              mean time to resolve (MTTR) for both security vulnerabilities and
              functional issues. Our commitment to continuous improvement is
              embedded in an iterative evolution of our DevSecOps practices,
              ensuring that we stay at the forefront of security measures.
              <br />
              <br />
              <span className="pl-10">Metricwise,</span> employs robust
              transport-level security measures for network access, ensuring a
              secure environment for data transmission. User authentication is
              meticulously handled through a central identity provider, allowing
              for individualized verification. To bolster security, Metricwise
              employees and systems widely embrace two-factor authentication and
              single sign-on. Additionally, we harness the Identity and Access
              Management policies provided by our Cloud Provider to effectively
              control and regulate access to our systems.
              <br />
              <br />
              <span className="pl-10">A core</span> facet of Metricwise's
              security strategy revolves around the continuous development of
              its workforce through regular security and privacy awareness
              training. This training is inclusive, catering to both technical
              and non-technical roles within the organization. All employees
              actively participate in these programs, fostering a collective
              commitment to securing customer data and safeguarding company
              assets. Tailored security training materials are curated for
              individual roles, ensuring that employees are well-prepared to
              navigate and address the specific security challenges inherent to
              their positions. This holistic approach aims to create a
              security-aware culture across all facets of Metricwise operations.
            </p>
          </div>
          <div>
            <h1 className="font-24 font-inter font-semibold">Data Privacy:</h1>
            <p className="font-20 font-normal font-inter leading-6 mt-5 mb-6">
              <span className="pl-10">At Metricwise,</span> data privacy and
              security stand as our paramount concerns. Our approach, rooted in
              principles, transcends conventional monitoring methodologies by
              integrating privacy-preserving techniques directly at the point of
              data collection. This signifies a commitment to safeguarding your
              data right from its inception. We recognize the weight of your
              concerns when entrusting us with your data and are dedicated to
              not only meeting but exceeding your expectations and preferences.
              <br />
              <br />
              <span className="pl-10">Our commitment</span> to data privacy is
              ingrained in a principles-based approach at Metriwise. Unlike
              traditional monitoring strategies, we extend our efforts beyond
              the surface level and implement privacy-preserving techniques
              right from the outset of data collection. This proactive stance
              ensures that your data remains secure and confidential throughout
              its lifecycle. We acknowledge and understand the significant
              responsibility that comes with the trust you place in us, and we
              continuously strive to align with your expectations and
              preferences, upholding the highest standards of privacy and
              security.
              <br />
              <br />
              <span className="pl-10">This</span> document serves as an
              exhaustive resource, outlining the meticulous privacy and security
              measures implemented to safeguard both your and your customers'
              data privacy. Our suite of monitoring tools operates on a
              data-agnostic principle, eliminating the necessity for sensitive
              materials. Notably, a significant proportion of these tools does
              not even require the inclusion of personal data, underscoring our
              commitment to preserving the confidentiality of information.
              <br />
              <br />
              <span className="pl-10">This</span> responsibility for ensuring
              data privacy is a collaborative effort between us and the user.
              While we employ robust measures, it is essential for users to play
              an active role in configuring their systems appropriately. This
              proactive stance ensures that systems do not inadvertently
              transmit inappropriate personal data or sensitive materials to our
              monitoring tools at Metricwise. By acknowledging and embracing
              this shared responsibility, we collectively contribute to
              upholding the highest standards of data privacy and security
              <br />
              <br />
              <span className="pl-10">Metricwise</span> adheres to the
              fundamental tenets of "privacy by design" as an integral component
              of our comprehensive security program. This approach ensures that
              privacy considerations are embedded into the very fabric of our
              operations, from the outset of system architecture to the
              execution of our security protocols. By adopting these principles,
              we prioritize the proactive integration of privacy safeguards into
              every aspect of our services.
              <br />
              <br />
              <span className="pl-10">Empowering</span> users with control over
              their data, the Metricwise platform allows for the configuration
              of all statistics. This user-centric approach ensures that
              individuals can tailor the gathering of statistics to align with
              their preferences and requirements. By putting the reins in the
              hands of users, we acknowledge the importance of personalized
              control over data collection processes. These Metricwise profiles
              are meticulously crafted to uphold privacy standards. These
              profiles, derived from configurable statistics, are designed to
              exclude any sensitive information. Importantly, the architecture
              is intentionally structured to prevent the manipulation of
              Metricwise profiles in a way that would allow for the
              reconstruction of original data. This ensures that the privacy and
              integrity of user data remain paramount throughout the utilization
              of Metricwise services.
              <br />
              <br />
              For users seeking guidance on reinforcing the security of their
              data, kindly get in touch with your account representative or
              contact support@metricwise.ai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Term;
