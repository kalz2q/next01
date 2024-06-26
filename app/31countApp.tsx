"use client";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "react-countapp";
  }, []);

  const [count, setCount] = useState(0);

  type Msg = "Increment" | "Decrement";

  const handleClick = (msg: Msg) => {
    switch (msg) {
      case "Increment":
        setCount((prevCount) => prevCount + 1);
        break;
      default:
        setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="flex flex-col items-center  min-h-screen py-6">
      <p className="text-xl mb-4">You clicked {count} times</p>
      <div>
        <button
          onClick={() => handleClick("Increment")}
          className="px-4 py-2 m-2 bg-blue-500 text-white text-4xl rounded"
        >
          +
        </button>
        <button
          onClick={() => handleClick("Decrement")}
          className="px-4 py-2 m-2 bg-red-500 text-white text-4xl rounded"
        >
          -
        </button>
      </div>
    </div>
  );
}
