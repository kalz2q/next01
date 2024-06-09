"use client";
import { useForm, SubmitHandler } from "react-hook-form";
// fail!!!!!

type Inputs = {
  input01: string;
  input02: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<Inputs>();

  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    return (
      <div>
        <p>出力欄01 {data.input01}</p>
        <p>出力欄01 {data.input02}</p>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="入力欄01" {...register("input01")} />
      <input defaultValue="入力欄01" {...register("input02")} />
      <input type="submit" />
    </form>
  );
}
