"use client";
import { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="flex justify-center p-32">
      <div
        className={
          isActive
            ? "w-24 h-24 bg-red-400 rounded-[50%] flex justify-center items-center  duration-700  ease-in-out"
            : "w-24 h-24 bg-orange-400 rounded-sm flex justify-center items-center duration-700  ease-in-out"
        }
        onClick={handleClick}
      >
        click
      </div>
    </div>
  );
}
