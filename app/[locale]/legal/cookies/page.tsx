import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { EMAILS } from "@/lib/constants";
import type { Locale } from "@/lib/constants";

interface CookiesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: CookiesPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Cookie Policy",
    description: "Cookie policy for the Njoh Group PLC website.",
    locale: locale as Locale,
    path: "/legal/cookies",
  });
}

export default async function CookiesPage({ params }: CookiesPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <PageHero label="LEGAL" title="Cookie Policy." height="40vh" />

      <article className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <MonoLabel className="text-stone">
              LAST UPDATED: APRIL 2026
            </MonoLabel>
            <GoldRule width="40px" className="my-6" />

            <h2 className="font-display text-[var(--text-h2)] text-obsidian leading-snug">
              1. What Are Cookies
            </h2>
            <p className="mt-4">
              Cookies are small text files stored on your device when you visit a
              website. They help the website remember your preferences and
              improve your browsing experience.
            </p>

            <h2 className="mt-12 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              2. How We Use Cookies
            </h2>
            <p className="mt-4 text-stone italic">
              [Placeholder — Full cookie policy to be drafted by legal counsel.
              This section will detail the types of cookies used (essential,
              analytics, functional) and their purposes.]
            </p>

            <h2 className="mt-12 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              3. Third-Party Cookies
            </h2>
            <p className="mt-4 text-stone italic">
              [Placeholder — This section will describe any third-party cookies
              used on the website, including analytics providers and their
              purposes.]
            </p>

            <h2 className="mt-12 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              4. Managing Cookies
            </h2>
            <p className="mt-4 text-stone italic">
              [Placeholder — This section will explain how users can manage,
              disable, or delete cookies through their browser settings.]
            </p>

            <h2 className="mt-12 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              5. Contact
            </h2>
            <p className="mt-4">
              For questions about our use of cookies, please contact us at{" "}
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
