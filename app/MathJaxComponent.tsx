import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const MathJaxComponent: React.FC = () => {
  const mathJaxConfig = {
    tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] }
  };

  return (
    <MathJaxContext version={3} config={mathJaxConfig}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">MathJax v3 beta: TeX input, HTML output test</h1>

        <p>
          When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
          $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">The Lorenz Equations</h2>
        <p>
          \begin{align}
          \dot{x} &amp; = \sigma(y-x) \\
          \dot{y} &amp; = \rho x - y - xz \\
          \dot{z} &amp; = -\beta z + xy
          \end{align}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">The Cauchy-Schwarz Inequality</h2>
        <p>
          \[
          \left( \sum_{k=1}^n a_k b_k \right)^{\!\!2} \leq
          \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
          \]
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">A Cross Product Formula</h2>
        <p>
          \[
          \mathbf{V}_1 \times \mathbf{V}_2 =
          \begin{vmatrix}
          \mathbf{i} &amp; \mathbf{j} &amp; \mathbf{k} \\
          \frac{\partial X}{\partial u} &amp; \frac{\partial Y}{\partial u} &amp; 0 \\
          \frac{\partial X}{\partial v} &amp; \frac{\partial Y}{\partial v} &amp; 0 \\
          \end{vmatrix}
          \]
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">The probability of getting \(k\) heads when flipping \(n\) coins is:</h2>
        <p>\[P(E) = {n \choose k} p^k (1-p)^{ n-k} \]</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">An Identity of Ramanujan</h2>
        <p>
          \[
          \frac{1}{(\sqrt{\phi \sqrt{5}}-\phi) e^{\frac25 \pi}} =
          1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
          {1+\frac{e^{-8\pi}} {1+\ldots} } } }
          \]
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">A Rogers-Ramanujan Identity</h2>
        <p>
          \[
          1 +  \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots =
          \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},
          \quad\quad \text{for $|q| &lt; 1$}.
          \]
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Maxwell's Equations</h2>
        <p>
          \begin{align}
          \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &amp; = \frac{4\pi}{c}\vec{\mathbf{j}} \\
          \nabla \cdot \vec{\mathbf{E}} &amp; = 4 \pi \rho \\
          \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} &amp; = \vec{\mathbf{0}} \\
          \nabla \cdot \vec{\mathbf{B}} &amp; = 0
          \end{align}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">In-line Mathematics</h2>
        <p>
          Finally, while display equations look good for a page of samples, the
          ability to mix math and text in a paragraph is also important. This
          expression $\sqrt{3x-1}+(1+x)^2$ is an example of an inline equation. As
          you see, MathJax equations can be used this way as well, without unduly
          disturbing the spacing between lines.
        </p>
      </div>
    </MathJaxContext>
  );
}

export default MathJaxComponent;
