"use client";
import { useState } from "react";

export default function Home() {
  return (
    <div className="m-8 space-x-5 space-y-5">
      <div className="yin-yang-1  w-64 h-64 bg-red-200">
        <div className="w-[100%] h-[50%] rounded-t-full bg-black"></div>
        <div className="w-[100%] h-[50%] rounded-b-full  bg-white"></div>
        <div className="relative flex items-center w-[100%] h-[100%] mt-[-100%]">
          <div className="absolute  w-1/2 h-1/2 border-[40px] border-white rounded-full bg-black"></div>
          <div className=" absolute right-0 w-[50%] h-1/2 border-[40px] border-black rounded-full bg-white"></div>
        </div>
      </div>
      <div className="yin-yang-3  w-32 h-32 rounded-full border-2 transform rotate-45">
        <div className="w-[100%] h-[50%] rounded-t-full bg-black"></div>
        <div className="w-[100%] h-[50%] rounded-b-full  bg-white"></div>
        <div className="relative flex items-center w-[100%] h-[100%] mt-[-100%]">
          <div className="absolute  w-1/2 h-1/2 border-[20px] border-white rounded-full bg-black"></div>
          <div className=" absolute right-0 w-[50%] h-1/2 border-[20px] border-black rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
}
