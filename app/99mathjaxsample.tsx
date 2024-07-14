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
      <p className="math mb-4 text-3xl">
        {`\\[ \\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi} \\]`}
      </p>
      <p className="text-3xl">
        {"\\(a \\ne 0\\)"} の時, \(ax^2 + bx + c = 0\) には2つの解がある:
        {"\\[x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}\\]"}
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">ローレンツ方程式</h2>
      <p className="text-3xl">
        {`\\[
          \\begin{align}
          \\dot{x} & = \\sigma(y-x) \\\\
          \\dot{y} & = \\rho x - y - xz \\\\
          \\dot{z} & = -\\beta z + xy
          \\end{align}
          \\]`}
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        コーシー＝シュワルツの不等式
      </h2>
      <p className="text-3xl">
        {`\\[
          \\left( \\sum_{k=1}^n a_k b_k \\right)^{\\!\\!2} \\leq
          \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)
          \\]`}
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-4">外積公式</h2>
      <p className="text-3xl">
        {`\\[
          \\mathbf{V}_1 \\times \\mathbf{V}_2 =
          \\begin{vmatrix}
          \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\
          \\frac{\\partial X}{\\partial u} & \\frac{\\partial Y}{\\partial u} & 0 \\\\
          \\frac{\\partial X}{\\partial v} & \\frac{\\partial Y}{\\partial v} & 0 \\\\
          \\end{vmatrix}
          \\]`}
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-4">
        {" "}
        \(n\) 個のコインを投げて表が \(k\) 回出る確率は:
      </h2>
      <p className="text-3xl">{`\\[P(E) = {n \\choose k} p^k (1-p)^{ n-k} \\]`}</p>

      <h2 className="text-xl font-semibold mt-6 mb-4">ラマヌジャン恒等式</h2>
      <p className="text-3xl">
        {`\\[
          \\frac{1}{(\\sqrt{\\phi \\sqrt{5}}-\\phi) e^{\\frac25 \\pi}} =
          1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {1+\\frac{e^{-6\\pi}}
          {1+\\frac{e^{-8\\pi}} {1+\\ldots} } } }
          \\]`}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-4">
        ロジャース＝ラマヌジャン恒等式
      </h2>
      <p className="text-2xl">
        {`\\[
          1 +  \\frac{q^2}{(1-q)}+\\frac{q^6}{(1-q)(1-q^2)}+\\cdots =
          \\prod_{j=0}^{\\infty}\\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},
          \\quad\\quad \\text{for $|q| < 1$}.
          \\]`}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-4">マクスウェルの方程式</h2>
      <p className="text-2xl">
        {`\\[

          \\begin{align}
          \\nabla \\times \\vec{\\mathbf{B}} -\, \\frac1c\, \\frac{\\partial\\vec{\\mathbf{E}}}{\\partial t} & = \\frac{4\\pi}{c}\\vec{\\mathbf{j}} \\\\
          \\nabla \\cdot \\vec{\\mathbf{E}} & = 4 \\pi \\rho \\\\
          \\nabla \\times \\vec{\\mathbf{E}}\, +\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{B}}}{\\partial t} & = \\vec{\\mathbf{0}} \\\\
          \\nabla \\cdot \\vec{\\mathbf{B}} & = 0
          \\end{align}

          \\]`}
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-4">In-line Mathematics</h2>
      <p className="text-xl">
        Finally, while display equations look good for a page of samples, the
        ability to mix math and text in a paragraph is also important. This
        expression {`\\(\\sqrt{3x-1}+(1+x)^2\\)`} is an example of an inline
        equation. As you see, MathJax equations can be used this way as well,
        without unduly disturbing the spacing between lines.
      </p>
    </div>
  );
}
