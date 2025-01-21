import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  return (
    <div className="flex flex-col mt-[40px] mx-auto w-full max-w-screen-lg px-4 md:px-8">
      <div className="w-full">
        {/* Free Delivery Section */}
        <div className="h-[62.89px] w-full bg-[#F7F7F7] flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6">
          <h1 className="text-[13px] font-medium pt-2 sm:pt-0">Free Delivery</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p className="text-[11px] font-normal">Applies to orders of ₹ 14 000.00 or more.</p>
            <Link href="#">
              <p className="text-[11px] font-medium underline">View details</p>
            </Link>
          </div>
        </div>

        {/* Bag Section */}
        <div className="border-t-[1px] pt-8">
          <h1 className="text-[22px] font-medium">Bag</h1>

          {/* Product 1 */}
          <div className="w-full flex flex-col md:flex-row gap-4 mt-8">
            <Image
              src="/GearUP/IMG01.png"
              width={150}
              height={150}
              alt="Nike Dri-FIT ADV TechKnit Ultra"
              className="object-cover mx-auto md:mx-0"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</p>
                <p className="text-[15px] font-normal">MRP: ₹ 3 895.00</p>
              </div>
              <ul className="text-[#757575] mt-2">
                <li>Men&apos;s Short-Sleeve Running Top</li>
                <li>Ashen Slate/Cobalt Bliss</li>
              </ul>
              <div className="mt-2 text-[#757575]">
                <ul className="flex gap-4">
                  <li>Size: L</li>
                  <li>Quantity: 1</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <Image src="/Vector (7).png" width={24} height={22} alt="icon" />
            <Image src="/Vector (13).png" width={24} height={22} alt="icon" />
          </div>
        </div>

        {/* Product 2 */}
        <div className="border-t-[1px] pt-8">
          <div className="w-full flex flex-col md:flex-row gap-4">
            <Image
              src="/GearUP/IMG02.png"
              width={150}
              height={150}
              alt="Nike Air Max 97 SE"
              className="object-cover mx-auto md:mx-0"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="font-medium">Nike Air Max 97 SE</p>
                <p className="text-[15px] font-normal">MRP: ₹ 16 995.00</p>
              </div>
              <ul className="text-[#757575] mt-2">
                <li>Men&apos;s Shoes</li>
                <li>Flat Pewter/Light Bone/Black/White</li>
              </ul>
              <div className="mt-2 text-[#757575]">
                <ul className="flex gap-4">
                  <li>Size: 8</li>
                  <li>Quantity: 1</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <Image src="/Vector (7).png" width={24} height={22} alt="icon" />
            <Image src="/Vector (13).png" width={24} height={22} alt="icon" />
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-8 px-4 md:px-0">
        <h1 className="text-[21px] font-medium">Summary</h1>

        {/* Subtotal */}
        <div className="flex justify-between mt-4">
          <p className="text-[15px] font-normal">Subtotal</p>
          <p className="text-[14px] font-normal">₹ 20 890.00</p>
        </div>

        {/* Estimated Delivery */}
        <div className="flex justify-between mt-4">
          <p className="text-[15px] font-normal">Estimated Delivery & Handling</p>
          <p className="text-[15px] font-normal">₹ Free</p>
        </div>

        {/* Total */}
        <div className="flex justify-between mt-4 border-t-[1px] border-b-[1px] py-4">
          <p className="text-[14px] font-normal">Total</p>
          <p className="text-[14px] font-medium">₹ 20 890.00</p>
        </div>

        {/* Checkout Button */}
        <button className="w-full h-[60px] bg-black text-white text-[15px] font-medium rounded-full mt-6 hover:bg-gray-700">
          <Link href="/checkout">
            Member Checkout
          </Link>
        </button>
      </div>
    </div>
  );
}
