import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { NpmHero } from "./NpmHero";
import { NpmProblem } from "./NpmProblem";
import { NpmServices } from "./NpmServices";
import { NpmProcess } from "./NpmProcess";
import { NpmDifference } from "./NpmDifference";
import { NpmStats } from "./NpmStats";
import { NpmTestimonial } from "./NpmTestimonial";
import { NpmCta } from "./NpmCta";
import { NpmFooter } from "./NpmFooter";
import { HideMainLayout } from "./HideMainLayout";
import type { Locale } from "@/lib/constants";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Njoh Property Management — Professional Property Management in Cameroon",
    description:
      "Institutional-grade property management for Cameroon. AI-powered tenant relations, predictive maintenance, transparent reporting. For landlords, developers, and portfolio owners.",
    locale: locale as Locale,
    path: "/npm",
  });
}

export default async function NpmLandingPage({ params }: PageProps) {
  const { locale } = await params;
  await getDictionary(locale as Locale);

  return (
    <>
      <HideMainLayout />
      <div className="bg-obsidian">
        <NpmHero />
        <NpmProblem />
        <NpmServices />
        <NpmProcess />
        <NpmStats />
        <NpmDifference />
        <NpmTestimonial />
        <NpmCta />
        <NpmFooter />
      </div>
    </>
  );
}
