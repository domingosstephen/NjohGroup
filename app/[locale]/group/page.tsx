import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { OFFICES } from "@/lib/constants";
import type { Locale } from "@/lib/constants";

interface GroupPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: GroupPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "About the Group",
    description:
      "Njoh Group PLC is a pan-African holding company building institutions across real estate, outsourcing, agriculture, and logistics.",
    locale: locale as Locale,
    path: "/group",
  });
}

const VALUES = [
  {
    title: "Patience over pace",
    description:
      "We build for decades, not quarters. Institutions are not built fast — they are built well.",
  },
  {
    title: "Institutions over companies",
    description:
      "We are not building a portfolio of startups. We are building durable, cross-sector institutions that compound over time.",
  },
  {
    title: "Technology as infrastructure",
    description:
      "Computational tools — including machine learning and automation — are embedded in the Group's operations as standard working method, not as a separate initiative.",
  },
  {
    title: "Transparency as governance",
    description:
      "The Group publishes its thinking, its progress, and its challenges as a matter of institutional discipline. Trust is maintained through legibility.",
  },
  {
    title: "Pan-African by design",
    description:
      "We do not treat Africa as a single market or a single story. We build across the continent with local depth and continental ambition.",
  },
  {
    title: "Build, own, operate",
    description:
      "We do not write checks and walk away. We build companies, own them, and operate them — taking responsibility for outcomes.",
  },
] as const;

export default async function GroupPage({ params }: GroupPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <>
      <PageHero
        label="ABOUT THE GROUP"
        title="A new kind of pan-African institution."
        subtitle="Built to last. Built to compound. Built for the continent Africa is becoming."
        height="50vh"
      />

      {/* Our Story */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <MonoLabel className="text-obsidian/50">OUR STORY</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              Why Njoh Group exists.
            </h2>
            <p className="mt-6">
              Njoh Group PLC was founded in 2021 by Njih Njoh Keka with a simple
              thesis: Africa&apos;s population will double by 2050, its cities
              are growing faster than any on earth, and the institutions needed
              to serve that growth have not yet been built.
            </p>
            <p className="mt-6">
              The Group is structured as a holding company — not a fund, not an
              accelerator, not an NGO. We build, own, and operate companies
              across four sectors that form a system: real estate, outsourcing,
              agriculture, and logistics. Computational tools, including
              machine learning, are embedded across every operation as
              working infrastructure.
            </p>
            <p className="mt-6">
              We are a young company. We have approximately 20 people, one
              operating subsidiary, and four sectors in active build. That is the
              point. Institutions are built in the decisions of their earliest
              years.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Footprint */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <MonoLabel className="text-ash">OUR FOOTPRINT</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-ivory leading-snug">
              Three cities, one mission.
            </h2>
            <GoldRule width="40px" className="my-6" />
          </FadeIn>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {OFFICES.map((office) => (
              <FadeIn key={office.city}>
                <div className="border border-graphite/30 p-4 sm:p-6 lg:p-8">
                  <MonoLabel className="text-njoh-gold">
                    {office.label}
                  </MonoLabel>
                  <h3 className="mt-3 font-display text-xl text-ivory">
                    {office.city}, {office.country}
                  </h3>
                  <p className="mt-3 text-sm text-ash leading-relaxed">
                    {office.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <MonoLabel className="text-obsidian/50">GOVERNANCE</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              Governance framework.
            </h2>
            <p className="mt-6">
              Njoh Group PLC is constituted as a holding company with
              governance provisions designed for long-term institutional
              accountability. Each subsidiary operates under a defined
              mandate, with standardised reporting obligations to the
              Group&apos;s executive office.
            </p>
            <p className="mt-6">
              The governance structure is designed to accommodate the
              progressive introduction of an independent board of
              directors, sector advisory councils, and formal ESG
              disclosure. These provisions are structural commitments
              embedded in the Group&apos;s constitutional documents, not
              future aspirations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="bg-ivory py-[var(--section-padding-y)] border-t border-stone/10">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <MonoLabel className="text-obsidian/50">VALUES & PRINCIPLES</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-obsidian leading-snug max-w-2xl">
              What we believe.
            </h2>
            <GoldRule width="40px" className="my-6" />
          </FadeIn>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {VALUES.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.05}>
                <div>
                  <h3 className="font-display text-lg text-obsidian">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-obsidian/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTAs */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-[var(--text-display)] text-ivory leading-tight">
              Enquiries
            </h2>
            <p className="mt-6 text-[var(--text-body-lg)] text-ash leading-relaxed">
              Institutional partners, accredited investors, and members of
              the press may direct enquiries through the appropriate
              channel below.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
              <Button variant="primary" size="lg" href={`${prefix}/partners`}>
                Institutional partnerships
              </Button>
              <Button variant="secondary" size="lg" href={`${prefix}/vision`}>
                Read the thesis
              </Button>
              <Button variant="ghost" size="lg" href={`${prefix}/contact`}>
                General enquiries
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
