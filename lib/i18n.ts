import { LOCALES, DEFAULT_LOCALE, type Locale } from "./constants";

const dictionaries: Record<Locale, () => Promise<Record<string, unknown>>> = {
  en: () => import("@/content/i18n/en.json").then((m) => m.default),
  fr: () => import("@/content/i18n/fr.json").then((m) => m.default),
  pt: () => import("@/content/i18n/pt.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  const loader = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
  return loader();
}

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

export function getLocaleFromPath(path: string): Locale {
  const segments = path.split("/").filter(Boolean);
  const first = segments[0];
  if (first && isValidLocale(first)) return first;
  return DEFAULT_LOCALE;
}

// Type-safe dictionary access
type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? `${K}.${NestedKeyOf<T[K]>}`
        : K;
    }[keyof T & string]
  : never;

export function t(
  dict: Record<string, unknown>,
  key: string,
): string {
  const keys = key.split(".");
  let result: unknown = dict;
  for (const k of keys) {
    if (result && typeof result === "object" && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return key; // fallback to key if not found
    }
  }
  return typeof result === "string" ? result : key;
}
