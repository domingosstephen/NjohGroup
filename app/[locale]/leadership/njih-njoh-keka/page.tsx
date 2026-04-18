import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { EMAILS, SOCIAL } from "@/lib/constants";
import type { Locale } from "@/lib/constants";

interface FounderPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: FounderPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Njih Njoh Keka — Founder & CEO",
    description:
      "Biographical profile of Njih Njoh Keka, Founder and Chief Executive Officer of Njoh Group PLC.",
    locale: locale as Locale,
    path: "/leadership/njih-njoh-keka",
  });
}

export default async function FounderProfilePage({
  params,
}: FounderPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <>
      <PageHero
        label="FOUNDER PROFILE"
        title="Njih Njoh Keka"
        subtitle="Founder & CEO, Njoh Group PLC"
        height="40vh"
      />

      {/* Long-form bio */}
      <article className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          {/* Origin */}
          <FadeIn>
            <MonoLabel className="text-obsidian/50">ORIGIN</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              Early life and formation.
            </h2>
            <p className="mt-6">
              Njih Njoh Keka was born and raised in Cameroon into a family
              with a tradition of enterprise and public service. From an
              early period he observed the disparity between the
              continent&apos;s considerable human capital and the absence
              of the institutional structures required to convert that
              capital into durable economic value.
            </p>
            <p className="mt-6 text-obsidian/60 italic">
              [FOUNDER TO REVIEW — Additional biographical details about early
              life, education, and formative experiences to be added here.]
            </p>
          </FadeIn>

          {/* Why Brazil */}
          <FadeIn>
            <div className="mt-12 sm:mt-16 lg:mt-20">
              <GoldRule width="40px" className="mb-4" />
              <h2 className="font-display text-[var(--text-h2)] text-obsidian leading-snug">
                Why Brazil.
              </h2>
              <p className="mt-6">
                S&atilde;o Paulo is one of the largest cities in the Global
                South, a hub for emerging-market finance, and home to a
                significant African diaspora community. Operating from Brazil
                gives Njoh Group a unique vantage point: proximity to
                African-adjacent markets, access to Latin American capital, and
                a base in a country that understands the dynamics of building at
                continental scale.
              </p>
              <p className="mt-6 text-obsidian/60 italic">
                [FOUNDER TO REVIEW — Personal narrative about the decision to
                base operations in Brazil, and how it connects to the Group&apos;s
                thesis.]
              </p>
            </div>
          </FadeIn>

          {/* Thesis in his voice */}
          <FadeIn>
            <div className="mt-12 sm:mt-16 lg:mt-20">
              <GoldRule width="40px" className="mb-4" />
              <h2 className="font-display text-[var(--text-h2)] text-obsidian leading-snug">
                The institutional thesis.
              </h2>
              <blockquote className="mt-8 border-l-2 border-njoh-gold pl-8">
                <p className="font-display italic text-lg text-obsidian leading-relaxed">
                  &ldquo;I started Njoh Group because I saw a gap that no one
                  was filling — not a market gap, but an institutional gap.
                  Africa is full of talent, full of demand, full of opportunity.
                  What it lacks are the patient, cross-sector institutions that
                  can turn all of that into durable, compounding value. That is
                  what we are building.&rdquo;
                </p>
              </blockquote>
              <p className="mt-6 text-obsidian/60 italic">
                [FOUNDER TO REVIEW — Extended thesis statement and personal
                motivation to be expanded here.]
              </p>
            </div>
          </FadeIn>

          {/* Prior Work */}
          <FadeIn>
            <div className="mt-12 sm:mt-16 lg:mt-20">
              <GoldRule width="40px" className="mb-4" />
              <h2 className="font-display text-[var(--text-h2)] text-obsidian leading-snug">
                Prior work.
              </h2>
              <p className="mt-6 text-obsidian/60 italic">
                [FOUNDER TO REVIEW — Professional background, prior ventures,
                key experiences that informed the creation of Njoh Group. To be
                written in collaboration with the founder.]
              </p>
            </div>
          </FadeIn>

          {/* Contact */}
          <FadeIn>
            <div className="mt-12 sm:mt-16 lg:mt-20 border-t border-stone/20 pt-12">
              <MonoLabel className="text-obsidian/50">CORRESPONDENCE</MonoLabel>
              <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                <Button
                  variant="secondary"
                  size="md"
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Button>
                <Button
                  variant="ghost"
                  size="md"
                  href={`mailto:${EMAILS.general}`}
                >
                  {EMAILS.general}
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </article>
    </>
  );
}
