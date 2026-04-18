import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/constants";

interface AgriculturePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AgriculturePageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Agriculture",
    description:
      "Closing the gap between what Africa grows and what reaches the market. Njoh Group invests in agri-processing and agri-tech across the continent.",
    locale: locale as Locale,
    path: "/sectors/agriculture",
  });
}

export default async function AgriculturePage({ params }: AgriculturePageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  const verticals = [
    {
      number: "01",
      title: "Agri-Processing",
      tagline: "Turning raw harvest into shelf-stable, exportable value.",
      description:
        "Africa produces enormous volumes of raw agricultural output \u2014 but much of it never reaches a market in usable form. Njoh Group invests in processing facilities that transform raw commodities into shelf-stable, industrially valuable products. From cassava to cocoa, from palm oil to grains, we target crops where the processing gap is widest and the demand is most certain.",
    },
    {
      number: "02",
      title: "Agri-Tech",
      tagline: "Data-driven tools for yield, logistics, and market access.",
      description:
        "The next generation of African agriculture will be driven by data. Yield prediction, supply-chain routing, market price intelligence, and input optimisation \u2014 these are the tools that close the gap between subsistence farming and commercial-scale production. Njoh Group builds and invests in the agri-tech platforms that make this transition possible.",
    },
  ];

  return (
    <>
      <PageHero
        label="SECTOR 03 / FOUR"
        title="Agriculture."
        subtitle="Closing the gap between what Africa grows and what reaches the market."
        meta="IN DEVELOPMENT \u00b7 FIRST OPERATION 2026\u20132027"
        height="70vh"
      />

      {/* Thesis — Ivory */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <p>
              Africa holds 60% of the world&apos;s uncultivated arable land. It
              produces vast quantities of food and agricultural raw materials. And
              yet the continent is a net food importer \u2014 spending over $40
              billion a year on food imports that could, in many cases, be produced
              and processed locally.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-8">
              The gap is not in production. It is in what happens after the harvest.
              Africa loses up to 40% of its agricultural output between farm and
              market \u2014 to inadequate storage, poor processing infrastructure,
              and fragmented logistics. This is not a farming problem. It is an
              industrial infrastructure problem.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-8 font-medium">
              Njoh Group&apos;s agriculture arm invests in the companies that close
              that gap \u2014 turning raw output into industrial value, and using
              technology to make every step of the chain more efficient.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Two verticals — Obsidian */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <MonoLabel className="text-njoh-gold">TWO VERTICALS</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-ivory leading-snug">
              Where we are building.
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
            {verticals.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.15}>
                <div className="border-t border-njoh-gold/30 pt-8">
                  <MonoLabel className="text-njoh-gold">{v.number}</MonoLabel>
                  <h3 className="mt-4 font-display text-xl text-ivory leading-snug">
                    {v.title}
                  </h3>
                  <p className="mt-2 font-display italic text-ash text-sm leading-relaxed">
                    {v.tagline}
                  </p>
                  <GoldRule width="30px" className="my-6" />
                  <p className="text-ash leading-relaxed">{v.description}</p>
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
              AI across the value chain.
            </h2>
            <p className="mt-8">
              In agriculture, AI is not a novelty \u2014 it is the difference
              between a 40% post-harvest loss rate and a 10% one. Yield prediction
              models tell farmers and processors what to expect. Supply-chain
              routing algorithms find the fastest path from farm to market. Market
              intelligence platforms connect producers with buyers in real time.
            </p>
            <p className="mt-6">
              Njoh Group builds AI into every agricultural operation from the
              start \u2014 not as an add-on, but as the operating layer that makes
              the entire system work.
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
              Our agriculture arm is in active development. We are identifying
              first-operation targets in Central and West Africa, building
              relationships with local agricultural communities, and developing the
              technology platform that will power our processing and logistics
              operations.
            </p>
            <p className="mt-6 text-ash leading-relaxed">
              First operation targeted for 2026\u20132027. We move when the team,
              the thesis, and the fundamentals are aligned.
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
