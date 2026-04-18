import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { EMAILS } from "@/lib/constants";
import type { Locale } from "@/lib/constants";

interface PressPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PressPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Press & Media",
    description:
      "Press releases, media coverage, and media resources for Njoh Group PLC.",
    locale: locale as Locale,
    path: "/press",
  });
}

const MEDIA_KIT_ASSETS = [
  { name: "Njoh Group Logo (SVG)", description: "Primary logo in SVG format" },
  { name: "Njoh Group Logo (PNG)", description: "Primary logo in PNG, high resolution" },
  { name: "Brand Guidelines", description: "Colour palette, typography, and usage rules" },
  { name: "Founder Headshot", description: "High-resolution portrait of Njih Njoh Keka" },
  { name: "Boilerplate Text", description: "Standard company description for press use" },
] as const;

export default async function PressPage({ params }: PressPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <>
      <PageHero
        label="PRESS & MEDIA"
        title="Njoh Group in the press."
        height="40vh"
      />

      {/* Press Releases */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <MonoLabel className="text-obsidian/50">PRESS RELEASES</MonoLabel>
            <GoldRule width="40px" className="my-4" />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-8 border border-stone/20 p-8">
              <MonoLabel className="text-obsidian/50">APRIL 2026</MonoLabel>
              <h3 className="mt-3 font-display text-xl text-obsidian">
                Njoh Group PLC Announces Digital Launch
              </h3>
              <p className="mt-3 text-obsidian/70 leading-relaxed">
                Njoh Group PLC launches its digital presence, marking a new
                chapter in the Group&apos;s mission to build pan-African
                institutions across real estate, outsourcing, agriculture, and
                logistics.
              </p>
              <p className="mt-4 text-sm text-obsidian/50 italic">
                Full press release coming soon.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <MonoLabel className="text-ash">MEDIA COVERAGE</MonoLabel>
            <GoldRule width="40px" className="my-4" />
            <p className="mt-4 text-ash leading-relaxed max-w-2xl">
              As a newly launched company, media coverage will be collected and
              displayed here as it appears. If you are a journalist interested
              in covering Njoh Group, please reach out to our press team.
            </p>
            <div className="mt-6">
              <Button
                variant="secondary"
                size="md"
                href={`mailto:${EMAILS.press}`}
              >
                Contact press team
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Media Kit */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <MonoLabel className="text-obsidian/50">MEDIA KIT</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              Downloadable assets.
            </h2>
            <GoldRule width="40px" className="my-6" />
          </FadeIn>

          <div className="mt-8 space-y-4">
            {MEDIA_KIT_ASSETS.map((asset, i) => (
              <FadeIn key={asset.name} delay={i * 0.05}>
                <div className="flex items-center justify-between border border-stone/20 p-6 hover:border-njoh-gold/40 transition-colors">
                  <div>
                    <h3 className="font-display text-base text-obsidian">
                      {asset.name}
                    </h3>
                    <p className="mt-1 text-sm text-obsidian/60">
                      {asset.description}
                    </p>
                  </div>
                  <span className="text-obsidian/40 text-sm font-body uppercase tracking-widest shrink-0 ml-4">
                    Coming soon
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <MonoLabel className="text-ash">MEDIA CONTACT</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-ivory leading-snug">
              Get in touch with our press team.
            </h2>
            <p className="mt-6 text-ash leading-relaxed">
              For press inquiries, interview requests, or media kit access,
              please contact us at:
            </p>
            <div className="mt-6">
              <a
                href={`mailto:${EMAILS.press}`}
                className="font-display text-xl text-njoh-gold hover:text-gold-light transition-colors"
              >
                {EMAILS.press}
              </a>
            </div>
            <p className="mt-4 text-sm text-ash">
              We aim to respond to all press inquiries within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
