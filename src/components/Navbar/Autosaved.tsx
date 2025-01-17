'use client';
import React, { useState, MouseEvent } from 'react'

const Autosaved: React.FC  = () => {
    const [saved, setSaved] = useState<boolean>(true);

    const toggleSaved = (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setSaved((prev) => !prev);
    };

    return (
        <div className='flex items-center gap-4' onClick={toggleSaved} role="button">
            <div className={`w-[40px] h-[20px] flex items-center ${saved ? 'bg-[#0E9F6E] justify-end' : 'bg-gray-200 justify-start'} rounded-[40px]`}>
                <div className={`w-4 h-4 rounded-[50%] ${saved ? 'bg-white' : 'bg-[#0E9F6E]'}`}></div>
            </div>
            <p className={`${saved ? 'text-[#0E9F6E]' : 'text-gray-600'} text-[14px] leading-[17.5px] font-medium md:hidden`}>Auto Save</p>
        </div>
    )
}

export default Autosaved