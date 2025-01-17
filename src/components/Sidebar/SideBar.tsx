import React from 'react';
import tableimage from '../../assest/table.svg';
import puzzleimage from "../../assest/puzzle.svg";
import circleimage from '../../assest/intersectCircle.svg';
import creditcard from "../../assest/creditCard.svg";
import coinstock from "../../assest/coinStack.svg";
import Image from 'next/image';

interface IconImage{
    icon:string;
}

const SideBar: React.FC = () => {
    const firstsection: IconImage[] =[
        {icon:tableimage},
        {icon:puzzleimage},
        {icon:circleimage},
    ];

    const secondsection: IconImage[] =[
        {icon:creditcard},
        {icon:coinstock},
    ];

  return (
    <div className='h-screen min-w-full max-w-full w-9 flex flex-col items-center justify-between 
    md:flex-row md:justify-evenly md:w-full md:h-auto md:items-center md:mt-6'>
        <div className='flex flex-col items-center justify-center mt-[60px] md:flex-row md:mt-0 md:justify-evenly md:w-full'>
            {firstsection.map((item,index)=>(
                <Image key={index} src={item.icon} alt='def' width={18} height={18} className='my-2'  />
            ))}
        </div>
        <div className='flex flex-col items-center justify-center mb-5 md:flex-row md:mb-0 md:justify-evenly md:w-full'>
            {secondsection.map((item,index)=>(
                <Image key={index} src={item.icon} alt='def' width={18} height={18} className='my-2'  />
            ))}
        </div>
    </div>
  )
}

export default SideBar