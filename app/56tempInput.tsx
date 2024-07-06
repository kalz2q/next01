"use client";
import { useState } from "react";

export default function Home() {
  const [inputs, setInputs] = useState<{ username: string; age: number }>({
    username: "",
    age: 0,
  });
  const [user, setUser] = useState<{ username: string; age: number }>({
    username: "",
    age: 0,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Enter your name: &nbsp;
          <input
            className="bg-red-200"
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={(e) => handleChange(e)}
          />
        </label>{" "}
        <p></p>
        <label>
          Enter your age: &nbsp; &nbsp;
          <input
            className="bg-lime-200"
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <p></p>
        <input type="submit" />
      </form>
    </div>
  );
}
