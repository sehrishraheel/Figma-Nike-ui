import Image from "next/image";

export default function TheEssentials() {
  return (
    <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8">
      {/* Section Title */}
      <div className="mt-16">
        <h1 className="text-black font-medium text-xl sm:text-2xl font-Helvetica Neue">
          The Essentials
        </h1>
      </div>

      {/* Image Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {/* Men's */}
        <div className="relative w-full sm:w-1/3 lg:w-1/4">
          <Image
            src="/Image (3).png"
            width={440}
            height={540}
            className="w-full h-auto object-cover"
            alt="Men's"
          />
          <button className="absolute bottom-4 left-4 px-4 py-2 text-sm font-medium text-black bg-white rounded-full">
            Men's
          </button>
        </div>

        {/* Women's */}
        <div className="relative w-full sm:w-1/3 lg:w-1/4">
          <Image
            src="/Image (4).png"
            width={440}
            height={540}
            className="w-full h-auto object-cover"
            alt="Women's"
          />
          <button className="absolute bottom-4 left-4 px-4 py-2 text-sm font-medium text-black bg-white rounded-full">
            Women's
          </button>
        </div>

        {/* Kids */}
        <div className="relative w-full sm:w-1/3 lg:w-1/4">
          <Image
            src="/Image (5).png"
            width={440}
            height={540}
            className="w-full h-auto object-cover"
            alt="Kids'"
          />
          <button className="absolute bottom-4 left-4 px-4 py-2 text-sm font-medium text-black bg-white rounded-full">
            Kids'
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {/* Icons */}
        <div>
          <h2 className="text-lg font-medium mb-4">Icons</h2>
          <ul className="space-y-2 text-[#757575]">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>

        {/* Shoes */}
        <div>
          <h2 className="text-lg font-medium mb-4">Shoes</h2>
          <ul className="space-y-2 text-[#757575]">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>

        {/* Clothing */}
        <div>
          <h2 className="text-lg font-medium mb-4">Clothing</h2>
          <ul className="space-y-2 text-[#757575]">
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullover</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>

        {/* Kids */}
        <div>
          <h2 className="text-lg font-medium mb-4">Kids'</h2>
          <ul className="space-y-2 text-[#757575]">
            <li>Infant & Toddler Shoes</li>
            <li>Kids' Shoes</li>
            <li>Kids' Jordan Shoes</li>
            <li>Kids' Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
