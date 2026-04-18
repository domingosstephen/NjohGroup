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
      "Professional, AI-powered property management for Cameroon and beyond. Njoh Group's first operating subsidiary, live since 2021.",
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
        "End-to-end tenant lifecycle management \u2014 from screening and onboarding to communications and renewals. AI-assisted systems ensure fast response times and consistent service quality.",
    },
    {
      title: "Maintenance & Operations",
      detail:
        "Predictive maintenance scheduling, vendor coordination, and responsive repair management. We combine local teams with data-driven oversight to keep properties performing at their best.",
    },
    {
      title: "Financial Management",
      detail:
        "Rent collection, expense tracking, and transparent owner reporting. Every property owner receives institutional-grade financial statements and real-time portfolio visibility.",
    },
    {
      title: "Portfolio Intelligence",
      detail:
        "Market analysis, occupancy benchmarking, and performance analytics. We use data to make better decisions about pricing, capital improvements, and portfolio strategy.",
    },
    {
      title: "Compliance & Legal",
      detail:
        "Lease administration, regulatory compliance, and legal coordination. We handle the complexity so property owners can focus on returns.",
    },
    {
      title: "Growth Advisory",
      detail:
        "Acquisition analysis, market entry strategy, and portfolio optimisation. For owners looking to grow, we provide the intelligence and operational capacity to scale.",
    },
  ];

  return (
    <>
      <PageHero
        label="OPERATING SUBSIDIARY"
        title="Njoh Property Management."
        subtitle="Professional property management for Cameroon and beyond."
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
              We believe that professional property management is not a luxury
              reserved for mature markets. African property owners and tenants
              deserve the same quality of service available in London, Dubai, or New
              York \u2014 and AI-native operations make it possible to deliver that
              standard at African cost structures.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-8">
              NPM is both a standalone business and a proving ground. Every system
              we build, every AI workflow we deploy, and every process we refine in
              Cameroon becomes the playbook for managing thousands of properties
              across the continent.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services — Obsidian */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <MonoLabel className="text-njoh-gold">WHAT WE DO</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-ivory leading-snug">
              Full-spectrum property management.
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
              AI-native from day one.
            </h2>
            <p className="mt-8">
              NPM does not use AI as a feature. It uses AI as infrastructure.
              Tenant communications, maintenance scheduling, financial reporting,
              and market analysis are all powered by AI systems built into the core
              of our operations.
            </p>
            <p className="mt-6">
              This is how a small team in Cameroon delivers the same service quality
              as firms managing thousands of units in mature markets. The AI layer
              is our structural advantage \u2014 and it compounds with every
              property we add.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-[var(--text-h2)] text-ivory leading-snug">
              Own property in Cameroon?
            </h2>
            <p className="mt-6 text-ash text-[var(--text-body-lg)] leading-relaxed">
              Whether you own one unit or an entire portfolio, NPM delivers
              institutional-grade management with full transparency and AI-powered
              efficiency.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" href={`${prefix}/contact`}>
                Get in touch
              </Button>
              <Button variant="ghost" size="lg" href={`${prefix}/sectors/real-estate`}>
                Back to Real Estate
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
