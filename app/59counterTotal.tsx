"use client";
import { useState } from "react";

export default function Home() {
  const [counts, setCounts] = useState([0, 0, 0]);

  const counters = [
    { id: 0, name: "TREK" },
    { id: 1, name: "BIANCHI" },
    { id: 2, name: "GIANT" },
  ];

  const total = counts[0] + counts[1] + counts[2];

  const handleClick = (counterId) => {
    const newCounts = [...counts];
    newCounts[counterId]++;
    setCounts(newCounts);
  };

  function MyButton(props) {
    const increment = () => {
      props.onIncrement(props.counterId);
    };

    return (
      <li>
        <div className="w-80 bg-yellow-300  border-4" onClick={increment}>
          {props.name} &nbsp; Clicked {props.count} times
        </div>
      </li>
    );
  }

  const menuItems = counters.map((counter) => {
    return (
      <MyButton
        id={counter.id}
        counterId={counter.id}
        count={counts[counter.id]}
        name={counter.name}
        onIncrement={handleClick}
      />
    );
  });

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl">Counters with total</h1>
      <ul className="list-none mx-2">{menuItems}</ul>
      <p className="m-2 bg-red-300 w-80">合計:{total}</p>
    </div>
  );
}
