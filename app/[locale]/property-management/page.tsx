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
    title: "Rental Property Management in Cameroon — Njoh Property Management",
    description:
      "Register your rental property with Njoh Property Management. We collect rent on time, enforce tenant compliance, coordinate maintenance, and deliver monthly financial reporting — for a fixed commission. Yaoundé, Cameroon.",
    locale: locale as Locale,
    path: "/property-management",
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
