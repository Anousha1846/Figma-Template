import React from 'react'
import Image from 'next/image';
import footer from "../../../public/footer.png"

const Footer = () => {
  return (
    <div className='bg-[#F5F7FA] '>
      <div className=" mt-16  ">
      <h1 className= " text-[#263238] text-center font-semibold text-[54px] leading-[76px] md:p-20 sm:px-16 pt-24"><span className=' text-[#4CAF4F]'>Pellentesque</span> suscipit fringilla libero eu.</h1>
      
      </div>
      
      <div>
        <Image src={footer} alt='' className='mt-8' />
      </div>
      
    </div>
  )
}

export default Footer
