import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/constants";

interface LogisticsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LogisticsPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Logistics",
    description:
      "The network that makes African industry competitive. Njoh Group is building the warehousing, freight, and cross-border logistics infrastructure the continent needs.",
    locale: locale as Locale,
    path: "/sectors/logistics",
  });
}

export default async function LogisticsPage({ params }: LogisticsPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  const verticals = [
    {
      number: "01",
      title: "Warehousing",
      tagline: "Modern storage infrastructure for Africa's growing trade volumes.",
      description:
        "Africa\u2019s warehousing stock is a fraction of what its trade volumes demand. Modern, climate-controlled, well-located storage facilities are scarce \u2014 and that scarcity drives up costs across every supply chain. Njoh Group invests in warehousing infrastructure at strategic nodes: near ports, near processing zones, and along the trade corridors that connect African economies.",
    },
    {
      number: "02",
      title: "Cross-Border Logistics",
      tagline: "Reducing the friction of moving goods between African nations.",
      description:
        "The African Continental Free Trade Area (AfCFTA) has opened the legal framework for intra-African trade. But the physical and procedural infrastructure lags far behind. Border delays, documentation complexity, and inconsistent regulatory regimes add days and dollars to every shipment. Njoh Group builds the cross-border logistics systems that reduce that friction \u2014 combining technology, local knowledge, and operational discipline.",
    },
    {
      number: "03",
      title: "Freight & Distribution",
      tagline: "Reliable, efficient movement of goods across the continent.",
      description:
        "Last-mile and mid-mile freight in Africa is still dominated by informal operators with limited technology, inconsistent service, and no data infrastructure. Njoh Group is building structured freight and distribution networks that bring reliability, visibility, and cost efficiency to African supply chains. AI-powered routing, fleet management, and demand forecasting are built into the operation from day one.",
    },
  ];

  return (
    <>
      <PageHero
        label="SECTOR 04 / FOUR"
        title="Logistics."
        subtitle="The network that makes African industry competitive."
        meta="IN DEVELOPMENT \u00b7 FIRST OPERATION 2026\u20132027"
        height="70vh"
      />

      {/* Thesis — Ivory */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <p>
              Moving goods across Africa is still two to three times more expensive
              than moving them across comparable distances in Asia, Europe, or the
              Americas. Intra-African trade accounts for roughly 15% of the
              continent&apos;s total trade \u2014 the lowest share of any major
              region in the world.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-8">
              The cost of logistics is not just a line item. It is a structural
              barrier to industrialisation. When it costs more to ship goods from
              Lagos to Douala than from Shanghai to Lagos, African manufacturers
              cannot compete \u2014 even when their products are superior.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-8 font-medium">
              Njoh Group is building the warehousing, freight, and cross-border
              networks that make African industry competitive. We start with
              corridors where demand already exists and infrastructure lags furthest
              behind.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Three verticals — Obsidian */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <MonoLabel className="text-njoh-gold">THREE VERTICALS</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-ivory leading-snug">
              Where we are building.
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {verticals.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="border-t border-njoh-gold/30 pt-8">
                  <MonoLabel className="text-njoh-gold">{v.number}</MonoLabel>
                  <h3 className="mt-4 font-display text-xl text-ivory leading-snug">
                    {v.title}
                  </h3>
                  <p className="mt-2 font-display italic text-ash text-sm leading-relaxed">
                    {v.tagline}
                  </p>
                  <GoldRule width="30px" className="my-6" />
                  <p className="text-ash leading-relaxed text-sm">{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI angle — Ivory */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <GoldRule width="40px" className="mb-6" />
            <h2 className="font-display text-[var(--text-h2)] text-obsidian leading-snug">
              AI as logistics infrastructure.
            </h2>
            <p className="mt-8">
              In logistics, milliseconds of better routing and percentages of better
              load optimisation compound into billions of dollars of value at scale.
              AI governs routing, demand forecasting, cross-border documentation,
              and fleet management across every Njoh logistics operation.
            </p>
            <p className="mt-6">
              We are not adding AI to traditional logistics. We are building
              logistics companies that could not exist without it \u2014 systems
              that learn from every shipment, every delay, and every border crossing
              to become structurally better over time.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Status — Obsidian */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <MonoLabel className="text-njoh-gold">STATUS</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-ivory leading-snug">
              Foundational phase.
            </h2>
            <p className="mt-8 text-ash text-[var(--text-body-lg)] leading-relaxed">
              Our logistics arm is in active development. We are mapping priority
              trade corridors, identifying warehousing sites, and building the
              technology stack that will power our cross-border and freight
              operations.
            </p>
            <p className="mt-6 text-ash leading-relaxed">
              First operation targeted for 2026\u20132027. Logistics is the
              connective tissue of the Njoh system \u2014 and we are building it to
              last.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" href={`${prefix}/partners`}>
                Partner with us
              </Button>
              <Button variant="ghost" size="lg" href={`${prefix}/sectors`}>
                Back to all sectors
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
