import Image from "next/image";
import Link from "next/link"
export default function join(){
    return(
        <div className="flex flex-col justify-center w-[380px] h-[833px] ml-[510px] mt-[px]">
          
          <div className="mb-8 ml-36">
            <Image src="/Vector (5).png"
            width={54}
            height={1}
            alt="logo"/>
          </div>
         
          <div className="w-[231.21px] text-center ml-[42px]">
            <h1 className="text-[19px] text-black font-bold ">BECOME A NIKE MEMBER</h1>
          </div>
          
          <div className="w-[282px] h-[60px] font-Inter  text-[#8D8D8D] text-center mt-5 ml-[18px]">
            <p>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
          </div>
          
          <div className="w-[324px] h-[561px] items-center -mt-8">
            <form>
              <input type="email" className="p-2 h-10 border rounded-sm  border-[#E5E5E5] text-[14px] mt-16 w-[324px] font-normal" placeholder="Email Address"></input>
              <input type="password" className="p-2 h-10 border rounded-sm  border-[#E5E5E5] text-[14px] mt-3 w-[324px] font-normal" placeholder="Password"></input>
              <input type="first name" className="p-2 h-10 border rounded-sm  border-[#E5E5E5] text-[14px] mt-3 w-[324px] font-normal" placeholder="First Name"></input>
              <input type="last name" className="p-2 h-10 border rounded-sm  border-[#E5E5E5] text-[14px] mt-3 w-[324px] font-normal" placeholder="Last Name"></input>
              <div className="w-[324px] h-[69px]">
              <input type="date of birth" className="p-2 h-10 border rounded-sm  border-[#E5E5E5] text-[14px] mt-3 w-[324px] font-normal" placeholder="Date of Birth"></input>
              <p className="w-[301px] h-[14px] text-[#8D8D8D] text-center text-[11px] font-normal ml-[11.8px] mt-1">Get a Nike Member Reward every year on your Birthday.</p></div>
              <select  className="p-2 h-10 border rounded-sm cursor-pointer hover:text-black border-[#E5E5E5] w-[324px] text-[#8D8D8D] text-[14px] font-normal mt-4" defaultValue="India">
                 <option>India</option>
                 <option>Pakistan</option>
                 <option>Bangladesh</option>
                 <option>South Africa</option>
                 <option>USA</option>
                 <option>UK</option>
                 <option>Australia</option>
                 <option>Canada</option>
              </select>
              <div className="flex gap-4 w-[324px] h-[40px]">
                  <h1 className="p-2 h-10 border rounded-sm cursor-pointer hover hover:bg-blue-300 border-[#E5E5E5] text-[14px] text-[#8D8D8D] text-center mt-3 w-[153.8px] font-normal">Male</h1>
                  <h1 className="p-2 h-10 border rounded-sm cursor-pointer hover hover:bg-blue-300 border-[#E5E5E5] text-[14px] text-[#8D8D8D] text-center mt-3 w-[153.8px] font-normal">Female</h1>
              </div>
                <div className="flex gap-3 w-[324px] h-[28px]">
                  <Image src="/Rectangle.png" 
                  width={23}
                  height={23}
                  className="border-[#BCBCBC] opacity-[5px] mt-8 rounded-sm"alt="icon"/>
                  <p className="w-[247px] h-[28px] text-[11px] font-normal text-[#8D8D8D] mt-7">Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
                </div>
                <div className="w-[295.31px] h-[59px] mt-12">
              <p className="text-xs font-normal text-center ml-6 text-[#8D8D8D]">By creating an account, you agree to Nike&apos;s <span className="underline"><Link href="#">Privacy Policy</Link></span> and <span className="underline"><Link href="#">Terms of Use.</Link></span></p>
            </div>
            <div className="w-[324px] h-[40px] border border-black rounded-sm bg-black">
          <button className="text-white font-normal mt-2 ml-[141px] text-xs w-[45px] h-[18px] hover:text-gray-700">JOIN US</button>
         </div>
         <div className="w-[324px] h-[24px]">
          <p className="w-[148.98px] h-[14px] flex gap-1 justify-center ml-[89px] mt-4 font-normal text-xs text-[#8D8D8D]">Already a Member? <span className="text-black underline underline-offset-4 font-medium"><Link href="/joinUs" className="hover:text-slate-600"> Sign In.</Link> </span></p>
         </div>
            </form>
        </div>
        
        </div>
    );
  }