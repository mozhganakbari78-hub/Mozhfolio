import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import Editorial from "@/components/casestudy/Editorial";
import PasswordGate from "@/components/casestudy/PasswordGate";
import SupportFrictionCase from "@/components/casestudy/SupportFrictionCase";
import BatchTransferCase from "@/components/casestudy/BatchTransferCase";
import DesignSystemCase from "@/components/casestudy/DesignSystemCase";
import "../case-study.css";

const cases: Record<string, React.ComponentType> = {
  "reducing-support-friction": SupportFrictionCase,
  "batch-transfer": BatchTransferCase,
  "design-system": DesignSystemCase,
};

const protectedSlugs: Record<string, string> = {
  // Password temporarily removed — case study is open to everyone.
};

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} · Mozhgan Akbari`,
    description: cs.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const Case = cases[slug];
  if (!Case) notFound();

  const password = protectedSlugs[slug];
  const content = (
    <Editorial>
      <Case />
    </Editorial>
  );

  if (password) {
    return <PasswordGate password={password}>{content}</PasswordGate>;
  }
  return content;
}
