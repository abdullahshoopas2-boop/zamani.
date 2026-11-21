import { HIJRI_YEAR_ENDS, I18N } from "../data/zamaniData";
import type {
  AcademicTargetItem,
  ArabCountry,
  CountdownResult,
  IslamicOccasion,
  IslamicOccurrence,
  Language,
} from "../types/zamani";

export function pad2(n: number): string {
  return String(Math.max(0, Math.floor(n))).padStart(2, "0");
}

export function getLocaleCode(lang: Language): string {
  if (lang === "ar") return "ar-SA";
  if (lang === "hi") return "hi-IN";
  return "en-US";
}

export function computeCountdown(targetDate: Date, nowDate: Date): CountdownResult {
  const diffMs = targetDate.getTime() - nowDate.getTime();
  if (diffMs <= 0) {
    return { arrived: true, days: 0, hours: 0, mins: 0, secs: 0 };
  }
  const totalSecs = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSecs / 86400);
  const hours = Math.floor((totalSecs % 86400) / 3600);
  const mins = Math.floor((totalSecs % 3600) / 60);
  const secs = totalSecs % 60;
  return { arrived: false, days, hours, mins, secs };
}

export function formatGregorianDate(dateObj: Date, lang: Language): string {
  const locale = lang === "ar" ? "ar-EG" : lang === "hi" ? "hi-IN" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(dateObj);
}

export function formatShortDate(dateObj: Date, lang: Language): string {
  const locale = lang === "ar" ? "ar-SA" : lang === "hi" ? "hi-IN" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(dateObj);
}

export function formatTodayHijri(dateObj: Date, lang: Language): string {
  const localeBase = lang === "ar" ? "ar-SA" : lang === "hi" ? "hi-IN" : "en-US";
  try {
    return new Intl.DateTimeFormat(`${localeBase}-u-ca-islamic-umalqura`, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(dateObj);
  } catch {
    try {
      return new Intl.DateTimeFormat(`${localeBase}-u-ca-islamic`, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(dateObj);
    } catch {
      return "";
    }
  }
}

export function getUpcomingOccurrence(occ: IslamicOccasion, now: Date): IslamicOccurrence {
  for (const item of occ.occurrences) {
    if (new Date(item.targetISO).getTime() > now.getTime()) {
      return item;
    }
  }
  return occ.occurrences[occ.occurrences.length - 1];
}

export function getAcademicTargets(
  country: ArabCountry,
  now: Date,
  lang: Language
): AcademicTargetItem[] {
  const t = I18N[lang];

  let activeTerm = country.terms.find((term) => new Date(term.endISO).getTime() > now.getTime());
  if (!activeTerm) {
    activeTerm = country.terms[country.terms.length - 1];
  }

  const yearEndDate = new Date(country.academicYearEndISO);
  const gregYear = now.getFullYear();
  const gregEndDate = new Date(gregYear, 11, 31, 23, 59, 59);

  let activeHijri = HIJRI_YEAR_ENDS.find((h) => new Date(h.endISO).getTime() > now.getTime());
  if (!activeHijri) {
    activeHijri = HIJRI_YEAR_ENDS[HIJRI_YEAR_ENDS.length - 1];
  }

  return [
    {
      key: "term",
      kicker: activeTerm.label[lang],
      title: t.termCardTitle,
      ref: formatShortDate(new Date(activeTerm.endISO), lang),
      target: new Date(activeTerm.endISO),
    },
    {
      key: "academicYear",
      kicker: t.yearEndCardKicker,
      title: t.yearEndCardTitle,
      ref: formatShortDate(yearEndDate, lang),
      target: yearEndDate,
    },
    {
      key: "gregYear",
      kicker: t.gregYearKicker,
      title: t.gregYearTitle,
      ref: `${t.gregEndLabel}${gregYear}`,
      target: gregEndDate,
    },
    {
      key: "hijriYear",
      kicker: t.hijriYearKicker,
      title: t.hijriYearTitle,
      ref: `${t.hijriEndLabel}${activeHijri.yearLabel[lang]}`,
      target: new Date(activeHijri.endISO),
    },
  ];
}
