"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogPost() {

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
            url: "https://codehelix.ai/blog/indels",
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
          How to improve DNA convnet predictions for indels, structural variants and tandem repeats
        </h1>
      </div>

      {/* Post Metadata */}
      <div className="prose max-w-3xl mx-auto">
        <div className="mb-12">
          <div className="grid md:grid-cols-[120px_1fr] gap-0.5 font-mono text-sm">
            <div>Published</div>
            <div>April 22, 2025</div>
            <div className="max-md:mt-2">Email</div>
            <div className="group relative cursor-default">
              <span className="underline decoration-dotted decoration-foreground/50 underline-offset-4">
                anya@codehelix.ai
              </span>
              <span className="hidden absolute top-0 -translate-y-full left-0 group-hover:block bg-white shadow z-50 px-2 py-1">
                Anya Korsakova
              </span>
            </div>
            <div className="max-md:mt-2">preprint</div>
            <div>
              <a
                href="https://www.biorxiv.org/content/10.1101/2025.04.07.647656v1"
                target="_blank"
                className="!text-foreground underline underline-offset-2"
              >
                <span>bioRxiv</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      
      {/* Main Content */}
      <div className="prose max-w-3xl mx-auto">
        <p>
        Mutations in the human genome are diverse: single nucleotide substitutions (SNPs), 
        insertions, deletions, structural variants. ML models currently struggle with predicting 
        the effects of indels because of sequence misalignment problems. Our new paper &quot;Shift 
        augmentation improves DNA convolutional neural network indel effect predictions&quot; 
        solves this problem.
        <br />
        <br />
        We&apos;ve developed new data augmentation strategies that significantly 
        reduce technical variance in CNN predictions for insertions and deletions. Our 
        &quot;stitching&quot; approach improves indel eQTL classification accuracy 
        and extends to even larger structural variants and tandem repeat expansions!
        
        <br />
        <br />

        Plus, our new in silico deletion (ISD) technique provides an alternative 
        sequence interpretation technique alongside established in silico mutagenesis (ISM).
        These advances help unlock the full spectrum of effect prediction for 
        noncoding genetic variation — critical for understanding human development and disease.
        </p>

        <h2
          className="group/heading relative text-2xl font-normal mt-12 mb-4"
          id="problem"
        >
          <a
            className="text-link underline hover:decoration-2 gap-1 absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover/heading:opacity-100 w-6 h-6 flex items-center justify-center"
            href="#Indel effects are harder to predict"
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
          Indel effects are harder to predict
        </h2>

        <br></br>

        {/* Centered image */}
          <Image
            src="/images/max_pool.png"
            alt="Left: sequence shift effect on pooling boundaries for DNA sequence. Right: augmentation strategies."
            className="centered-image"
            width={800} // Replace with the actual width of your image
            height={600} // Replace with the actual height of your image
          />

        <br></br>
        <br></br>

        <p>
        The figure above (left) demonstrates how shifting a DNA sequence before a max pooling block affects the 
        boundaries after performing the max pooing operation. For a width 2 max pool, the 2 nt shift
        output is similar, but with all values shifted by one position. However, the 1 nt shift changes 
        some output values because the max operation is computed between different adjacent 
        pairs. This means that the output of the max pooling operation is sensitive to these minor shifts,
        which can lead to different predictions for the same sequence upon small shifts. 
        
        <br />
        <br />
        This is a problem for convolutional
        neural networks (CNNs) that use max pooling. In DNA variant effect predictors, we usually compare the reference allele
        with the alternative. If the alternative allele is a deletion or insertion, the sequence downstream of the 
        indel is inevitably shifted. This results in overestimation of the indel effect size because of a purely technical difference
        in predictions between the reference allele and the shifted part of the alternative allele.
        </p>

        <h2
          className="group/heading relative text-2xl font-normal mt-12 mb-4"
          id="problem"
        >
          <a
            className="text-link underline hover:decoration-2 gap-1 absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover/heading:opacity-100 w-6 h-6 flex items-center justify-center"
            href="#Augmentation strategies"
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
          Augmentation strategies
        </h2>

        <br></br>

        <p>
        The figure (right) illustrates a couple of augmentation strategies that address this issue. The first strategy 
        takes the average of both the left and right shifts to mitigate the effect of newly inserted or deleted pieces of sequence.
        The second strategy, called &quot;stitching&quot;, involves concatenating (or stitching) together left side predictions 
        from the left-matched prediction and right side predictions from the right-matched prediction. This approach
        showed the best results in the indel and SV eQTL benchmarks -- check out the paper for more details!
        </p>

        <h2
          className="group/heading relative text-2xl font-normal mt-12 mb-4"
          id="problem"
        >
          <a
            className="text-link underline hover:decoration-2 gap-1 absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover/heading:opacity-100 w-6 h-6 flex items-center justify-center"
            href="#In silico deletion (ISD)"
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
          In silico deletion (ISD) technique
        </h2>

        <br></br>

        {/* Centered image */}
        <div className="flex justify-center">
          <Image
            src="/images/ISD.png"
            alt="Left: sequence shift effect on pooling boundaries for DNA sequence. Right: augmentation strategies."
            className="centered-image"
            width={300} // Replace with the actual width of your image
            height={150} // Replace with the actual height of your image
          />
        </div>

        <br></br>
        <br></br>

        <p>
        In silico mutagenesis (ISM) is a common regulatory sequence interpretation technique
        to identify the influential functional DNA motifs and other sequence factors driving model predictions.
        ISM mutates every reference nucleotide to its three alternatives, computing a prediction for each (see figure above), 
        and scoring the reference nucleotide based on the reference prediction relative to the average alternative. 

        <br></br>
        <br></br>

        In silico deletion (ISD) of reference nucleotides could be an alternative to the typical
        ISM technique, where we compute the prediction for the reference and alternative with sequential deletion of
        one nucleotide at a time.

        <br></br>
        <br></br>

        We benchmarked ISD on the MPRA data (see the manuscript for details) and found that ISD is a good alternative to ISM,
        or it could be used in conjunction with ISM to determine motifs that are more sensitive to deletion than substitution.
        </p>

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