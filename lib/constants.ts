export const SITE_NAME = "Njoh Group PLC";
export const SITE_URL = "https://njohgroup.com";
export const SITE_DESCRIPTION =
  "A pan-African holding company investing in real estate, outsourcing, agriculture, and logistics, with AI woven through every operation.";

export const OFFICES = [
  {
    label: "HEADQUARTERS",
    city: "Yaoundé",
    country: "Cameroon",
    description: "Central African anchor and operational base",
    coordinates: { lat: 3.848, lng: 11.5021 },
  },
  {
    label: "STRATEGIC BASE",
    city: "São Paulo",
    country: "Brazil",
    description: "Founder's operating base in the Global South",
    coordinates: { lat: -23.5505, lng: -46.6333 },
  },
  {
    label: "EUROPEAN LINK",
    city: "Madrid",
    country: "Spain",
    description: "European entry and regulatory bridge",
    coordinates: { lat: 40.4168, lng: -3.7038 },
  },
] as const;

export const SECTORS = [
  {
    number: "01",
    slug: "real-estate",
    name: "Real Estate",
    tagline: "The buildings Africa's urbanisation demands.",
    status: "OPERATING · NJOH PROPERTY MANAGEMENT · CAMEROON",
    thesis:
      "Africa's cities are growing by tens of millions of residents each decade. We develop, manage and invest in the buildings that growth demands — starting with Cameroon, and extending across the continent.",
  },
  {
    number: "02",
    slug: "outsourcing",
    name: "Outsourcing",
    tagline: "African talent, operating at the top of the global market.",
    status: "IN DEVELOPMENT · TARGET LAUNCH 2026",
    thesis:
      "African talent is already the backbone of global business services. We are building the BPO and tech-outsourcing firms that keep more of that value on the continent — and that use AI to compete at the top of the global market.",
  },
  {
    number: "03",
    slug: "agriculture",
    name: "Agriculture",
    tagline:
      "Closing the gap between what Africa grows and what reaches the market.",
    status: "IN DEVELOPMENT · FIRST OPERATION 2026–2027",
    thesis:
      "Africa loses up to 40% of its agricultural output between farm and market. We invest in agri-processing and agri-tech that closes that gap — turning raw output into industrial value.",
  },
  {
    number: "04",
    slug: "logistics",
    name: "Logistics",
    tagline: "The network that makes African industry competitive.",
    status: "IN DEVELOPMENT · FIRST OPERATION 2026–2027",
    thesis:
      "Moving goods across Africa is still two to three times more expensive than moving them across comparable regions elsewhere. We are building the warehousing, freight, and cross-border networks that make African industry competitive.",
  },
] as const;

export const EMAILS = {
  general: "contact@njohgroup.com",
  press: "press@njohgroup.com",
  careers: "careers@njohgroup.com",
  partners: "partners@njohgroup.com",
} as const;

export const SOCIAL = {
  linkedin: "https://linkedin.com/company/njoh-group", // [PLACEHOLDER]
} as const;

export const LOCALES = ["en", "fr", "pt"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
