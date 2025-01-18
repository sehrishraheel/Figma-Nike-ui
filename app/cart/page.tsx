import Image from "next/image"
import Link from "next/link"
export default function cart(){
    return(<div> 
               <div className="flex mt-[40px] ml-[150.5px]">
        <div className=" w-[733.33px] h-[547px]">
         <div className="h-[62.89px] w-[717.33px] bg-[#F7F7F7]">
          <h1 className="text-[13px] font-medium ml-5 pt-3">Free Delivery</h1>
         
          <div className="flex gap-4 w-[305.36px] h-[24.89px]">
            <h1 className="font-normal text-[11px] ml-5 mt-1">Applies to orders of ₹ 14 000.00 or more.</h1>
           <Link href="#"><h1 className="w-[64px] h-[24px] text-[11px] font-medium underline mt-[4px]">View details</h1>
               </Link></div>
         </div>
        <div className="border-t-[1px] w-[717.33px]">
        <h1 className="w-[41px] h-[33px] mt-[12.8px] text-[22px] font-medium">Bag</h1>

        <div className="w-[717.33px] h-[436px] mt-8">
          <div className="w-[717.33px] h-[218px]">
            
            <div className="flex gap-7 w-[717.33px] h-[170px]">
                <Image src="/GearUP/IMG01.png"
                width={150}
                height={150}
                alt="img"/>           
           
            <div className="w-[537.3px]">
                
                   <div className="flex w-[537px] gap-[200px]">
                    <p className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</p>
                    <h1 className="font-normal text-[15px]">MRP: ₹ 3 895.00</h1></div>
                    <ul>
                    <li className="font-normal text-[#757575] mt-[7px]">Men&apos;s Short-Sleeve Running Top</li>
                    <li className="font-normal text-[#757575] mt-[7px]">Ashen Slate/Cobalt Bliss</li></ul>
                    <div className=" mt-[7px] text-[#757575]">
                    <ul className="flex gap-4">
                    <li>Size</li>
                    <li>L</li>
                    <li className="ml-4">Quantity</li>
                    <li>1</li></ul>
                    </div>                
            </div>
            </div>
            <div className="ml-44 flex gap-4">
                <Image src="/Vector (7).png"
                width={24}
                height={22}
                className="-mt-[26px]" alt="icon"/>
                <Image src="/Vector (13).png" 
                width={24}
                height={22}
                className="-mt-[26px]" alt="icon"/>
               </div>
               </div>
            
            <div className="border-t-[1px] w-[717.33px]">
            <div className="w-[537.3px] h-[170px] ml-44 mt-10">
                
                <div className="flex w-[540px] gap-[285px]">
                 
                 <p className="font-medium">Nike Air Max 97 SE</p>
                 <h1 className="font-normal text-[15px]">MRP: ₹ 16 995.00</h1></div>
                 <ul>
                 <li className="font-normal text-[#757575] mt-[7px]">Men&apos;s Shoes</li>
                 <li className="font-normal text-[#757575] mt-[7px]">Flat Pewter/Light Bone/Black/White</li></ul>
                 <div className=" gap-4 mt-[7px] text-[#757575]">
                 <ul className="flex gap-4">
                 <li>Size</li>
                 <li>8</li>
                 <li className="ml-4">Quantity</li>
                 <li>1</li></ul>
                 </div>                
         </div>
         </div>
         <div className="ml-44 flex gap-4">
             <Image src="/Vector (7).png"
             width={24}
             height={22}
             className="-mt-[26px]" alt="icon"/>
             <Image src="/Vector (13).png" 
             width={24}
             height={22}
             className="-mt-[26px]" alt="icon"/>
            </div>
               
            </div>
            </div> 
        </div>
        <div className="h-[295px] ml-3">
        <h1 className="w-[96px] h-[33px] text-[21px] font-medium">Summary</h1>
   
        <div className="flex w-[334.67px] h-[28px]">
       <h1 className="w-[60px] h-[28px] text-[15px] font-normal">Subtotal</h1>
       <h1 className="w-[80px] h-[28px] text-[14px] font-normal ml-[150px]">₹ 20 890.00</h1>
    </div>
    
    <div className="flex w-[334.67px] h-[28px]">
     <h1 className="w-[214px] h-[28px] text-[15px] font-normal">Estimated Delivery & Handling</h1>
     <h1 className="w-[32px] h-[28px] text-[15px] font-normal ml-[30px]">₹Free</h1>
    </div>

    <div className="flex w-[313.67px] h-[62px] border-t-[1px] border-b-[1px] border-[#E5E5E5] mt-4 ">
      <h1 className="w-[33px] h-[28px] text-[14px] font-normal mt-5">Total</h1>
      <h1 className="h-[24px] text--14px] font-medium ml-[168px] mt-5">₹ 20 890.00</h1>
    </div>

    <button className="w-[313.67px] h-[60px] border rounded-full bg-black mt-6 hover:bg-gray-400">
       <Link href="/checkout"><h1 className="w-[133px] h-[24px] text-[15px] font-medium text-white ml-24 mt-">Member Checkout</h1>
          </Link></button>
    </div>
         
          </div>
          </div> 
    );
}