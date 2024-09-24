import Link from "next/link";
import React from "react";
import Feature from "./Feature";
import Socialcard from "./Socialcard";
import Image from "next/image";

const Social = () => {
  return (
    <div>
      <div className="widthclass">
        <div className="p-4 sm:p-16 2xl:p-10">
          <div className="grid md:grid-cols-2 items-center mt-10 md:mt-0">
            <div>
              <h1 className="font-36 font-inter font-bold leading-10">
                Social Media
              </h1>
              <p className="font-24 font-normal font-inter leading-8 mt-8 mb-10 opacity-60">
                AI revolutionizes content curation and user engagement on social
                media platforms. However, to maintain trust and integrity,
                vigilant supervision is essential to mitigate the risks
                associated with AI biases and misinformation.
              </p>
              <Link href="/Demo" className="hero-btn">
                Book a Demo
                <Image src="/free.png" width={24} height={24} alt="free" />
              </Link>
            </div>
            <div className="flex justify-end items-end mt-10 md:mt-0">
              <Image src="/social.png" width={540} height={540} alt="moni" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0424400A]">
        <Feature />
      </div>

      <div className="bg-[url('/finance-bg.png')] bg-cover bg-center bg-no-repeat text-black">
        <div className="widthclass">
          <div className="flex flex-col justify-center items-center text-center m-auto p-8 sm:p-16">
            <h1 className="font-36 font-inter font-bold leading-8 md:leading-10">
              Revolutionize Your Social Media <br /> Strategy with AI Model
              Monitoring
            </h1>
            <p className="font-24 font-inter font-normal leading-6 md:leading-8 mt-5 opacity-60">
              In the ever-evolving realm of healthcare, ensuring the reliability
              and <br /> transparency of AI-powered systems is paramount to
              delivering <br /> exceptional patient care and maintaining trust
              within the industry.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <Socialcard />
        </div>
      </div>
    </div>
  );
};

export default Social;
