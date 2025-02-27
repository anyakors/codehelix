// File path: app/blog/[slug]/page.tsx
import React from "react";
import BlogPost from "./BlogPost";

export default function Page() {
  // For the provided example, we'll just render the BlogPost component
  // In a real app, you would fetch the content based on the slug
  return <BlogPost />;
}