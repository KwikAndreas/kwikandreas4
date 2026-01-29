// app/sitemap.ts - Enhanced for SEO
import { MetadataRoute } from "next";
import { projects } from "@/lib/projects-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kwikandreas.vercel.app";
  const currentDate = new Date();

  // Static pages with enhanced priority
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Dynamic project pages with error handling
  const projectPages = Array.isArray(projects)
    ? projects.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
    : [];

  return [...staticPages, ...projectPages];
}
