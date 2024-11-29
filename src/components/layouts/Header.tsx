import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="  bg-[#F5F7FA] w-100% h-[74px] ">
        <div className="hidden md:grid md:grid-cols-[20%_60%_20%] ">
          {/* <!-- Logo --> */}
          <div>
            <Image
              src={logo}
              alt="logo"
              height={24}
              width={154.9}
              className="mx-auto mt-4 "
            />
          </div>
          {/* <!-- Desktop Navigation --> */}
          <div className=" flex lg:gap-12 md:gap-4 mx-auto mt-5">
            <div className="hover:text-[#4CAF4F] transition">Home</div>
            <div className="hover:text-[#4CAF4F] transition">Services</div>
            <div className="hover:text-[#4CAF4F] transition">Features</div>
            <div className="hover:text-[#4CAF4F] transition">Product</div>
            <div className="hover:text-[#4CAF4F] transition">Testimonial</div>
            <div className="hover:text-[#4CAF4F] transition">FAQ</div>
          </div>
          {/* auth */}
          <div className="  mt-5">
            <button className=" font-serif font-medium text-[14px] align-center pr-2 w-[55px] h-[28px] text-[#4CAF4F]  leading-[30px]  rounded-md  ">
              Login
            </button>
            <button className=" font-serif font-medium text-[14px] align-center px-4  bg-[#4CAF4F] leading-[30px] text-white rounded-md  ">
              Sign up
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu Trigger --> */}
        <Sheet>
        
          <SheetTrigger>
        <div className="grid grid-cols-2 gap-40 md:hidden  bg-[#F5F7FA]  hover:text-[#4CAF4F] transition">
        <div>
            <Image
              src={logo}
              alt="logo"
              className=" inline-block mt-4 p-2"
            />
          </div>
            <div className="flex  justify-end ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-14 pr-4 sm:ml-44 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            </div>
        </div>
          </SheetTrigger>
          <SheetContent className=" bg-[#F5F7FA]">
            <SheetHeader>
              <SheetTitle>
              <div className=" flex flex-col gap-6 mx-auto mt-5">
            <div className="hover:text-[#4CAF4F] transition mt-4">Home</div>
            <div className="hover:text-[#4CAF4F] transition">Services</div>
            <div className="hover:text-[#4CAF4F] transition">Features</div>
            <div className="hover:text-[#4CAF4F] transition">Product</div>
            <div className="hover:text-[#4CAF4F] transition">Testimonial</div>
            <div className="hover:text-[#4CAF4F] transition">FAQ</div>
          </div>
              </SheetTitle>
              <SheetDescription className="mt-8 text-sm text-gray-400">
              <div className=" flex gap-2 flex-col mt-5">
            <button className=" font-serif font-medium text-[14px] align-center pr-2 w-[55px] h-[28px] text-[#4CAF4F]  leading-[30px]  rounded-md mx-auto ">
              Login
            </button>
            <button className=" font-serif font-medium text-[14px] align-center px-4 py-2 bg-[#4CAF4F] leading-[30px] text-white rounded-md  ">
              Sign up
            </button>
          </div>
           
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Header;
