"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// https://react-hook-form.com/get-started

export default function Home() {
  type Inputs = {
    example: string;
    exampleRequired: string;
  };
  const [texts, setTexts] = useState({
    example: "",
    exampleRequired: "両欄を埋めて下さい",
  });

  const total = texts.example + " " + texts.exampleRequired;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newInputs = data;
    setTexts(newInputs);
    console.log(texts);
  };

  return (
    <div className="w-[400px] bg-red-200 mx-auto mt-5 p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="bg-slate-200" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="bg-amber-200"
          {...register("exampleRequired", { required: true })}
        />

        <input className="bg-sky-200 float-end" type="submit" />
      </form>
      <p className=" p-4  mt-3">入力値:{total}</p>
    </div>
  );
}
