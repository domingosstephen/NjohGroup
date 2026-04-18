import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { SECTORS } from "@/lib/constants";
import type { Locale } from "@/lib/constants";

interface VisionPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: VisionPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "The Africa Thesis",
    description:
      "Why we believe the next fifty years belong to the continent — and what it will take to build them. A note from Njih Njoh Keka, Founder & CEO.",
    locale: locale as Locale,
    path: "/vision",
  });
}

export default async function VisionPage({ params }: VisionPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <>
      <PageHero
        label="OUR THESIS"
        title="The Africa Thesis."
        subtitle="Why we believe the next fifty years belong to the continent — and what it will take to build them."
        meta="A NOTE FROM NJIH NJOH KEKA · FOUNDER & CEO · NJOH GROUP PLC"
        height="60vh"
      >
        <MonoLabel className="text-ash/40">~ 9 minute read</MonoLabel>
      </PageHero>

      {/* Main body — narrow reading column */}
      <article className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          {/* Opening */}
          <FadeIn>
            <p className="text-stone text-lg leading-relaxed">
              When I talk about Africa, I am not talking about a place that needs rescuing. I am
              talking about a place that is preparing to define the next fifty years of the global
              economy — and about the institutions that have not yet been built to meet it.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-8">
              Africa&apos;s population will double by 2050. Its cities are growing faster than any
              cities on earth. Its diaspora is wealthier, more connected, and more ambitious than at
              any point in history. Its natural resources, agricultural capacity, and consumer base
              are larger than most investors fully understand.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-8">
              And yet the continent is still being served by institutions designed for a different
              era. Colonial-era supply chains. Thin logistics networks. Fragmented real estate
              markets. Agricultural systems that lose up to 40% of their output between farm and
              plate. Outsourcing economies that send African talent to serve other continents while
              African industries go understaffed.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 font-medium">
              Njoh Group exists because that gap — between what Africa is becoming and what Africa
              has been equipped with — is the most important business opportunity of our generation.
            </p>
          </FadeIn>

          {/* Pillar 1 */}
          <FadeIn>
            <div className="mt-20">
              <GoldRule width="40px" className="mb-4" />
              <h2 className="font-display text-[var(--text-h2)] text-obsidian leading-snug">
                The demographic moment.
              </h2>
              <p className="mt-6">
                Africa&apos;s population will roughly double to approximately 2.5 billion by 2050 (UN
                DESA projections). More than 60% of Africans are under 25. Urbanization is
                accelerating: more Africans will live in cities by 2035 than the total population of
                Europe and North America combined.
              </p>
              <p className="mt-6">
                Every one of these facts is a demand curve — for housing, for food logistics, for
                workforce services, for cross-border trade infrastructure. These are the sectors Njoh
                Group is building in.
              </p>
            </div>
          </FadeIn>

          {/* Pillar 2 */}
          <FadeIn>
            <div className="mt-20">
              <GoldRule width="40px" className="mb-4" />
              <h2 className="font-display text-[var(--text-h2)] text-obsidian leading-snug">
                The diaspora moment.
              </h2>
              <p className="mt-6">
                Remittances to sub-Saharan Africa exceeded $50 billion in 2023 (World Bank
                estimates), surpassing foreign direct investment into the region. But the real shift
                is qualitative: a new generation of African builders — educated abroad, globally
                networked, with both local understanding and international capital access — are
                returning, operating bi-continentally, and building institutions that bridge
                geographies.
              </p>
              <p className="mt-6">
                Njoh Group is a diaspora-built company by design, not by accident.
              </p>
            </div>
          </FadeIn>

          {/* Pillar 3 */}
          <FadeIn>
            <div className="mt-20">
              <GoldRule width="40px" className="mb-4" />
              <h2 className="font-display text-[var(--text-h2)] text-obsidian leading-snug">
                The AI moment.
              </h2>
              <p className="mt-6">
                Every previous technological wave arrived in Africa late: the industrial revolution,
                electrification, the internet. Africa was a consumer, not a builder. The AI wave is
                the first technology in modern history that is arriving globally at the same time.
              </p>
              <p className="mt-6">
                An African holding built AI-native from day one does not face a catch-up problem; it
                faces a leapfrog opportunity. Njoh Group was designed to exploit exactly that
                asymmetry.
              </p>
            </div>
          </FadeIn>

          {/* Pull quote */}
          <FadeIn>
            <blockquote className="my-20 border-l-2 border-njoh-gold pl-8">
              <p className="font-display italic text-[var(--text-h2)] text-obsidian leading-snug">
                &ldquo;Africa does not need more companies. Africa needs more institutions.&rdquo;
              </p>
            </blockquote>
          </FadeIn>

          <FadeIn>
            <p>
              A holding structure is the right vehicle — because the four sectors form a system.
              Real estate needs logistics. Logistics needs outsourcing. Agriculture needs real
              estate and logistics. Patient cross-sector capital is structurally different from
              sector-specific private equity. We are building the system, not just the parts.
            </p>
          </FadeIn>
        </div>
      </article>

      {/* Sector preview — Obsidian */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="space-y-12">
            {SECTORS.map((sector) => (
              <FadeIn key={sector.slug}>
                <div className="flex flex-col sm:flex-row items-start gap-6 border-b border-graphite/30 pb-12">
                  <MonoLabel className="text-njoh-gold shrink-0 w-36">
                    {sector.number} — {sector.name.toUpperCase()}
                  </MonoLabel>
                  <div className="flex-1">
                    <p className="text-ivory leading-relaxed">{sector.thesis}</p>
                    <a
                      href={`${prefix}/sectors/${sector.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm text-njoh-gold hover:text-gold-light transition-colors group"
                    >
                      Explore the sector{" "}
                      <span
                        className="group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      >
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI as operating layer — Ivory */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <h2 className="font-display text-[var(--text-h2)] leading-snug">
              AI is not a product. It is an operating layer.
            </h2>
            <p className="mt-8">
              We do not treat artificial intelligence as a feature or a future initiative. We treat
              it as the operating layer of every company in the Group. In our property management
              business, AI powers tenant communications, predictive maintenance, and portfolio
              intelligence. In our agricultural arm, it will drive yield prediction and supply-chain
              routing. In logistics, it governs routing, demand forecasting, and cross-border
              documentation. In outsourcing, it is the reason our teams can deliver world-class
              output at African cost structures.
            </p>
            <p className="mt-8">
              This is not AI as marketing. It is AI as infrastructure — woven into how the Group
              operates, not bolted onto how it presents itself.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-20">
              <h2 className="font-display text-[var(--text-h2)] leading-snug">
                What we are not building.
              </h2>
              <ul className="mt-8 space-y-6">
                {[
                  "We are not a development NGO. Every company in the Group is built to be profitable, durable, and competitive on global terms.",
                  "We are not a venture fund. We build, own, and operate — we do not write checks and leave.",
                  "We are not a legacy conglomerate. We are built AI-native, diaspora-connected, and modern — for the economy Africa is becoming, not the one it is leaving behind.",
                  "We are not in a hurry. Building institutions is a multi-decade project. We are designed to compound.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-njoh-gold mt-1 shrink-0">&mdash;</span>
                    <span className="italic text-stone">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing — Obsidian */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-[var(--text-display)] text-ivory leading-tight">
              This is the work of a generation.
            </h2>
            <p className="mt-8 text-[var(--text-body-lg)] text-ash leading-relaxed">
              Njoh Group is a young company. We have twenty people, one operating subsidiary, and
              four sectors in active build. By most measures, we are at the beginning.
            </p>
            <p className="mt-6 text-[var(--text-body-lg)] text-ash leading-relaxed">
              That is the point. Institutions are not built at scale — they are built in the
              decisions of their earliest years. The choice of sectors. The choice of partners. The
              choice of what to invest in and what to refuse. The choice of which version of Africa
              to build for.
            </p>
            <p className="mt-6 text-[var(--text-body-lg)] text-stone leading-relaxed">
              If the thesis on this page resonates with you — whether you are a government, an
              investor, a journalist, a builder, or someone looking for a place to do the most
              important work of your career — we would like to hear from you.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" href={`${prefix}/partners`}>
                Partner with us
              </Button>
              <Button variant="secondary" size="lg" href={`${prefix}/careers`}>
                Work with us
              </Button>
              <Button variant="ghost" size="lg" href={`${prefix}/contact`}>
                Contact the team
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-16 border-t border-graphite/30 pt-8">
              <p className="font-display text-lg text-ivory">Njih Njoh Keka</p>
              <p className="mt-1 text-sm text-ash italic">
                Founder & Chief Executive Officer
              </p>
              <p className="text-sm text-ash italic">Njoh Group PLC</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-12 flex items-center justify-center gap-6">
              <MonoLabel className="text-ash/40">LAST UPDATED: APRIL 2026</MonoLabel>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
