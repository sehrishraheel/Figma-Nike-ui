import Image from "next/image";
import Link from "next/link"
import  productDetails  from "../productsDetail/page"
export default function BestOfAirMax(){
    return(
    <div>
        <div className=" w-[1340] h-[604.36px]">
            <div className="flex gap-[900px] h-[52px] mt-16">
              <div>
                <p className="ml-10 font-Helvetica Neue font-medium text-2xl">Best Of Air Max</p>
                </div>
              
               <div className="flex w-[184.75px] h-[48px] gap-3 text-xl">
               
                <p className="flex ml-[40px] font-Helvetica Neue font-medium mt-1">Shop</p>
               <div className="flex border border-transparent w-[40px] h-[40px] bg-[#F5F5F5] rounded-full">
                <Image src ="/Vector (9).png" 
                width={6.97}
                height={13.93}
                className="mt-3 ml-[11px] #CCCCCC"alt="arrow"/></div>
           
            <div className="flex border border-transparent w-[40px] h-[40px] bg-[#F5F5F5] rounded-full">    
                <Link href ="/allProduct"><Image src ="/Vector (10).png"
                width={6.97}
                height={13.93}
                className="ml-[12px] mt-3 #111111" alt="arrow"/></Link>
                    </div>  
               
                    <div className="flex gap-4 h-[540px] mt-14 -ml-[1260px]">
            {Array.isArray(productDetails) && productDetails.slice(0,3).map((item) =>{
             return(
                 <div key={item.id} className="h-[510.36px]">
                   <Image src={item.image}alt="{item.title}"
                   width={441.36}
                   height={441.36}
                   />
                 
                   <div className="px-1 pt-1">
                  <div className="flex justify-between items-center">
                    <h1 className="text-black font-medium font-Helvetica Neue text-[15px]">
                      {item.title}
                    </h1>
                    <p>{item.price}</p>
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
