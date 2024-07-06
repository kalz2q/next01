// [備忘録]　React Hook formってどう使うの？
// qqiita 実装例

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  let text: string = "hello";
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    return (text = data.email); //これが駄目ですね
  };

  return (
    <div className="App">
      <h1 className="text-3xl">ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" {...register("password")} type="password" />
        </div>
        <button type="submit">ログイン</button>
      </form>
      <p>{text}</p>
    </div>
  );
}
