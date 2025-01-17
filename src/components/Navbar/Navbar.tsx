import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import Autosaved from './Autosaved';
import { AiOutlineUser } from "react-icons/ai";



const Navbar = () => {
  return (
    <div className='h-[52px] w-[1536px] z-[100] max-w-full min-w-full bg-white fixed border-b border-[#E5E5E5] flex justify-between items-center px-4 top-0 left-0'>
          <div className='flex items-center gap-4'>
            <IoIosArrowRoundBack className='text-[18px]' />
            <p className='text-[14px] text-[#6B7280] font-normal leading-[21px]'>Name of the file</p>
          </div>
          <div className='flex items-center gap-4'>
            <Autosaved />
            <div className='bg-[#FEECDC] w-8 h-8 rounded-[50%] flex justify-center items-center'>
              <AiOutlineUser className='text-[#D03801] h-[12.75px] w-[13.5px]' />
            </div>
          </div>
    </div>
  )
}

export default Navbar