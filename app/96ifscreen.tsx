"use client";
import React, { useEffect, useState } from "react";
// utf をオブジェクトにする 途中
// 問題が切り替わらない
// 終了時が駄目

export default function Home() {
  const [screennum, setScreenNum] = useState(5);

  function Screen0() {
    return <div className="text-red-400 text-4xl">Screen0</div>;
  }

  function Screen1() {
    return <div className="text-blue-400 text-4xl">Screen1</div>;
  }

  function Screen2() {
    return <div className="text-green-400 text-4xl">Screen2</div>;
  }

  {
    if (screennum === 0) {
      return <Screen0 />;
    } else if (screennum === 1) {
      return <Screen1 />;
    } else return <Screen2 />;
  }
}
