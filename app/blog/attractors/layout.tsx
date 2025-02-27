// File path: app/blog/[slug]/layout.tsx
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Post | code helix",
  description: "Latest research updates and insights in computational genetics and machine learning applications",
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-black font-mono text-sm antialiased">
      <div className="p-4 md:p-12 overflow-hidden">
        {children}
      </div>
    </div>
  );
}