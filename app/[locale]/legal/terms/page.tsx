import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { EMAILS } from "@/lib/constants";
import type { Locale } from "@/lib/constants";

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: TermsPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Terms of Use",
    description: "Terms of use for the Njoh Group PLC website.",
    locale: locale as Locale,
    path: "/legal/terms",
  });
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <PageHero label="LEGAL" title="Terms of Use." height="40vh" />

      <article className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <MonoLabel className="text-obsidian/50">
              LAST UPDATED: APRIL 2026
            </MonoLabel>
            <GoldRule width="40px" className="my-6" />

            <h2 className="font-display text-[var(--text-h2)] text-obsidian leading-snug">
              1. Acceptance of Terms
            </h2>
            <p className="mt-4">
              By accessing and using the Njoh Group PLC website
              (&ldquo;njohgroup.com&rdquo;), you agree to be bound by these
              Terms of Use. If you do not agree with any part of these terms,
              please do not use the website.
            </p>

            <h2 className="mt-12 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              2. Use of the Website
            </h2>
            <p className="mt-4 text-obsidian/60 italic">
              [Placeholder — Full terms of use to be drafted by legal counsel.
              This section will describe acceptable use, restrictions, and user
              responsibilities.]
            </p>

            <h2 className="mt-12 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              3. Intellectual Property
            </h2>
            <p className="mt-4 text-obsidian/60 italic">
              [Placeholder — This section will detail ownership of content,
              trademarks, and other intellectual property on the website.]
            </p>

            <h2 className="mt-12 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              4. Disclaimers
            </h2>
            <p className="mt-4 text-obsidian/60 italic">
              [Placeholder — This section will outline disclaimers regarding the
              accuracy of information, forward-looking statements, and
              limitations of liability.]
            </p>

            <h2 className="mt-12 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              5. Governing Law
            </h2>
            <p className="mt-4 text-obsidian/60 italic">
              [Placeholder — This section will specify the governing law and
              jurisdiction for any disputes arising from use of the website.]
            </p>

            <h2 className="mt-12 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              6. Contact
            </h2>
            <p className="mt-4">
              For questions about these terms, please contact us at{" "}
              <a
                href={`mailto:${EMAILS.general}`}
                className="text-njoh-gold hover:text-gold-light transition-colors"
              >
                {EMAILS.general}
              </a>
            </p>
          </FadeIn>
        </div>
      </article>
    </>
  );
}
