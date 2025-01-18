import Image from "next/image"
import React from "react"
import Link from "next/link"

export default function Footer(){
    return(
      <div className="bg-black h-[421px] mt-28">
        <div className="container grid grid-cols-4 font-Helvetica Neue text-white px-8 space-y-4 w-[1029px] h-[213px]">
               
            <ul className="w-[245.25px] h-[169.63] space-y-4 font-normal">
            <p className="mt-10"><Link href="/allProduct">FIND A STORE</Link></p>
                <li><Link href="#">BECOME A MEMBER</Link></li>
                <li><Link href="#">SIGN UP FOR EMAIL</Link></li>
                <li><Link href="#">SEND US FEEDBACK</Link></li>
                <li><Link href="#">STUDENT DISCOUNTS</Link></li>
             </ul>
              
              <ul  className="w-[245.25px] h-[213px] ml-[50px] space-y-4 ">
              <p className="font-medium mt-6"><Link href="/contactUs">GET HELP</Link></p>
                <li className="text-[#7E7E7E]"><Link href="#">Order Status</Link></li>
                <li className="text-[#7E7E7E]"><Link href="#">Delivery</Link></li>
                <li className="text-[#7E7E7E]"><Link href="#">Returns</Link></li>
                <li className="text-[#7E7E7E]"><Link href="#">Payment Options</Link></li>
                <li className="text-[#7E7E7E] hover:text-white"><Link href="/contactUs">Contact Us On Nike.com Inquiries</Link></li>
                <li className="text-[#7E7E7E]"><Link href="#">Contact Us On All Other Inquiries</Link></li>
              </ul>
              
              <ul className="w-[245.25px] h-[151px] ml-[100px] space-y-4">
              <p className="font-medium mt-6">ABOUT NIKE</p>
                <li className="text-[#7E7E7E]"><Link href="#">News</Link></li>
                <li className="text-[#7E7E7E]"><Link href="#">Careers</Link></li>
                <li className="text-[#7E7E7E]"><Link href="#">Investors</Link></li>
                <li className="text-[#7E7E7E]"><Link href="#">Sustainability</Link></li>
              </ul>

            <div className="w-[337px] h-[37px]">
            <div className="flex gap-5 w-[30px] h-[30px] mt-6 ml-96"> 
              <Image src ="/Vector (2).png"
              width={30}
              height={30}
              className="cursor-pointer"
              alt="T icon"/>
              <Image src ="/Vector (1).png"
              width={30}
              height={30}className="cursor-pointer"

              alt="F icon"/>
              <Image src ="/Vector (3).png"
              width={30}
              height={30}
              className="cursor-pointer"
              alt="Y icon"/>
              <Image src ="/Vector (4).png"
              width={30}
              height={30}
              className="cursor-pointer"
              alt="I icon"/>
          </div></div>
          </div>

          <div className="grid grid-cols-2 px-12 mt-[165px] text-white">
            <div className="flex gap-6">
           
            <div className="flex gap-[8px]">
              <Image src="/Vector (11).png"
              width={9.38}
              height={13.12}
              className="mt-1.5 cursor-pointer"alt="icon"/>
            <p className="font-medium cursor-pointer">India</p></div>
            <p className="font-thin text-[#7E7E7E]"> © 2023 Nike, Inc. All Rights Reserved</p></div>
 
            <ul className="flex gap-8 text-[#7E7E7E]">
            <li className="ml-40 "><Link href="#">Guides</Link></li>
            <li><Link href="#">Terms of Sale</Link></li>
            <li><Link href="#">Terms of Use</Link></li>
            <li><Link href="#">Nike Privacy Policy</Link></li>
          </ul>
        </div></div>
    );
}