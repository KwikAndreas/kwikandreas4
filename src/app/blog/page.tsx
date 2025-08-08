import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog - Tech Articles & Tutorials",
  description:
    "Read the latest articles about web development, game development, programming tutorials, and tech insights by Andreas. Stay updated with modern development practices.",
  keywords: [
    "tech blog",
    "web development blog",
    "programming tutorials",
    "react tutorials",
    "next.js tutorials",
    "game development blog",
    "javascript tutorials",
    "typescript tutorials",
    "coding tips",
    "developer blog",
  ],
  openGraph: {
    title: "Blog - Tech Articles & Tutorials | KwikAndreas",
    description:
      "Read the latest articles about web development, game development, and programming tutorials.",
    url: "https://kwikandreas.vercel.app/blog",
    images: [
      {
        url: "/images/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "KwikAndreas Blog - Tech Articles & Tutorials",
      },
    ],
  },
  alternates: {
    canonical: "https://kwikandreas.vercel.app/blog",
  },
};

export default function Blog() {
  // SEO structured data for blog
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "KwikAndreas Tech Blog",
    description:
      "Tech articles, tutorials, and insights about web development, game development, and programming by Andreas.",
    url: "https://kwikandreas.vercel.app/blog",
    author: {
      "@type": "Person",
      name: "Andreas",
      url: "https://kwikandreas.vercel.app",
    },
    publisher: {
      "@type": "Person",
      name: "Andreas",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://kwikandreas.vercel.app/blog",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BlogClient />
    </>
  );
}
