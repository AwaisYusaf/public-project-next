"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-[#ffcc2e] flex justify-center">
        <div className="flex lg:hidden items-center py-2 w-10/12">
          <div className="flex items-center flex-1">
            <Image
              src="/assets/facebook-icon.png"
              alt="icon"
              width={25}
              height={25}
              className="mx-3 opacity-70"
            />
            <Image
              src="/assets/twitter-icon.png"
              alt="icon"
              width={25}
              height={25}
              className="mx-3 opacity-70"
            />
            <Image
              src="/assets/dribbble-icon.png"
              alt="icon"
              width={25}
              height={25}
              className="mx-3 opacity-70"
            />
          </div>
          <Image
            src="/assets/search-black.png"
            alt="icon"
            width={22}
            height={22}
            className="mx-3"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <header className="bg-white lg:fixed z-50 w-10/12 flex items-center justify-between h-16 border-b-[0.1px] border-gray-200">
          <Link href="/">
            <Image
              src="/assets/header-logo.png"
              width={150}
              height={80}
              alt="logo"
            />
          </Link>
          <div className="hidden lg:flex items-center">
            <Link href="/" className="mx-4 font-semibold text-gray-600">
              Home
            </Link>
            <Link href="/about-us" className="mx-4 font-semibold text-gray-600">
              About Us
            </Link>
            <Link
              href="/our-staff"
              className="mx-4 font-semibold text-gray-600"
            >
              Our Staff
            </Link>
            <Link
              href="/contact-us"
              className="mx-4 font-semibold text-gray-600"
            >
              Contact Us
            </Link>
            <Image
              src="/assets/search-black.png"
              alt="icon"
              width={22}
              height={22}
              className="mx-3"
            />
            <Image
              src="/assets/facebook-icon.png"
              alt="icon"
              width={20}
              height={22}
              className="mx-3"
            />
            <Image
              src="/assets/twitter-icon.png"
              alt="icon"
              width={20}
              height={22}
              className="mx-3"
            />
            <Image
              src="/assets/dribbble-icon.png"
              alt="icon"
              width={20}
              height={22}
              className="mx-3"
            />
          </div>
          {/* Mobile menu icon */}
          <div className="lg:hidden">
            <button
              className="relative group"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all  duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div
                    className={`bg-gray-600 h-[2px] w-7 transform transition-all duration-300 origin-left ${
                      isMenuOpen ? "rotate-[42deg]" : ""
                    }`}
                  ></div>
                  <div
                    className={`bg-gray-600 h-[2px] w-7 rounded transform transition-all duration-300 ${
                      isMenuOpen ? "-translate-x-10" : ""
                    }`}
                  ></div>
                  <div
                    className={`bg-gray-600 h-[2px] w-7 transform transition-all duration-300 origin-left ${
                      isMenuOpen ? "-rotate-[42deg]" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </button>
          </div>
        </header>
      </div>
      <div className={`flex flex-col ${isMenuOpen ? "" : "hidden"}`}>
        <Link href="/" className="p-3 font-semibold">
          Home
        </Link>
        <Link href="/about-us" className="p-3 font-semibold">
          About Us
        </Link>
        <Link href="/our-staff" className="p-3 font-semibold">
          Our Staff
        </Link>
        <Link href="/contact-us" className="p-3 font-semibold">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Header;
