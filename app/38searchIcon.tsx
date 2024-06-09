"use client";

export default function Home() {
  return (
    <div className="relative w-[32px] h-[32px]">
      <div className="search-icon absolute   w-[100%] h-[100%] border-2 border-black rounded-full"></div>
      <div className="search-icon-before absolute top-[75%] left-[100%] h-[60%] w-[10%] bg-black rotate-[-45deg]"></div>
    </div>
  );
}
