import Image from "next/image"
import React from "react"

export default function Checkout() {
  return (
    <div className="flex flex-col md:flex-row md:ml-[289px]">
      {/* Main content section */}
      <div className="md:h-[2206px] md:mt-[70px] md:w-[440px] w-full mx-auto">
        <div className="w-full md:w-[440px]">
          <h1 className="text-[21px] font-medium">How would you like to get your order?</h1>
        </div>
        <div className="w-full md:w-[440px] mt-4">
          <p className="text-[15px] font-normal text-[#757575]">
            Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.<span className="underline"> Learn More </span>
          </p>
        </div>

        <div className="flex w-full md:w-[440px] h-[82px] border-[3px] rounded-xl border-black mt-7">
          <Image src="/Group (1).png"
            width={21.8}
            height={19.8}
            className="mt-7 ml-5"
            alt="icon" />
          <h1 className="mt-[26px] ml-8 font-medium text-[15px]">Deliver It</h1>
        </div>

        <div className="w-full md:w-[440px] mt-4">
          <div>
            <h1 className="text-[21px] text-black font-medium mt-7">Enter your name and address:</h1>
          </div>

          <div>
            <form className="w-full md:w-[440px]">
              <input type="text" className="p-4 h-10 border rounded-md border-[#E5E5E5] text-[16px] mt-6 w-full font-normal text-black" placeholder="First Name" />
              <input type="text" className="p-4 h-10 border rounded-md border-[#E5E5E5] text-[16px] mt-3 w-full font-normal" placeholder="Last Name" />
              <div className="h-[69px]">
                <input type="text" className="p-4 h-10 border rounded-md border-[#E5E5E5] text-[16px] mt-3 w-full font-normal" placeholder="Address Line 1" />
                <p className="w-[149px] h-[14px] text-[#8D8D8D] text-center text-[11px] font-normal ml-4 mt-1">We do not ship to P.O. boxes</p>
              </div>
              <input type="text" className="p-4 h-10 border rounded-sm  border-[#E5E5E5] text-[16px] mt-3 w-full font-normal" placeholder="Address Line 2" />
              <input type="text" className="p-4 h-10 border rounded-md border-[#E5E5E5] text-[16px] mt-3 w-full font-normal" placeholder="Address Line 3" />

              <div className="flex gap-4 w-full md:w-[440px] h-[40px]">
                <h1 className="pt-2 h-10 border rounded-md cursor-pointer hover:bg-blue-300 border-[#E5E5E5] text-[16px] text-black pl-4 mt-3 w-full md:w-[211.19px] font-normal">Postal Code</h1>
                <h1 className="p-2 h-10 border rounded-md cursor-pointer hover:bg-blue-300 border-[#E5E5E5] text-[16px] text-black pl-4 mt-3 w-full md:w-[211.19px] font-normal">Locality</h1>
              </div>

              <div className="flex gap-4 w-full md:w-[440px] h-[40px] mt-3">
                <select className="h-10 border cursor-pointer hover:text-black border-[#E5E5E5] w-full md:w-[211.19px] rounded-md text-[#8D8D8D] text-[16px] font-normal mt-4 pl-3" defaultValue="State/Territory">
                  <option disabled>State/Territory</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <div className="flex h-10 border mt-4 rounded-md cursor-pointer border-[#E5E5E5] w-full md:w-[211.19px]">
                  <h1 className="text-[16px] text-black pl-4 mt-2 w-full">India</h1>
                  <Image src="/Rectangle (11).png"
                    width={18}
                    height={18}
                    className="w-[8px] h-[8px] mt-4 mr-2"
                    alt="dot" />
                </div>
              </div>

              <div className="flex gap-3 w-full md:w-[440px] h-[28px] mt-2">
                <Image src="/Rectangle.png"
                  width={18}
                  height={18}
                  className="border-[#BCBCBC] opacity-[5px] mt-8 rounded-md"
                  alt="icon" />
                <p className="w-[219px] h-[28px] text-[13px] font-normal text-black mt-8">Save this address to my profile</p>
              </div>

              <div className="flex gap-3 w-full md:w-[440px] h-[28px] mt-2">
                <Image src="/Rectangle.png"
                  width={18}
                  height={18}
                  className="border-[#CCCCCC] bg-[#CCCCCC] opacity-[5px] mt-8 rounded-md"
                  alt="icon" />
                <p className="w-[247px] h-[28px] text-[13px] font-normal text-black mt-8">Make this my preferred address</p>
              </div>

              <div className="w-full md:w-[440px] h-[24px]">
                <h1 className="text-[21px] text-black font-medium mt-12">What&apos;s your contact information?</h1>
              </div>

              <div className="w-full md:w-[440px]">
                <input type="email" className="p-4 h-14 border rounded-md border-[#E5E5E5] text-[16px] mt-6 font-normal text-black w-full" placeholder="Email" />
                <p className="w-[250px] h-[14px] text-[#8D8D8D] ml-4 text-[11px] font-normal mt-1">A confirmation email will be sent after checkout.</p>
              </div>

              <div className="w-full md:w-[440px] h-[69px]">
                <input type="text" className="p-4 h-14 border rounded-md border-[#E5E5E5] text-[16px] mt-3 font-normal text-black w-full" placeholder="Phone Number" />
                <p className="w-[245px] h-[14px] text-[#8D8D8D] text-[11px] font-normal mt-1 ml-4">A carrier might contact you to confirm delivery.</p>
              </div>
            </form>

            <div className="w-full md:w-[440px]">
              <h1 className="text-[21px] text-black font-medium mt-12">What&apos;s your PAN?</h1>
            </div>

            <div className="w-full md:w-[440px]">
              <input type="text" className="p-4 h-14 border rounded-md border-[#E5E5E5] text-[16px] mt-6 font-normal text-black w-full" placeholder="PAN" />
              <p className="w-[376px] h-[14px] text-[#8D8D8D] ml-4 text-[12px] font-normal mt-1">Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
            </div>

            <div className="flex gap-3 w-full md:w-[440px] h-[28px] mt-2">
              <Image src="/Rectangle.png"
                width={18}
                height={18}
                className="border-[#CCCCCC] opacity-[5px] mt-8 rounded-md"
                alt="icon" />
              <p className="w-[164px] h-[24px] text-[11px] font-normal text-[#757575] mt-8">Save PAN details to Nike Profile</p>
            </div>

            <div className="flex gap-3 w-full md:w-[440px] h-[28px] mt-8">
              <Image src="/Rectangle.png"
                width={18}
                height={18}
                className="border-[#CCCCCC] opacity-[5px] mt-8 rounded-md"
                alt="icon" />
              <p className="w-[408px] h-[24px] text-[12px] font-normal text-[#757575] mt-8">I have read and consent to eShopWorld processing my information in accordance with the <span className="underline">Privacy Statement</span> and <span className="underline">Cookie Policy</span>. eShopWorld is a trusted Nike partner.</p>
            </div>

            <div className="w-full md:w-[440px] h-[60px] border rounded-full bg-[#F5F5F5] border-transparent mt-28">
              <button className="text-[#757575] font-medium mt-4 ml-[181px] text-[15px] w-[45px] h-[18px]">Continue</button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary section */}
      <div className="w-full md:w-[440px] h-auto md:h-[295px] ml-28 mt-[70px]">
        <h1 className="text-[21px] font-medium">Order Summary</h1>

        <div className="flex w-full md:w-[334.67px] h-[28px] mt-3">
          <h1 className="text-[15px] font-normal text-[#8D8D8D]">Subtotal</h1>
          <h1 className="text-[14px] font-normal text-[#8D8D8D] ml-[150px]">₹ 20,890.00</h1>
        </div>

        <div className="flex w-full md:w-[334.67px] h-[28px] mt-3">
          <h1 className="text-[15px] font-normal text-[#8D8D8D]">Delivery/Shipping</h1>
          <h1 className="text-[15px] font-normal text-[#8D8D8D] ml-[30px]">₹Free</h1>
        </div>

        <div className="flex w-full md:w-[313.67px] h-[62px] border-t-[1px] border-b-[1px] border-[#E5E5E5] mt-4 ">
          <h1 className="text-[14px] font-medium mt-5">Total</h1>
          <h1 className="text-[14px] font-medium ml-[168px] mt-5">₹ 20,890.00</h1>
        </div>

        <h1 className="w-full md:w-[316px] h-[12px] text-[9px] font-normal mt-3">(The total reflects the price of your order, including all duties and taxes)</h1>

        <div className="w-full md:w-[320px] h-[474px]">
          <h1 className="text-[15px] font-bold mt-5">Arrives Mon, 27 Mar - Wed, 12 Apr</h1>

          <div className="flex gap-7 w-full md:w-[320px] h-[208px] mt-3">
            <Image src="/GearUP/IMG01.png"
              width={208}
              height={208}
              alt="img" />

            <div className="w-[130px] h-[178px]">
              <p className="text-[14px]">Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</p>
              <p className="text-[10px] text-[#757575] font-medium">Color: Black/White</p>
              <p className="text-[13px] font-medium mt-4">₹ 12,890</p>
            </div>
          </div>

          <div className="w-full md:w-[320px] h-[90px] mt-3">
            <div className="flex w-full md:w-[320px] h-[90px] gap-4">
              <Image src="/GearUP/IMG02.png"
                width={208}
                height={208}
                alt="img" />
              <div className="w-[130px] h-[90px]">
                <p className="text-[14px]">Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</p>
                <p className="text-[10px] text-[#757575] font-medium">Color: Black/White</p>
                <p className="text-[13px] font-medium mt-4">₹ 12,890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
