import type { MetadataRoute } from "next";
import { SITE_URL, LOCALES, DEFAULT_LOCALE, SECTORS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/vision",
    "/sectors",
    ...SECTORS.map((s) => `/sectors/${s.slug}`),
    "/sectors/real-estate/njoh-property-management",
    "/sectors/emerging",
    "/leadership",
    "/leadership/njih-njoh-keka",
    "/group",
    "/insights",
    "/press",
    "/careers",
    "/partners",
    "/contact",
    "/property-management",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    const alternates: Record<string, string> = {};
    for (const locale of LOCALES) {
      alternates[locale] =
        locale === DEFAULT_LOCALE
          ? `${SITE_URL}${page}`
          : `${SITE_URL}/${locale}${page}`;
    }

    entries.push({
      url: `${SITE_URL}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "/" ? "weekly" : "monthly",
      priority: page === "/" ? 1.0 : page === "/vision" ? 0.9 : 0.7,
      alternates: { languages: alternates },
    });
  }

  return entries;
}
