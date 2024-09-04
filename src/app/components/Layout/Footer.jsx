"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerNavs = [
    {
      label: "About",
      items: [
        {
          // href: "/company/about",
          href: "#",
          name: "About Us",
        },
        {
          // href: "/company/career",
          href: "#",
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
          // href: "/recourses/Blog",
          href: "#",
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
    <footer className="text-black bg-[url('/hero-gradient.png')] bg-no-repeat bg-cover bg-center bg pt-20 pb-16">
      <div className="widthclass">
        <div className="pt-10 pb-0 sm:pb-16 px-5 sm:px-10 xl:px-28 ">
          <div className="border-b pb-20 border-[#00000033] md:flex justify-between items-center text-center md:text-start">
            <h1 className="font-28 font-semibold leading-9">
              Start your AI monitoring, observability and governance journey{" "}
              <br className="hidden lg:block" /> with Metricwise.
            </h1>
            <div className="mt-6 flex justify-center items-center gap-4">
              <button className="bg-[#000000] h-[40px] w-[128px] rounded-[4px] border-none text-[#fff] font-12 leading-4 font-medium">
                Get Started Now
              </button>
              <button className="bg-transparent border border-[#00000033] h-[40px] w-[128px] rounded-[4px] text-[#000000] font-12 leading-4 font-medium">
                Book a demo
              </button>
            </div>
          </div>
        </div>
        <div className="py-10 px-5 sm:px-16 xl:px-40">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="font-16 font-light mt-10 space-y-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 md:space-y-0 md:mt-0">
              {footerNavs.map((item, idx) => (
                <ul className="space-y-4" key={idx}>
                  <h4 className="font-20 font-bold mt-10 xl:mt-0">
                    {item.label}
                  </h4>
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
            <div className="flex-1 flex flex-col justify-start sm:items-center text-start mt-5 sm:mt-16 lg:mt-0">
              <div>
                <div className="max-w-xs">
                  <Image
                    width={233}
                    height={32}
                    src="/footerlogo.svg"
                    className=""
                    alt="footer logo"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-black font-20 font-bold">Social Media</p>
                  <div className="flex gap-5 mt-5">
                    <Image
                      width={48}
                      height={48}
                      src="/linked.svg"
                      alt="LinkedIn"
                    />
                    <Image
                      width={48}
                      height={48}
                      src="/face.svg"
                      alt="Facebook"
                    />
                    <Image
                      width={48}
                      height={48}
                      src="/twit.svg"
                      alt="Twitter"
                    />
                  </div>
                </div>

                <div className="mt-24 text-[#00000099] font-16 font-light">
                  Copyright © 2024 • Metricwise
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
