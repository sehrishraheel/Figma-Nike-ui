import Image from "next/image";
import Link from "next/link";

export default function Join() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-8">
      <div className="w-full sm:w-[380px] lg:w-[500px] bg-white p-6 rounded-lg shadow-md">
        
        {/* Logo */}
        <div className="mb-8 text-center">
          <Image src="/Vector (5).png" width={54} height={1} alt="logo" />
        </div>
        
        {/* Heading */}
        <div className="text-center mb-4">
          <h1 className="text-xl sm:text-2xl text-black font-bold">BECOME A NIKE MEMBER</h1>
        </div>
        
        {/* Description */}
        <div className="text-center text-sm sm:text-base text-[#8D8D8D] mb-5">
          <p>Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.</p>
        </div>
        
        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            className="w-full p-2 h-10 border rounded-sm border-[#E5E5E5] text-[14px] font-normal"
            placeholder="Email Address"
          />
          <input
            type="password"
            className="w-full p-2 h-10 border rounded-sm border-[#E5E5E5] text-[14px] font-normal"
            placeholder="Password"
          />
          <input
            type="text"
            className="w-full p-2 h-10 border rounded-sm border-[#E5E5E5] text-[14px] font-normal"
            placeholder="First Name"
          />
          <input
            type="text"
            className="w-full p-2 h-10 border rounded-sm border-[#E5E5E5] text-[14px] font-normal"
            placeholder="Last Name"
          />
          <div>
            <input
              type="date"
              className="w-full p-2 h-10 border rounded-sm border-[#E5E5E5] text-[14px] font-normal"
              placeholder="Date of Birth"
            />
            <p className="text-xs text-[#8D8D8D] text-center mt-1">
              Get a Nike Member Reward every year on your Birthday.
            </p>
          </div>
          
          <select
            className="w-full p-2 h-10 border rounded-sm cursor-pointer border-[#E5E5E5] text-[#8D8D8D] text-[14px] font-normal"
            defaultValue="India"
          >
            <option>India</option>
            <option>Pakistan</option>
            <option>Bangladesh</option>
            <option>South Africa</option>
            <option>USA</option>
            <option>UK</option>
            <option>Australia</option>
            <option>Canada</option>
          </select>

          <div className="flex justify-between gap-4">
            <h1 className="w-full p-2 h-10 border rounded-sm cursor-pointer hover:bg-blue-300 border-[#E5E5E5] text-[14px] text-[#8D8D8D] text-center font-normal">
              Male
            </h1>
            <h1 className="w-full p-2 h-10 border rounded-sm cursor-pointer hover:bg-blue-300 border-[#E5E5E5] text-[14px] text-[#8D8D8D] text-center font-normal">
              Female
            </h1>
          </div>

          {/* Email signup */}
          <div className="flex items-center space-x-2 mt-6">
            <Image src="/Rectangle.png" width={23} height={23} alt="icon" className="opacity-50" />
            <p className="text-xs text-[#8D8D8D]">
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
            </p>
          </div>

          {/* Privacy policy */}
          <div className="text-xs text-[#8D8D8D] text-center mt-4">
            <p>
              By creating an account, you agree to Nike&apos;s{" "}
              <span className="underline">
                <Link href="#">Privacy Policy</Link>
              </span>{" "}
              and{" "}
              <span className="underline">
                <Link href="#">Terms of Use</Link>
              </span>.
            </p>
          </div>

          {/* Submit Button */}
          <div className="w-full h-[40px] bg-black rounded-sm mt-8">
            <button className="text-white text-xs font-normal w-full h-full">
              JOIN US
            </button>
          </div>

          {/* Sign In Link */}
          <div className="text-center mt-4">
            <p className="text-xs text-[#8D8D8D]">
              Already a Member?{" "}
              <span className="text-black underline font-medium">
                <Link href="/joinUs" className="hover:text-slate-600">
                  Sign In.
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
