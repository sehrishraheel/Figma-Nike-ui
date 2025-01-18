import Image from "next/image";
import Link from "next/link";
export default function Header(){
    return(
      <div className="bg-[#F5F5F5] h-44px w-1344px pt-3 ">
       
        <div className="flex">

      <div className="ml-[48px]" >      
        <Image src="/Vector.png"
        width={19.2}
        height={17.9}
        alt="img"/></div>
         
         <ul className="flex justify-end font-Helvetica Neue w-full mr-9 gap-4 mb-3 font-medium">
          <li><Link href="/allProduct"> Find a Store </Link></li>
          <li>|</li>
          <li><Link href="/contactUs"> Help </Link></li>
          <li>|</li>
          <li><Link href="/joinUs"> Join Us </Link></li>
          <li>|</li>
          <li><Link href="/logIn"> Sign In</Link></li>
          <li>|</li>
          </ul>
        </div>

        <div className="bg-[#FFFFFF] w-full h-14">
        
        <div className="flex place-items-center space-x-[115px]">
    
        <Image src="/Vector (5).png" 
        width={58.85}
        height={20.54}
        className="ml-12"alt="img"/>
        
        <ul className="flex font-medium gap-[17px] text-xl font-Helvetica Neue text-black">
          <li className="ml-[194px]"><Link href ="#">New & Featured</Link></li>
          <li><Link href ="#">Men</Link></li>
          <li><Link href ="#">Women</Link></li>
          <li><Link href ="#">Kids</Link></li>
          <li><Link href ="#">Sale</Link></li>
          <li><Link href ="#">SNKRS</Link></li>
        </ul>
        <div className="flex border border-transparent bg-[#F5F5F5] h-10 mt-2 rounded-full gap-3">
        <Image src="/Vector (6).png"
        width={22}
        height={20}
        className="text-[#111111] ml-3 mt-2"alt="img"/>
      
       <div className="flex gap-36 w-[160px] h-[40px]">
        <h1 className="text-[#CCCCCC] font-normal text-xl mt-1 font-family: Helvetica Neue">Search</h1>
        <div className="mt-3">
          <ul className="flex gap-[18px]">
            <li className="w-[24px] h-[24px]">
              <Image src ="/Vector (7).png"
              width={36}
              height={36}
              alt="img"/></li> 
              <Link href="/cart"><li className="w-[24px] h-[24px]">
              <Image src ="/Vector (8).png"
               width={36}
               height={36}
              alt="cart"/>
            </li></Link>
            </ul>
        </div>
        </div>        
        </div>
      </div>
      </div>
      </div>
    );
}