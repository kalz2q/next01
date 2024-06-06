"use client";
import { FormEvent, useRef, useState } from "react";

//【Next.js14】【TypeScript】Webアプリ必須！入力フォームを作る

export default function Home() {
  const nameRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameRef.current!.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-96 border-2 mx-auto mt-4 rounded"
    >
      <h1 className="text-3xl text-center mt-2">名前入力フォーム</h1>
      <div className="m-2">
        <label>名前</label>
        <input
          ref={nameRef}
          className="border-2 rounded-md w-full p-1"
          type="text"
          placeholder="名前を入力して下さい"
        />
      </div>
      <div className="m-2">
        <button
          className="bg-black text-white rounded-lg w-full mt-4 p-1"
          type="submit"
        >
          送信
        </button>
      </div>
      <div className="text-center my-4">あなたの名前は{name}です</div>
    </form>
  );
}
