import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { EMAILS } from "@/lib/constants";
import type { Locale } from "@/lib/constants";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PrivacyPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Privacy Policy",
    description: "Privacy policy for Njoh Group PLC and its subsidiaries.",
    locale: locale as Locale,
    path: "/legal/privacy",
  });
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <PageHero label="LEGAL" title="Privacy Policy." height="40vh" />

      <article className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <MonoLabel className="text-obsidian/50">
              LAST UPDATED: APRIL 2026
            </MonoLabel>
            <GoldRule width="40px" className="my-6" />

            <h2 className="font-display text-[var(--text-h2)] text-obsidian leading-snug">
              1. Introduction
            </h2>
            <p className="mt-4">
              Njoh Group PLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;the Group&rdquo;) is committed to protecting the privacy of
              visitors to our website and users of our services. This Privacy
              Policy explains how we collect, use, store, and protect your
              personal information.
            </p>

            <h2 className="mt-12 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              2. Information We Collect
            </h2>
            <p className="mt-4 text-obsidian/60 italic">
              [Placeholder — Full privacy policy text to be drafted by legal
              counsel. This section will detail the types of personal data
              collected, including contact information, browsing data, and any
              information submitted through forms on this website.]
            </p>

            <h2 className="mt-12 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              3. How We Use Your Information
            </h2>
            <p className="mt-4 text-obsidian/60 italic">
              [Placeholder — This section will describe the purposes for which
              personal data is processed, including responding to inquiries,
              improving our services, and complying with legal obligations.]
            </p>

            <h2 className="mt-12 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              4. Data Sharing and Transfers
            </h2>
            <p className="mt-4 text-obsidian/60 italic">
              [Placeholder — This section will outline circumstances under which
              data may be shared with third parties or transferred across
              borders, and the safeguards in place.]
            </p>

            <h2 className="mt-12 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              5. Your Rights
            </h2>
            <p className="mt-4 text-obsidian/60 italic">
              [Placeholder — This section will detail your rights regarding your
              personal data, including access, rectification, erasure, and
              portability.]
            </p>

            <h2 className="mt-12 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              6. Contact
            </h2>
            <p className="mt-4">
              For privacy-related inquiries, please contact us at{" "}
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
