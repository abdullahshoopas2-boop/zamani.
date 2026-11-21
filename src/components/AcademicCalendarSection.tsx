import React, { useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { ARAB_COUNTRIES_DATA, I18N } from "../data/zamaniData";
import type { Language } from "../types/zamani";
import {
  computeCountdown,
  getAcademicTargets,
  getLocaleCode,
  pad2,
} from "../utils/dateUtils";

interface AcademicCalendarSectionProps {
  lang: Language;
  now: Date;
  countryCode: string;
  onSelectCountry: (code: string) => void;
}

export const AcademicCalendarSection: React.FC<AcademicCalendarSectionProps> = ({
  lang,
  now,
  countryCode,
  onSelectCountry,
}) => {
  const t = I18N[lang];

  const sortedCountries = useMemo(() => {
    const locale = getLocaleCode(lang);
    return [...ARAB_COUNTRIES_DATA].sort((a, b) => a.name[lang].localeCompare(b.name[lang], locale));
  }, [lang]);

  const quickCountries = useMemo(() => ARAB_COUNTRIES_DATA.filter((c) => c.quick), []);

  const selectedCountry = useMemo(
    () => ARAB_COUNTRIES_DATA.find((c) => c.code === countryCode) || ARAB_COUNTRIES_DATA[0],
    [countryCode]
  );

  const targets = useMemo(
    () => getAcademicTargets(selectedCountry, now, lang),
    [selectedCountry, now, lang]
  );

  return (
    <section id="academic" className="mt-14 pt-10 border-t border-[var(--border-subtle)]">
      <div className="mb-6">
        <p className="text-xs font-semibold text-[var(--accent-gold)]">{t.academicEyebrow}</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
          {t.academicTitle}
        </h2>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">{t.academicDesc}</p>
      </div>

      {/* Country Controls Row */}
      <div className="flex flex-wrap items-end justify-between gap-5 pb-6 border-b border-[var(--border-subtle)]">
        <div className="flex min-w-[260px] max-w-[400px] flex-1 flex-col gap-2">
          <label htmlFor="countrySelect" className="text-xs font-semibold text-[var(--text-secondary)]">
            {t.selectCountryLabel}
          </label>
          <div className="relative flex items-center">
            <select
              id="countrySelect"
              value={selectedCountry.code}
              onChange={(e) => onSelectCountry(e.target.value)}
              className="w-full appearance-none rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] py-3 ps-4 pe-10 text-sm font-semibold text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none cursor-pointer"
            >
              {sortedCountries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.name[lang]}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute end-3.5 h-4 w-4 text-[var(--text-muted)]" />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {quickCountries.map((c) => {
            const active = c.code === selectedCountry.code;
            return (
              <button
                key={c.code}
                type="button"
                onClick={() => onSelectCountry(c.code)}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  active
                    ? "border-[var(--accent-primary)] bg-[var(--accent-primary-soft)] font-semibold text-[var(--accent-primary)]"
                    : "border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                <span>{c.flag}</span>
                <span>{c.name[lang]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Country Metadata Row */}
      <div className="my-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 text-lg font-bold text-[var(--text-primary)]">
          <span className="text-2xl leading-none">{selectedCountry.flag}</span>
          <span>{selectedCountry.name[lang]}</span>
        </div>
        <span className="text-xs font-medium text-[var(--text-secondary)]">
          {selectedCountry.system[lang]}
        </span>
      </div>

      {/* 4-Column Academic & Year-End Countdowns */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {targets.map((item) => {
          const cd = computeCountdown(item.target, now);
          return (
            <div
              key={item.key}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5"
            >
              <div>
                <p className="text-xs font-semibold text-[var(--accent-primary)]">{item.kicker}</p>
                <h3 className="mt-1 text-base font-bold text-[var(--text-primary)]">{item.title}</h3>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">{item.ref}</p>
              </div>

              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { val: String(cd.days), unit: t.miniUnits.days },
                  { val: pad2(cd.hours), unit: t.miniUnits.hours },
                  { val: pad2(cd.mins), unit: t.miniUnits.mins },
                  { val: pad2(cd.secs), unit: t.miniUnits.secs },
                ].map((cell) => (
                  <div
                    key={cell.unit}
                    className="rounded-lg bg-[var(--bg-surface-soft)] px-1.5 py-2 text-center"
                  >
                    <span className="font-mono-tabular block text-base font-bold text-[var(--text-primary)]">
                      {cell.val}
                    </span>
                    <span className="block text-[10px] font-semibold text-[var(--text-muted)]">
                      {cell.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
