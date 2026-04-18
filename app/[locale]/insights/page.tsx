import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/constants";

interface InsightsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: InsightsPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Insights",
    description:
      "Thinking in public — essays, analysis, and perspectives from Njoh Group on Africa, institutions, AI, and the sectors we build in.",
    locale: locale as Locale,
    path: "/insights",
  });
}

const CATEGORIES = [
  "All",
  "Africa Thesis",
  "Real Estate",
  "Outsourcing",
  "Agriculture",
  "Logistics",
  "AI & Operations",
  "Institutional Building",
] as const;

export default async function InsightsPage({ params }: InsightsPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <>
      <PageHero
        label="INSIGHTS"
        title="Thinking in public."
        subtitle="Essays, analysis, and perspectives on the work of building pan-African institutions."
        height="50vh"
      />

      {/* Category filter placeholder */}
      <section className="bg-obsidian border-b border-graphite/30">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-6">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-xs font-body uppercase tracking-widest transition-colors duration-200 ${
                  category === "All"
                    ? "text-njoh-gold border border-njoh-gold/40"
                    : "text-ash hover:text-ivory border border-graphite/30 hover:border-ash/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-launch state */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <FadeIn>
            <MonoLabel className="text-obsidian/50">COMING SOON</MonoLabel>
            <h2 className="mt-6 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              Our inaugural essays are being written.
            </h2>
            <GoldRule width="40px" className="mx-auto my-8" />
            <p className="text-obsidian/70 leading-relaxed">
              Njoh Group believes in thinking in public. Our first essays will
              cover the Africa thesis, the case for AI-native institutions, and
              the structural opportunities in each of our four sectors.
            </p>
            <p className="mt-6 text-obsidian/70 leading-relaxed">
              We are taking the time to get them right. Subscribe below to be
              notified when they launch.
            </p>
          </FadeIn>

          {/* Newsletter signup placeholder */}
          <FadeIn delay={0.2}>
            <div className="mt-8 sm:mt-12 border border-stone/20 p-4 sm:p-6 lg:p-8 bg-white/50">
              <h3 className="font-display text-lg text-obsidian">
                Get notified when we publish.
              </h3>
              <p className="mt-2 text-sm text-obsidian/60">
                No spam. Only essays worth reading.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 border border-stone/20 bg-white text-obsidian text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors"
                  disabled
                />
                <Button variant="primary" size="md">
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 text-xs text-obsidian/40">
                Newsletter integration coming soon.
              </p>
            </div>
          </FadeIn>

          {/* In the meantime */}
          <FadeIn delay={0.3}>
            <div className="mt-10 sm:mt-12 lg:mt-16">
              <p className="text-obsidian/60 text-sm">
                In the meantime, read our founding thesis:
              </p>
              <div className="mt-4">
                <Button
                  variant="secondary"
                  size="md"
                  href={`${prefix}/vision`}
                >
                  The Africa Thesis &rarr;
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
