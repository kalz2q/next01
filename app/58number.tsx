"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [num, setNum] = useState(0);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(typeof input);
    e.preventDefault();
    if (input !== "") {
      setNum(Number(input) * 2);
      setInput("");
    } else {
      setNum(0);
    }
  };

  return (
    <div>
      <h1 className="">入力した数字を倍にして表示する</h1>
      <form className="relative flex flex-col" onSubmit={handleSubmit}>
        <label>
          入力: &nbsp; &nbsp;
          <input
            type="number"
            id="name"
            name="name"
            className=" bg-yellow-100 text-lime-200xl  w-[50%]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="数字を入力してボタンを押してください。"
          />
        </label>
        <input
          type="submit"
          className="bg-red-400 w-[50%]"
          value={"送信する"}
        />
      </form>
      <p className="bg-blue-100  text-lime-200xl  w-[50%]">{num}</p>
    </div>
  );
}
