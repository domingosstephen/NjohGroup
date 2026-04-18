import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/constants";

interface RealEstatePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: RealEstatePageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Real Estate",
    description:
      "The buildings Africa's urbanisation demands. Njoh Group develops, manages, and invests in real estate across the African continent, starting with Cameroon.",
    locale: locale as Locale,
    path: "/sectors/real-estate",
  });
}

export default async function RealEstatePage({ params }: RealEstatePageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  const disciplines = [
    {
      title: "Development",
      description:
        "The development standard that serious markets require: ground-up residential and mixed-use projects in high-demand urban corridors, built to hold value across decades. In any maturing African city, this is how lasting communities are made.",
    },
    {
      title: "Management",
      description:
        "The management discipline that institutional portfolios demand: transparent reporting, systematic maintenance, and tenant relations administered to a standard that is rare in the region. Njoh Property Management has operated in Cameroon since 2021.",
    },
    {
      title: "Investment",
      description:
        "In African real estate markets where institutional-grade operators remain structurally scarce, the opportunity belongs to those prepared to acquire, manage actively, and hold with discipline. This is the investment posture the continent rewards.",
    },
  ];

  const npmServices = [
    { title: "Tenant Relations", description: "Structured screening, lifecycle administration, and response systems calibrated to institutional standards." },
    { title: "Maintenance", description: "Scheduled and responsive maintenance coordinated through centralised oversight and local teams." },
    { title: "Financial Reporting", description: "The transparency that serious property owners expect: institutional-grade statements for every asset." },
    { title: "Portfolio Intelligence", description: "Occupancy analysis, market benchmarking, and performance data \u2014 the basis of informed capital decisions." },
  ];

  return (
    <>
      <PageHero
        label="SECTOR 01 / FOUR"
        title="Real Estate."
        subtitle="The buildings Africa's urbanisation demands."
        meta="OPERATING \u00b7 CAMEROON \u00b7 SINCE 2021"
        height="70vh"
      />

      {/* Thesis — Ivory */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <p>
              Africa&apos;s urban population is growing faster than any region on
              earth. By 2050, the continent&apos;s cities will absorb roughly 900
              million new residents \u2014 more than the current population of Europe
              and North America combined. Every one of those people will need
              somewhere to live, somewhere to work, and somewhere to build a life.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-8">
              The supply of quality housing and commercial space has not kept pace.
              Across Sub-Saharan Africa, the housing deficit is measured in the tens
              of millions of units. Developers who can build at scale, manage
              professionally, and hold for the long term are not just needed \u2014
              they are structurally scarce.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-8 font-medium">
              This is the structural condition that defines Njoh Group&apos;s
              real estate position: development, management, and investment
              across the buildings that Africa&apos;s urbanisation demands
              \u2014 beginning in Cameroon, extending continent-wide as
              capacity and capital permit.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Three disciplines — Obsidian */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <MonoLabel className="text-njoh-gold">THREE DISCIPLINES</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-ivory leading-snug">
              The disciplines the sector requires.
            </h2>
          </FadeIn>

          <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {disciplines.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.1}>
                <div className="border-t border-njoh-gold/30 pt-8">
                  <MonoLabel className="text-njoh-gold">0{i + 1}</MonoLabel>
                  <h3 className="mt-4 font-display text-xl text-ivory leading-snug">
                    {d.title}
                  </h3>
                  <p className="mt-4 text-ash leading-relaxed">{d.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Njoh Property Management — Ivory */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-20">
              {/* Brand lockup */}
              <div className="lg:w-1/3">
                <MonoLabel className="text-njoh-gold">OPERATING SUBSIDIARY</MonoLabel>
                <h2 className="mt-4 font-display text-[var(--text-h2)] text-obsidian leading-snug">
                  Njoh Property Management.
                </h2>
                <p className="mt-4 font-display italic text-lg text-obsidian/60 leading-relaxed">
                  The operating standard for property in Cameroon and beyond.
                </p>
                <GoldRule width="40px" className="mt-6" />
                <p className="mt-6 text-obsidian/70 leading-relaxed">
                  NPM is Njoh Group&apos;s first operating company \u2014 active since
                  2021, administering residential and commercial properties in Cameroon.
                  It is the operational foundation from which the broader real estate
                  portfolio extends.
                </p>
                <div className="mt-8">
                  <Button variant="secondary" size="md" href={`${prefix}/sectors/real-estate/njoh-property-management`}>
                    Njoh Property Management
                  </Button>
                </div>
              </div>

              {/* Services tiles */}
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {npmServices.map((service, i) => (
                  <FadeIn key={service.title} delay={i * 0.1}>
                    <div className="border border-graphite/15 p-8 rounded-sm">
                      <MonoLabel className="text-njoh-gold">0{i + 1}</MonoLabel>
                      <h3 className="mt-3 font-display text-lg text-obsidian leading-snug">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-obsidian/60 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing — Obsidian */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-[var(--text-h2)] text-ivory leading-snug">
              Real estate is where it begins.
            </h2>
            <p className="mt-8 text-ash text-[var(--text-body-lg)] leading-relaxed">
              The buildings we develop and manage today are the foundation of a
              pan-African portfolio. Every property is a proof point \u2014 that
              institutional-grade operations can work on this continent, at this
              scale, from day one.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
              <Button variant="secondary" size="lg" href={`${prefix}/sectors/logistics`}>
                Logistics sector
              </Button>
              <Button variant="ghost" size="lg" href={`${prefix}/sectors`}>
                All sectors
              </Button>
              <Button variant="primary" size="lg" href={`${prefix}/partners`}>
                Partnership inquiries
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
