'use client'

import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    const footerNavs = [
        {
            label: "About",
            items: [
                {
                    href: '/company/about',
                    name: 'About Us'
                },
                {
                    href: '/company/career',
                    name: 'Careers'
                },
                {
                    href: '/company/contact_us',
                    name: 'Contact Us'
                },
                {
                    href: '/Privacy',
                    name: 'Privacy Policy'
                },
                {
                    href: '/Terms',
                    name: 'Terms of Use'
                },
                {
                    href: '/Security',
                    name: 'Data security and privacy'
                },
            ],
        },
        {
            label: "Resources",
            items: [
                {
                    href: '/recourses/Blog',
                    name: 'Blogs'
                },
                {
                    href: '#',
                    name: 'Integrations'
                },
                {
                    href: '/recourses/FAQ',
                    name: 'FAQs'
                },
                {
                    href: '#',
                    name: 'Support'
                },
            ],
        },
        {
            label: "Docs",
            items: [
                {
                    href: '#',
                    name: 'Resource Library'
                },
                {
                    href: '#',
                    name: 'Documentation'
                },
            ]
        }
    ]

    return (
        <footer className="text-white bg-[#042440] md:pt-20 pl-10 md:pl-40 pr-10 md:pr-40 pb-10">
            <div className="grid lg:grid-cols-2">
                <div className="font-16 font-light flex-1 mt-10 space-y-6 justify-between flex flex-wrap md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="font-20 fontbold mt-10 xl:mt-0">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <Link
                                                href={el.href}
                                                className="hover:underline hover:text-[#798794]"
                                            >
                                                {el.name}
                                            </Link>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
                <div className="flex-1 gap-20 float-end flex flex-col justify-end items-end mt-16 lg:mt-0">
                    <div className="max-w-xs">
                        <Image width={992} height={40} src="/footerlogo.png" className="" alt="footer logo" />
                    </div>
                    <div className="flex gap-5">
                        <Image width={48} height={48} src="/linked.png" alt="LinkedIn" />
                        <Image width={48} height={48} src="/face.png" alt="Facebook" />
                        <Image width={48} height={48} src="/twit.png" alt="Twitter" />
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t items-center justify-center text-center flex">
                <div className="mt-4 font-16 fontregular">
                    Copyright © 2024 • Metricwise
                </div>
            </div>
        </footer>
    )
}

Footer.displayName = "Footer";

export default Footer;
