import React from "react";
import { Moon, Sparkles, Sun } from "lucide-react";
import { I18N, ISLAMIC_OCCASIONS_DATA } from "../data/zamaniData";
import type { Language } from "../types/zamani";
import {
  computeCountdown,
  formatGregorianDate,
  getUpcomingOccurrence,
  pad2,
} from "../utils/dateUtils";

interface IslamicOccasionsSectionProps {
  lang: Language;
  now: Date;
}

export const IslamicOccasionsSection: React.FC<IslamicOccasionsSectionProps> = ({ lang, now }) => {
  const t = I18N[lang];

  const renderIcon = (icon: "moon" | "sparkles" | "sun") => {
    if (icon === "moon") return <Moon className="h-5 w-5" />;
    if (icon === "sparkles") return <Sparkles className="h-5 w-5" />;
    return <Sun className="h-5 w-5" />;
  };

  return (
    <section id="occasions" className="mt-12">
      <div className="mb-6">
        <p className="text-xs font-semibold text-[var(--accent-gold)]">{t.islamicEyebrow}</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
          {t.islamicTitle}
        </h2>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">{t.islamicDesc}</p>
      </div>

      {/* Live Countdown Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {ISLAMIC_OCCASIONS_DATA.map((occ) => {
          const item = getUpcomingOccurrence(occ, now);
          const targetDate = new Date(item.targetISO);
          const cd = computeCountdown(targetDate, now);
          const gregStr = formatGregorianDate(targetDate, lang);

          const accentColor =
            occ.accent === "emerald"
              ? "var(--accent-primary)"
              : occ.accent === "gold"
              ? "var(--accent-gold)"
              : "var(--accent-plum)";

          const accentSoft =
            occ.accent === "emerald"
              ? "var(--accent-primary-soft)"
              : occ.accent === "gold"
              ? "var(--accent-gold-soft)"
              : "var(--accent-plum-soft)";

          return (
            <article
              key={occ.id}
              className="flex flex-col justify-between gap-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{occ.title[lang]}</h3>
                  <div className="mt-1 flex flex-col gap-0.5 text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold" style={{ color: accentColor }}>
                      {item.hijri[lang]}
                    </span>
                    <span>
                      {t.expectedPrefix}
                      {gregStr}
                    </span>
                  </div>
                </div>
                <div
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                  style={{ backgroundColor: accentSoft, color: accentColor }}
                  aria-hidden="true"
                >
                  {renderIcon(occ.icon)}
                </div>
              </div>

              {cd.arrived ? (
                <p className="py-3 text-center text-sm font-semibold text-[var(--accent-primary)]">
                  {t.arrivedNow}
                </p>
              ) : (
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { val: String(cd.days), label: t.units.days },
                    { val: pad2(cd.hours), label: t.units.hours },
                    { val: pad2(cd.mins), label: t.units.mins },
                    { val: pad2(cd.secs), label: t.units.secs },
                  ].map((cell) => (
                    <div
                      key={cell.label}
                      className="flex flex-col items-center rounded-xl bg-[var(--bg-surface-soft)] px-2 py-3 text-center"
                    >
                      <span className="font-mono-tabular text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                        {cell.val}
                      </span>
                      <span className="mt-1 text-[11px] font-semibold text-[var(--text-muted)]">
                        {cell.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};
