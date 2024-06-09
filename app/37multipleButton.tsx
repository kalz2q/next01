"use client";
import { useState } from "react";

// multiple button
export default function Home() {
  function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    return (
      <button
        className="bg-sky-400 w-[50%] mx-auto mt-3 rounded-full"
        onClick={handleClick}
      >
        Clicked {count} times
      </button>
    );
  }

  return (
    <div className="text-3xl text-center flex flex-col m-6">
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}
