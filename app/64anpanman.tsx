"use client";
import { useState } from "react";

export default function Home() {
  return (
    <div className=" ">
      <div className="relative w-[300px] h-[300px] border-[3px] border-black rounded-full bg-blue-200">
        <div className="eyebrowsWrapper flex justify-between w-[190px] h-[50px] mt-[50px] mx-auto bg-orange-200">
          <div
            className="eyebrows eyebrows--left w-[70px] h-[50px] 
          rounded-tl-[40%] rounded-tr-[40%]
          border-t-[3px] border-r-[3px] border-l-[3px] border-black"
          ></div>

          <div className="eyebrows eyebrows--right w-[70px] h-[50px] rounded-t-[50px] border-t-[3px] border-r-[3px] border-l-[3px] border-black"></div>
        </div>
        {/* Eyes */}
        <div className="eyeWrapper relative w-[160px] h-[54px] mt-[-25px] mx-auto bg-lime-200">
          <div className="eye eye--left absolute w-[40px] h-[50px] bg-black rounded-full left-0"></div>
          <div className="eye eye--right absolute w-[40px] h-[50px] bg-black rounded-full right-0"></div>
        </div>
        {/* Nose */}
        <div className="noseWrapper flex justify-center bg-red-200">
          <div className="nose nose--left  w-[80px] h-[80px] rounded-full bg-[#fe523c] mt-[5px] mr-[-5px]">
            {/* <div className=" block h-[60%] w-full ml-auto rounded-t-[50%] border-t-[3px] border-r-[3px] border-b-[3px] border-black"></div> */}
          </div>

          <div className="nose nose--center relative w-[80px] h-[80px] z-[1] rounded-full bg-[#fc2812] border-[3px] border-black">
            <div className="after absolute top-[calc(50%-6px)] left-[calc(50%-6px)] block w-[12px] h-[12px] bg-white"></div>
          </div>

          <div className="nose nose--right relative w-[80px] h-[80px] rounded-full bg-[#fe523c] mt-[5px] ml-[-5px]">
            <div className="before block w-[60%] h-full rounded-l-[70px] border-t-[3px] border-b-[3px] border-l-[3px] border-black"></div>
          </div>
        </div>
        {/* Mouth */}

        <div className="mouse relative w-[140px] h-[40px] mt-[-5px] mx-auto overflow-hidden bg-yellow-200">
          <div className="absolute top-[-10px] left-0 block w-full h-[70px] rounded-b-[70px] border-r-[3px] border-b-[3px] border-l-[3px] border-black"></div>
        </div>
      </div>
    </div>
  );
}
