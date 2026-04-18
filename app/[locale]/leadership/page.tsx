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
      "Meet the people building Njoh Group PLC — a young team with a long mission to build pan-African institutions.",
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                <MonoLabel className="text-stone">FOUNDER & CEO</MonoLabel>
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

                <p className="text-stone leading-relaxed">
                  Njih Njoh Keka is the founder and CEO of Njoh Group PLC, a
                  pan-African holding company building across real estate,
                  outsourcing, agriculture, and logistics. Born in Cameroon and
                  now operating from S&atilde;o Paulo, Brazil, he leads a
                  diaspora-built institution designed to serve the continent over
                  decades, not quarters.
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
              Growing with intention.
            </h2>
            <GoldRule width="40px" className="my-6" />
            <p className="mt-4 text-ash leading-relaxed max-w-2xl">
              The Njoh Group team will be introduced here as the Group grows. We
              are currently a team of approximately 20 people across Yaound&eacute;,
              S&atilde;o Paulo, and Madrid — building the foundations of each sector
              and preparing for the next phase of growth.
            </p>
            <p className="mt-6 text-stone leading-relaxed max-w-2xl">
              As we expand, this page will feature the leaders and operators who
              make the Group&apos;s mission possible.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-[var(--text-h2)] text-obsidian leading-snug">
              Want to join this team?
            </h2>
            <p className="mt-4 text-stone leading-relaxed">
              We are looking for people who want to build institutions, not just
              companies. If you believe in patient, ambitious work — we want to
              hear from you.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href={`${prefix}/careers`}>
                View careers
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
