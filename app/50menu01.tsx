"use client";
import { useState } from "react";

export default function Home() {
  const menus = [
    { id: 1, name: "もやし", price: "500" },
    { id: 2, name: "海苔", price: "400" },
    { id: 3, name: "梅干し", price: "200" },
    { id: 4, name: "スイカ", price: "300" },
  ];

  const Menu = (props) => {
    const [count, setCount] = useState(0);

    const decrement = () => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
    };
    const increment = () => {
      setCount((prevCount) => prevCount + 1);
    };

    return (
      <li className="border-2 border-cyan-500 rounded-lg p-3  mt-3">
        <button
          className="w-9 mr-3 text-3xl border border-black rounded-lg"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="w-9 mr-3 text-3xl border  border-black rounded-lg"
          onClick={increment}
        >
          +
        </button>
        {props.name} &nbsp;&nbsp; ({props.price}円 x {count}個)
      </li>
    );
  };

  const menuItems = menus.map((menu) => {
    return <Menu id={menu.id} name={menu.name} price={menu.price} />;
  });

  return (
    <div className="w-[400px] bg-red-200 mx-auto mt-5 p-5">
      <h1 className="text-center text-3xl">メニュー</h1>
      <ul className="list-none mx-2">{menuItems}</ul>
      <p className="text-right  p-4  mt-3">合計0円</p>
    </div>
  );
}
