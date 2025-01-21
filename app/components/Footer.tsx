import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black mt-28">
      {/* Main container */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 font-Helvetica Neue text-white px-4 sm:px-8 py-10 space-y-6 lg:space-y-0">
        {/* First column */}
        <ul className="space-y-4">
          <p className="font-medium"><Link href="/allProduct">FIND A STORE</Link></p>
          <li><Link href="#">BECOME A MEMBER</Link></li>
          <li><Link href="#">SIGN UP FOR EMAIL</Link></li>
          <li><Link href="#">SEND US FEEDBACK</Link></li>
          <li><Link href="#">STUDENT DISCOUNTS</Link></li>
        </ul>

        {/* Second column */}
        <ul className="space-y-4">
          <p className="font-medium"><Link href="/contactUs">GET HELP</Link></p>
          <li className="text-[#7E7E7E]"><Link href="#">Order Status</Link></li>
          <li className="text-[#7E7E7E]"><Link href="#">Delivery</Link></li>
          <li className="text-[#7E7E7E]"><Link href="#">Returns</Link></li>
          <li className="text-[#7E7E7E]"><Link href="#">Payment Options</Link></li>
          <li className="text-[#7E7E7E] hover:text-white"><Link href="/contactUs">Contact Us On Nike.com Inquiries</Link></li>
          <li className="text-[#7E7E7E]"><Link href="#">Contact Us On All Other Inquiries</Link></li>
        </ul>

        {/* Third column */}
        <ul className="space-y-4">
          <p className="font-medium">ABOUT NIKE</p>
          <li className="text-[#7E7E7E]"><Link href="#">News</Link></li>
          <li className="text-[#7E7E7E]"><Link href="#">Careers</Link></li>
          <li className="text-[#7E7E7E]"><Link href="#">Investors</Link></li>
          <li className="text-[#7E7E7E]"><Link href="#">Sustainability</Link></li>
        </ul>

        {/* Fourth column: Social Icons */}
        <div className="flex gap-5 justify-center sm:justify-start">
          <Image src="/Vector (2).png" width={30} height={30} className="cursor-pointer" alt="T icon" />
          <Image src="/Vector (1).png" width={30} height={30} className="cursor-pointer" alt="F icon" />
          <Image src="/Vector (3).png" width={30} height={30} className="cursor-pointer" alt="Y icon" />
          <Image src="/Vector (4).png" width={30} height={30} className="cursor-pointer" alt="I icon" />
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-wrap justify-between items-center px-4 sm:px-12 py-6 text-white border-t border-[#7E7E7E]">
        {/* Country and Rights */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src="/Vector (11).png" width={10} height={14} alt="icon" />
            <p className="font-medium cursor-pointer">India</p>
          </div>
          <p className="text-[#7E7E7E] text-sm">© 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap gap-4 text-[#7E7E7E] text-sm">
          <li><Link href="#">Guides</Link></li>
          <li><Link href="#">Terms of Sale</Link></li>
          <li><Link href="#">Terms of Use</Link></li>
          <li><Link href="#">Nike Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
  );
}


