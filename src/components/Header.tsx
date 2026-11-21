import React from "react";
import { I18N } from "../data/zamaniData";
import type { Language } from "../types/zamani";

interface HeaderProps {
  lang: Language;
}

export const Header: React.FC<HeaderProps> = ({ lang }) => {
  const t = I18N[lang];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-[var(--bg-page)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1220px] items-center justify-between gap-8 px-5 py-3.5">
        {/* Zone 1: Brand Logo & Wordmark */}
        <a
          href="#top"
          className="inline-flex items-center gap-3 text-lg font-bold tracking-tight text-[var(--text-primary)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-primary)]"
        >
          <img
            src="/assets/aistudio/_________________________f967fba7.png"
            alt={t.brandName}
            referrerPolicy="no-referrer"
            className="h-10 w-auto rounded-lg border border-[var(--border-subtle)] object-cover"
          />
          <span>{t.brandName}</span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-secondary)]"
        >
          <a
            href="#occasions"
            className="whitespace-nowrap shrink-0 hover:text-[var(--text-primary)] hover:underline underline-offset-8 decoration-[var(--accent-primary)] transition-colors"
          >
            {t.navOccasions}
          </a>
          <a
            href="#academic"
            className="whitespace-nowrap shrink-0 hover:text-[var(--text-primary)] hover:underline underline-offset-8 decoration-[var(--accent-primary)] transition-colors"
          >
            {t.navAcademic}
          </a>
          <a
            href="#studio"
            className="whitespace-nowrap shrink-0 hover:text-[var(--text-primary)] hover:underline underline-offset-8 decoration-[var(--accent-primary)] transition-colors"
          >
            {t.navStudio}
          </a>
        </nav>

        {/* Zone 3: Single primary action CTA */}
        <div className="flex items-center shrink-0">
          <a
            href="#studio"
            className="whitespace-nowrap shrink-0 rounded-lg bg-[var(--accent-primary)] px-4 py-2 text-xs font-semibold text-white hover:bg-[var(--accent-primary-hover)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
          >
            {t.headerCta}
          </a>
        </div>
      </div>
    </header>
  );
};
