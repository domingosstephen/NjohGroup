import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/constants";

interface NpmPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: NpmPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Njoh Property Management",
    description:
      "Institutional property management for Cameroon and beyond. Njoh Group's first operating subsidiary, active since 2021.",
    locale: locale as Locale,
    path: "/sectors/real-estate/njoh-property-management",
  });
}

export default async function NjohPropertyManagementPage({ params }: NpmPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  const services = [
    {
      title: "Tenant Relations",
      detail:
        "Structured tenant lifecycle administration \u2014 from screening and onboarding to communications and renewals. Automated response coordination and standardised protocols maintain the consistency that institutional owners expect.",
    },
    {
      title: "Maintenance & Operations",
      detail:
        "Scheduled and responsive maintenance, vendor coordination, and repair administration. Local teams operate under centralised, data-informed oversight \u2014 the standard that preserves asset value over time.",
    },
    {
      title: "Financial Management",
      detail:
        "Rent collection, expense reconciliation, and transparent reporting. Every property owner receives institutional-grade financial statements and portfolio-level visibility \u2014 the baseline that serious capital requires.",
    },
    {
      title: "Portfolio Intelligence",
      detail:
        "Market analysis, occupancy benchmarking, and performance measurement. The intelligence layer that informs pricing, capital allocation, and long-term portfolio strategy.",
    },
    {
      title: "Compliance & Legal",
      detail:
        "Lease administration, regulatory compliance, and legal coordination. The procedural rigour that protects both asset value and owner interest across jurisdictions.",
    },
    {
      title: "Growth Advisory",
      detail:
        "Acquisition analysis, market entry assessment, and portfolio optimisation. The advisory function that institutional owners rely on when expanding across unfamiliar markets.",
    },
  ];

  return (
    <>
      <PageHero
        label="OPERATING SUBSIDIARY"
        title="Njoh Property Management."
        subtitle="The operating standard for property in Cameroon and beyond."
        meta="OPERATING \u00b7 CAMEROON \u00b7 SINCE 2021"
        height="60vh"
      />

      {/* About — Ivory */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <p>
              Njoh Property Management (NPM) is Njoh Group&apos;s first operating
              company and the foundation of our real estate arm. Established in 2021
              in Cameroon, NPM manages residential and commercial properties with a
              standard of professionalism that is rare in the region.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-8">
              In any mature property market, professional management is not a
              luxury \u2014 it is the minimum condition for preserving asset value.
              African property owners and tenants are entitled to the same standard
              available in London, Dubai, or New York. Systematised operations
              and automated workflows make it possible to deliver that standard
              at African cost structures.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-8">
              NPM is both a standalone business and an operational proving ground.
              Every system established, every workflow refined in Cameroon becomes
              the playbook for administering thousands of properties across the
              continent.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services — Obsidian */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <MonoLabel className="text-njoh-gold">SCOPE OF MANAGEMENT</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-ivory leading-snug">
              What institutional management includes.
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div className="border-t border-njoh-gold/30 pt-8">
                  <MonoLabel className="text-njoh-gold">0{i + 1}</MonoLabel>
                  <h3 className="mt-4 font-display text-xl text-ivory leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-ash leading-relaxed text-sm">
                    {service.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI layer — Ivory */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <GoldRule width="40px" className="mb-6" />
            <h2 className="font-display text-[var(--text-h2)] text-obsidian leading-snug">
              Systematised from the foundation.
            </h2>
            <p className="mt-8">
              Tenant communications, maintenance scheduling, financial reporting,
              and market analysis are administered through automated systems built
              into the core of operations \u2014 not appended as an afterthought,
              but embedded as infrastructure.
            </p>
            <p className="mt-6">
              This is how a lean team in Cameroon maintains the same service
              standard as firms administering thousands of units in mature markets.
              The operational leverage is structural \u2014 and it compounds with
              every property added to the portfolio.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-[var(--text-h2)] text-ivory leading-snug">
              Property owners in Cameroon.
            </h2>
            <p className="mt-6 text-ash text-[var(--text-body-lg)] leading-relaxed">
              Whether the holding is a single unit or a diversified portfolio,
              NPM administers property to the institutional standard \u2014 full
              transparency, systematic oversight, and the operational discipline
              that preserves long-term value.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" href={`${prefix}/contact`}>
                Management inquiries
              </Button>
              <Button variant="ghost" size="lg" href={`${prefix}/sectors/real-estate`}>
                Real estate sector
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
