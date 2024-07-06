"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Home() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const menus = [
    { id: 0, name: "もやし", price: 500 },
    { id: 1, name: "海苔", price: 400 },
    { id: 2, name: "梅干し", price: 200 },
    { id: 3, name: "スイカ", price: 300 },
  ];

  const total =
    menus[0].price * counts[0] +
    menus[1].price * counts[1] +
    menus[2].price * counts[2] +
    menus[3].price * counts[3];

  const decrementMenu = (menuId) => {
    if (counts[menuId] > 0) {
      const newCounts = [...counts];
      newCounts[menuId]--;
      setCounts(newCounts);
    }
  };

  const incrementMenu = (menuId) => {
    const newCounts = [...counts];
    newCounts[menuId]++;
    setCounts(newCounts);
  };

  const Menu = (props) => {
    const decrement = () => {
      // App component function
      props.onDecrement(props.menuId);
    };
    const increment = () => {
      props.onIncrement(props.menuId);
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
        {props.name} &nbsp;&nbsp; ({props.price}円 x {props.count}個)
      </li>
    );
  };

  const menuItems = menus.map((menu) => {
    return (
      <Menu
        id={menu.id}
        menuId={menu.id}
        count={counts[menu.id]}
        name={menu.name}
        price={menu.price}
        onDecrement={decrementMenu}
        onIncrement={incrementMenu}
      />
    );
  });

  return (
    <div className="w-[400px] bg-red-200 mx-auto mt-5 p-5">
      <h1 className="text-center text-3xl">メニュー</h1>
      <ul className="list-none mx-2">{menuItems}</ul>
      <p className="text-right  p-4  mt-3">合計:{total}円</p>
    </div>
  );
}
