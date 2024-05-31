import React from "react";

const About = () => {
  return (
    <div>
      <div className="aboutbg relative">
        <div className="widthclass ">
          <div className="flex items-center">
            <h1 className="text-white pl-5 lg:pl-64 2xl:pl-0 pt-16 font-24 font-normal font-inter">
              Metricwise{" "}
              <span className="text-white font-20 font-normal font-inter opacity-50">
                &gt; Company &gt; About Us
              </span>
            </h1>
          </div>
          <div className="absolute left-40 top-10">
            <img src="hr1.png" alt="hr1" />
          </div>
          <div className="flex flex-col justify-center items-center m-auto pt-16 pb-24 white">
            <label
              htmlFor=""
              className="font-24 font-inter font-normal leading-8 opacity-50"
            >
              About Us
            </label>
            <h1 className="font-36 font-inter font-bold leading-40 mt-8 text-center">
              We are a leading AI technology company <br /> dedicated to
              transforming businesses through <br /> innovative and responsible
              AI solutions.
            </h1>
          </div>
        </div>
      </div>

      <div className="border-b border-[#042440] border-opacity-[12%] mt-10">
        <div className="grid md:grid-cols-2 items-center widthclass p-20">
          <div>
            <h1 className="font-36 font-bold  font-inter leading-40 textcolor">
              Our Story
            </h1>
            <p className="font-20 font-inter font-regular text-[#616659] leading-6 mt-8">
              Observing the remarkable surge in AI applications, we found
              ourselves deeply immersed in the tech landscape and recognized an
              urgent need for enhanced transparency and trust within the AI
              ecosystem. The prevalent issues of mistrust, lack of transparency,
              and unforeseen challenges in explainability, fairness, and bias
              within current AI and machine learning applications fueled our
              drive to embark on and entrepreneurial venture. We founded
              Metricwise with the goal of introducing a new era of
              accountability, demystifying the decision- making processes of AI
              models, and ensuring fairness, transparency, and reliability
              across all aspects of their functionality. Essentially, our
              journey was initiated not only to address the challenges within AI
              but to redefineits trajectory towards a future characterized by
              ethical soundness and comprehensibility.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="our.png" alt="" />
          </div>
        </div>
      </div>

      <div className=" border-b border-[#042440] border-opacity-[12%]">
        <div className="p-20 widthclass">
          <h1 className="font-36 font-bold  font-inter leading-40 textcolor">
            Our Vision
          </h1>
          <div className="p-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-10 items-center justify-center">
            <div className="flex flex-col justify-center items-center text-center p-8 h-[264px] w-[220px] rounded-lg border border-[#00000033] bg-[#0424401F] shadow-lg shadow-[#0000001F]">
              <img src="v1.png" alt="" />
              <h1 className="font-24 font-inter font-normal opacity-50">
                Innovative Excellence
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-8 h-[264px] w-[220px] rounded-lg border border-[#00000033] bg-[#0424401F] shadow-lg shadow-[#0000001F]">
              <img src="v2.png" alt="" />
              <h1 className="font-24 font-inter font-normal opacity-50">
                Transparency First
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-8 h-[264px] w-[220px] rounded-lg border border-[#00000033] bg-[#0424401F] shadow-lg shadow-[#0000001F]">
              <img src="v3.png" alt="" />
              <h1 className="font-24 font-inter font-normal opacity-50">
                Ethical Governance
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-8 h-[264px] w-[220px] rounded-lg border border-[#00000033] bg-[#0424401F] shadow-lg shadow-[#0000001F]">
              <img src="v4.png" alt="" />
              <h1 className="font-24 font-inter font-normal opacity-50">
                Collaborative Synergy
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-8 h-[264px] w-[220px] rounded-lg border border-[#00000033] bg-[#0424401F] shadow-lg shadow-[#0000001F]">
              <img src="v5.png" alt="" />
              <h1 className="font-24 font-inter font-normal opacity-50">
                Sustainability and Social Responsibility
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="widthclass">
          <div className="flex flex-col justif-center items-center m-auto p-20">
            <h1 className="font-36 font-inter font-bold leading-10 mb-10">Our Team</h1>
            <p className="font-24 font-inter font-normal leading-8 mb-10 text-center opacity-60">
              Embark on a journey with our dynamic tech team, where innovation
              and collaboration converge to shape the future. At Metricwise
              we're more than just colleagues – we're a family of diverse minds
              united by a shared passion for pushing boundaries to make AI
              responsible and accessible to all in a safe and secure way.
              Together, we redefine possibilities and make an impact that
              resonates across industries. Welcome to a place where your
              expertise is valued, your ideas are heard, and your growth is our
              priority.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-20 mt-10">
               <div className="flex flex-col gap-y-2 text-center">
                   <img src="t1.png" alt="" />
                   <h5 className="font-20 font-inter font-semibold leadin-6">Varun Sharma</h5>
                   <span className="font-16 font-inter font-normal">CEO</span>
                   <span className="font-16 font-inter font-normal">McKinsey, EY, Coherent</span>
               </div>
               <div className="flex flex-col gap-y-2 text-center">
                   <img src="t2.png" alt="" />
                   <h5 className="font-20 font-inter font-semibold leadin-6">Varun Sharma</h5>
                   <span className="font-16 font-inter font-normal">CEO</span>
                   <span className="font-16 font-inter font-normal">McKinsey, EY, Coherent</span>
               </div>
               <div className="flex flex-col gap-y-2 text-center">
                   <img src="t3.png" alt="" />
                   <h5 className="font-20 font-inter font-semibold leadin-6">Varun Sharma</h5>
                   <span className="font-16 font-inter font-normal">CEO</span>
                   <span className="font-16 font-inter font-normal">McKinsey, EY, Coherent</span>
               </div>
               <div className="flex flex-col gap-y-2 text-center">
                   <img src="t4.png" alt="" />
                   <h5 className="font-20 font-inter font-semibold leadin-6">Varun Sharma</h5>
                   <span className="font-16 font-inter font-normal">CEO</span>
                   <span className="font-16 font-inter font-normal">McKinsey, EY, Coherent</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
