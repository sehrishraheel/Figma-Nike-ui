import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[#F5F5F5] w-full h-12 text-center font-Helvetica Neue text-black">
        <p className="text-lg font-semibold">Hello Nike App</p>
        <div className="flex justify-center text-xs font-thin">
          <p> Download the app to access everything Nike.</p>
          <p className="font-medium underline">Get Your Great</p>
        </div>
      </div>

      <div className="w-full max-w-[1270px] mx-auto">
        <Image
          src="/Image.png"
          width={1270}
          height={700}
          alt="img"
          className="w-full h-auto"
        />
      </div>

      <div className="text-black text-center font-Helvetica Neue px-4">
        <h1 className="mt-10 font-medium">First Look</h1>
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-6xl">
          NIKE AIR MAX PULSE
        </h1>
        <p className="mt-6 text-sm sm:text-base">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
        </p>
        <p> —designed to push you past your limits and help you go to the max</p>
      </div>

      <div className="flex justify-center font-Helvetica Neue gap-2 my-3 md:mt-5 px-4">
        <button className="md:py-[7.5px] py-[5px] md:px-[22px] px-[15px] rounded-full bg-[#111111] text-white hover:bg-[#313131]">
          Notify Me
        </button>
        <button className="md:py-[7.5px] py-[5px] md:px-[22px] px-[15px] rounded-full bg-[#111111] text-white hover:bg-[#313131]">
          Shop Air Max
        </button>
      </div>
    </div>
  );
}
