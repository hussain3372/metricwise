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
    <footer className="text-black bg pt-20 pb-5">
      <div className="widthclass">
        <div className="pt-10 pb-0 sm:pb-8 px-5 sm:px-10 xl:px-20 xxl:px-28">
          <div className="bg-[url('/cta-bg.png')] bg-no-repeat bg-cover bg-center rounded-[20px] mx-0 sm:mx-10 md:mx-20 lg:mx-32 py-10 md:py-20 flex justify-between items-center text-center flex-col gap-10">
            <h1 className="font-28 font-semibold leading-9 p-5">
              Start your AI monitoring, observability and
              <br className="hidden xl:block"/> governance journey with Metricwise.
            </h1>
            <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/company/contact_us" className="flex justify-center items-center bg-[#000000] h-[44px] w-[160px] rounded-[4px] border-none text-[#fff] font-16 leading-4 font-medium">
                Get Started Now
              </Link>
              <Link href="/Demo" className="flex justify-center items-center bg-transparent border border-[#00000033] h-[44px] w-[128px] rounded-[4px] text-[#000000] font-16 leading-4 font-medium">
                Book a demo
              </Link>
            </div>
          </div>
        </div>
        <div className="py-10 px-5 sm:px-16 xl:px-32 xxl:px-40">
          <div className="grid md:grid-cols-2 border-t border-[#00000033] md:pt-16">
            <div className="font-16 font-light mt-10 space-y-6 lg:space-x-16 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 md:space-y-0 md:mt-0">
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
            <div className="flex-1 flex flex-col justify-start sm:items-end text-start mt-10 sm:mt-16 lg:mt-0">
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
              </div>
            </div>
          </div>
            <div className="mt-16 text-[#00000099] font-16 font-light text-center">
              Copyright © 2024 • Metricwise
            </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
