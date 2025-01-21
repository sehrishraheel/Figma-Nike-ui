import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-8 bg-gray-100">
      <div className="w-full sm:w-[380px] lg:w-[500px] bg-white p-6 rounded-lg shadow-md">
        
        {/* Logo */}
        <div className="mb-8 text-center">
          <Image src="/Vector (5).png" width={54} height={1} alt="logo" />
        </div>
        
        {/* Heading */}
        <div className="text-center mb-4">
          <h1 className="text-xl sm:text-2xl text-black font-bold">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            className="w-full p-2 h-10 border rounded-sm border-[#E5E5E5] text-[14px] font-normal"
            placeholder="Email address"
          />
          <input
            type="password"
            className="w-full p-2 h-10 border rounded-sm border-[#E5E5E5] text-[14px] font-normal"
            placeholder="Password"
          />
        </form>

        {/* Keep me signed in & Forgot password */}
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <div className="border-[1px] w-[20px] h-[20px] border-[#BCBCBC] rounded-sm flex justify-center items-center">
              <Image src="/Group.png" width={9.78} height={7.81} alt="icon" />
            </div>
            <h1 className="ml-2 text-xs text-[#8D8D8D]">Keep me signed in</h1>
          </div>
          <h1 className="text-xs text-[#BCBCBC]">
            <a href="#">Forgotten your password?</a>
          </h1>
        </div>

        {/* Terms and conditions */}
        <div className="text-xs text-[#8D8D8D] text-center mt-6">
          <p>
            By logging in, you agree to Nike&apos;s{" "}
            <span className="underline">
              <Link href="#">Privacy Policy</Link>
            </span>{" "}
            and{" "}
            <span className="underline">
              <Link href="#">Terms of Use</Link>
            </span>.
          </p>
        </div>

        {/* Sign In Button */}
        <div className="w-full mt-8">
          <button className="w-full h-10 bg-black text-white text-xs font-normal rounded-sm hover:text-gray-700">
            SIGN IN
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <p className="text-xs text-[#8D8D8D]">
            Not a Member?{" "}
            <span className="text-black underline font-medium">
              <Link href="/joinUs" className="hover:text-slate-500">
                Join Us.
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
