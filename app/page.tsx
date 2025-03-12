import React from "react";
import Link from "next/link";

const MinimalTemplate = () => {
  // Sample blog posts data - you can replace this with your actual posts
  const posts = [
    {
      title: "Attractors in neural network maps: chaos and beauty",
      date: "December 1, 2024",
      description:
        "A fun revamped project on attractors in NNs. Winner of the CoSScience Art Award during my PhD years.",
      link: "/blog/attractors",
    },
  ];

  // Project data - structured for visual consistency
  const projects = [
    {
      title: "Sparse autoencoders for mechanistic interpretability of the DNA sequence-based model Borzoi @ f(DNA) Calico",
      description: "Large ML frameworks, such as the DNA sequence-based model Borzoi, ingest large amounts of data for training. Training data contain multitudes of features, and as the model is successful at inference tasks, it has extracted these features from sequence. We aim to use sparse autoencoders to decompose activations from the first few layers of the pre-trained model into monosemantic concepts that map to known and unknown transcriptional regulatory motifs.",
      links: [
        { text: "github", url: "https://github.com/anyakors/sae_borzoi" }
      ]
    },
    {
      title: "Shift augmentation for improved indel scoring in DNA sequence-based ML models @ f(DNA) Calico",
      description: "Predicting genetic variant effects is critical for medical genetics. DNA sequence-based deep learning models attain SOTA performance, but generally focus on single-nucleotide polymorphisms, and technical challenges (such as misalignment of pooling blocks and output boundaries) create artificially inflated variant effect scores on another common type of mutations - insertions and deletions (indels). We suggested and demonstrated that boundary-aware stitching significantly improved scoring for indels, structural variants and tandem repeats.",
      links: [
        { text: "manuscript to be submitted", url: null }
      ]
    },
    {
      title: "ALPS (Assignment of Local Probabilities for SBS Signatures) @ Pitt Genomics, CSI",
      description: "ALPS is a probabilistic framework for assignment of single-base substitution (SBS) mutational signature enrichments to genomic and epigenomic features of interest. ALPS was developed to address the challenge of localizing mutational signatures in cancer genomes, where signature assignment does not take into account mutation coordinate information. However, signatures often colocalize with epigenomic features, and ALPS uses a simple probabilistic framework to assign SBS signatures back to genome regions.",
      links: [
        { text: "gitlab", url: "https://gitlab.com/PittGenomics/alps" }
      ]
    },
    {
      title: "Mutational signature assignment heterogeneity addressed by ensemble approaches @ Pitt Genomics, CSI",
      description: "Collaborated with the Pitt Genomics team to consult on the best algorithmic practices for building ensemble approaches to mutational signature assignment.",
      links: [
        { text: "website", url: "https://www.ensemblefit.pittlabgenomics.com/" },
        { text: "paper", url: "https://academic.oup.com/bib/article/24/6/bbad331/7280728" }
      ]
    },
    {
      title: "Prediction of G4 formation in live cells with epigenetic data: a deep learning approach @ Phan Biophysics, NTU",
      description: "G-quadruplexes (G4s) are secondary structures abundant in DNA that play regulatory roles in cells. Only a small fraction forms G4 structures form in cells from the putative sequences. I approached the prediction of G4 formation by adding channels of the normalized epigenetic and chromatin accessibility data on top of the one-hot-encoded DNA sequence input channels with a deep vanilla CNN.",
      links: [
        { text: "github", url: "https://github.com/anyakors/epiG4NN" },
        { text: "paper", url: "https://academic.oup.com/nargab/article/5/3/lqad071/7249922" }
      ]
    },
    {
      title: "RNA alternative splicing prediction with discrete compositional energy network @ Phan Biophysics, NTU",
      description: "A single gene can encode for different protein versions through alternative splicing. Alternative splicing is determined by the gene's primary sequence and other regulatory factors such as RNA-binding protein levels. With these as input, we formulated the prediction of RNA splicing as a regression task, and proposed a discrete compositional energy network (DCEN) which leverages the hierarchical relationships between splice sites, junctions and transcripts. We built a new training and benchmarking dataset (CAPD), which is my main contribution here.",
      links: [
        { text: "github", url: "https://github.com/anyakors/CAPD_CHIL2021" },
        { text: "paper", url: "https://dl.acm.org/doi/pdf/10.1145/3450439.3451857" }
      ]
    },
    {
      title: "RNA G-quadruplex detection using Oxford nanopore sequencing @ Phan Biophysics, NTU",
      description: "RNA G-quadruplex (rG4) structures are challenging to detect in long RNA transcripts. We used Oxford Nanopore sequencing to probe rG4 signatures in synthetic RNA constructs and native RNA transcripts. The nanopore current signature utility uses a z-score based method to detect G4 stalling events. The project did not reach enough maturity to publish it, but I learned a lot (and did quite a bit of wet lab experiments) along the way!",
      links: [
        { text: "github", url: "https://github.com/anyakors/porebump" },
        { text: "draft", url: "https://github.com/anyakors/porebump/blob/master/data/nanopore_rG4.pdf" }
      ]
    },
    {
      title: "Attractors in neural network maps",
      description: "This little project was done for the Nonlinear Dynamics course at NTU and features aesthetic attractors forming in an MLP-turned-dynamic-map.",
      links: [
        { text: "github", url: "https://github.com/anyakors/neural_attractors" }
      ]
    }
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
          <p className="mt-8 mb-12">
            code helix is a personal website of Anya Korsakova, currently a
            Computational Biology researcher at Calico Life Sciences (Alphabet).
            Calico aims to develop novel therapeutics for age-related diseases,
            and Anya is working on machine learning approaches to predict the
            effects of noncoding DNA variation on the transcriptomic and
            epigenomic state of cells, specifically focusing on indels,
            structural variants and tandem repeats. <br />
            <br /> Previously, Anya was a postdoctoral researcher at Cancer
            Science Institute of Singapore, extending methods to detect
            mutational signatures and their relationship with cancer phenotypes.{" "}
            <br />
            <br /> Anya earned her doctorate degree in biophysics from Nanyang
            Technological University as a SINGA scholar, and previously her
            B.Sc. and M.Sc. in theoretical nuclear physics from NRNU MEPhI in
            Moscow.
          </p>

          {/* Blog Posts/Updates Section with Timeline */}
          <h2 className="text-lg mb-6 mt-12">Blog</h2>

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

          {/* Projects section - Redesigned */}
          <h2 className="text-lg mb-6 mt-12">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-2 px-4 py-3
                         bg-white border border-[#2f2f2f] shadow-[3px_3px_0px_#2f2f2f] 
                         hover:border-[#008bf3] hover:shadow-[5px_5px_0px_#008bf3] 
                         transition-all hover:bg-white"
              >
                <h3 className="text-base font-bold">{project.title}</h3>
                <p className="text-xs text-gray-800">
                  {project.description}
                </p>
                <div className="flex gap-3 mt-1">
                  {project.links.map((link, linkIndex) => (
                    link.url ? (
                      <a 
                        key={linkIndex} 
                        href={link.url} 
                        className="text-blue-500 font-bold text-xs hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        [{link.text}]
                      </a>
                    ) : (
                      <span key={linkIndex} className="font-bold text-xs">
                        [{link.text}]
                      </span>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Media section */}
          <h2 className="text-lg mb-6 mt-12">Media</h2>

          {/* Spotify Podcast */}
          <div className="mb-8">
            <div className="w-full overflow-hidden border border-[#2f2f2f] shadow-[3px_3px_0px_#2f2f2f] bg-white">
              <iframe 
                className="w-full" 
                style={{height: "352px"}}
                src="https://open.spotify.com/embed/episode/0WtAP3POmuJQNppueKY268?utm_source=generator" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </div>
            <p className="text-xs mt-2 text-gray-600">
              Art of Academia podcast: discussing computational biology and physics, biology, AI/ML pivots
            </p>
          </div>

          <div className="mb-8">
            <div className="aspect-video w-full overflow-hidden border border-[#2f2f2f] shadow-[3px_3px_0px_#2f2f2f] bg-white">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Miz3X953Q-0"
                title="Lecture by Anya Korsakova"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-xs mt-2 text-gray-600">
              Invited lecture at the Traektoriya school (Armenia, 2019): on DNA Oxford Nanopore sequencing (in Russian, auto-generated English subtitles available)
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
      </div>
    </div>
  );
};

export default MinimalTemplate;