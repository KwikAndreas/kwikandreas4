// app/sitemap.ts
import { MetadataRoute } from "next";
import { projects } from "@/lib/projects-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kwikandreas.vercel.app";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Dynamic project pages with error handling
  const projectPages = Array.isArray(projects)
    ? projects.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    : [];

  return [...staticPages, ...projectPages];
}
