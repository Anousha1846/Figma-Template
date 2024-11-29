import React from "react";
import Image from "next/image";
import pana from "../../public/pana.png";

const Design = () => {
  return (
    <div className="sm:px-28 md:px-16 px-4 py-8">
      <section>
        <div className="flex md:flex-row flex-col lg:mx-28  md:mt-20 mt-16">
          <div className="md:w-1/3">
            <Image
              src={pana}
              alt="clientMain"
              className="mx-auto h-[358px] md:h-[400px] w-[841.53px] "
            />
          </div>
          <div className="md:w-2/3 flex flex-col gap-6 md:gap-4 md:px-8 md:py-16 px-2 lg:px-12 py-12 ">
            <h1 className="font-semibold text-[36px] leading-[44px]  text-[#4D4D4D] ">
              How to design your site footer like we did
            </h1>
            <p className="font-normal sixe-[14px] leading-[24px] text-gray-600 ">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="  font-medium text-[14px] align-center w-24 py-2 bg-[#4CAF4F] text-white rounded-md  ">
              Learn More
            </button>
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default Design;
