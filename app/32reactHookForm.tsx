"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Person = {
  name: string;
  age: number;
};

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Person>();

  const [formData, setPerson] = useState<Person>({ name: "名無し", age: 18 });

  const onSubmit: SubmitHandler<Person> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-96 border-3 bg-fuchsia-400 mx-auto mt-6 rounded"
    >
      <h1 className="text-3xl text-center mt-2">名前入力フォーム</h1>
      <div className="m-2">
        <label>名前</label>
        <input
          {...register("name", {
            required: "名前を入力して下さい",
            minLength: { value: 2, message: "2文字以上入力して下さい" },
          })}
          className="rounded-md border-2 border-black w-full p-3"
          placeholder="名前を入力して下さい"
        />
        {errors.name?.message}
      </div>
      <div className="m-2">
        <label>年齢</label>
        <input
          {...register("age", {
            min: { value: 0, message: "0以上を入力して下さい" },
            required: "年齢を入力して下さい",
          })}
          type="number"
          defaultValue={0}
          min={0}
          className="rounded-md border-2 border-black w-full p-3"
          placeholder="年齢を入力して下さい"
        />
        {errors.age?.message}
      </div>
      <div className="m-2">
        <button
          className="bg-black text-white rounded-lg w-full mt-4 p-1"
          type="submit"
        >
          送信
        </button>
      </div>
      <div className="text-center my-4">
        あなたの名前は{formData?.name}、年齢は{formData?.age}です。
      </div>
    </form>
  );
}
