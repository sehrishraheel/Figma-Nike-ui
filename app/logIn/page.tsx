import Image from "next/image";
import Link from "next/link"
export default function signIn(){
    return(
        <div className="flex flex-col justify-center w-[380px] h-[489px] ml-[510px] mt-[12px]">
          
          <div className="mb-28 ml-36">
            <Image src="/Vector (5).png" 
            width={54}
            height={1}
            alt="logo"/>
          </div>
         
          <div className="w-[160px] h-[57px] -mt-24 text-center ml-20">
            <h1 className="text-[19px] text-black font-bold">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
          </div>
          
          <div className="w-[324px] h-[305px] items-center">
            <form>
              <input type="email" className="p-2 h-10 border rounded-sm  border-[#E5E5E5] text-[14px] mt-16 w-[324px] font-normal" placeholder="Email address"></input>
              <input type="password" className="p-2 h-10 border rounded-sm  border-[#E5E5E5] text-[14px] mt-3 w-[324px] font-normal" placeholder="Password"></input>
            </form>

             <div className="flex">           
              <div className="w-[162px] h-[20px] mt-8">
            <div className="border-[1px] w-[20px] h-[20px] border-[#BCBCBC] rounded-sm content-center">
                <Image src="/Group.png"
                width={9.78}
                height={7.81}
                className="ml-[4.2px]"alt="icon"/>
            </div>
              </div> 
               
           <div className="flex mt-8 ">
            <h1 className="w-[162px] h-[20px] ml-3 mt-[2px] font-normal text-xs text-[#8D8D8D]">Keep me signed in</h1>
            <h1 className="w-[162px] h-[20px] mt-[2px] font-normal -ml-2 text-xs text-[#BCBCBC]"><a href="#">Forgotten your password?</a></h1>
             </div>
             </div>
             
             <div className="w-[295.31px] h-[59px] mt-[25px]">
              <p className="text-xs font-normal text-center ml-9 text-[#8D8D8D]">By logging in, you agree to Nike&apos;s <span className="underline"><Link href="#">Privacy Policy</Link></span> and <span className="underline"><Link href="#">Terms of Use.</Link></span></p>
            </div>
         
         <div className="w-[324px] h-[40px] border border-black rounded-sm bg-black">
          <button className="text-white font-normal mt-2 ml-[141px] text-xs w-[45px] h-[18px] hover:text-gray-700">SIGN IN</button>
         </div>
         <div className="w-[324px] h-[24px]">
          <p className="w-[129.61px] h-[14px] flex gap-1 justify-center ml-[99px] mt-4 font-normal text-xs text-[#8D8D8D]">Not a Member? <span className="text-black underline font-medium"><Link href="/joinUs" className="hover:text-slate-500"> Join Us.</Link> </span></p>
         </div>
         
          </div>
        </div>
    );
}