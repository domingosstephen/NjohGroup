import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/constants";

interface EmergingPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: EmergingPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Emerging Focus Areas",
    description:
      "Beyond our four core sectors, Njoh Group is tracking opportunities in media, technology, and healthcare — areas where Africa's structural gaps create long-term opportunity.",
    locale: locale as Locale,
    path: "/sectors/emerging",
  });
}

export default async function EmergingPage({ params }: EmergingPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  const areas = [
    {
      number: "01",
      title: "Media.",
      tagline: "Africa\u2019s stories, told by African institutions.",
      paragraphs: [
        "Africa is the youngest continent on earth, and its cultural output \u2014 music, film, fashion, digital content \u2014 is already shaping global trends. But the media infrastructure that captures and monetises that output is still largely owned and operated outside the continent.",
        "Njoh Group sees an opportunity to build media companies that combine African creative talent with institutional-grade distribution, monetisation, and technology. Not as a content play, but as an infrastructure play \u2014 the platforms and systems that African creators need to reach global audiences on their own terms.",
        "This is an area of active research. We are studying the landscape, building relationships, and developing our thesis before committing capital.",
      ],
    },
    {
      number: "02",
      title: "Technology.",
      tagline: "Building the tools Africa\u2019s economy runs on.",
      paragraphs: [
        "Africa\u2019s tech ecosystem has grown dramatically over the past decade \u2014 but much of the growth has been in consumer-facing fintech. The enterprise software, infrastructure tooling, and B2B platforms that mature economies rely on are still largely absent or imported.",
        "Njoh Group is interested in the technology companies that serve African businesses \u2014 not consumer apps, but the operational backbone: ERP systems, logistics platforms, workforce management tools, and industry-specific software built for African market conditions.",
        "We are not yet active in this space. We are watching, learning, and waiting for the right entry point.",
      ],
    },
    {
      number: "03",
      title: "Healthcare.",
      tagline: "Institutional-grade health infrastructure for a continent that needs it.",
      paragraphs: [
        "Africa has roughly 3% of the world\u2019s healthcare workers serving 17% of the global population. The infrastructure gap \u2014 in facilities, diagnostics, supply chains, and trained personnel \u2014 is staggering. And it is growing as the population expands.",
        "Njoh Group sees healthcare as a long-term opportunity that aligns with our core capabilities: real estate (facilities), logistics (supply chains), outsourcing (workforce), and AI (diagnostics and operations). The intersection of our four sectors creates a natural foundation for healthcare infrastructure.",
        "This is the most complex opportunity we are tracking, and the one where patience matters most. We will enter healthcare when we have the team, the capital, and the local partnerships to do it right.",
      ],
    },
  ];

  return (
    <>
      <PageHero
        label="LOOKING AHEAD"
        title="Emerging Focus Areas."
        height="60vh"
      />

      {areas.map((area, i) => {
        const isEven = i % 2 === 0;
        const bg = isEven ? "bg-ivory" : "bg-obsidian";
        const headingColor = isEven ? "text-obsidian" : "text-ivory";
        const bodyColor = isEven ? "text-obsidian/70" : "text-ash";

        return (
          <section key={area.number} className={`${bg} py-[var(--section-padding-y)]`}>
            <div className="mx-auto max-w-[700px] px-6">
              <FadeIn>
                <MonoLabel className="text-njoh-gold">
                  EMERGING {area.number} / THREE
                </MonoLabel>
                <h2 className={`mt-4 font-display text-[var(--text-h2)] ${headingColor} leading-snug`}>
                  {area.title}
                </h2>
                <p className={`mt-3 font-display italic text-lg ${bodyColor} leading-relaxed`}>
                  {area.tagline}
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <GoldRule width="40px" className="my-8" />
                <div className="space-y-6">
                  {area.paragraphs.map((p, j) => (
                    <p key={j} className={`${bodyColor} text-[var(--text-body-lg)] leading-[1.7]`}>
                      {p}
                    </p>
                  ))}
                </div>
              </FadeIn>
            </div>
          </section>
        );
      })}

      {/* Closing CTA — Obsidian */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-[var(--text-h2)] text-ivory leading-snug">
              Have expertise in these areas?
            </h2>
            <p className="mt-6 text-ash text-[var(--text-body-lg)] leading-relaxed">
              We are always looking for people who understand these sectors deeply
              and share our long-term vision for the continent. If you have
              experience in media, technology, or healthcare in Africa, we would
              like to hear from you.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" href={`${prefix}/contact`}>
                Get in touch
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
