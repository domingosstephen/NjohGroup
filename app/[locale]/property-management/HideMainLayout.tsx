"use client";

import { useEffect } from "react";

/**
 * Hides the main site navigation and footer on this landing page.
 * The NPM page has its own self-contained nav and footer.
 */
export function HideMainLayout() {
  useEffect(() => {
    const header = document.querySelector("header") as HTMLElement | null;
    const footer = document.querySelector('footer[role="contentinfo"]') as HTMLElement | null;

    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";

    return () => {
      if (header) header.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  return null;
}
