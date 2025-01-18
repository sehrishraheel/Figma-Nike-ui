import Image from "next/image"
import Link from "next/link"
export default function contactpg(){
    return(
        <div className="h-[1050px] mt-[60px]">
          <div className="h-[132px]">
           <h1 className="w-[157px] h-[36px] text-[32px] font-medium text-align:center ml-[618px]">GET HELP</h1>
            
            <div className="flex gap-52 w-[457.3px] h-[56px] border border-[#75757575] rounded-lg ml-[450px] mt-5">
              <input type="text" className="w-[199px] h-[17px] text-[15px] font-normal text-[#757575] mt-5 ml-3"placeholder="What can we help you with?"></input>
              <Image src="/Vector (6).png" 
              width={15}
              height={15}
              className="mt-5 cursor-pointer" alt="icon"/>
            </div>
            
            <div className="h-[1042px] mt-7 ml-16">
              <h1 className="w-[766px] h-[31px] text-[28px] font-medium">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
              <p className="w-[905px] h-[17px] text-[15px] font-normal mt-8">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
            
            <div className="w-[907px] h-[108px] mt-6 ml-8">
                <p className="w-[590px] h-[17px] text-[15px] font-normal mt-5">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                <p className="w-[870px] h-[17px] text-[15px] font-normal mt-5">If you enter your PAN information at checkout , you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.</p>
                <p className="w-[73px] h-[17px] text-[15px] font-normal mt-5">Apple Pay</p>
            </div>
            
            <div className="w-[923px] h-[115px] mt-3">
                <p className="w-[894px] h-[4px] text-[16px] font-medium">
                    <Link href="#" className="underline underline-offset-2">Nike Members</Link>
               <span className="font-normal"> can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member , </span>
                     <Link href="#" className="underline underline-offset-2">join us</Link><span className="font-normal"> today. </span></p>
           
                     <div className="flex font-Helvetica Neue gap-2 my-3 mt-16">
        <button className="md:py-[7.5px] py-[5px] md:px-[22px] px-[15px] rounded-full w-[106px] h-[39px] bg-[#111111] text-white hover:bg-[#313131]">JOIN US</button>
        <button className="md:py-[7.5px] py-[5px] md:px-[22px] px-[15px] rounded-full w-[129px] h-[39px] bg-[#111111] text-white hover:bg-[#313131]">SHOP NIKE</button>
      </div>

      <div className="w-[923px] h-[168px] mt-5">
        <h1 className="w-[50px] h-[22px] text-[20px] font-medium">FAQs</h1>
     <div className="w-[923px] h-[128px] mt-4">
        <p className="w-[406px] h-[28px] text-[16px] font-bold">Does my card need international purchases enabled?</p>
        <p className="w-[842px] h-[45px] text-[16px] font-normal">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout <span className="flex mt-1">if international purchases need to be enabled.</span></p>
        <p className="w-[601px] h-[17px] text-[15px] font-normal mt-6">Please note, some banks may charge <span className="font-medium underline"> a small transaction fee </span>for international orders.</p>
     </div>
      </div>
       
       <div className="w-[923px] h-[56px] mt-2">
         <p className="w-[553px] h-[45px] font-bold text-[15px]">Can I pay for my order with multiple methods?
         <span className="font-normal mt-1 flex">No, payment for Nike orders can&apos;t be split between multiple payment methods.</span></p>
       </div>

       <div className="w-[923px] h-[56px] mt-3">
          <p className="w-[389px] h-[28px] text-[15px] font-bold">What payment method is accepted for SNKRS orders?</p>
          <p className="w-[478px] h-[17px] text-[15px] font-normal">You can use any accepted credit card to pay for your SNKRS order.</p>
       </div>
           
           <div className="w-[923px] h-[112px] mt-3">
            <p className="w-[306px] h-[28px] text-[16px] font-bold">Why don&apos;t I see Apple Pay as an option?</p>
            <p className="w-[910px] h-[73px] text-[16px] font-normal">To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p>
           </div>

           <div className="w-[923px] h-[175px] mt-3">
             <div className="w-[923px] h-[67px]">
               <h1 className="w-[177px] h-[17px] text-[15px] font-normal">Was this answer helpful?</h1>
                <div className="flex mt-3 gap-[10px]">
                <Image src="/Vector (14).png" 
                width={18.3}
                height={22.5}
                alt="icon"/>
                <Image src="/Vector (15).png" 
                width={18.3}
                height={22.5}            
                alt="icon"/></div>
             </div>
           
             <div className="w-[923px] h-[108px]">
              <h1 className="w-[72px] h-[17px] text-[16px] font-medium text-[#757575]">RELATED</h1>
            
            <div className="w-[907px] h-[68px] ml-8 mt-5">
              <p className="w-[306px] h-[17px] text-[16px] font-medium underline"><Link href="#">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</Link></p>
              <p className="w-[395px] h-[17px] text-[16px] font-medium underline mt-5"><Link href="#">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</Link></p>
            </div>
            </div>
           </div>
            </div>
                        
            </div>
            </div>
            <div className="h-[980px] border-l border-[#75757575] ml-[1000px] mt-2">
               <h1 className="w-[179px] h-[31px] text-[28px] font-medium ml-20">CONTACT US</h1>
            
            <div className="w-[265px] h-[242px] ml-[25px] mt-[52px]">
              <div className="w-[265px] h-[242px]">
                <Image src="/Image (12).png"
                width={64}
                height={64}
                className="ml-[110px]"alt="img"/>
                
                <div className="w-[255px] h-[136px] text-center ml-4 mt-3">
                        <h1 className="font-medium text-[16px]">000 800 919 0566</h1>
                        <p className="text-[16px] font-normal">Products & Orders: 24 hours a day, 
                            <p>7 days a week</p>
                        Company Info &amp; Enquiries: 07:30 - 16:30, Monday - Friday</p>
                </div>
              </div>
            </div>
            
            <div className="w-[265px] h-[158px] ml-[27px]">
              <div className="w-[265px] h-[242px]">
                <Image src="/Image (13).png" 
                width={64}
                height={64}
                className="ml-[110px]"alt="img"/>
                
                <div className="w-[255px] h-[136px] text-center ml-4 mt-3">
                        <h1 className="font-medium text-[15px]">24 hours a day</h1>                            <p className="text-[15px] font-normal mt-1">7 days a week</p>
                </div>
              </div>
            </div>

            <div className="w-[265px] h-[158px] ml-[27px] ">
              <div className="w-[265px] h-[242px]">
                <Image src="/Image (16).png" 
                width={64}
                height={64}
                className="ml-[110px]"alt="img"/>
                
                <div className="w-[255px] h-[136px] text-center ml-3 mt-3">
                        <h1 className="font-medium text-[15px]">We&apos;ll reply within</h1> 
                            <p className="text-[15px] font-normal mt-1">five business days</p>        
                </div>
              </div>
            </div>
             
            <div className="w-[265px] h-[158px] ml-[27px] ">
              <div className="w-[265px] h-[242px]">
                <Image src="/Image (17).png" 
                width={64}
                height={64}                
                className="ml-[110px]"alt="img"/>
                
                <div className="w-[255px] h-[136px] text-center ml-2 mt-3">
                        <h1 className="font-medium text-[16px]">STORE LOCATOR</h1> 
                            <p className="text-[15px] font-normal mt-1">Find Nike retail stores near you</p>
                       </div>
                     </div>
                   </div>
              </div>
            </div>
    );
}
