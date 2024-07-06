"use client";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const handleBlur = () => {
    setIsActive((current) => !true);
  };

  return (
    <div className="flex flex-row ">
      <div>
        <input
          id="input"
          type="text"
          placeholder="検索文字列を入れる"
          className={
            isActive
              ? "w-96 h-12 border-4 text-3xl rounded-sm  duration-700  ease-in-out"
              : "w-0 duration-700  ease-in-out"
          }
          onBlur={handleBlur}
        />
      </div>
      <div className="relative w-[32px] h-[32px] " onClick={handleClick}>
        <div className="search-icon absolute   w-[100%] h-[100%] border-2 border-black rounded-full"></div>
        <div className="search-icon-before absolute top-[75%] left-[100%] h-[60%] w-[10%] bg-black rotate-[-45deg]"></div>
      </div>
    </div>
  );
}
