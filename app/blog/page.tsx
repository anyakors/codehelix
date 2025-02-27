import React from "react";
import Link from "next/link";

const MinimalTemplate = () => {
  // Sample blog posts data - you can replace this with your actual posts
  const posts = [
    {
      title: "Attractors in simple neural networks: chaos and beauty",
      date: "December 1, 2024",
      description:
        "A fun revamped project on attractors in NNs. Winner of the CoSScience Art Award during my PhD years.",
      link: "/blog/attractors",
    },
  ];

  {
    /*
      title: "Latest Research Update",
      date: "February 21, 2025",
      description:
        "New findings in computational genetics and machine learning applications.",
      link: "/blog/post-1",
    */
  }
  {
    /*
      title: "Conference Presentation",
      date: "January 15, 2025",
      description:
        "Presenting our recent work on genetic algorithms at ICML 2025.",
      link: "/blog/post-2",
    */
  }

  return (
    <div className="bg-white text-black font-mono text-sm antialiased">
      <div className="p-4 md:p-12 overflow-hidden">
        <div className="w-full max-w-xl">
          {/* Header */}
          <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              {/* DNA Logo */}
              <img
                src="/dna_mini_brown.svg"
                alt=""
                className="w-10 h-10"
                aria-hidden="true"
              />
              {/* Your Name */}
              <Link href="/" className="text-3xl font-serif">
                code helix
              </Link>
            </div>
            <div className="flex gap-4">
              <Link
                href="/"
                className="underline underline-offset-8 hover:decoration-2 decoration-2 hover:decoration-black hover:text-black"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="underline underline-offset-8 hover:decoration-2 hover:decoration-black/50 hover:text-black/70"
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

          {/* Main Content */}
          {/* Blog Posts/Updates Section with Timeline */}
          <div className="pl-2">
            {/* The container that creates the timeline effect */}
            <div
              className="relative flex flex-col space-y-4 border-l border-gray-300 py-4 
                          before:h-6 before:w-px before:bg-gradient-to-t before:from-transparent before:to-background before:absolute before:-left-px before:top-0 
                          after:h-6 after:w-px after:bg-gradient-to-b after:from-transparent after:to-background after:absolute after:-left-px after:bottom-0"
            >
              {posts.map((post, index) => (
                <Link
                  key={index}
                  href={post.link}
                  className="flex flex-col gap-2 px-3 py-2 ml-6 group cursor-pointer 
                           bg-white border border-[#2f2f2f] shadow-[3px_3px_0px_#2f2f2f] hover:border-[#008bf3] 
                           hover:shadow-[5px_5px_0px_#008bf3] transition-all hover:bg-white 
                           relative"
                >
                  {/* Timeline dot marker */}
                  <div
                    className="absolute size-[7px] bg-gray-900 rounded-sm -left-[40px] top-[7px] 
                                outline outline-background outline-2"
                  />

                  <div className="flex items-baseline gap-2 justify-between relative">
                    <div className="text-xs truncate font-semibold">
                      {post.title}
                    </div>
                    <div className="text-xs text-gray-600 whitespace-nowrap">
                      {post.date}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 no-underline">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
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
      </div>
    </div>
  );
};

export default MinimalTemplate;
