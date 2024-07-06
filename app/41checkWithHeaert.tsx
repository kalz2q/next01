"use client";
// https://codepen.io/kalz2q/pen/PoaWdMK?editors=0110

export default function Home() {
  return (
    <div className="min-h-48 bg-slate-400">
      <h1 className="p-4">heart with checkbox switch</h1>
      <label className="flex flex-row mx-8 ">
        <input type="checkbox" className="scale-[300%] "></input>
        <div
          className="relative w-32 h-32 mx-8 -translate-y-12 rotate-[-135deg]
        animate-spin
        "
        >
          <div className="absolute bg-green-300 rounded-b-full  w-[50%] h-[75%] "></div>
          <div className="absolute bg-red-300 opacity-80 rounded-r-full w-[75%] h-[50%]"></div>
        </div>
      </label>
    </div>
  );
}
