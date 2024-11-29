import React from 'react'
import Image from 'next/image'
import image9 from "../../public/image 9.png";
import C1 from "../../public/C1.png";
import C2 from "../../public/C2.png";
import C3 from "../../public/C3.png";
import C4 from "../../public/C4.png";
import C5 from "../../public/C5.png";
import C6 from "../../public/c6.png";
import { ArrowBigRight } from "lucide-react";

const Design2 = () => {
  return (
    <div className='bg-[#F5F7FA] p-8'>
          <section >
        <div className="flex md:flex-row flex-col md:mt-20 mt-16">
          <div className="md:w-1/3">
            <Image
              src={image9}
              alt="clientMain"
              className=" h-[358px] md:h-[330px] md:w-[441.53px] w-full "
            />
          </div>
          <div className="md:w-2/3 flex  flex-col gap-6 md:gap-4 md:px-8 md:py-2 px-2 lg:px-12">
            <p className=" font-light text-[14px] text-gray-600 ">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <div>
              <p className="text-[#4CAF4F] font-bold ">Tim Smith</p>
              <p>British Dragon Boat Racing Association</p>
              <div className="flex gap-0">
                <Image src={C1} alt="1" className="mx-auto" />
                <Image src={C2} alt="1" className="mx-auto" />
                <Image src={C3} alt="1" className="mx-auto" />
                <Image src={C4} alt="1" className="mx-auto" />
                <Image src={C5} alt="1" className="mx-auto" />
                <Image src={C6} alt="1" className="mx-auto" />
              </div>
              <p className="text-[#4CAF4F] font-bold">
                Meet all custumers <ArrowBigRight className="inline-block" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Design2
