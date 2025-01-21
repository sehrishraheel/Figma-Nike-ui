import Image from "next/image";
import Link from "next/link";

export default function contactpg() {
  return (
    <div className="mt-[60px]">
      {/* GET HELP Section */}
      <div className="h-[132px]">
        <h1 className="text-center text-[32px] font-medium">GET HELP</h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-52 mt-5 mx-auto max-w-screen-md">
          <input
            type="text"
            className="w-full md:w-[199px] h-[17px] text-[15px] font-normal text-[#757575] px-3 py-2 border border-[#75757575] rounded-lg"
            placeholder="What can we help you with?"
          />
          <Image
            src="/Vector (6).png"
            width={15}
            height={15}
            className="cursor-pointer mt-2 md:mt-5"
            alt="icon"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-7 mx-4 md:mx-16">
        <h1 className="text-[28px] font-medium">
          WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
        </h1>
        <p className="mt-8 text-[15px] font-normal text-[#757575]">
          We want to make buying your favourite Nike shoes and gear online fast
          and easy, and we accept the following payment options:
        </p>

        <div className="mt-6">
          <p className="text-[15px] font-normal">
            Visa, Mastercard, Diners Club, Discover, American Express, Visa
            Electron, Maestro
          </p>
          <p className="text-[15px] font-normal mt-5">
            If you enter your PAN information at checkout, you'll be able to pay
            for your order with PayTM or a local credit or debit card.
          </p>
          <p className="text-[15px] font-normal mt-5">Apple Pay</p>
        </div>

        <div className="mt-5">
          <p className="text-[15px] font-normal">
            <Link href="#" className="underline">
              Nike Members
            </Link>
            can store multiple debit or credit cards in their profile for faster
            checkout. If you're not already a Member,{" "}
            <Link href="#" className="underline">
              join us
            </Link>{" "}
            today.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="w-full md:w-auto py-[7.5px] px-[22px] rounded-full bg-[#111111] text-white hover:bg-[#313131]">
              JOIN US
            </button>
            <button className="w-full md:w-auto py-[7.5px] px-[22px] rounded-full bg-[#111111] text-white hover:bg-[#313131]">
              SHOP NIKE
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-[20px] font-medium">FAQs</h2>

          <div className="mt-5">
            <p className="text-[16px] font-bold">Does my card need international purchases enabled?</p>
            <p className="text-[16px] font-normal mt-2">
              Yes, we recommend asking your bank to enable international purchases
              on your card. You will be notified at checkout if international
              purchases need to be enabled.
            </p>
            <p className="text-[15px] font-normal mt-6">
              Please note, some banks may charge{" "}
              <span className="font-medium underline">a small transaction fee</span>{" "}
              for international orders.
            </p>
          </div>

          <div className="mt-4">
            <p className="text-[15px] font-bold">
              Can I pay for my order with multiple methods?
              <span className="font-normal"> No, payment for Nike orders can't be split between multiple payment methods.</span>
            </p>
          </div>

          <div className="mt-3">
            <p className="text-[15px] font-bold">
              What payment method is accepted for SNKRS orders?
            </p>
            <p className="text-[15px] font-normal">
              You can use any accepted credit card to pay for your SNKRS order.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-[16px] font-bold">Why don't I see Apple Pay as an option?</p>
            <p className="text-[16px] font-normal mt-2">
              To see Apple Pay as an option in the Nike App or on Nike.com, you'll
              need to use a compatible Apple device running the latest OS, be signed
              in to your iCloud account, and have a supported card in your Wallet.
              Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
            </p>
          </div>

          <div className="mt-5">
            <h1 className="text-[15px] font-normal">Was this answer helpful?</h1>
            <div className="flex gap-3 mt-3">
              <Image
                src="/Vector (14).png"
                width={18.3}
                height={22.5}
                alt="icon"
              />
              <Image
                src="/Vector (15).png"
                width={18.3}
                height={22.5}
                alt="icon"
              />
            </div>
          </div>

          <div className="mt-6">
            <h1 className="text-[16px] font-medium text-[#757575]">RELATED</h1>

            <div className="mt-5">
              <p className="text-[16px] font-medium underline">
                <Link href="#">WHAT ARE NIKE'S DELIVERY OPTIONS?</Link>
              </p>
              <p className="text-[16px] font-medium underline mt-5">
                <Link href="#">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="mt-5 border-t border-[#75757575] pt-6 mx-4 md:mx-16">
        <h1 className="text-[28px] font-medium">CONTACT US</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5">
          <div className="text-center">
            <Image
              src="/Image (12).png"
              width={64}
              height={64}
              className="mx-auto"
              alt="img"
            />
            <h1 className="font-medium text-[16px]">000 800 919 0566</h1>
            <p className="text-[16px] font-normal">
              Products & Orders: 24 hours a day, 7 days a week
            </p>
            <p className="text-[16px] font-normal">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
          </div>

          <div className="text-center">
            <Image
              src="/Image (13).png"
              width={64}
              height={64}
              className="mx-auto"
              alt="img"
            />
            <h1 className="font-medium text-[15px]">24 hours a day</h1>
            <p className="text-[15px] font-normal">7 days a week</p>
          </div>

          <div className="text-center">
            <Image
              src="/Image (16).png"
              width={64}
              height={64}
              className="mx-auto"
              alt="img"
            />
            <h1 className="font-medium text-[15px]">We'll reply within</h1>
            <p className="text-[15px] font-normal">five business days</p>
          </div>

          <div className="text-center">
            <Image
              src="/Image (17).png"
              width={64}
              height={64}
              className="mx-auto"
              alt="img"
            />
            <h1 className="font-medium text-[16px]">STORE LOCATOR</h1>
            <p className="text-[15px] font-normal">Find Nike retail stores near you</p>
          </div>
        </div>
      </div>
    </div>
  );
}
