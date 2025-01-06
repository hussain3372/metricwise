"use client";

import React from "react";
import Link from "next/link";
import { careerapply, careerperks } from "../../data/careerdata";
import Image from "next/image";

const Team = () => {
  return (
    <div>
      <div className="widthclass">
        <div>
          <div className="flex flex-col justify-start items-start pt-[59px] px-5 sm:px-10 lg:px-[125px] pb-[146px]">
            <h1 className="font-36 font-bold leading-[42px] mb-10">Our Team</h1>
            <p className="font-22 font-normal leading-7 textcolor sm:px-[57px]">
              {`Embark on a journey with our dynamic tech team, where innovation
              and collaboration converge to shape the future. At Metricwise
              we're more than just colleagues we are a family of diverse minds
              united by a shared passion for pushing boundaries to make AI
              responsible and accessible to all in a safe and secure way.
              Together, we redefine possibilities and make an impact that
              resonates across industries. Welcome to a place where your
              expertise is valued, your ideas are heard, and your growth is our
              priority.`}
            </p>
          </div>
        </div>

        <div className="px-5 sm:px-10 lg:px-[125px]">
          <h1 className="font-36 font-bold leading-10 mb-[59px]">Our Values</h1>
          <div className="space-y-8 md:space-y-3">
            {/* Card 1 - Left */}
            <div className="grid md:grid-cols-2">
              <div className="md:flex items-start justify-end gap-5">
                <Image
                  src="/value1.svg"
                  width={60}
                  height={60}
                  alt="value icons"
                />
                <div>
                  <h1 className="font-26 font-bold leading-8 text-[#7736B7]">
                    Innovation First
                  </h1>
                  <p className="font-20 font-normal textcolor leading-7 pt-1">
                    Foster a culture of continuous innovation, encouraging team
                    members to explore novel ideas, embrace emerging
                    technologies, and challenge the status quo.
                  </p>
                </div>
              </div>
              <div></div>
            </div>

            {/* Card 2 - Right */}
            <div className="grid md:grid-cols-2">
              <div></div>
              <div className="md:flex items-start justify-end gap-5">
                <Image
                  src="/value2.svg"
                  width={60}
                  height={60}
                  alt="value icons"
                />
                <div>
                  <h1 className="font-26 font-bold leading-8 text-[#7736B7]">
                    Curiosity
                  </h1>
                  <p className="font-20 font-normal textcolor leading-7 pt-1">
                    Seek continuous growth and absorb knowledge at every
                    opportunity. We thrive on thinking beyond conventional
                    boundaries. Refusing to rest on our current understanding,we
                    commit to perpetual learning. This approach sparks our most
                    innovative ideas and provides an avenue to embrace novel
                    perspectives.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Left */}
            <div className="grid md:grid-cols-2">
              <div className="md:flex items-start justify-end gap-5">
                <Image
                  src="/value3.svg"
                  width={60}
                  height={60}
                  alt="value icons"
                />
                <div>
                  <h1 className="font-26 font-bold leading-8 text-[#7736B7]">
                    User-Centric Mindset
                  </h1>
                  <p className="font-20 font-normal textcolor leading-7 pt-1">
                    Prioritize a user-centric mindset in product development.
                    Empathize with end-users, ensuring that solutions are not
                    only technologically advanced but also intuitive,
                    accessible, and designed to enhance users.
                  </p>
                </div>
              </div>
              <div></div>
            </div>

            {/* Card 4 - Right */}
            <div className="grid md:grid-cols-2">
              <div></div>
              <div className="md:flex items-start justify-end gap-5">
                <Image
                  src="/value4.svg"
                  width={60}
                  height={60}
                  alt="value icons"
                />
                <div>
                  <h1 className="font-26 font-bold leading-8 text-[#7736B7]">
                    Humility
                  </h1>
                  <p className="font-20 font-normal textcolor leading-7 pt-1">
                    We affirm that an exceptional team thrives on shared
                    responsibilities, where mutual respect and trust among peers
                    prevail. Fostering relationships, we actively strive to
                    comprehend and empower one another.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 - Left */}
            <div className="grid md:grid-cols-2">
              <div className="md:flex items-start justify-end gap-5">
                <Image
                  src="/value5.svg"
                  width={60}
                  height={60}
                  alt="value icons"
                />
                <div>
                  <h1 className="font-26 font-bold leading-8 text-[#7736B7]">
                    Passion
                  </h1>
                  <p className="font-20 font-normal textcolor leading-7 pt-1">
                    Our endeavors are driven by a shared passion for
                    collaborative teamwork and the creation of extraordinary
                    achievements. We draw strength from surpassing conventional
                    expectations, allowing us to unleash the highest potential
                    within ourselves.
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="widthclass">
            <div className="px-5 sm:px-10 lg:px-[125px] flex-col flex justify-start items-start">
              <h1 className="font-36 font-bold textcolor leading-10 mb-3 md:mb-14 mt-[125px]">
                Our Perks
              </h1>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {careerperks.map((item, index) => (
                  <div
                    key={index}
                    className="h-full flex flex-col gap-5 justify-start items-start text-start px-5 py-8 bg-white shadow-[4px_4px_12px_0_rgb(0,0,0,0.12)]"
                  >
                    <div className="sm:flex items-center justify-start w-full gap-5">
                      <div>
                        <Image
                          width={60}
                          height={60}
                          src={item.icon}
                          alt="Icon"
                        />
                      </div>
                      <div className="font-bold font-26 leading-8 md:leading-10">
                        {item.name}
                      </div>
                    </div>
                    <div>
                      <p className="textcolor font-22 font-normal leading-7">
                        {item.para}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F1F2F4] positionbg mt-[118px]">
        <div className="widthclass pt-8 pb-[135px] px-5 sm:px-10 lg:px-[202px]">
          <div className="flex justify-center items-center">
            <h1 className="font-36 font-bold textcolor leading-10 text-center">
              List of Open Position
            </h1>
          </div>
          <div className="mt-[82px]">
            {careerapply.map((apply, index) => (
              <div
                key={`careerapply-${index}`}
                className="md:flex justify-between items-center bg-white rounded-lg px-5 py-3.5 mt-3"
              >
                <div>
                  <h1 className="font-20 font-semibold leading-6">
                    {apply.position}
                  </h1>
                  <p className="font-16 font-normal leading-5 mt-2">
                    {apply.location}
                  </p>
                </div>
                <div>
                  <Link
                    href="/company/apply"
                    className="font-20 font-normal leading-6 bg-[#2E2E2E] rounded-lg px-7 py-3.5 white mt-5 md:mt-0 flex justify-center items-center"
                  >
                    {apply.applys}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Team.displayName = "Team";

export default Team;
