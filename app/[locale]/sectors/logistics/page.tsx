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
      tagline: "The storage infrastructure that Africa\u2019s trade volumes demand.",
      description:
        "Africa\u2019s warehousing stock is a fraction of what its trade volumes require. Modern, climate-controlled, well-located storage facilities are scarce \u2014 and that scarcity drives up costs across every supply chain. The investment position is in warehousing at strategic nodes: near ports, near processing zones, and along the trade corridors that connect African economies.",
    },
    {
      number: "02",
      title: "Cross-Border Logistics",
      tagline: "The procedural and physical infrastructure that intra-African trade demands.",
      description:
        "The African Continental Free Trade Area (AfCFTA) has opened the legal framework for intra-African trade. But the physical and procedural infrastructure lags far behind. Border delays, documentation complexity, and inconsistent regulatory regimes add days and dollars to every shipment. Cross-border logistics systems that reduce that friction \u2014 combining technology, local knowledge, and operational discipline \u2014 are what the market now requires.",
    },
    {
      number: "03",
      title: "Freight & Distribution",
      tagline: "The reliability and visibility that modern supply chains require.",
      description:
        "Last-mile and mid-mile freight in Africa is still dominated by informal operators with limited technology, inconsistent service, and no data infrastructure. Structured freight and distribution networks \u2014 with systematic routing, fleet oversight, and demand forecasting built into the operation \u2014 are the standard that competitive African supply chains now demand.",
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
              Moving goods across Africa costs two to three times what it costs
              across comparable distances in Asia, Europe, or the Americas. Two
              to three times. Intra-African trade accounts for roughly 15% of the
              continent&apos;s total trade \u2014 the lowest share of any major
              region in the world. That figure alone explains why African
              manufacturers struggle to compete, even when their products are
              superior.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-8">
              The cost of logistics is not a line item. It is a structural
              barrier to industrialisation. When it costs more to ship goods from
              Lagos to Douala than from Shanghai to Lagos, no tariff regime or
              trade agreement can compensate.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-8 font-medium">
              The warehousing, freight, and cross-border networks that make
              African industry competitive are not optional infrastructure \u2014
              they are the precondition. The focus begins with corridors where
              demand already exists and infrastructure lags furthest behind.
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
              What competitive logistics requires.
            </h2>
          </FadeIn>

          <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
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
              The analytical layer.
            </h2>
            <p className="mt-8">
              In logistics, marginal improvements in routing and load optimisation
              compound into billions of dollars of value at continental scale.
              Automated routing, demand forecasting, cross-border documentation
              processing, and fleet oversight govern every logistics operation
              within the Njoh system.
            </p>
            <p className="mt-6">
              These are not supplementary tools added to traditional logistics.
              They are the operating layer \u2014 systems that learn from every
              shipment, every delay, and every border crossing to become
              structurally more efficient over time.
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
              The logistics arm is in active development. Priority trade
              corridors are being mapped, warehousing sites identified, and the
              operational platform for cross-border and freight operations is
              under construction.
            </p>
            <p className="mt-6 text-ash leading-relaxed">
              First operation targeted for 2026\u20132027. Logistics is the
              connective tissue of the Njoh system \u2014 and it is being built
              to last.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
              <Button variant="primary" size="lg" href={`${prefix}/partners`}>
                Partnership inquiries
              </Button>
              <Button variant="ghost" size="lg" href={`${prefix}/sectors`}>
                All sectors
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
