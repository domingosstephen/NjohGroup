import { getDictionary } from "@/lib/i18n";
import { generatePageMetadata, generateOrganizationSchema } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { ThesisQuote } from "@/components/sections/ThesisQuote";
import { SectorsGrid } from "@/components/sections/SectorsGrid";
import { FounderMoment } from "@/components/sections/FounderMoment";
import { FootprintMap } from "@/components/sections/FootprintMap";
import { InsightsTeaser } from "@/components/sections/InsightsTeaser";
import { Engage } from "@/components/sections/Engage";
import type { Locale } from "@/lib/constants";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Njoh Group PLC",
    description:
      "A pan-African holding company investing in real estate, outsourcing, agriculture, and logistics, with AI woven through every operation.",
    locale: locale as Locale,
    path: "/",
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />
      <Hero dict={dict} prefix={prefix} />
      <ThesisQuote dict={dict} prefix={prefix} />
      <SectorsGrid dict={dict} prefix={prefix} />
      <FounderMoment dict={dict} prefix={prefix} />
      <FootprintMap dict={dict} />
      <InsightsTeaser dict={dict} prefix={prefix} />
      <Engage dict={dict} prefix={prefix} />
    </>
  );
}
