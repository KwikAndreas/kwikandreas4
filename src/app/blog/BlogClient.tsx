"use client";

import { Badge } from "@/components/ui/badge";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

// Placeholder blog posts data (you can replace with actual data)
const blogPosts = [
  {
    id: "nextjs-14-features",
    title: "Exploring Next.js 14: New Features and Performance Improvements",
    excerpt:
      "A comprehensive guide to the latest features in Next.js 14 including App Router improvements, Server Components, and performance optimizations.",
    publishedAt: "2024-12-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["Next.js", "React", "Performance"],
    featured: true,
  },
  {
    id: "react-server-components",
    title: "Understanding React Server Components: A Complete Guide",
    excerpt:
      "Deep dive into React Server Components, how they work, benefits, and when to use them in your Next.js applications.",
    publishedAt: "2024-12-10",
    readTime: "12 min read",
    category: "React",
    tags: ["React", "Server Components", "Next.js"],
    featured: true,
  },
  {
    id: "typescript-tips",
    title: "Advanced TypeScript Tips for Better Code Quality",
    excerpt:
      "Learn advanced TypeScript patterns and techniques to write more robust and maintainable code.",
    publishedAt: "2024-12-05",
    readTime: "6 min read",
    category: "TypeScript",
    tags: ["TypeScript", "Code Quality", "Best Practices"],
    featured: false,
  },
];

export default function BlogClient() {
  return (
    <div className="relative min-h-screen">
      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            📝 Tech Blog
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Latest Articles & Tutorials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dive into the world of modern development with articles covering web
            development, game development, programming tutorials, and tech
            insights. Stay updated with the latest trends and best practices.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: index * 0.1 }}
              className="group bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <h2 className="text-2xl font-bold mt-3 mb-3 group-hover:text-primary transition-colors duration-600">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="w-2 h-2 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-600 font-medium">
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.4 }}
          className="text-center py-16 border rounded-xl bg-muted/30"
        >
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              More Articles Coming Soon!
            </h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m working on more in-depth tutorials and technical
              articles. Stay tuned for updates!
            </p>
            <Badge variant="outline">🚀 In Development</Badge>
          </div>
        </motion.div>
      </div>

      <BackgroundBeams />
    </div>
  );
}
