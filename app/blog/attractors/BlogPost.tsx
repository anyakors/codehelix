import React from "react";
import Link from "next/link";
import MathFormula from "../../MathFormula"; // Import from the separate file
import MathFormulaNewline from "../../MathFormulaNewline"; // Import from the separate file

export default function BlogPost() {
  const formula1 = `y_i = \\tanh\\left(\\sum_{j=1}^{D} w_{ij}x_i\\right)`;
  const formula2 = `x_0 = Y = s\\sum_{i=1}^{N} \\beta_i y_i`;

  return (
    <div className="w-full mx-auto">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Latest Research Update",
            datePublished: "2025-02-21",
            dateModified: "2025-02-21",
            url: "https://codehelix.ai/blog/attractors",
          }),
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <Link href="/" className="text-3xl font-serif">
            code helix
          </Link>
          <div className="flex gap-4">
            <Link
              href="/"
              className="underline underline-offset-8 hover:decoration-2 hover:decoration-black/50 hover:text-black/70"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="underline underline-offset-8 hover:decoration-2 decoration-2 hover:decoration-black hover:text-black"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="underline underline-offset-8 hover:decoration-2 hover:decoration-black/50 hover:text-black/70"
            >
              About
            </Link>
          </div>
        </header>

        {/* Post Title */}
        <h1 className="text-5xl md:text-6xl font-serif mb-6 text-balance">
          Attractors in neural networks
        </h1>
      </div>

      {/* Post Metadata */}
      <div className="prose max-w-3xl mx-auto">
        <div className="mb-12">
          <div className="grid md:grid-cols-[120px_1fr] gap-0.5 font-mono text-sm">
            <div>Published</div>
            <div>December 1, 2024</div>
            <div className="max-md:mt-2">Email</div>
            <div className="group relative cursor-default">
              <span className="underline decoration-dotted decoration-foreground/50 underline-offset-4">
                anya@codehelix.ai
              </span>
              <span className="hidden absolute top-0 -translate-y-full left-0 group-hover:block bg-white shadow z-50 px-2 py-1">
                Anya Korsakova
              </span>
            </div>
            <div className="max-md:mt-2">github</div>
            <div>
              <a
                href="https://github.com/anyakors/neural_attractors.git"
                target="_blank"
                className="!text-foreground underline underline-offset-2"
              >
                <span>neural_attractors.git</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose max-w-3xl mx-auto">
        <p>
          Neural networks can be thought of as dynamical systems that evolve
          over time in response to input data and optimization process.
          Attractors are a key concept in the study of dynamical systems that
          describe the long-term behavior of a system as it evolves towards
          equilibrium. In the context of neural networks, attractors can help us
          visualize how the network's internal representations evolve over time
          and converge to stable (or chaotic) states.
          <br />
          <br />
          In this post, I explore the concept of attractors in a simple neural
          network that is engineered as a feedback map, and discover a range of
          attractors, from limit cycles to toroidal and strange attractors. This
          project is largely inspired by the work of J.C. Sprott "Artificial
          Neural Net Attractors" <a href="#references">[1]</a>.
        </p>

        <h2
          className="group/heading relative text-2xl font-normal mt-12 mb-4"
          id="methodology"
        >
          <a
            className="text-link underline hover:decoration-2 gap-1 absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover/heading:opacity-100 w-6 h-6 flex items-center justify-center"
            href="#Setup"
            target="_blank"
            aria-hidden="true"
            tabIndex={-1}
          >
            <svg
              className="autolink-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z" />
            </svg>
          </a>
          Setup
        </h2>

        <p>
          The example network consists of an array of{" "}
          <MathFormula formula={`D`} display={false} /> input values{" "}
          <MathFormula formula={`(x_1,x_2,...x_D)`} display={false} />, a hidden
          layer of <MathFormula formula={`N`} display={false} /> neuron units{" "}
          <MathFormula formula={`(y_1,y_2,...,y_N)`} display={false} />, and
          output <MathFormula formula={`x_0`} display={false} />:<br></br>
          <MathFormula formula={formula1} display={true} />
          <MathFormula formula={formula2} display={true} />
          <br></br> where{" "}
          <MathFormula formula={`w_{ij}, \\beta_i`} display={false} /> are the
          weights and biases, and <MathFormula formula={`s`} display={false} />{" "}
          is a scaling factor. Hyperbolic tangent here plays a role of a
          squashing function, i.e. mapping everything to the [-1,1] interval.
          <br></br>
        </p>

        <p>
          <br></br>
          Now, we can take the weights of the system as random and fixed, and we
          will feed the output vector to one of the input vectors at a time, so
          that
          <MathFormula
            formula={`x_0 = Y(t=0), x_1 = Y(t=1), ... x_D = Y(t=D-1)`}
            display={true}
          />
          It is known that such feedback systems (nonlinear maps) can exhibit
          chaotic behavior. Hyperparameters and weights + biases define the
          time-series evolution of the system, and some sets of parameters lead
          to the phase space settling into a basin of attraction. These
          attractors might be point attractors, limit cycles, toroidal and
          strange (chaotic) attractors.
        </p>
        <p>
          <br></br>
          In order to investigate how prone the system is to chaos, we will
          calculate the Lyapunov exponents for different sets of parameters.
          Lyapunov exponent is a measure of the instability of a dynamical
          system:
          <MathFormula
            formula={`|\\delta Z(t)| \\approx e^{\\lambda t} |\\delta (Z(0))|`}
            display={true}
          />
          <MathFormula
            formula={`\\lambda = n_t \\sum_{k=0}^{n_t-1} ln \\frac{|\\Delta y_{k+1}|}{|\\Delta y_k|}`}
            display={true}
          />
          where <MathFormula formula={`n_t`} display={false} /> is a number of
          time steps,{" "}
          <MathFormula formula={`\\Delta y_k \\;`} display={false} />
          is a distance between the states{" "}
          <MathFormula formula={`y(x_i)`} display={false} /> and{" "}
          <MathFormula formula={`y(x_i + \\epsilon)`} display={false} /> at a
          point in time. For stable systems converging to a fixed point or a
          stable attractor this parameter is less than 0, for unstable
          (diverging, and, therefore, chaotic systems) it is greater than 0.
        </p>
        <p>
          <br></br>
          The algorithm to calculate the Lyapunov exponent is as follows:
          <br></br>
          <li>Create identical networks with the same random seed</li>
          <li>
            Perturb one of them by a small amount ({" "}
            <MathFormula formula={`\\epsilon=1e-8`} display={false} />)
          </li>
          <li>Evolve both trajectories forward one step</li>
          <li>Measure the separation between trajectories</li>
          <li>
            Compute the local Lyapunov exponent as the natural logarithm of the
            ratio of final to initial separation
          </li>
          <li>Average these local exponents over many iterations</li>
          <br></br>
        </p>

        <h2
          className="group/heading relative text-2xl font-normal mt-12 mb-4"
          id="results"
        >
          <a
            className="text-link underline hover:decoration-2 gap-1 absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover/heading:opacity-100 w-6 h-6 flex items-center justify-center"
            href="#results"
            target="_blank"
            aria-hidden="true"
            tabIndex={-1}
          >
            <svg
              className="autolink-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z" />
            </svg>
          </a>
          Results
        </h2>

        {/* Centered image */}
        <div className="image-container">
          <img
            src="/images/N_4_D_16_s_0.22_limcyc.png"
            alt="Limit cycle attractor"
            className="centered-image"
          />
        </div>

        <br></br>
        <br></br>

        <p>
          One of the stable types of attractors is the limit cycle attractor
          (parameters:{" "}
          <MathFormula
            formula={`N=4, D=32, s=0.22, seed=174658140`}
            display={false}
          />
          ). The defining characteristics are: a single, closed loop trajectory
          in phase space. The orbit follows a regular, periodic path over time
          series. The structure is regular and well-defined, without the complex
          folding seen in toroidal or strange attractors. The Lyapunov exponent
          for this attractor{" "}
          (<MathFormula formula={`\\lambda=-3.65`} display={false} />) is
          negative, indicating stability.
        </p>

        <br></br>
        <br></br>

        {/* Centered image */}
        <div className="image-container">
          <img
            src="/images/N_4_D_32_s_0.55_toroidal.png"
            alt="Toroidal attractor"
            className="centered-image"
          />
        </div>

        <br></br>
        <br></br>

        <p>
          Another type of attractors is the toroidal (quasiperiodic) attractor
          (parameters:{" "}
          <MathFormula
            formula={`N=4, D=32, s=0.55, seed=3160697950`}
            display={false}
          />
          ). It is characterized by the ordered structure of sheets that wrap
          around in organized, quasiperiodic patterns. The trajectories still
          appear to follow predictable paths rather than the erratic,
          unpredictable patterns of strange attractors, while the Lyapunov
          exponent for this attractor approaching higher values, but is still
          negative (<MathFormula formula={`\\lambda=-0.20`} display={false}/>).
        </p>

        <br></br>
        <br></br>

        {/* Centered image */}
        <div className="image-container">
          <img
            src="/images/N_4_D_16_s_1.4_strange.png"
            alt="Strange attractor"
            className="centered-image"
          />
        </div>

        <br></br>
        <br></br>

        <p>
          As we increase the scaling factor{" "}
          <MathFormula formula={`s`} display={false} />, the system becomes more
          prone to chaos. The strange (chaotic) attractor emerges with the
          following parameters:{" "}
          <MathFormula
            formula={`N=4, D=16, s=1.4, seed=174658140)`}
            display={false}
          />
          . It is characterized by the erratic, unpredictable patterns of
          trajectories that never repeat. The Lyapunov exponent for this
          attractor is positive{" "}
          (<MathFormula formula={`\\lambda=0.32`} display={false} />), indicating
          instability and chaotic behavior.
        </p>
      </div>

      {/* References */}
      <div className="prose max-w-3xl mx-auto mt-12">
        <h2 id="references" className="text-2xl font-normal mt-12 mb-4">
          References
        </h2>
        <ol>
          <li>
            J.C. Sprott, "Artificial Neural Net Attractors",{" "}
            <em>Computers & Graphics</em>, 1998.{" "}
            <a
              href="https://doi.org/10.1016/S0097-8493(97)00089-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              doi.org/10.1016/S0097-8493(97)00089-7
            </a>
          </li>
        </ol>
      </div>

      {/* Footer */}
      <footer>
        <div className="max-w-3xl w-full mx-auto flex justify-between py-6 items-baseline border-t border-black mt-12">
          <p className="font-serif text-lg">codehelix.ai</p>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/akorsakova/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors duration-200 flex items-center gap-2"
            >
              {/* LinkedIn Icon */}
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="font-mono text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
