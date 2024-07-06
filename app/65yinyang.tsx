"use client";
import { useState } from "react";

export default function Home() {
  return (
    <div className="m-8 overflow-hidden bg-lightslategray">
      <div className=" yin-yang relative flex items-center w-64 h-64 bg-red-200">
        <div className="w-64 h-32 rounded-t-full bg-red-700"></div>
        <div className="flex-1 absolute  w-1/2 h-1/2 border-[40px] border-white rounded-full bg-black"></div>
        <div className="flex-1 absolute right-0 w-[50%] h-1/2 border-[40px] border-black rounded-full bg-white"></div>
      </div>
    </div>
  );
}
