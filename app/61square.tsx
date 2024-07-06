"use client";
import { useState } from "react";

function Square() {
  return (
    <button className="square bg-white border border-gray-600 float-left text-2xl font-bold leading-[34px] h-[34px] -mr-px -mt-px p-0 text-center w-[34px]">
      X
    </button>
  );
}

export default function Home() {
  return (
    <div className="game flex flex-row m-5">
      <div className="game-board">
        <Square />
      </div>
    </div>
  );
}
