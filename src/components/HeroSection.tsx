import React from "react";
import { Moon, Sun } from "lucide-react";
import { I18N } from "../data/zamaniData";
import type { Language, ThemeMode } from "../types/zamani";
import { formatGregorianDate, formatTodayHijri } from "../utils/dateUtils";

interface HeroSectionProps {
  lang: Language;
  theme: ThemeMode;
  now: Date;
  onChangeLang: (lang: Language) => void;
  onToggleTheme: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  theme,
  now,
  onChangeLang,
  onToggleTheme,
}) => {
  const t = I18N[lang];
  const hijriToday = formatTodayHijri(now, lang) || "—";
  const gregorianToday = formatGregorianDate(now, lang);

  return (
    <section id="top" className="pt-6 pb-8 border-b border-[var(--border-subtle)]">
      {/* Workspace Utility Strip: Language Switcher & Theme Toggle */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label="Language Switcher"
            className="inline-flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-1"
          >
            {(
              [
                { code: "ar", label: "عربي" },
                { code: "en", label: "English" },
                { code: "hi", label: "हिन्दी" },
              ] as const
            ).map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => onChangeLang(item.code)}
                className={`whitespace-nowrap shrink-0 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  lang === item.code
                    ? "bg-[var(--accent-primary)] text-white"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? t.themeLightLabel : t.themeDarkLabel}
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span>{theme === "dark" ? t.themeLightLabel : t.themeDarkLabel}</span>
          </button>
        </div>

        {/* Clean Unboxed Today Date Readout (Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="text-xs font-semibold text-[var(--text-muted)]">{t.todayLabel}</span>
          <span aria-hidden="true" className="text-[var(--border-strong)]">
            ·
          </span>
          <span className="font-bold text-[var(--accent-primary)]">{hijriToday}</span>
          <span aria-hidden="true" className="text-[var(--border-strong)]">
            ·
          </span>
          <span className="text-[var(--text-secondary)]">{gregorianToday}</span>
        </div>
      </div>

      {/* Editorial Hero Headline */}
      <div className="max-w-3xl">
        <p className="mb-2 text-xs font-semibold tracking-wide text-[var(--accent-gold)]">
          {t.heroKicker}
        </p>
        <h1 className="text-[clamp(1.85rem,3.5vw,2.75rem)] font-bold leading-[1.2] tracking-tight text-[var(--text-primary)] [text-wrap:balance]">
          {t.heroTitle}
        </h1>
        <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-[var(--text-secondary)]">
          {t.heroSubtitle}
        </p>
      </div>
    </section>
  );
};
