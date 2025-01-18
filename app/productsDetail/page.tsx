import Image from "next/image";
import React from 'react';
import Link from "next/link"
 const productDetails = [
  {
      id: 1,
      title: "Nike Air Max Pulse",
      description: "Womens Shoes",
      image: "/BestOfAirMax/IMG01.png",
      price: "₹ 13 995",
    },
    {
      id: 2,
      title: "Nike Air Max",
      description: "Mens Shoes",
      image: "/BestOfAirMax/IMG02.png",
      price: "₹ 13 995",
    },
    {
      id: 3,
      title: "Nike Air Max 97 SE",
      description: "Mens Shoes",
      image: "/BestOfAirMax/IMG03.png",
      price: "₹ 16995",
    },
  
    {
      id: 4,
      title: "Nike Dri-FIT ADV ",
      description: "Mens Short-Sleeve",
      image: "/GearUP/IMG01.png",
      price: "₹ 3 895",
    },
  
    {
      id: 5,
      title: "Nike Dri-FIT Challenger",
      description: "Mens 18cm (approx.) 2-in-1 Versatile Shorts",
      image: "/GearUp/IMG02.png",
      price: "₹ 2 495",
    },
  
    {
      id: 6,
      title: "Nike Dri-FIT ADV Division",
      description: "Womens Long-Sleeve Running Top",
      image: "/GearUp/IMG03.png",
      price: "₹ 5 295",
    },
  
    {
      id: 7,
      title: "Nike Fast",
      description: "Womens Mid-Rise 7/8 Running Leggings with Pockets",
      image: "/GearUP/IMG04.png",
      price: "₹ 3 795",
    },
  
    {
      id: 8,
      check: "Just In",
      title: "Nike Air Force 1 Mid '07",
      description: "Mens Shoes",
      image: "/products/product01.png",
      color: "1 Colors",
      price: "MRP : ₹ 10 795.00",
    },
    {
      id: 9,
      check: "Just In",
      title: "Nike Court Vision Low Next Nature",
      description: "Mens Shoes",
      image: "/products/product02.png",
      color: "1 Colors",
      price: "MRP : ₹ 4 995.00",
    },
    { 
      id: 10,
      check: "Just In",
      title: <Link href="/productDetail"className="hover:text-slate-400">&quot;Nike Air Force 1 PLT.AF.ORM&quot;</Link>,
      description: "Womens Shoes",
      image: "/products/product03.png",
      color: "1 Colors",
      price: "MRP : ₹ 8 695.00",
    },
    {
      id: 11,
      check: "Just In",
      title: "Nike Air Force 1 React",
      description: "Mens Shoes",
      image: "/products/product04.png",
      color: "1 Colors",
      price: "MRP : ₹ 13 295.00",
    },
    {
      id: 12,
      check: "Promo Exclusion",
      title: "Air Jordan 1 Elevate Low",
      description: "Womens Shoes",
      image: "/products/product05.png",
      color: "1 Colors",
      price: "MRP : ₹ 11 895.00",
    },
    {
      id: 13,
      check: "Just In",
      title: "Nike Standard Issue",
      description: "Womens Basketball Jersey",
      image: "/products/product06.png",
      color: "1 Colors",
      price: "MRP : ₹ 2 895.00",
    },
    {
      id: 14,
      check: "Promo Exclusion",
      title: "Nike Dunk Low Retro SE",
      description: "Mens Shoes",
      image: "/products/product07.png",
      color: "1 Colors",
      price: "MRP : ₹ 9 695.000",
    },
    {
      id: 15,
      check: "Sustainable Materials",
      title: "Nike Dri-FIT UV Hyverse",
      description: "Mens Short-Sleeve Graphic Fitness Top",
      image: "/products/product08.png",
      color: "1 Colors",
      price: "MRP : ₹ 2 495.00",
    },
    {
      id: 16,
      check: "Just In",
      title: "Nike Court Vision Low",
      description: "Mens Shoes",
      image: "/products/product09.png",
      color: "1 Colors",
      price: "MRP : ₹ 5 695.00",
    },
  ];

  const ProductDetailPage = () => {
    return (
        <div>
            <h1>Product Details</h1>
            <ul>
                {productDetails.map((product) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <Image src={product.image} alt="product.title"/>
                        <p>{product.price}</p>
                        <Link href={`/productDetail/${product.id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Export the page component as default
export default ProductDetailPage;
