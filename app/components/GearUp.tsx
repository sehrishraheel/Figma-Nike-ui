import Image from "next/image";
import  productDetails  from "../productsDetail/page"
export default function gearUp(){
  return(
        <div>
           <div className="w-full h-[561px]">
            <div className="h-[509px] mt-[52px]">
            <h1 className="text-black font-Helvetica Neue font-medium text-2xl ml-10 mt-16">Gear Up</h1>
        
        <div className="flex font-Helvetica Neue font-medium gap-5 mt-12 ">
           
         <div className="flex gap-4 ml-[450px]">
          <h1 className="text-base ">Shop Men&apos;s</h1>
         <div className="flex border border-transparent w-[40px] h-[40px] -mt-2 bg-[#F5F5F5] rounded-full">
           <Image src="/Vector (9).png"
           width={5}
           height={5}
           className="ml-3 mt-3"alt="arrow"/></div>    
         <div className="flex border border-transparent w-[40px] h-[40px] -mt-2 bg-[#F5F5F5] rounded-full">  
           <Image src="/Vector (10).png"
           width={5}
           height={5}           
           className="ml-4 mt-3"alt="arrow"/></div>
             </div>
          
          <div className="flex gap-4 ml-[400px]">
            <h1 className="">Shop Women&apos;s</h1>       
            <div className="flex border border-transparent w-[40px] h-[40px] -mt-2 bg-[#F5F5F5] rounded-full"> 
            <Image src="/Vector (9).png"
            width={5}
            height={5}            
            className="ml-3 mt-3"alt="arrow"/>
         </div>
         <div className="flex border border-transparent w-[40px] h-[40px] -mt-2 bg-[#F5F5F5] rounded-full">
         <Image src="/Vector (10).png"
         width={5}
         height={5}
         className="ml-4 mt-3"alt="arrow"/>  
         </div></div>
         
         <div className="flex gap-3 h-[540px] mt-14 -ml-[1180px]">
            {Array.isArray(productDetails) && productDetails.slice(3 , 7).map((item) =>{
             return(
                 <div key={item.id} className="h-[510.36px]">
                   <Image src={item.image}
                   width={300}
                  height={300}
                   alt="{item.title}" className="cursor-pointer"/>
                 
                   <div className="px-1 pt-1">
                  <div className="flex items-center">
                    <h1 className="text-black font-medium font-Helvetica Neue text-[15px]">
                      {item.title}
                    </h1>
                    <div className="ml-12"><p>{item.price}</p></div>
                  </div>
                  <p className="text-[15px] font-normal text-[#757575] pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
             );
            }
         )}
          </div>
           </div>
            </div>
            </div>
            </div>
            
    );
}