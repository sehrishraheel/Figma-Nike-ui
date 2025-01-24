'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#F5F5F5] h-[44px] w-full flex items-center justify-between px-4 sm:px-8 lg:px-[48px]">
        {/* Logo */}
        <div>
          <Image src="/Vector.png" width={19.2} height={17.9} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-4 text-sm md:text-base font-Helvetica Neue font-medium">
          <li>
            <Link href="/allProduct">Find a Store</Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/contactUs">Help</Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/joinUs">Join Us</Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/logIn">Sign In</Link>
          </li>
        </ul>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white w-full h-[56px] flex items-center justify-between px-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <Image src="/Vector (5).png" width={58.85} height={20.54} alt="Main Logo" />

        {/* Main Menu Links */}
        <ul className="hidden md:flex gap-4 lg:gap-[17px] text-sm sm:text-base lg:text-xl font-medium text-black">
          <li><Link href="#">New & Featured</Link></li>
          <li><Link href="#">Men</Link></li>
          <li><Link href="#">Women</Link></li>
          <li><Link href="#">Kids</Link></li>
          <li><Link href="#">Sale</Link></li>
          <li><Link href="#">SNKRS</Link></li>
        </ul>

        {/* Search Bar and Icons */}
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className="hidden lg:flex items-center border bg-[#F5F5F5] h-[40px] rounded-full gap-3 px-3">
            <Image
              src="/Vector (6).png"
              width={22}
              height={20}
              alt="Search Icon"
              className="text-[#111111]"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search"
              className="bg-[#F5F5F5] outline-none text-sm sm:text-base text-[#111111]"
            />
          </div>

          {/* Wishlist Icon */}
          
            <div className="w-[24px] h-[24px]">
              <Image
                src="/Vector (7).png"
                width={36}
                height={36}
                alt="Wishlist"
              />
            </div>
         

          {/* Cart Icon */}
          <Link href="/cart">
            <div className="w-[24px] h-[24px]">
              <Image
                src="/Vector (8).png"
                width={36}
                height={36}
                alt="Cart"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
