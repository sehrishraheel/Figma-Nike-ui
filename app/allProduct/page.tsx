import Image from "next/image";
import  productDetails  from '../productsDetail/page';
import { FaSliders ,FaAngleDown ,FaAngleUp} from "react-icons/fa6"; 
export default function allProduct(){
      return(
        <div className="w-full mt-[100px]">
        <div className="h-[51px] bg-[#FFFFFF]">
         <div className="h-[36px] ml-[48px]">
         
         <div className="flex flex-col height:33.19px; padding: 0.81px 1009.63px 0.38px 0px;">
    <h1 className="h-[32px] font-Helvetica Neue font-medium text-2xl">New (500)</h1>
         </div>
  
    <div className="flex gap-1 h-[28px] ml-[48px] md:ml-[1048px]">
      <h1 className="-mt-8 font-Helvetica Neue font-normal w-[81px] h-[28px] size-[16px] text-[#111111]">Hide Filters</h1>
           <div className="-mt-7">
            <FaSliders/>
            </div>
       
        <h1 className="ml-[32px] -mt-8 font-Helvetica Neue font-normal text-[#111111]">Sort By</h1>
             <div className="-mt-7 ">
            <FaAngleDown />
          </div>
           </div>

            <div className="w-[260px] h-[849px]">
              <div className="w-[180px]">
               <ul className="flex flex-col text-[#111111] text-base font-medium font-Helvetica Neue h-[400.72px] gap-[13.59px]">
                  <li>Shoes</li>
                  <li>Sports Brass</li>
                  <li>Tops &amp; T-Shirts</li>
                  <li>Hoodies &amp; Sweatshirts</li>
                  <li>Jackets</li>
                  <li>Trousers &amp; Tights</li>
                  <li>Shorts</li>
                  <li>Tracksuits</li>
                  <li>Jumpsuits &amp; Rompers</li>
                  <li>Skirts &amp; Dresses</li>
                  <li>Socks</li>
                  <li>Accessories &amp; Equipment</li>
                </ul>
                 
                 <div className="h-[1705px] mt-[110px]">
                  
                  <div className="h-[163px] border-t-[1px] border-b-[1px] border-s-[#E5E5E5]">
                  <div className="flex h-[48px] w-[188.16px]">
                  <h1 className="mt-[12px] text-[19px] font-medium font-Helvetica Neue ">Gender</h1>
                     <div className="mt-5 ml-[98px]">
                     <FaAngleUp />
                     </div>
                  </div>
                  <div className="flex flex-col w-[196px] h-[108px] py-[12px]">   
                  <div className="flex">
                  <Image src="/Rectangle.png"
                   width={20}
                   height={20}
                   alt="rectangle"/>
                       <h1 className="ml-[8px] font-normal">Men</h1></div>
                    
                    <div className="flex">
                  <Image src="/Rectangle.png"
                  width={20}
                  height={20}
                  className="mt-[2px]"alt="rectangle"/>
                       <h1 className="ml-[8px] font-normal">Women</h1></div> 
                    
                    <div className="flex">
                  <Image src="/Rectangle.png"
                  width={20}
                  height={20}
                  className="mt-[4px]"alt="rectangle"/>
                       <h1 className="ml-[8px] font-normal">Unisex</h1></div>
                          </div>
                               <div className="border-b">
                          <div className="flex h-[48px] w-[188.16px]">
                  <h1 className="mt-[12px] text-[19px] font-medium font-Helvetica Neue ">Kids</h1>
                     <div className="mt-5 ml-[125px]">
                     <FaAngleUp />
                     </div>
                     </div>
                  
                  <div className="flex flex-col w-[196px] h-[108px] py-[24px]">   
                  <div className="flex">
                  <Image src="/Rectangle.png"
                  width={20}
                  height={20}
                  alt="rectangle"/>
                       <h1 className="ml-[8px] font-normal">Boys</h1></div>
                    
                    <div className="flex">
                  <Image src="/Rectangle.png"
                  width={20}
                  height={20}
                  className="mt-[2px]"alt="rectangle"/>
                       <h1 className="ml-[8px] font-normal">Girls</h1></div> 
                  </div></div>
              
                  <div className="flex h-[48px] w-[188.16px]">
                  <h1 className="mt-[12px] text-[19px] font-medium font-Helvetica Neue ">Shop By Price</h1>
                     <div className="mt-5 ml-[43px]">
                     <FaAngleUp />
                     </div>
                     </div>
                  <div className="flex flex-col w-[196px] h-[108px] mt-[12px]">   
                  <div className="flex">
                  <Image src="/Rectangle.png"
                  width={20}
                  height={20}
                   alt="rectangle"/>
                       <h1 className="ml-[8px] font-normal">Under ₹ 2 500.00</h1></div>
                    
                    <div className="flex">
                  <Image src="/Rectangle.png"
                  width={20}
                  height={20}
                  className="mt-[2px]"alt="rectangle"/>
                       <h1 className="ml-[8px] font-normal">₹ 2 501.00 - ₹ 7 500.00</h1></div> 
                  </div>
                
                 </div>
              </div>
              </div>
            </div>
           </div>
           </div>  
           
          <div className="ml-[300px] w-[1000px] h-[540px] grid grid-cols-3 gap-4">
                        {Array.isArray(productDetails) && productDetails.slice(7,16).map((item:any) =>{
                         return(
                             <div key={item.id} className="w-full h-auto">
                               <Image src={item.image}
                               width={348}
                                height={348}
                               alt ="{item.title}" />
                             
                               <div className="px-1 pt-2">
                              <div className="flex flex-col ">
                                <h1 className="text-[#9E3500] font-medium">{item.check}</h1>
                                <h1 className="text-black font-medium font-Helvetica Neue text-[15px]">
                                  {item.title}
                                </h1>
                              </div>
                              <p className="text-[15px] font-normal text-[#757575] pt-1">
                                {item.description}
                              </p>
                              <p className="text-[#757575]">{item.color}</p>
                              <p className="text-black font-medium mt-3">{item.price}</p>
                            </div>
                          </div>
                         );
                        })}
                      </div>
          
          <div className="h-[259px] w-[1000px] border-t-2 border-[#E5E5E5] mt-[1170px] ml-[300px] font-Helvetica Neue">
               <h1 className="text-black text-2xl font-medium mt-[62px]">Related Categories</h1>
          
          <div className="w-[1000px] mt-[34px] grid grid-cols-6 gap-8">
                    <h1 className="border-[1px] border-[#E5E5E5] rounded-full h-[34px] w-[140px] text-[12px] font-normal text-center content-center">Best Selling Products</h1>  
                    <h1 className="border-[1px] border-[#E5E5E5] rounded-full h-[34px] text-[12px] font-normal text-center content-center">Best Shoes</h1>
                    <h1 className="border-[1px] border-[#E5E5E5] rounded-full h-[34px] w-[140px] text-[12px] font-normal text-center content-center">New Basketball Shoes</h1>
                    <h1 className="border-[1px] border-[#E5E5E5] rounded-full h-[34px] w-[140px] text-[12px] font-normal text-center content-center">New Football Shoes</h1>
                    <h1 className="border-[1px] border-[#E5E5E5] rounded-full h-[34px] w-[140px] text-[12px] font-normal text-center content-center">New Men&apos;s Shoes</h1>
                    <h1 className="border-[1px] border-[#E5E5E5] rounded-full h-[34px] w-[140px] text-[12px] font-normal text-center content-center">New Running Shoes</h1>
                    <h1 className="border-[1px] border-[#E5E5E5] rounded-full h-[34px] w-[140px] text-[12px] font-normal text-center content-center">Best Men&apos;s Shoes</h1>
                    <h1 className="border-[1px] border-[#E5E5E5] rounded-full h-[34px] w-[140px] text-[12px] font-normal text-center content-center">New Jordan Shoes</h1>
                    <h1 className="border-[1px] border-[#E5E5E5] rounded-full h-[34px] w-[140px] text-[12px] font-normal text-center content-center">Best Women&apos;s Shoes</h1>
                    <h1 className="border-[1px] border-[#E5E5E5] rounded-full h-[34px] w-[140px] text-[12px] font-normal text-center content-center">Best Training &amp; Gym</h1>               
          </div>
          </div>              
          </div>   
    );
}