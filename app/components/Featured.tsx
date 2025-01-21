import Image from "next/image";

export default function Featured() {
  return (
    <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8">
      {/* Heading */}
      <h1 className="text-black font-medium text-2xl mt-8 sm:ml-4 md:ml-10">Featured</h1>

      {/* Image Section */}
      <div className="w-full mt-6">
        <Image
          src="/Image (1).png"
          width={1270}
          height={700}
          className="w-full h-auto object-cover"
          alt="img"
        />
      </div>

      {/* Title */}
      <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-medium text-center mt-8">
        STEP INTO WHAT FEELS GOOD
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base text-center mt-4 md:mt-5">
        Cause everyone should know the feeling of running in that perfect pair.
      </p>

      {/* Button */}
      <div className="text-center mt-6 md:mt-8">
        <button className="border rounded-3xl text-sm sm:text-lg border-black hover:bg-[#313131] bg-black text-white px-6 py-2">
          Find Your Shoe
        </button>
      </div>
    </div>
  );
}
