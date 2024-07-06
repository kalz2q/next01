"use client";
import { useState } from "react";

export default function Home() {
  return (
    <div className="m-8 overflow-hidden bg-lime-200">
      <div className=" yin-yang  w-64 h-64 bg-red-200">
        <div className="w-64 h-32 rounded-t-full bg-red-700"></div>
        <div className="relative  w-64 h-64 bg-transparent">
          <div className="absolute  w-1/2 h-1/2 border-[40px] border-white rounded-full bg-black"></div>
          <div className=" absolute right-0 w-[50%] h-1/2 border-[40px] border-black rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
}
