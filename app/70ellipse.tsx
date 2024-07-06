"use client";
import { useState } from "react";

export default function Home() {
  return (
    <div className="mt-8 flex flex-row">
      <div className="mx-8">
        <div className="ellipse01 w-96 h-24 rounded-[50%/100%] rounded-br-none rounded-bl-none bg-red-200"></div>
        <div className="ellipse01  w-96 h-24 rounded-[50%/100%] rounded-tr-none rounded-tl-none bg-red-400"></div>
      </div>
      <div className="ellipse01  w-96 h-48 rounded-[50%/50%]  bg-green-400"></div>
      <div className="custom-border-radius mx-8  w-96 h-48  bg-gray-400"></div>
    </div>
  );
}
