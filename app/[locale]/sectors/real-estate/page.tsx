import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/constants";

interface RealEstatePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: RealEstatePageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Real Estate",
    description:
      "The buildings Africa's urbanisation demands. Njoh Group develops, manages, and invests in real estate across the African continent, starting with Cameroon.",
    locale: locale as Locale,
    path: "/sectors/real-estate",
  });
}

export default async function RealEstatePage({ params }: RealEstatePageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  const disciplines = [
    {
      title: "Development",
      description:
        "Ground-up residential and mixed-use projects in high-demand urban corridors. We build for the long term \u2014 quality construction, modern design, and communities that hold value across decades.",
    },
    {
      title: "Management",
      description:
        "Professional, AI-powered property management that raises the standard across the portfolio. Njoh Property Management is our first operating subsidiary, live in Cameroon since 2021.",
    },
    {
      title: "Investment",
      description:
        "Strategic acquisitions and joint ventures in African real estate markets where institutional-grade operators are still rare. We seek assets where active management unlocks outsized returns.",
    },
  ];

  const npmServices = [
    { title: "Tenant Relations", description: "AI-assisted communications, screening, and lifecycle management." },
    { title: "Maintenance", description: "Predictive and responsive maintenance powered by data and local teams." },
    { title: "Financial Reporting", description: "Transparent, institutional-grade reporting for every property owner." },
    { title: "Portfolio Intelligence", description: "Market data, occupancy analytics, and performance benchmarking." },
  ];

  return (
    <>
      <PageHero
        label="SECTOR 01 / FOUR"
        title="Real Estate."
        subtitle="The buildings Africa's urbanisation demands."
        meta="OPERATING \u00b7 CAMEROON \u00b7 SINCE 2021"
        height="70vh"
      />

      {/* Thesis — Ivory */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <p>
              Africa&apos;s urban population is growing faster than any region on
              earth. By 2050, the continent&apos;s cities will absorb roughly 900
              million new residents \u2014 more than the current population of Europe
              and North America combined. Every one of those people will need
              somewhere to live, somewhere to work, and somewhere to build a life.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-8">
              The supply of quality housing and commercial space has not kept pace.
              Across Sub-Saharan Africa, the housing deficit is measured in the tens
              of millions of units. Developers who can build at scale, manage
              professionally, and hold for the long term are not just needed \u2014
              they are structurally scarce.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-8 font-medium">
              Njoh Group&apos;s real estate arm exists to fill that gap. We develop,
              manage, and invest in the buildings that Africa&apos;s urbanisation
              demands \u2014 starting with Cameroon, and extending across the
              continent as our capacity and capital grow.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Three disciplines — Obsidian */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <MonoLabel className="text-njoh-gold">THREE DISCIPLINES</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-ivory leading-snug">
              How we operate across the value chain.
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {disciplines.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.1}>
                <div className="border-t border-njoh-gold/30 pt-8">
                  <MonoLabel className="text-njoh-gold">0{i + 1}</MonoLabel>
                  <h3 className="mt-4 font-display text-xl text-ivory leading-snug">
                    {d.title}
                  </h3>
                  <p className="mt-4 text-ash leading-relaxed">{d.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Njoh Property Management — Ivory */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              {/* Brand lockup */}
              <div className="lg:w-1/3">
                <MonoLabel className="text-njoh-gold">OPERATING SUBSIDIARY</MonoLabel>
                <h2 className="mt-4 font-display text-[var(--text-h2)] text-obsidian leading-snug">
                  Njoh Property Management.
                </h2>
                <p className="mt-4 font-display italic text-lg text-stone leading-relaxed">
                  Professional property management for Cameroon and beyond.
                </p>
                <GoldRule width="40px" className="mt-6" />
                <p className="mt-6 text-stone leading-relaxed">
                  NPM is Njoh Group&apos;s first operating company \u2014 live since
                  2021, managing residential and commercial properties in Cameroon.
                  It is the foundation of everything we are building in real estate.
                </p>
                <div className="mt-8">
                  <Button variant="secondary" size="md" href={`${prefix}/sectors/real-estate/njoh-property-management`}>
                    Learn more about NPM
                  </Button>
                </div>
              </div>

              {/* Services tiles */}
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {npmServices.map((service, i) => (
                  <FadeIn key={service.title} delay={i * 0.1}>
                    <div className="border border-graphite/15 p-8 rounded-sm">
                      <MonoLabel className="text-njoh-gold">0{i + 1}</MonoLabel>
                      <h3 className="mt-3 font-display text-lg text-obsidian leading-snug">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-stone text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing — Obsidian */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-[var(--text-h2)] text-ivory leading-snug">
              Real estate is where it begins.
            </h2>
            <p className="mt-8 text-ash text-[var(--text-body-lg)] leading-relaxed">
              The buildings we develop and manage today are the foundation of a
              pan-African portfolio. Every property is a proof point \u2014 that
              institutional-grade operations can work on this continent, at this
              scale, from day one.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" href={`${prefix}/sectors/logistics`}>
                Explore Logistics
              </Button>
              <Button variant="ghost" size="lg" href={`${prefix}/sectors`}>
                Back to all sectors
              </Button>
              <Button variant="primary" size="lg" href={`${prefix}/partners`}>
                Partner with us
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
