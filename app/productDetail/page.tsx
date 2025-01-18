import Image from "next/image"
export default function detail(){
    return(
        <div className="flex h-[1125px]">
          <div>
            <Image src ="/products/product03.png" 
            width={373}
            height={373}
            className="ml-16 mt-24" alt="img"/>
          </div>
        
        <div className="w-[374px] h-[1041px] ml-16 mt-[86px]">
          <h1 className="text-[28px] font-medium">Nike Air Force 1 
          PLT.AF.ORM</h1>
          <p className="w-[374px] text-[15px] font-normal mt-6">Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
          <h1 className="w-[229px] h-[34px] mt-5 font-medium text-[26px]">₹ 8 695.00</h1>

          
           <button className="flex gap-3 mt-4 w-[174px] h-[44px] rounded-full bg-[#111111] text-white hover:bg-[#313131]">
            <Image src="/Group (2).png"
            width={22.3}
            height={21.8}
            className="mt-[10px] ml-6" alt="icon"/>
            <h1 className="mt-[9px]">Add To Cart</h1>
            </button>

        </div>
        </div>
    )
}