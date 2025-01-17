import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "../ui/input"
import { Button } from '../ui/button';
import rowicon from "../../assest/rowicon.svg";
import coulmnicon from "../../assest/columnIcon.svg";
import filtericon from "../../assest/filtericon.svg";
import switchicon from "../../assest/switchIcon.svg"
import starIcon from "../../assest/starIcon.svg";
import Image from 'next/image';
import shareIcon from '../../assest/shareIcon.svg';
import downloadIcon from '../../assest/downloadIcon.svg';
import trashIcon from '../../assest/trashIcon.svg';

interface menubar{
    logo:string;
    label:string;
};

interface groupIcon{
    sysm : string;
}

const MainPageBar:React.FC = () => {

    const buttonsdata: menubar[]=[
        {logo:rowicon,label:"1/1 Row"},
        {logo:coulmnicon,label:"3/3 Column"},
        {logo:filtericon,label:"0 Filter"},
        {logo:switchicon,label:"Sort"},
    ];

    const buttongroups: groupIcon[]=[
        {sysm:shareIcon},
        {sysm:downloadIcon},
        {sysm:trashIcon}
    ]

  return (
    <div className='w-[1338px] xll:w-full xll:justify-between xl:w-full md:w-full h-auto flex items-center justify-between flex-wrap gap-4'>
        <div className='h-full flex flex-wrap items-center gap-2 md:gap-4'>
            <div className='relative flex items-center justify-start h-[38px] w-[364px] md:w-full'>
                <IoSearchOutline className='ml-2 absolute' />
                <Input type='text' placeholder='Search' className='w-full pl-8 h-full bg-[#F9FAFB] border border-[#D1D5DB] rounded-[8px]' />
            </div>
            <div className='flex items-center gap-2 flex-wrap sm:w-full sm:justify-between'>
                {buttonsdata.map((item,index)=>(
                    <Button key={index}
                    className='py-2 px-3 flex items-center justify-center gap-[6px] bg-[#FFFFFF] hover:bg-gray-50'>
                        <Image src={item.logo} alt='...' width={12} height={12} />
                        <p className='text-[12px] leading-[18px] font-medium text-[#1F2A37]'>{item.label}</p>
                    </Button>
                ))}
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <Button className='flex items-center justify-center bg-[#1F2A37] py-2 px-3 gap-2'>
                <Image src={starIcon} alt="..." width={13.33} height={13.33} />
                <p className='text-[12px] leading-[18px] font-medium text-[#FFFFFF] hover:text-white'>Enrich</p>
            </Button>
            <div className='flex items-center justify-center gap-1 '>
                {buttongroups.map((item,index)=>(
                    <Button key={index}
                    className='w-[38px] h-[38px] flex justify-center items-center bg-[#FFFFFF] py-[10px] px-[10px] rounded-tl-[6px] rounded-br-[6px] hover:bg-gray-50'>
                        <Image src={item.sysm} alt='...' width={13.5} height={15} />
                    </Button>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MainPageBar