"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const [text, setText] = useState({ input: "ここに表示する" });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  function addText(newText) {
    setText(newText);
    console.log(newText);
    reset();
  }

  return (
    <div className="min-h-screen bg-gray-100 justify-center p-5 ">
      <div className="max-w-lg mx-auto justify-center bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl text-center p-6">入力した文字列を表示する</h1>
        <form
          onSubmit={handleSubmit(addText)}
          className="bg-amber-200
          flex flex-col w-[90%] mx-auto
          rounded p-5 shadow mt-4"
        >
          <input
            {...register("input")}
            className="bg-lime-100 text-2xl w-full"
          />

          <div className="flex justify-end border-t mt-3 pt-5">
            <button
              className="ml-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              type="submit"
            >
              表示する
            </button>
          </div>
        </form>
        <p className="bg-blue-100 m-4">{JSON.stringify(text)}</p>
        <p className="bg-blue-100 m-4">{text["input"]}</p>
      </div>
    </div>
  );
}
