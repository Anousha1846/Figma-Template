import React from 'react'
import Image from 'next/image'
import blog1 from "../../public/blog1.png";
import blog2 from "../../public/blog2.png";
import blog3 from "../../public/blog3.png";


const Marketing = () => {
  return (
    <div>
       <h1 className=" sm:pt-10 text-[#4D4D4D] text-center font-semibold md:text-[36px]  text-[32px] leading-[44px] ">
       Caring is the new marketing </h1>
        <p className="font-base leading-[24px] sm:pt-1 pt-3 px-12 text-[15px] text-center text-[#717171] ">
        The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who is joining the community, read about how our community are increasing their membership income and alot more      </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 mt-12 md:gap-0 gap-6">
            <div >
            <Image src={blog1} alt="1" className="mx-auto lg:w-[90%]" />

            </div>
            <div >
            <Image src={blog2} alt="1" className="mx-auto lg:w-[90%]" />
            </div>
            <div >
            <Image src={blog3} alt="1" className="mx-auto lg:w-[90%]" />
            </div>
        </div>
    </div>
  )
}

export default Marketing
