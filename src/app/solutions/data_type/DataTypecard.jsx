"use client";

import React from "react";
import { dataType } from "../../data/trust"; // Ensure this path is correct
import Image from "next/image";

const DataTypecard = () => {
  return (
    <div className="">
      <div className="bg-[#F4F4F4] p-5 md:p-20">
        <div className="grid xl:grid-cols-2 space-y-20 md:space-y-0 items-center widthclass">
          <div className="relative">
            <div
              className="bg-[#E6E9EC] rounded-[24px] p-10 w-full md:w-[400px]"
              style={{ boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)" }}
            >
              <h1 className="text-[#042440] font-36 leading-10 font-bold">
                Tabular
              </h1>
              <p className="font-16 text-[#2E2E2E] leading-5 pt-10">
                Maximize the potential of your tabular models by identifying
                drift, monitoring key metrics, and scrutinizing production data.
                This ensures the accuracy, efficacy, and resilience of your
                tabular models in real-world applications. Receive real-time
                notifications directly through Slack, MS Teams, or email when
                instances of data integrity, bias, performance degradation, or
                drift related issues are identified. Effortlessly customize
                monitors and adapt metrics to align with your specific use case
                and requirements.
              </p>
            </div>

            <div
              className="bg-[#E6E9EC] rounded-[24px] p-10 w-full md:w-[400px] relative left-0 md:left-[80px] 2xl:left-[167px] top-5 md:-top-[18px] 2xl:-top-[23px] z-20"
              style={{ boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)" }}
            >
              <p className="font-16 text-[#2E2E2E] leading-5">
                Leverage the power of explainability within your machine
                learning workflow to quantify the impact of individual features.
                This allows for a comprehensive understanding of the factors
                influencing model predictions, facilitating clear and effective
                communication of the underlying logic to key stakeholders.
                Stakeholders can enhance the interpretability of ther model,
                providing valuable insights into how each feature contributes to
                the overall decision-making process.
              </p>
            </div>

            <div className="absolute top-[470px] -left-[35px] 2xl:left-[26px] z-0 hidden md:block">
              <Image
                src="/circle-bg.svg"
                width={150}
                height={115}
                alt="circle-bg"
              />
            </div>

            <div
              className="bg-[#E6E9EC] rounded-[24px] p-10 w-full md:w-[400px] relative left-0 md:left-[186px] lg:left-[250px] x:left-[366px] top-10 md:-top-[40px] xl:-top-[50px] z-20"
              style={{ boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)" }}
            >
              <p className="font-16 text-[#2E2E2E] leading-5">
                Conduct an in-depth analysis of production data in a tabular
                format by systematically slicing and dicing information to
                precisely pinpoint the origin, timing, and causation of any
                machine learning issues. Uncover new connections, discern
                patterns, and identify opportunities for refining model
                performance.
              </p>
            </div>

            <div className="absolute top-[789px] xl:top-[760px] left-[101px] lg:left-[166px] xl:left-[156px] z-0 hidden md:block">
              <Image
                src="/circle-bg.svg"
                width={100}
                height={115}
                alt="circle-bg"
              />
            </div>
          </div>
          <div className="relative">
            <div>
              <Image src="/type1.png" width={594} height={568} alt="type1" />
            </div>

            <div className="absolute -right-20 bottom-0 hidden md:block">
              <Image
                src="/dataWave.svg"
                width={170}
                height={770}
                alt="data wave"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 md:p-20">
        <div className="grid xl:grid-cols-2 space-y-20 md:space-y-0 items-center widthclass">
          <div className="relative">
            <div
              className="bg-[#E6E9EC] rounded-[24px] p-10 w-full md:w-[400px]"
              style={{ boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)" }}
            >
              <h1 className="text-[#042440] font-36 leading-10 font-bold">
                Text
              </h1>
              <p className="font-16 text-[#2E2E2E] leading-5 pt-10">
                Maintain constant vigilance over your unstructured models.
                Unlike models dealing with tabular data, monitoring those
                working with unstructured data presents unique challenges,
                primarily due to the high-dimensional nature of their vectors.
                Ensure the continuous stability and reliability of these models
                by implementing robust monitoring mechanisms tailored to address
                the complexities inherent in their unstructured data structures.
              </p>
            </div>

            <div
              className="bg-[#E6E9EC] rounded-[24px] p-10 w-full md:w-[400px] relative left-0 md:left-[80px] 2xl:left-[167px] top-5 md:-top-[18px] 2xl:-top-[23px] z-20"
              style={{ boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)" }}
            >
              <p className="font-16 text-[#2E2E2E] leading-5">
                Elevate your business decision-making processes by unraveling
                the why behind model outcomes, especially in the realm of
                unstructured data. Establish a clear connection between model
                predictions and key business Key Performance Indicators (KPIs).
                Boost confidence in unstructured model decisions by
                incorporating explainability, fairness assessments, and toxicity
                evaluations. This holistic approach not only enhances the
                interpretability of model decisions but also aligns them with
                ethical considerations, fostering a more informed and
                responsible decision-making paradigm.
              </p>
            </div>

            <div className="absolute top-[470px] -left-[35px] 2xl:left-[26px] z-0 hidden md:block">
              <Image
                src="/circle-bg.svg"
                width={150}
                height={115}
                alt="circle-bg"
              />
            </div>

            <div
              className="bg-[#E6E9EC] rounded-[24px] p-10 w-full md:w-[400px] relative left-0 md:left-[186px] lg:left-[250px] x:left-[366px] top-10 md:-top-[40px] xl:-top-[50px] z-20"
              style={{ boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)" }}
            >
              <p className="font-16 text-[#2E2E2E] leading-5">
                Precisely monitor NLP and textual data landscapes by deploying
                strategies to detect shifts in data distribution. Conduct
                thorough comparisons between baseline and production data to
                identify variations that may impact model performance. Pinpoint
                the root causes of underperformance and drift to iteratively
                enhance model outcomes. Quantify the extent of data and concept
                drift, providing a quantitative measure of the evolving nature
                of the textual data. This meticulous monitoring approach ensures
                the ongoing accuracy and adaptability of NLP models in dynamic
                environments.
              </p>
            </div>

            <div className="absolute top-[789px] xl:top-[860px] left-[101px] lg:left-[166px] xl:left-[156px] z-0 hidden md:block">
              <Image
                src="/circle-bg.svg"
                width={100}
                height={115}
                alt="circle-bg"
              />
            </div>
          </div>
          <div className="relative">
            <div>
              <Image src="/type2.png" width={594} height={568} alt="type1" />
            </div>

            <div className="absolute -right-20 bottom-0 hidden md:block">
              <Image
                src="/dataWave.svg"
                width={170}
                height={770}
                alt="data wave"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/ctabg.png')] bg-cover bg-no-repeat bg-center py-20 px-5 md:px-20 rounded-lg">
        <div className="md:flex justify-center items-center gap-10 xl:gap-[300px] text-white space-y-10 md:space-y-0 widthclass">
          <div>
            <h1 className="font-48 font-semibold ">Get Started Now</h1>
            <div>
              <p className="font-24 leading-8">
                A data type is an attribute associated with a piece of data that
                <br className="hidden 2xl:block" /> tells a computer system how
                to interpret its value.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 z-20">
            <button className="border border-[#EBEBEB] rounded-lg py-3 w-[140px] bg-transparent text-white">
              Learn More
            </button>
            <button className="border border-[#EBEBEB] bg-white rounded-lg py-3 w-[140px] text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {dataType.map((item, index) => (
        <div
          key={index}
          className={`${
            index % 2 === 0 ? "bg-[#F4F4F4]" : ""
          }`}
        >
          <div className="grid md:grid-cols-2 items-center px-5 sm:px-10 md:px-20 py-10 widthclass">
            <div className={` ${index % 2 === 1 ? "md:order-last" : ""}`}>
              <h1 className="font-36 font-bold font-inter leading-10">
                {item.main}
              </h1>
              {item.Paragraph.map((para, paraIndex) => (
                <p
                  key={paraIndex}
                  className="font-16 font-inter font-normal leading-[20px] mt-10"
                >
                  {para}
                </p>
              ))}
            </div>
            <div
              className={` flex justify-start mt-10 md:mt-0 ${
                index % 2 === 0 ? "md:justify-end" : ""
              }`}
            >
              <Image src={item.pic} alt="Card image" width={481} height={430} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataTypecard;
