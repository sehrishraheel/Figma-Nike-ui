import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DontMiss() {
  return (
    <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8">
      {/* Heading */}
      <div className="text-black font-Helvetica Neue font-medium text-2xl mt-8 sm:ml-4 md:ml-10">
        <h1>Don&apos;t Miss</h1>
      </div>

      {/* Image Section */}
      <div className="w-full mt-6">
        <Image
          src="/Image (2).png"
          width={1270}
          height={700}
          className="w-full h-auto object-cover"
          alt="img"
        />
      </div>

      {/* Content Section */}
      <div className="w-full max-w-[1008px] mx-auto mt-10 text-center font-Helvetica Neue">
        {/* Title */}
        <h1 className="text-black font-medium text-2xl sm:text-4xl md:text-5xl lg:text-[76px]">
          FLIGHT ESSENTIALS
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-black font-normal mt-6">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link href="/Products">
            <button className="h-9 w-28 sm:w-32 md:w-36 px-4 rounded-full bg-[#111111] hover:bg-[#313131] text-white text-sm sm:text-base font-normal">
              Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
