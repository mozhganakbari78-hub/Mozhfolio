import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/data/projects";
import CaseStudy from "@/components/CaseStudy";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: "Case Study — Mozhgan Akbari" };
  return {
    title: `${project.title} — Mozhgan Akbari`,
    description: project.description,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.id === id);
  const next = projects[(idx + 1) % projects.length];

  return <CaseStudy project={project} next={next} />;
}
