import { Metadata } from "next";
import { SITE_NAME, SITE_URL, LOCALES, DEFAULT_LOCALE, type Locale } from "./constants";

interface PageSeoOptions {
  title: string;
  description: string;
  locale: Locale;
  path: string;
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  locale,
  path,
  ogImage,
}: PageSeoOptions): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = locale === DEFAULT_LOCALE
    ? `${SITE_URL}${cleanPath}`
    : `${SITE_URL}/${locale}${cleanPath}`;

  const alternates: Record<string, string> = {};
  for (const loc of LOCALES) {
    alternates[loc] =
      loc === DEFAULT_LOCALE
        ? `${SITE_URL}${cleanPath}`
        : `${SITE_URL}/${loc}${cleanPath}`;
  }

  return {
    title: `${title} — ${SITE_NAME}`,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ...alternates,
        "x-default": `${SITE_URL}${cleanPath}`,
      },
    },
    openGraph: {
      title: `${title} — ${SITE_NAME}`,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: locale === "en" ? "en_US" : locale === "fr" ? "fr_FR" : "pt_BR",
      type: "website",
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630 }]
        : [{ url: `${SITE_URL}/og-default.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE_NAME}`,
      description,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo.svg`,
    foundingDate: "2021",
    founder: { "@type": "Person", name: "Njih Njoh Keka" },
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Yaoundé",
        addressCountry: "CM",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressCountry: "BR",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Madrid",
        addressCountry: "ES",
      },
    ],
    description:
      "A pan-African holding company investing in real estate, outsourcing, agriculture, and logistics, with AI woven through every operation.",
  };
}
