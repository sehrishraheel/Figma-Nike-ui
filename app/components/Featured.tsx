import Image from "next/image"
export default function featured(){
    return(
     <div className="w-[1344px] h-[977px] ">
      <h1 className="text-black font-medium text-2xl ml-10"> Featured </h1>
     
     <div className="w-[1270px] ml-[40px] mt-[52px]">
      <Image src="/Image (1).png" 
      width={1270}
      height={700}
      className="h-[700px]"alt="img"/></div>
        
       <h1 className="text-black text-[54px] mt-4 font-medium text-center">STEP INTO WHAT FEELS GOOD</h1>
        <p className="text-[15px] text-center md:mt-5">Cause everyone should know the feeling of running in that perfect pair.</p>
      
       <div className="text-center md:mt-4">
       <button className="border rounded-3xl text-lg border-black  hover:bg-[#313131] bg-black text-white w-40 h-10 mt-5">Find Your Shoe</button>
        </div></div>
    );
}