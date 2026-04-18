import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/constants";

interface OutsourcingPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: OutsourcingPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Outsourcing",
    description:
      "African talent, operating at the top of the global market. Njoh Group is building BPO and tech-outsourcing firms that keep more value on the continent.",
    locale: locale as Locale,
    path: "/sectors/outsourcing",
  });
}

export default async function OutsourcingPage({ params }: OutsourcingPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  const verticals = [
    {
      number: "01",
      title: "Business Process Outsourcing",
      tagline: "World-class service delivery from African operational centres.",
      description:
        "Customer support, back-office operations, data processing, and administrative services \u2014 delivered by trained African professionals supported by AI-powered quality assurance, workflow automation, and real-time analytics. Our BPO operations are designed to compete with the best global providers on quality, not just on price.",
    },
    {
      number: "02",
      title: "Tech Outsourcing",
      tagline: "Software engineering, data science, and digital services for global clients.",
      description:
        "Africa produces hundreds of thousands of STEM graduates every year. Njoh Group is building the firms that connect that talent with global demand \u2014 not as freelancers, but as structured teams with proper infrastructure, career development, and AI-augmented tooling. We deliver software engineering, QA, data annotation, DevOps, and design services at a level that competes with Eastern European and South Asian providers.",
    },
  ];

  return (
    <>
      <PageHero
        label="SECTOR 02 / FOUR"
        title="Outsourcing."
        subtitle="African talent, operating at the top of the global market."
        meta="IN DEVELOPMENT \u00b7 TARGET LAUNCH 2026"
        height="70vh"
      />

      {/* Thesis — Ivory */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <p>
              African professionals already serve as the backbone of global business
              services. From customer support centres in Kenya and Nigeria to
              software engineers across the continent, African talent powers some of
              the world&apos;s largest companies. But the economic structure is
              designed to extract that talent \u2014 not to build it.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-8">
              Most outsourcing value flows to intermediaries in other regions. The
              talent is African; the margins are not. Njoh Group is building the
              outsourcing companies that change that equation \u2014 keeping more
              value on the continent while delivering premium service to global
              clients.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-8 font-medium">
              Our thesis is not cheap labour arbitrage. It is premium service
              delivery at structurally competitive cost \u2014 because the talent is
              genuinely excellent and the AI layer multiplies every person&apos;s
              output.
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
              AI as the multiplier.
            </h2>
            <p className="mt-8">
              Every outsourcing firm in the world is racing to integrate AI. Most
              are retrofitting it onto legacy processes. Njoh Group&apos;s
              outsourcing companies are built AI-native from day one \u2014 which
              means every workflow, every quality check, and every client
              deliverable is designed around AI augmentation from the start.
            </p>
            <p className="mt-6">
              The result: a team of 50 in Yaound\u00e9 delivers the output of a
              team of 200 elsewhere. Not because the people work harder, but because
              the system is built to multiply their excellence.
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
              Our outsourcing arm is in active development. We are assembling the
              founding team, building the AI-native operational platform, and
              securing our first anchor clients. Target launch is 2026.
            </p>
            <p className="mt-6 text-ash leading-relaxed">
              We are not rushing to market with a half-built product. We are
              building the operational infrastructure first \u2014 because in
              outsourcing, the quality of your system determines the quality of your
              service.
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
