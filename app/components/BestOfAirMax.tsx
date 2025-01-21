import Image from "next/image";
import Link from "next/link";
import productDetails from "../productsDetail/page";

export default function BestOfAirMax() {
  return (
    <div className="w-full h-auto p-6">
      <div className="max-w-[1340px] mx-auto">
        <div className="flex justify-between items-center h-[52px] mt-16">
          <p className="text-2xl font-medium font-['Helvetica Neue']">Best Of Air Max</p>
          <div className="flex items-center gap-3 text-xl">
            <p className="font-medium mt-1">Shop</p>
            <div className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-full flex justify-center items-center">
              <Image
                src="/Vector (9).png"
                width={6.97}
                height={13.93}
                alt="arrow"
                className="text-[#CCCCCC]"
              />
            </div>
            <div className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-full flex justify-center items-center">
              <Link href="/allProduct">
                <Image
                  src="/Vector (10).png"
                  width={6.97}
                  height={13.93}
                  alt="arrow"
                  className="text-[#111111]"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {Array.isArray(productDetails) &&
            productDetails.slice(0, 4).map((item) => (
              <div key={item.id} className="flex flex-col items-start h-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={441.36}
                  height={441.36}
                  className="w-full object-cover rounded-lg"
                />
                <div className="pt-3">
                  <div className="flex justify-between items-center">
                    <h1 className="text-black font-medium font-['Helvetica Neue'] text-sm">
                      {item.title}
                    </h1>
                    <p className="text-sm">{item.price}</p>
                  </div>
                  <p className="text-sm text-[#757575] pt-1">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
