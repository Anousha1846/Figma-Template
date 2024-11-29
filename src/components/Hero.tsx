import Image from "next/image";
import hero from "../../public/hero.png";

export default function Hero() {
  return (
    <main>
      {/* home */}
      <div className="flex flex-col lg:flex-row md:px-24 sm:px-12 px-4 lg:py-12 sm:py-20 py-12 bg-[#F5F7FA]">
        <div className=" lg:w-2/3  lg:p-24 sm:px-2   flex gap-6 flex-col">
          <h1 className="lg:text-5xl md:text-7xl sm:text-5xl text-4xl font-semibold">
            Lessons and insights <span className="text-[#4CAF4F] "> from eight years</span>
          </h1>
          <p className="text-gray-600">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="  font-medium text-[14px] align-center px-4 w-24 py-2 bg-[#4CAF4F] leading-[30px] text-white rounded-md  ">
            Register
          </button>
        </div>

        <div className="lg:w-1/3 pt-12 lg:pt-0 mx-auto">
          <Image src={hero} alt="" className="w-[391px] h-[407px] " />
        </div>
      </div>
    </main>
  );
}
