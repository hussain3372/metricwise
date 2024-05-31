'use client'

import Link from "next/link"

export default () => {

    const footerNavs = [
        {
            label: "About",
            items: [
                {
                    href: '/About',
                    name: 'About Us'
                },
                {
                    href: '#',
                    name: 'Careers'
                },
                {
                    href: '#',
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
        <footer className=" text-white bg-[#042440] md:pt-20 pl-10 md:pl-40 pr-10 md:pr-40 pb-10">
            <div className=" grid lg:grid-cols-2">
                <div className="font-16 font-light flex-1 mt-10 space-y-6 justify-between flex flex-wrap md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="font-20 fontbold mt-10 xl:mt-0">
                                    { item.label }
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <Link
                                                href={el.href}
                                                className="hover:underline hover:text-[#798794]"
                                            
                                            >
                                                { el.name }
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
                        <img src="/footerlogo.png" className="" />
                    </div>
                    <div className="flex gap-5">
                        <img src="/linked.png" className="w-16 h-16" alt="linked" />
                        <img src="/face.png" className="w-16 h-16" alt="face" />
                        <img src="/twit.png" className="w-16 h-16" alt="twit" />
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
