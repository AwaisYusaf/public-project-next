import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between h-16 border-b-[1px] border-gray-500">
      <Image src="/assets/header-logo.png" width={150} height={80} alt="logo" />
      <div className="flex items-center">
        <Link href="/" className="mx-4 font-semibold text-gray-600">
          Home
        </Link>
        <Link href="/" className="mx-4 font-semibold text-gray-600">
          About Us
        </Link>
        <Link href="/" className="mx-4 font-semibold text-gray-600">
          Our Staff
        </Link>
        <Link href="/" className="mx-4 font-semibold text-gray-600">
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
    </header>
  );
}

export default Header;
