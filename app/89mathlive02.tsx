"use client";
import "mathlive";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [value, setValue] = useState("\\sqrt{x}");

  // Customize the mathfield when it is mounted
  const mf = useRef();

  // Update the mathfield when the value changes

  return (
    <div className="App text-4xl">
      <h1>MathLive with React</h1>
      <p>
        The solution of the equation is&nbsp;
        <math-field read-only style={{ display: `inline-block` }}>
          {"x=\\frac{-b\\pm \\sqrt{b^2-4ac}}{2a}"}
        </math-field>
      </p>
      <code>Value: {value}</code>
    </div>
  );
}
