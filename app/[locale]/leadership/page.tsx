import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/constants";

interface LeadershipPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LeadershipPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Leadership",
    description:
      "The leadership of Njoh Group PLC — governance, direction, and the individuals responsible for the Group's institutional mandate.",
    locale: locale as Locale,
    path: "/leadership",
  });
}

export default async function LeadershipPage({ params }: LeadershipPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <>
      <PageHero
        label="LEADERSHIP"
        title="The people building Njoh Group."
        subtitle="A young team, a long mission."
        height="50vh"
      />

      {/* Founder Feature */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Portrait */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-72 h-72 rounded-full bg-stone/20 border border-stone/10 flex items-center justify-center">
                  <span className="text-stone/40 text-sm font-body uppercase tracking-widest">
                    Portrait
                  </span>
                </div>
              </div>

              {/* Bio summary */}
              <div>
                <MonoLabel className="text-obsidian/50">FOUNDER & CEO</MonoLabel>
                <h2 className="mt-4 font-display text-[var(--text-h2)] text-obsidian leading-snug">
                  Njih Njoh Keka
                </h2>

                <GoldRule width="40px" className="my-6" />

                <blockquote className="border-l-2 border-njoh-gold pl-6 my-8">
                  <p className="font-display italic text-lg text-obsidian leading-relaxed">
                    &ldquo;Africa does not need more companies. Africa needs more
                    institutions.&rdquo;
                  </p>
                </blockquote>

                <p className="text-obsidian/70 leading-relaxed">
                  Njih Njoh Keka founded Njoh Group PLC in 2021 to address
                  what he identified as a structural gap in the African
                  institutional landscape. Born in Cameroon and based in
                  S&atilde;o Paulo, he oversees the Group&apos;s operations
                  across real estate, outsourcing, agriculture, and logistics
                  from its principal office in Brazil.
                </p>

                <div className="mt-8">
                  <Button
                    variant="secondary"
                    size="md"
                    href={`${prefix}/leadership/njih-njoh-keka`}
                  >
                    Read full profile &rarr;
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <MonoLabel className="text-ash">THE TEAM</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-ivory leading-snug max-w-2xl">
              Organisational development.
            </h2>
            <GoldRule width="40px" className="my-6" />
            <p className="mt-4 text-ash leading-relaxed max-w-2xl">
              The Group presently employs approximately 20 people across
              Yaound&eacute;, S&atilde;o Paulo, and Madrid, distributed across
              sector operations and corporate functions. Senior appointments
              will be published on this page as the Group advances through its
              current phase of institutional formation.
            </p>
            <p className="mt-6 text-ash leading-relaxed max-w-2xl">
              Biographical profiles of divisional leaders and board appointees
              will appear here as the organisational structure matures.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-[var(--text-h2)] text-obsidian leading-snug">
              Careers at Njoh Group
            </h2>
            <p className="mt-4 text-obsidian/70 leading-relaxed">
              The Group recruits individuals whose professional standards
              and long-term orientation are consistent with institutional
              work of this nature. Open positions and the talent registry
              are maintained on the careers page.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href={`${prefix}/careers`}>
                Open positions
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
