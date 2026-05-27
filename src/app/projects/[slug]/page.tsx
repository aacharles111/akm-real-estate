import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, getProjects } from "@/data/projects";
import DetailPageClient from "./DetailPageClient";

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | AKC Realestate`,
    description: project.description,
    openGraph: {
      title: `${project.title} | AKC Realestate`,
      description: project.description,
      images: [{ url: project.mainImage, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | AKC Realestate`,
      description: project.description,
      images: [project.mainImage],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <DetailPageClient project={project} />;
}
