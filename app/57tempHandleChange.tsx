"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("ここに表示されます。");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    // console.log(input);
    e.preventDefault();
    if (input !== "") {
      setText(input);
      setInput("");
    } else {
      setText("文字を入力してください。");
    }
  };

  return (
    <div>
      <h1 className="">入力した文字列を表示する</h1>
      <form className="flex flex-col w-[70%]" onSubmit={handleSubmit}>
        <label>
          入力: &nbsp; &nbsp;
          <input
            id="name"
            name="name"
            className=" bg-yellow-100 text-lime-200xl "
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="入力してボタンを押してください。"
          />
        </label>
        <input
          type="submit"
          className="w-[20%] bg-red-400"
          value={"送信する"}
        />
      </form>
      <p className="bg-blue-100">{text}</p>
    </div>
  );
}
