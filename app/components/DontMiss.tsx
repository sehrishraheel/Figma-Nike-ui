import Image from "next/image"
import Link from "next/link"
export default function dontMiss(){
    return(
        <div className="w-[1344px] h-[977px]">
            <div className="text-black font-Helvetica Neue font-medium text-2xl ml-10">
                <h1>Don&apos;t Miss</h1>
             <div className="h-[925px] mt-[52px]">
                <div className="w-[1270px] h-[700px]">
                    <Image src ="/Image (2).png"
                    width={1270}
                    height={700}
                    alt="img"/>

            <div className="w-[1008px] h-[177px] mt-[50px] ml-[168px] font-Helvetica Neue font-medium text-[76px] text-center">
                <h1>FLIGHT ESSENTIALS</h1>
   <p className="text-xl font-normal mt-[54px]">
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
               
         <div className="mt-[18px]">
         <Link href="/Products"><button className="h-9 w-20 rounded-full bg-[#111111] hover:bg-[#313131] text-base font-normal text-white">Shop</button></Link>
                  </div>
               
                </div>
        </div>
        </div>
                </div>   
            </div>
    );
}