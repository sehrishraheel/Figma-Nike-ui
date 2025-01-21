import Image from "next/image";
import productDetails from "../productsDetail/page";

export default function GearUp() {
  return (
    <div className="w-full h-auto py-8">
      {/* Section Header */}
      <div className="max-w-[1340px] mx-auto">
        <h1 className="text-black font-medium font-['Helvetica Neue'] text-2xl ml-4 lg:ml-10 mt-8">
          Gear Up
        </h1>

        {/* Shop Men & Women Buttons */}
        <div className="flex justify-between items-center mt-8 px-4 lg:px-10">
          {/* Shop Men's */}
          <div className="flex items-center gap-3">
            <h1 className="text-base font-medium font-['Helvetica Neue']">
              Shop Men&apos;s
            </h1>
            <div className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-full flex justify-center items-center cursor-pointer">
              <Image
                src="/Vector (9).png"
                width={5}
                height={5}
                alt="arrow"
              />
            </div>
            <div className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-full flex justify-center items-center cursor-pointer">
              <Image
                src="/Vector (10).png"
                width={5}
                height={5}
                alt="arrow"
              />
            </div>
          </div>

          {/* Shop Women's */}
          <div className="flex items-center gap-3">
            <h1 className="text-base font-medium font-['Helvetica Neue']">
              Shop Women&apos;s
            </h1>
            <div className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-full flex justify-center items-center cursor-pointer">
              <Image
                src="/Vector (9).png"
                width={5}
                height={5}
                alt="arrow"
              />
            </div>
            <div className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-full flex justify-center items-center cursor-pointer">
              <Image
                src="/Vector (10).png"
                width={5}
                height={5}
                alt="arrow"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-4 lg:px-10">
          {Array.isArray(productDetails) &&
            productDetails.slice(3, 7).map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <Image
                  src={item.image}
                  width={300}
                  height={300}
                  alt={item.title}
                  className="rounded-lg object-cover"
                />
                <div className="mt-3">
                  <h1 className="text-black font-medium font-['Helvetica Neue'] text-sm">
                    {item.title}
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  <p className="text-black font-semibold mt-1">{item.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
