import type { MetadataRoute } from "next";
import { getProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://akm-real-estate.vercel.app";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = getProjects().map(
    (project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: project.galleryImages.slice(0, 3).map((src) => src),
    })
  );

  return [...staticRoutes, ...projectRoutes];
}
