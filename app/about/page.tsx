"use client";

import React, { useState } from "react";
import Link from "next/link";

const AboutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission to your backend
    console.log("Form submitted:", formData);

    // Send form data to FormSubmit
    const response = await fetch("https://formsubmit.co/anya@calicolabs.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormSubmitted(true);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      console.error("Form submission failed");
    }
  };

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
                className="underline underline-offset-8 hover:decoration-2 hover:decoration-black/50 hover:text-black/70"
                onSubmit={handleSubmit}
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
                className="underline underline-offset-8 hover:decoration-2 decoration-2 hover:decoration-black hover:text-black"
              >
                About
              </Link>
            </div>
          </header>

          {/* Main Content */}
          <div className="mt-8 mb-8">
            {/* <h1 className="text-xl font-serif mb-6">About Me</h1> */}
            {/* Photo with caption - centered */}
            <div className="flex flex-col items-center my-8">
              <div className="w-96 overflow-hidden">
                <img
                  src="bio/nepal_cropped.jpg"
                  alt="Anya Korsakova"
                  className="w-full h-auto"
                />
              </div>
              <p className="mt-2 text-sm text-center text-gray-700">
                Langtang, Nepal
              </p>
            </div>

            <div className="md:flex md:space-x-8 items-start">
              <div className="md:flex-1">
                <p className="mb-6">
                  code helix is a personal website of Anya Korsakova, currently
                  a Computational Biology researcher at Calico Life Sciences
                  (Alphabet). The name code helix hints that DNA is a code - the
                  code of life that can be fully decoded for the benefit of
                  humanity.
                  <br />
                  <br />I am always happy to connect with like-minded folks and
                  discuss the latest trends in computational biology, machine
                  learning, and quantitative financial market analysis.
                </p>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="mb-12">
            <h2 className="text-lg font-serif mb-4">Connect</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/anyakors"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white border border-[#2f2f2f] shadow-[3px_3px_0px_#2f2f2f] hover:border-[#008bf3] hover:shadow-[5px_5px_0px_#008bf3] transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/akorsakova/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white border border-[#2f2f2f] shadow-[3px_3px_0px_#2f2f2f] hover:border-[#008bf3] hover:shadow-[5px_5px_0px_#008bf3] transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="/CV_2025_shorter.pdf"
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 bg-white border border-[#2f2f2f] shadow-[3px_3px_0px_#2f2f2f] hover:border-[#008bf3] hover:shadow-[5px_5px_0px_#008bf3] transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <span>CV / Resume</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mb-12">
            <h2 className="text-lg font-serif mb-4">Get in Touch</h2>
            {formSubmitted ? (
              <div className="p-4 bg-green-50 border border-green-500 text-green-700">
                Thank you for your message! I&apos;ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-[#2f2f2f] focus:border-[#008bf3] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-[#2f2f2f] focus:border-[#008bf3] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full p-2 border border-[#2f2f2f] focus:border-[#008bf3] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 bg-white border border-[#2f2f2f] shadow-[3px_3px_0px_#2f2f2f] hover:border-[#008bf3] hover:shadow-[5px_5px_0px_#008bf3] transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Footer */}
          <footer>
            <div className="max-w-3xl w-full mx-auto flex justify-between py-6 items-baseline border-t border-black mt-12">
              <p className="font-serif text-lg">codehelix.ai</p>
            </div>
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
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
