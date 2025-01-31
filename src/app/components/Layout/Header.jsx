"use client";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import { Fragment, useEffect, useState } from "react";
import {
  Products,
  Pricing,
  Docs,
  Recources,
  Company,
  DataTypes,
  Industry,
  Solutions,
} from "../../data/Head";
import Link from "next/link";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// const DataTypes = [{ name: "Data Types", description: new Date().toString() }];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const [isOpen8, setIsOpen8] = useState(false);
  const [activeTab, setActiveTab] = useState("Industries");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-transparent sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex items-center justify-between px-5 2xl:px-[120px] py-4"
        aria-label="Global"
      >
        <div
          className={`flex xl:flex-1 ${mobileMenuOpen ? "hidden" : "block"}`}
        >
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              width={184}
              height={25}
              className="mx-auto"
              src="/logo.svg"
              alt="logo"
            />
          </Link>
        </div>

        <PopoverGroup className="hidden xl:flex xl:gap-x-9">
          <Popover className="relative">
            <div
              className="flex items-center gap-x-1 font-16 pro-medium leading-5 text-[#000]"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <Popover.Button className="flex items-center gap-x-1 focus-visible:outline-none focus-visible:shadow-none">
                Product
              </Popover.Button>
            </div>

            <Transition
              show={isOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute flex justify-around -left-48 top-full z-10 mt-9 w-screen max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 p-10 divide-x-2 gap-5 divide-[#00000066]"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <div>
                  <h1 className="font-32 font-bold leading-10 text-[#7736B7]">
                    Products
                  </h1>
                </div>
                <div className="grid grid-cols-2 gap-5 pl-5">
                  {Products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-start gap-x-6 rounded-lg text-sm leading-6 "
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                        <Image width={40} height={40} src={item.icon} alt="" />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-medium font-20 text-[#7736B7]"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-2 font-12 opacity-60 leading-4 text-black">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <div
              className="flex items-center gap-x-1 font-16 pro-medium leading-5 text-[#000]"
              onMouseEnter={() => setIsOpen1(true)}
              onMouseLeave={() => setIsOpen1(false)}
            >
              <Popover.Button className="flex items-center gap-x-1 focus-visible:outline-none focus-visible:shadow-none">
                Solutions
              </Popover.Button>
            </div>

            <Transition
              show={isOpen1}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute flex justify-around -left-48 top-full z-10 mt-9 w-screen max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 p-10 divide-x-2 gap-5 divide-[#00000066]"
                onMouseEnter={() => setIsOpen1(true)}
                onMouseLeave={() => setIsOpen1(false)}
              >
                <div className="">
                  <h1 className="font-32 font-bold leading-10 text-[#7736B7]">Solutions</h1>
                </div>
                <div className="grid grid-cols-2 gap-5 pl-5">
                  {Solutions.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-start gap-x-6 rounded-lg text-sm leading-6 "
                      onClick={() => setIsOpen1(false)}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                        <Image width={40} height={40} src={item.icon} alt="" />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-medium font-20 text-[#7736B7]"
                          onClick={() => setIsOpen1(false)}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-2 font-12 opacity-60 leading-4 text-black">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <div className="flex items-center gap-x-1 font-16 pro-medium leading-5 text-[#000]">
              <PopoverButton className="flex items-center gap-x-1 focus-visible:outline-none focus-visible:shadow-none">
                <Link href="/Pricing">Pricing</Link>
              </PopoverButton>
            </div>
          </Popover>

          <Popover className="relative">
            <div
              className="flex items-center gap-x-1 font-16 pro-medium leading-5 text-[#000]"
              onMouseEnter={() => setIsOpen3(true)}
              onMouseLeave={() => setIsOpen3(false)}
            >
              <Popover.Button className="flex items-center gap-x-1 focus-visible:outline-none focus-visible:shadow-none">
                Docs
              </Popover.Button>
            </div>

            <Transition
              show={isOpen3}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute flex justify-around -left-[400px] top-full z-10 mt-9 w-screen max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 p-10 divide-x-2 gap-5 divide-[#00000066]"
                onMouseEnter={() => setIsOpen3(true)}
                onMouseLeave={() => setIsOpen3(false)}
              >
                <div className="">
                  <h1 className="font-32 font-bold leading-10 text-[#7736B7]">Docs</h1>
                </div>
                <div className="grid grid-cols-2 gap-5 pl-5">
                  {Docs.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-start gap-x-6 rounded-lg text-sm leading-6 "
                      onClick={() => setIsOpen3(false)}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                        <Image width={40} height={40} src={item.icon} alt="" />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-medium font-20 text-[#7736B7]"
                          onClick={() => setIsOpen3(false)}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-2 font-12 opacity-60 leading-4 text-black">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <div
              className="flex items-center gap-x-1 font-16 pro-medium leading-5 text-[#000]"
              onMouseEnter={() => setIsOpen4(true)}
              onMouseLeave={() => setIsOpen4(false)}
            >
              <Popover.Button className="flex items-center gap-x-1 focus-visible:outline-none focus-visible:shadow-none">
                Resources
              </Popover.Button>
            </div>

            <Transition
              show={isOpen4}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute flex justify-around -left-[500px] top-full z-10 mt-9 w-screen max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 p-10 divide-x-2 gap-5 divide-[#00000066]"
                onMouseEnter={() => setIsOpen4(true)}
                onMouseLeave={() => setIsOpen4(false)}
              >
                <div className="">
                  <h1 className="font-32 font-bold leading-10 text-[#7736B7]">Resources</h1>
                </div>
                <div className="grid grid-cols-2 gap-5 pl-5">
                  {Recources.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-start gap-x-6 rounded-lg text-sm leading-6 "
                      onClick={() => setIsOpen4(false)}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                        <Image width={40} height={40} src={item.icon} alt="" />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-medium font-20 text-[#7736B7]"
                          onClick={() => setIsOpen4(false)}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-2 font-12 opacity-60 leading-4 text-black">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <div
              className="flex items-center gap-x-1 font-16 pro-medium leading-5 text-[#000]"
              onMouseEnter={() => setIsOpen5(true)}
              onMouseLeave={() => setIsOpen5(false)}
            >
              <Popover.Button className="flex items-center gap-x-1 focus-visible:outline-none focus-visible:shadow-none">
                Company
              </Popover.Button>
            </div>

            <Transition
              show={isOpen5}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute flex justify-around -left-[700px] top-full z-10 mt-9 w-screen max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 p-10 divide-x-2 gap-5 divide-[#00000066]"
                onMouseEnter={() => setIsOpen5(true)}
                onMouseLeave={() => setIsOpen5(false)}
              >
                <div className="">
                  <h1 className="font-32 font-bold leading-10 text-[#7736B7]">Company</h1>
                </div>
                <div className="grid grid-cols-2 gap-5 pl-5">
                  {Company.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-start gap-x-6 rounded-lg text-sm leading-6 "
                      onClick={() => setIsOpen5(false)}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                        <Image width={40} height={40} src={item.icon} alt="" />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-medium font-20 text-[#7736B7]"
                          onClick={() => setIsOpen5(false)}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-2 font-12 opacity-60 leading-4 text-black">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </PopoverGroup>

        <div className="hidden xl:flex xl:flex-1 xl:justify-end items-center space-x-5 ml-5">
          <Link href="#" className="secondary-btn">
            Sign up
          </Link>

          <Link href="/Demo" className="primary-btn" type="button">
            <Image src="/demo-img.svg" width={20} height={20} alt="demo-img" />
            Book a Demo
          </Link>
        </div>

        <div
          className={`flex xl:hidden ${mobileMenuOpen ? "hidden" : "block"}`}
        >
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog
        className="xl:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                width={184}
                height={25}
                className="w-auto"
                src="/logo.svg"
                alt="logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex font-bold text-[16px] w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 leading-7 text-[#2E2E2E99] ">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...Products].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-gray-500 "
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex font-bold text-[16px] w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 leading-7 text-[#2E2E2E99] ">
                        Solutions
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...Solutions].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-gray-500 "
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="flex font-bold text-[16px] w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 leading-7 text-[#2E2E2E99] ">
                    <Link href="/Pricing">Pricing</Link>
                  </DisclosureButton>
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex font-bold text-[16px] w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 leading-7 text-[#2E2E2E99] ">
                        Docs
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...Docs].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-gray-500 "
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex font-bold text-[16px] w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 leading-7 text-[#2E2E2E99] ">
                        Resources
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...Recources].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-gray-500 "
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex font-bold text-[16px] w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 leading-7 text-[#2E2E2E99] ">
                        Company
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...Company].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-gray-500 "
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6 space-y-10">
                <Link
                  href="#"
                  className="-mx-3 font-16 textcolor font-normal block rounded-lg px-3 py-2.5 leading-7"
                >
                  Sign up
                </Link>
                <Link
                  href="/Demo"
                  className="-mx-3 font-16 white font-normal border-[#042440] rounded-[15px] pt-3 pb-3 pl-4 pr-4 bg-[#042440] block px-3 py-2.5 leading-7"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
