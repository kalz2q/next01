"use client";
import { useState } from "react";

export default function Home() {
  return (
    <div className="m-8">
      <div className="logo relative w-64 h-64 rounded-full bg-red-200 flex items-center">
        <div className="absolute w-[calc(200%/3)] h-[calc(200%/3)] rounded-full  bg-blue-200"></div>
        <div
          className="absolute w-[calc(100%/3)] h-[calc(100%/3)] rounded-full 
        ml-[calc(100%-100%/3)] 
        
        bg-lime-200"
        ></div>
      </div>
    </div>
  );
}
