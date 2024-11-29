import React from "react";
import Image from "next/image";
import iconNO3 from "../../public/IconNO3.png";
import icon4 from "../../public/icon4.png";
import icon5 from "../../public/icon5.png";
import icon6 from "../../public/Icon6.png";

const BussinessNumbers = () => {
  return (
    <div className=" bg-[#F5F7FA] sm:px-12 md:px-16 px-4 py-8 mt-12 ">
      <div className="grid md:grid-cols-2">
        <div className="mx-auto w-[100%] md:p-12 p-2 md:py-4 py-8 text-center md:text-left">
          <h1 className="font-semibold text-[36px] leading-[44px] text-[#717171] ">
            Helping a local <br />
            <span className="text-[#4CAF4F]"> business reinvent itself</span>
          </h1>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="grid md:grid-cols-2 md:grid-rows-2">
            <div className="flex gap-2 p-3 md:mx-0 mx-auto">
              <div>
                <Image src={icon5} alt="" className="h-12 w-12" />
              </div>
              <span>
                <h1 className="font-semibold text-[36px] leading-[44px]">
                  2,245,341
                </h1>
                <p>Members</p>
              </span>
            </div>
            <div className="flex gap-2 p-3  md:mx-0 mx-auto">
              <span>
                <Image src={icon6} alt=""  className="h-12 w-12" />
              </span>
              <span>
                <h1 className="font-semibold text-[36px] leading-[44px]">
                  146,328
                </h1>
                <p>Clubs</p>
              </span>
            </div>
            <div className="flex gap-2 p-3  md:mx-0 mx-auto">
              <span>
                <Image src={iconNO3} alt=""   className="h-12 w-12" />
              </span>
              <span>
                <h1 className="font-semibold text-[36px] leading-[44px]">
                  828,867
                </h1>
                <p>Event Booking</p>
              </span>
            </div>
            <div className="flex gap-2 p-3  md:mx-0 mx-auto">
              <span>
                <Image src={icon4} alt=""  className="h-12 w-12" />
              </span>
              <span>
                <h1 className="font-semibold text-[36px] leading-[44px]">
                  1,26,436
                </h1>
                <p>Payments</p>
              </span>
            </div>
          </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default BussinessNumbers;
