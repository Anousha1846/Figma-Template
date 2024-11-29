import React from "react";
import Image from "next/image";
import C1 from "../../public/C1.png";
import C2 from "../../public/C2.png";
import C3 from "../../public/C3.png";
import C4 from "../../public/C4.png";
import C5 from "../../public/C5.png";
import C6 from "../../public/c6.png";
import icon from "../../public/Icon.png";
import icon2 from "../../public/Icon2.png";
import icon3 from "../../public/Icon3.png";
import clientMain from "../../public/clientMain.png";

const Clients = () => {
  return (
    <div className="sm:px-28 md:px-16 px-4 py-8">
      <h1 className="h-[41px]  text-[#4D4D4D] text-center font-semibold text-[36px] leading-[44px] ">
        Our Clients
      </h1>
      <p className="font-medium leading-[24px] sm:pt-1 pt-3 text-[14px] text-center text-[#717171] ">
        We have been working with some Fortune 500+ clients
      </p>
      <section className="grid md:grid-cols-7 grid-cols-2 gap-4  justify-between py-8">
        <Image src={C1} alt="1" className="mx-auto" />
        <Image src={C2} alt="1" className="mx-auto" />
        <Image src={C3} alt="1" className="mx-auto" />
        <Image src={C4} alt="1" className="mx-auto" />
        <Image src={C5} alt="1" className="mx-auto" />
        <Image src={C6} alt="1" className="mx-auto" />
        <Image src={C3} alt="1" className="mx-auto md:grid hidden" />
      </section>
      <hr />
      <section>
        <h1 className=" sm:pt-10 text-[#4D4D4D] text-center font-semibold md:text-[36px]  text-[32px] leading-[44px] ">
          Manage your entire community in a single system
        </h1>
        <p className="font-base leading-[24px] sm:pt-1 pt-3  text-[14px] text-center text-[#717171] ">
          Who is Nextcent suitable for?
        </p>

        <div className="grid md:grid-cols-3 grid-cols-1 my-6 gap-4">
          <div>
            <main className="shadow-md lg:w-[70%] flex items-center flex-col gap-2 lg:mx-auto  bg-[#F5F7FA]  p-6">
              <Image src={icon} alt="icon1" className="bg-[#E8F5E9]" />
              <h1 className="text-[#4D4D4D] font-semibold text-center   text-[22px]">
                Membership Organisations
              </h1>
              <p className="font-sm text-[#4D4D4D] text-center ">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </main>
          </div>
          <div>
            <main className="shadow-md lg:w-[70%] mx-auto flex items-center flex-col gap-2  lg:mx-auto  bg-[#F5F7FA]  p-6">
              <Image src={icon2} alt="icon1" className="bg-[#E8F5E9]" />
              <h1 className="text-[#4D4D4D] font-semibold text-center   text-[22px]">
                National Association
              </h1>
              <p className="font-sm text-[#4D4D4D] text-center ">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </main>
          </div>
          <div>
            <main className="shadow-md lg:w-[70%] mx-auto flex items-center flex-col gap-2  lg:mx-auto bg-[#F5F7FA]  p-6">
              <Image src={icon3} alt="icon1" className="bg-[#E8F5E9]" />
              <h1 className="text-[#4D4D4D] font-semibold text-center   text-[22px]">
                Clubs And Groups
              </h1>
              <p className="font-sm text-[#4D4D4D] text-center ">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </main>
          </div>
        </div>
      </section>
      {/* section3 */}
      <section>
        <div className="flex md:flex-row flex-col lg:mx-28  md:mt-20 mt-16 ">
          <div>
            <Image
              src={clientMain}
              alt="clientMain"
              className="w-[841.53px] h-[488.px] md:h-[400px] "
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-4 md:px-8 md:py-16 px-2 lg:px-16 py-8">
            <h1 className="font-semibold text-[36px] leading-[44px]  text-[#4D4D4D] ">
              The unseen of spending three years at Pixelgrade
            </h1>
            <p className="font-normal  leading-[24px] text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              eaque sit ducimus nulla cum hic, magni doloribus aliquid,
              cupiditate odio deleniti! Sapiente repellendus ipsa ipsam dolores
              minus. Facere, vel impedit.
            </p>
            <button className="  font-medium text-[14px] align-center px-4 w-24 py-2 bg-[#4CAF4F] leading-[30px] text-white rounded-md  ">
              Register
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
