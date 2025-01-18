import Image from "next/image"
export default function theEssentials(){
    return(<div>
        <div className="h-[592px] w-[1344px]">
            <div className="w-[200px] h-[27px]">
               <h1 className="ml-10 text-black font-medium font-Helvetica Neue text-2xl mt-16">The Essentials</h1>
            
            <div className=" h-[540px] mt-[35px]">
             <div className="flex gap-2 h-[540px] font-Helvetica Neue w-[418px] ml-[40px]">
               
                <Image src="/Image (3).png"
                width={440}
                height={540}
                alt="img"/>
           <button className="absolute w-[85.19px] mt-[452px] ml-[48px] h-[39px] border bg-[#FFFFFF] rounded-full border-transparent font-medium"> Men&apos;s </button>
                
                 <Image src="/Image (4).png"
                  width={440}
                  height={540}
                 alt="img"/>
           <div><button className="absolute -ml-96 w-[85.19px] mt-[452px] h-[39px] border bg-[#FFFFFF] rounded-full border-transparent font-medium"> Women&apos;s </button></div>

                 <Image src="/Image (5).png"
                  width={440}
                  height={540}
                 alt="img"/>
           <div><button className="absolute -ml-96 w-[85.19px] mt-[452px] h-[39px] border bg-[#FFFFFF] rounded-full border-transparent font-medium"> Kids&apos; </button></div>
                </div>   
              </div>
            </div>
        </div>

        <div className="flex gap-8 flex-cols-4 font-Helvetica Neue w-[880px] h-[192px] ml-[280px]">
          
           <div className="flex flex-col">
           <h1 className="w-[184px] h-[24px] font-Helvetica Neue font-medium mt-20">Icons</h1>
            <ul className="flex gap-2 flex-col w-[184px] h-[144px] mt-[20px] text-[#757575] font-medium ">
                <li className="w-[184px] h-[24px]">Air Force 1</li>
                <li className="w-[184px] h-[24px]">Huarache</li>
                <li className="w-[184px] h-[24px]">Air Max 90</li>
                <li className="w-[184px] h-[24px]">Air Max 95</li>
            </ul></div>
            
            <div className="flex flex-col">
            <h2 className="w-[184px] h-[24px] font-Helvetica Neue font-medium mt-20">Shoes</h2>
            <ul className="flex gap-2 flex-col w-[184px] h-[144px] mt-[20px] text-[#757575] font-medium">
                <li className="w-[184px] h-[24px]">All Shoes</li>
                <li className="w-[184px] h-[24px]">Custom Shoes</li>
                <li className="w-[184px] h-[24px]">Jordan Shoes</li>
                <li className="w-[184px] h-[24px]">Running Shoes</li>
            </ul></div>

            <div className="flex flex-col">
            <h3 className="w-[184px] h-[24px] font-Helvetica Neue font-medium mt-20">Clothing</h3>
            <ul className="flex gap-2 flex-col w-[184px] h-[144px] mt-[20px] text-[#757575] font-medium">
                <li className="w-[184px] h-[24px]">All Clothing</li>
                <li className="w-[184px] h-[24px]">Modest Wear</li>
                <li className="w-[184px] h-[24px]">Hoodies & Pullover</li>
                <li className="w-[184px] h-[24px]">Shirts & Tops</li>
            </ul></div>

            <div className="flex flex-col">
            <h4 className="w-[184px] h-[24px] font-Helvetica Neue font-medium mt-20">Kids&apos;</h4>
            <ul className="flex gap-2 flex-col w-[184px] h-[144px] mt-[20px] text-[#757575] font-medium">
                <li className="w-[184px] h-[24px]">Infant & Toddler Shoes</li>
                <li className="w-[184px] h-[24px]">Kids&apos; Shoes</li>
                <li className="w-[184px] h-[24px]">Kids&apos; Jordan Shoes</li>
                <li className="w-[184px] h-[24px]">Kids&apos; Basketball Shoes</li>
            </ul></div>             
           
            </div>
              </div>
    );
}