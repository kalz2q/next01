"use client";
import React, { useEffect, useState } from "react";

function MathJaxDiv2() {
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
    <p className="math mb-4 text-3xl">
      {`\\[ \\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi} \\]`}
    </p>
  );
}

export default function Home() {
  function MathJaxDiv() {
    const [input, setInput] = useState<string>("");

    useEffect(() => {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
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
      <p className="math mb-4 text-3xl">
        {`\\[ \\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi} \\]`}
      </p>
    );
  }
  return (
    <div className="container mx-auto p-4">
      <MathJaxDiv />
      <MathJaxDiv2 />
    </div>
  );
}
