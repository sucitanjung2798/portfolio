import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import {
  CaseStudyHero,
  CaseStudySection,
  ResponsibilitiesList,
  ChallengesList,
  ImpactList,
} from "@/components/case-study";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <CaseStudyHero project={project} />

      <CaseStudySection title="Overview">
        <p>{project.overview}</p>
      </CaseStudySection>

      <CaseStudySection title="Business Problem">
        <p>{project.businessProblem}</p>
      </CaseStudySection>

      {/* Responsibilities */}
      <CaseStudySection title="My Responsibilities">
        <ResponsibilitiesList items={project.responsibilities} />
      </CaseStudySection>

      {/* Challenges */}
      <CaseStudySection title="Technical Challenges">
        <ChallengesList challenges={project.challenges} />
      </CaseStudySection>

      {/* Business Impact */}
      <CaseStudySection title="Business Impact">
        <ImpactList items={project.businessImpact} />
      </CaseStudySection>
    </main>
  );
}
