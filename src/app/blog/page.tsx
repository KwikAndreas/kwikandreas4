import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { FloatingNav } from "@/components/Navbar";

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

// Placeholder blog posts data (you can replace with actual data)
const blogPosts = [
  {
    id: "nextjs-14-features",
    title: "Exploring Next.js 14: New Features and Performance Improvements",
    excerpt:
      "A comprehensive guide to the latest features in Next.js 14 including App Router improvements, Server Components, and performance optimizations.",
    publishedAt: "2024-12-15",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development"],
    status: "coming-soon",
  },
  {
    id: "unity-optimization-tips",
    title: "Unity Performance Optimization: Best Practices for Mobile Games",
    excerpt:
      "Learn essential techniques to optimize your Unity games for mobile platforms, including memory management and rendering optimizations.",
    publishedAt: "2024-12-10",
    readTime: "12 min read",
    tags: ["Unity", "Game Development", "Mobile"],
    status: "coming-soon",
  },
  {
    id: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns for Better Code Architecture",
    excerpt:
      "Discover advanced TypeScript patterns and techniques to build more maintainable and type-safe applications.",
    publishedAt: "2024-12-05",
    readTime: "10 min read",
    tags: ["TypeScript", "Architecture", "Best Practices"],
    status: "coming-soon",
  },
];

export default function Blog() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "KwikAndreas Tech Blog",
    description:
      "Tech blog featuring articles about web development, game development, and programming tutorials",
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

      <FloatingNav />

      <div className="relative min-h-screen">
        <div className="container mx-auto px-4 py-24 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              📝 Tech Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Latest Articles & Tutorials
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Insights about web development, game development, and modern
              programming practices. Stay updated with the latest trends and
              best practices in technology.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    Coming Soon
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="w-2 h-2 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <div className="pt-2">
                    <div className="inline-flex items-center text-sm text-muted-foreground cursor-not-allowed">
                      <span className="mr-2">Read Article</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                More Articles Coming Soon!
              </h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m currently working on exciting articles about modern web
                development, game development techniques, and programming best
                practices. Stay tuned for quality content!
              </p>
              <Badge variant="outline">🚀 In Development</Badge>
            </div>
          </motion.div>
        </div>

        {/* Background Effect */}
        <BackgroundBeams />
      </div>
    </>
  );
}
