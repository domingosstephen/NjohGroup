import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { SECTORS } from "@/lib/constants";
import type { Locale } from "@/lib/constants";

interface SectorsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: SectorsPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Our Sectors",
    description:
      "Four sectors. One system. Real estate, outsourcing, agriculture, and logistics — designed to reinforce each other across the African continent.",
    locale: locale as Locale,
    path: "/sectors",
  });
}

export default async function SectorsPage({ params }: SectorsPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  const sectorDetails = [
    {
      ...SECTORS[0],
      paragraphs: [
        "Africa\u2019s urban population is growing faster than any region on earth. By 2050, the continent\u2019s cities will absorb roughly 900 million new residents. The demand for quality housing, commercial space, and mixed-use developments is not speculative \u2014 it is demographic certainty.",
        "Njoh Group\u2019s real estate arm develops, manages, and invests in the buildings that this urbanisation demands. We began in Cameroon with Njoh Property Management and are building toward a pan-African portfolio anchored in fundamentals, not hype.",
        "Our approach is institutional-grade from day one: professional management, transparent reporting, AI-powered operations, and a long-term hold philosophy.",
      ],
      image: "/images/sectors/real-estate.jpg",
    },
    {
      ...SECTORS[1],
      paragraphs: [
        "African professionals already serve as the backbone of global business services \u2014 from customer support to software engineering. But the value chain is designed to extract talent from the continent, not build it.",
        "Njoh Group is building BPO and tech-outsourcing companies that keep more value in Africa. Our firms combine world-class African talent with AI-native tooling to compete at the highest tier of the global market.",
        "The goal is not cheap labour arbitrage. It is premium service delivery at structurally competitive cost \u2014 because the talent is genuinely excellent and the AI layer multiplies output.",
      ],
      image: "/images/sectors/outsourcing.jpg",
    },
    {
      ...SECTORS[2],
      paragraphs: [
        "Africa loses up to 40% of its agricultural output between farm and plate. The gap is not in production \u2014 it is in processing, storage, and market access. This is a logistics and infrastructure problem disguised as a farming problem.",
        "Njoh Group invests in agri-processing and agri-tech that close the post-harvest gap. We turn raw agricultural output into shelf-stable, exportable, industrially valuable products.",
        "Our thesis is simple: the continent that will feed two billion people by mid-century cannot afford to lose nearly half its harvest to inefficiency. The companies that solve this problem will define African agriculture for a generation.",
      ],
      image: "/images/sectors/agriculture.jpg",
    },
    {
      ...SECTORS[3],
      paragraphs: [
        "Moving goods across Africa costs two to three times more than comparable distances elsewhere. Intra-African trade accounts for only 15% of the continent\u2019s total trade, in part because moving products between neighbouring countries is harder than shipping them to Europe.",
        "Njoh Group is building the warehousing, freight, and cross-border logistics networks that make African industry competitive. We start with corridors where demand already exists and infrastructure lags furthest behind.",
        "As the African Continental Free Trade Area opens new trade routes, the constraint shifts from policy to infrastructure. We are investing in the infrastructure.",
      ],
      image: "/images/sectors/logistics.jpg",
    },
  ];

  return (
    <>
      <PageHero
        label="OUR SECTORS"
        title={"Four sectors.\nOne system."}
        height="60vh"
      />

      {/* System diagram — Obsidian */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <MonoLabel className="text-njoh-gold">THE NJOH SYSTEM</MonoLabel>
              <h2 className="mt-4 font-display text-[var(--text-h2)] text-ivory leading-snug">
                How they reinforce each other.
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex justify-center">
              <svg
                viewBox="0 0 600 600"
                className="w-full max-w-[500px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Connection lines */}
                <line x1="300" y1="120" x2="500" y2="300" className="stroke-njoh-gold/30" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="500" y1="300" x2="300" y2="480" className="stroke-njoh-gold/30" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="300" y1="480" x2="100" y2="300" className="stroke-njoh-gold/30" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="100" y1="300" x2="300" y2="120" className="stroke-njoh-gold/30" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
                </line>
                {/* Cross lines */}
                <line x1="300" y1="120" x2="300" y2="480" className="stroke-njoh-gold/20" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="3s" repeatCount="indefinite" />
                </line>
                <line x1="100" y1="300" x2="500" y2="300" className="stroke-njoh-gold/20" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="3s" repeatCount="indefinite" />
                </line>

                {/* Sector circles */}
                <circle cx="300" cy="120" r="50" className="fill-obsidian stroke-njoh-gold" strokeWidth="1.5" />
                <text x="300" y="115" textAnchor="middle" className="fill-ivory text-xs font-body" fontSize="12">Real</text>
                <text x="300" y="132" textAnchor="middle" className="fill-ivory text-xs font-body" fontSize="12">Estate</text>

                <circle cx="500" cy="300" r="50" className="fill-obsidian stroke-njoh-gold" strokeWidth="1.5" />
                <text x="500" y="297" textAnchor="middle" className="fill-ivory text-xs font-body" fontSize="12">Out-</text>
                <text x="500" y="314" textAnchor="middle" className="fill-ivory text-xs font-body" fontSize="12">sourcing</text>

                <circle cx="300" cy="480" r="50" className="fill-obsidian stroke-njoh-gold" strokeWidth="1.5" />
                <text x="300" y="477" textAnchor="middle" className="fill-ivory text-xs font-body" fontSize="12">Agri-</text>
                <text x="300" y="494" textAnchor="middle" className="fill-ivory text-xs font-body" fontSize="12">culture</text>

                <circle cx="100" cy="300" r="50" className="fill-obsidian stroke-njoh-gold" strokeWidth="1.5" />
                <text x="100" y="304" textAnchor="middle" className="fill-ivory text-xs font-body" fontSize="12">Logistics</text>
              </svg>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-12 text-center text-ash text-[var(--text-body-lg)] max-w-2xl mx-auto leading-relaxed">
              Real estate needs logistics. Logistics needs outsourcing. Agriculture
              needs real estate and logistics. Patient cross-sector capital is
              structurally different from sector-specific private equity. We are
              building the system, not just the parts.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sector bands — alternating ivory/obsidian */}
      {sectorDetails.map((sector, i) => {
        const isEven = i % 2 === 0;
        const bg = isEven ? "bg-ivory" : "bg-obsidian";
        const textColor = isEven ? "text-obsidian" : "text-ivory";
        const bodyColor = isEven ? "text-obsidian/70" : "text-ash";
        const flexDir = isEven ? "lg:flex-row" : "lg:flex-row-reverse";

        return (
          <section key={sector.slug} className={`${bg} py-[var(--section-padding-y)]`}>
            <div className={`mx-auto max-w-[1440px] px-6 lg:px-12 flex flex-col ${flexDir} gap-12 lg:gap-20 items-start`}>
              {/* Image side */}
              <FadeIn direction={isEven ? "left" : "right"} className="w-full lg:w-1/2">
                <div className="aspect-[4/3] bg-graphite/20 rounded-sm overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-graphite/30 to-graphite/10 flex items-center justify-center">
                    <MonoLabel className="text-ash/40">{sector.name.toUpperCase()} — IMAGE</MonoLabel>
                  </div>
                </div>
              </FadeIn>

              {/* Text side */}
              <div className="w-full lg:w-1/2">
                <FadeIn>
                  <MonoLabel className="text-njoh-gold">
                    SECTOR {sector.number} / FOUR
                  </MonoLabel>
                  <h2 className={`mt-4 font-display text-[var(--text-h2)] ${textColor} leading-snug`}>
                    {sector.name}.
                  </h2>
                  <p className={`mt-3 font-display italic text-lg ${bodyColor} leading-relaxed`}>
                    {sector.tagline}
                  </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <GoldRule width="40px" className="my-8" />
                  <div className="space-y-6">
                    {sector.paragraphs.map((p, j) => (
                      <p key={j} className={`${bodyColor} leading-relaxed`}>
                        {p}
                      </p>
                    ))}
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="mt-8">
                    <MonoLabel className={isEven ? "text-obsidian/50" : "text-ash/60"}>
                      {sector.status}
                    </MonoLabel>
                  </div>
                  <a
                    href={`${prefix}/sectors/${sector.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm text-njoh-gold hover:text-gold-light transition-colors group"
                  >
                    Enter the sector{" "}
                    <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </FadeIn>
              </div>
            </div>
          </section>
        );
      })}

      {/* On Timing — Obsidian */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <FadeIn>
            <GoldRule width="40px" className="mx-auto mb-6" />
            <h2 className="font-display text-[var(--text-h2)] text-ivory leading-snug">
              On timing.
            </h2>
            <p className="mt-8 text-ash text-[var(--text-body-lg)] leading-relaxed">
              We are not in a hurry. Real estate is operating. Outsourcing,
              agriculture, and logistics are in active development. Each sector
              launches when the team is ready, the thesis is tested, and the
              fundamentals justify the capital.
            </p>
            <p className="mt-6 text-ash text-[var(--text-body-lg)] leading-relaxed">
              Building institutions is a multi-decade project. We are designed to
              compound, not to sprint.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Emerging focus — Ivory */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 text-center">
          <FadeIn>
            <MonoLabel className="text-njoh-gold">LOOKING AHEAD</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              Emerging focus areas.
            </h2>
            <p className="mt-6 text-obsidian/70 text-[var(--text-body-lg)] leading-relaxed max-w-2xl mx-auto">
              Beyond our four core sectors, we are tracking opportunities in media,
              technology, and healthcare \u2014 areas where Africa&apos;s structural
              gaps create long-term opportunity for patient, AI-native operators.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12">
              <Button variant="secondary" size="lg" href={`${prefix}/sectors/emerging`}>
                Explore emerging sectors
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
