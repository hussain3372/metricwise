"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerNavs = [
    {
      label: "About",
      items: [
        {
          href: "/company/about",
          name: "About Us",
        },
        {
          href: "/company/career",
          name: "Careers",
        },
        {
          href: "/company/contact_us",
          name: "Contact Us",
        },
        {
          href: "/Privacy",
          name: "Privacy Policy",
        },
        {
          href: "/Terms",
          name: "Terms of Use",
        },
        {
          href: "/Security",
          name: "Data security and privacy",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "/recourses/Blog",
          name: "Blogs",
        },
        {
          href: "#",
          name: "Integrations",
        },
        {
          href: "/recourses/FAQ",
          name: "FAQs",
        },
        {
          href: "#",
          name: "Support",
        },
      ],
    },
    {
      label: "Docs",
      items: [
        {
          href: "#",
          name: "Resource Library",
        },
        {
          href: "#",
          name: "Documentation",
        },
      ],
    },
  ];

  return (
    <footer className="text-white bg-[#042440] pt-20 pl-5 sm:pl-10 xl:pl-40 pr-5 sm:pr-10 xl:pr-40 pb-10">
        <div className="pb-20 flex flex-col justify-center items-center text-center">
            <h1 className="font-56 font-semibold leading-10 sm:leading-[50px] md:leading-[60px]">Get noticed online with <br /> Metricwise</h1>
            <p className="font-16 font-normal leading-5 mt-5 opacity-60">Empower your enterprise to mitigate risks and build confidence in your AI-driven decisions</p>
            <div className="mt-6 flex justify-center items-center gap-4">
                <button className="bg-white h-[40px] w-[128px] rounded-[4px] border-none text-[#1D2856] font-12 leading-4 font-medium">Get Started Now</button>
                <button className="bg-transparent border border-[#FFFFFF33] h-[40px] w-[128px] rounded-[4px] text-[#FFFFFF] font-12 leading-4 font-medium">Book a demo</button>
            </div>
        </div>
      <div className="bg-[#041E35] widthclass rounded-lg p-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="font-16 font-light flex-1 mt-10 space-y-6 justify-between flex flex-wrap md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h4 className="font-20 font-bold mt-10 xl:mt-0">{item.label}</h4>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <Link
                      href={el.href}
                      className="hover:underline hover:text-[#798794]"
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="flex-1 gap-10 float-end flex flex-col justify-start items-center text-start mt-16 lg:mt-0">
            <div className="max-w-xs">
              <Image
                width={992}
                height={40}
                src="/footerlogo.png"
                className=""
                alt="footer logo"
              />
            </div>
            <div className="flex gap-5">
              <Image width={48} height={48} src="/linked.png" alt="LinkedIn" />
              <Image width={48} height={48} src="/face.png" alt="Facebook" />
              <Image width={48} height={48} src="/twit.png" alt="Twitter" />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t items-center justify-center text-center flex">
          <div className="mt-4 font-16 font-thin opacity-60">
            Copyright © 2024 • Metricwise
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
