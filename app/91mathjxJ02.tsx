"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.typesetPromise();
    }
  }, [input]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">MathJaxサンプル</h1>
      <p className="mb-4">
        インラインスタイルだとこんな風:{" "}
        <span className="math inline">\( E = mc^2 \)</span>
      </p>
      <p className="mb-4">ディスプレイスタイルでは:</p>
      <p className="math mb-4 text-4xl">
        {`\\[ \\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi} \\]`}
      </p>
      <h2 className="text-2xl font-semibold mb-2">動的生成</h2>
      <p className="mb-2">下の欄に LaTeX 式を入力して下さい:</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="ここに LaTeX を入力"
        className="border p-2 mb-4 w-full"
      />
      <div className="math" id="output">
        {`\\[ ${input} \\]`}
      </div>
    </div>
  );
}
