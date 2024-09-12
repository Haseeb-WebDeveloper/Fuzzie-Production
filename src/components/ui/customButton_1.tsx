"use client"
import React, { useState } from 'react'
import { FiSun } from "react-icons/fi";

type Props = {
    text: string;
}

const CustomButton_1 = (props: Props) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`mx-auto justify-end relative inline-flex items-center gap-2 w-[140px] h-10 scale-105 rounded-md bg-[#1C1C1C] border-[0.1px] shadow`}>
            <div 
              className={`
                absolute flex items-center justify-between px-2 
                top-[3px] left-[3px] bottom-[3px] 
                bg-[#D7FF1B] rounded-sm shadow
                transition-[width,right] duration-500 ease-in-out
                ${isHovered ? 'right-[3px] w-[calc(100%-6px)]' : 'w-8'}
              `}
            > 
              <FiSun className={`${isHovered ? "rotate-180" : "rotate-0 "} text-black transition-all ease-in-out duration-500`} /> 
            </div>
            <p className={`${isHovered ? " text-black  pr-4 " : " text-white  pr-3 "} transition-all ease-in-out duration-500 z-30 font-normal text-md`}>{props.text}</p>
        </button>
    )
}

export default CustomButton_1;