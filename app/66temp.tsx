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
      <div className="font-bold from-stone-300 w-1/2 bg-lime-200  h-20">
        hljljhlっっっっｈ
      </div>
      <div className="w-40 h-40  bg-sky-200 overflow-scroll  leading-8">
        こんにちは こんにちは こんにちは こんにちは こんにちは こんにちは
        こんにちは こんにちは こんにちは こんにちは こんにちは こんにちは
        こんにちは こんにちは こんにちは ハロー こんにちは こんにちは こんにちは
        こんにちは こんにちは こんにちは こんにちは こんにちは こんにちは
        こんにちは
      </div>
      <div className=" w-80 h-40 rounded-t-[160px]  border-t-8 border-l-8 border-r-8 border-red-800 bg-lime-200">
        hello
      </div>
      <p className="leading-none hover:leading-loose">
        Hoverしろって。そんな事言ったって、、、。そんな事言ったって、、、。そんな事言ったって、、、。そんな事言ったって、、、。そんな事言ったって、、、。そんな事言ったって、、、。そんな事言ったって、、、。
        そんな事言ったって、、、。そんな事言ったって、、、。そんな事言ったって、、、。そんな事言ったって、、、。そんな事言ったって、、、。
      </p>
    </div>
  );
}
