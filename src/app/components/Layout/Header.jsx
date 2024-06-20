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

import { Fragment, useState } from "react";
import {
  Products,
  Pricing,
  Docs,
  Recources,
  Company,
  DataTypes,
  Industry,
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

  return (
    <header className="bg-white border-[#042440] border border-1 border-opacity-[12%] sticky top-0 z-50">
      <nav
        className="mx-auto flex items-center justify-between px-5 md:px-10 py-4"
        aria-label="Global"
      >
        <div className="flex xl:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              width={184}
              height={25}
              className="mx-auto"
              src="/logo.png"
              alt="logo"
            />
          </Link>
        </div>

        <PopoverGroup className="hidden xl:flex xl:gap-x-8">
          <Popover className="relative">
            <div
              className="flex items-center gap-x-1 font-16 font-medium leading-6 textcolor"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <Popover.Button className="flex items-center gap-x-1">
                Product
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
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
                className="absolute flex justify-around -left-48 top-full z-10 mt-9 w-screen max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <div className="">
                  <h1 className="p-10 font-32 font-bold leading-10">
                    Products
                  </h1>
                </div>
                <div className="p-4 grid grid-cols-2">
                  {Products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg text-sm leading-6 p-2 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                        <Image width={40} height={40} src={item.icon} alt="" />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <div
              className="flex items-center gap-x-1 font-16 font-medium leading-6 textcolor"
              onMouseEnter={() => setIsOpen1(true)}
              onMouseLeave={() => setIsOpen1(false)}
            >
              <Popover.Button className="flex items-center gap-x-1">
                Solution
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
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
                className="absolute flex flex-col -left-80 top-full z-10 mt-9 w-screen max-w-5xl sm:h-[400px] md:h-[500px] lg:h-[417px] 2xl:h-[580px] overflow-auto rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5"
                onMouseEnter={() => setIsOpen1(true)}
                onMouseLeave={() => setIsOpen1(false)}
              >
                <div className="flex">
                  <div className="flex flex-col p-10">
                    <h1 className="font-32 font-bold leading-10">Solution</h1>
                    <div className="flex-col space-y-9 mt-6">
                      <button
                        className={`font-semibold ${
                          activeTab === "Industries"
                            ? "text-gray-900"
                            : "text-gray-900"
                        }`}
                        onClick={() => setActiveTab("Industries")}
                      >
                        Industries
                      </button>
                      <button
                        className={`font-semibold ${
                          activeTab === "Data Types"
                            ? "text-gray-900"
                            : "text-gray-900"
                        }`}
                        onClick={() => setActiveTab("DataTypes")}
                      >
                        Data Types
                      </button>
                    </div>
                  </div>
                  <div className="p-4 grid grid-cols-2">
                    {(activeTab === "Industries" ? Industry : DataTypes).map(
                      (item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg text-sm leading-6 p-2 hover:bg-gray-50"
                          onClick={() => setIsOpen1(false)}
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                            <Image
                              width={40}
                              height={40}
                              src={item.icon}
                              alt=""
                            />
                          </div>
                          <div className="flex-auto">
                            <Link
                              href={item.href}
                              className="block font-semibold text-gray-900"
                              onClick={() => setIsOpen1(false)}
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <div className="flex items-center gap-x-1 font-16 font-medium leading-6 textcolor">
              <PopoverButton className="flex items-center gap-x-1">
                <Link href="/Pricing">Pricing</Link>
              </PopoverButton>
            </div>
          </Popover>

          <Popover className="relative">
            <div
              className="flex items-center gap-x-1 font-16 font-medium leading-6 textcolor"
              onMouseEnter={() => setIsOpen3(true)}
              onMouseLeave={() => setIsOpen3(false)}
            >
              <Popover.Button className="flex items-center gap-x-1">
                Docs
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
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
                className="absolute flex justify-around -left-[580px] top-full z-10 mt-9 w-screen max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5"
                onMouseEnter={() => setIsOpen3(true)}
                onMouseLeave={() => setIsOpen3(false)}
              >
                <div className="">
                  <h1 className="p-10 font-32 font-bold leading-10">Docs</h1>
                </div>
                <div className="p-4 grid grid-cols-2">
                  {Docs.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg text-sm leading-6 p-2 hover:bg-gray-50"
                      onClick={() => setIsOpen3(false)}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                        <Image width={40} height={40} src={item.icon} alt="" />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                          onClick={() => setIsOpen3(false)}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <div
              className="flex items-center gap-x-1 font-16 font-medium leading-6 textcolor"
              onMouseEnter={() => setIsOpen4(true)}
              onMouseLeave={() => setIsOpen4(false)}
            >
              <Popover.Button className="flex items-center gap-x-1">
                Resources
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
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
                className="absolute flex justify-around -left-[650px] top-full z-10 mt-9 w-screen max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5"
                onMouseEnter={() => setIsOpen4(true)}
                onMouseLeave={() => setIsOpen4(false)}
              >
                <div className="">
                  <h1 className="p-10 font-32 font-bold leading-10">
                    Resources
                  </h1>
                </div>
                <div className="p-4 grid grid-cols-2">
                  {Recources.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg text-sm leading-6 p-2 hover:bg-gray-50"
                      onClick={() => setIsOpen4(false)}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                        <Image width={40} height={40} src={item.icon} alt="" />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                          onClick={() => setIsOpen4(false)}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <div
              className="flex items-center gap-x-1 font-16 font-medium leading-6 textcolor"
              onMouseEnter={() => setIsOpen5(true)}
              onMouseLeave={() => setIsOpen5(false)}
            >
              <Popover.Button className="flex items-center gap-x-1">
                Company
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
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
                className="absolute flex justify-around -left-[800px] top-full z-10 mt-9 w-screen max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5"
                onMouseEnter={() => setIsOpen5(true)}
                onMouseLeave={() => setIsOpen5(false)}
              >
                <div className="">
                  <h1 className="p-10 font-32 font-bold leading-10">Company</h1>
                </div>
                <div className="p-4 grid grid-cols-2">
                  {Company.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg text-sm leading-6 p-2 hover:bg-gray-50"
                      onClick={() => setIsOpen5(false)}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                        <Image width={40} height={40} src={item.icon} alt="" />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                          onClick={() => setIsOpen5(false)}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </PopoverGroup>

        <div className="hidden md:flex md:flex-1 md:justify-end gap-5 items-center">
          <a href="#" className="font-16 fontregular leading-[20px] textcolor">
            Sign Up
          </a>
          <Link
            href="/Demo"
            className="font-16 fontregular leading-[20px] white border border-[#042440] rounded-[15px] pt-3 pb-3 pl-4 pr-4 bg-[#042440]"
          >
            Book a Demo
          </Link>
        </div>
        <div className="flex xl:hidden pl-20">
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
            <a href="#" className="-m-1.5 p-1.5">
              <Image
                width={184}
                height={25}
                className="w-auto"
                src="/logo.png"
                alt="logo"
              />
            </a>
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
                      <DisclosureButton className="flex text-Inter font-medium w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 textcolor hover:bg-gray-50">
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
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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
                      <DisclosureButton className="flex text-Inter font-medium w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 textcolor hover:bg-gray-50">
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
                        {[...Industry].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="flex text-Inter font-medium w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 textcolor hover:bg-gray-50">
                    <Link href="/Pricing">Pricing</Link>
                  </DisclosureButton>
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex text-Inter font-medium w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 textcolor hover:bg-gray-50">
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
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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
                      <DisclosureButton className="flex text-Inter font-medium w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 textcolor hover:bg-gray-50">
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
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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
                      <DisclosureButton className="flex text-Inter font-medium w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 textcolor hover:bg-gray-50">
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
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 font-16 textcolor fontregular block rounded-lg px-3 py-2.5 leading-7"
                >
                  Log in
                </a>
                <Link
                  href="/Demo"
                  className="-mx-3 font-16 white fontregular border-[#042440] rounded-[15px] pt-3 pb-3 pl-4 pr-4 bg-[#042440] block px-3 py-2.5 leading-7"
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
