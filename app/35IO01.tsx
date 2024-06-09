"use client";
import React, { useState } from "react";

export default function Home() {
  const [inputText, setInputElement] = useState("");
  const [text, setText] = useState("ここに表示されます。");
  const printText = () => {
    if (inputText !== "") {
      setText(inputText);
      setInputElement("");
    } else {
      setText("文字を入力してください。");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 justify-center p-6 ">
      <div className="max-w-lg mx-auto justify-center bg-white rounded-xl shadow-lg ">
        <h1 className="text-3xl text-center p-7">入力した文字列を表示する</h1>
        <div className="flex flex-col w-[70%] mx-auto">
          <input
            className=" bg-yellow-100 text-lime-200xl "
            value={inputText}
            onChange={(e) => setInputElement(e.target.value)}
            type="text"
            placeholder="入力してボタンを押してください。"
          />
          <button
            className="ml-auto m-8 w-[20%] bg-red-400"
            onClick={printText}
          >
            表示する
          </button>
          <p className="bg-blue-100 m-8">{text}</p>
        </div>
      </div>
    </div>
  );
}
