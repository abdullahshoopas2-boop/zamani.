export type Language = "ar" | "en" | "hi";

export type ThemeMode = "light" | "dark";

export type CardOccasionKey = "ramadan" | "fitr" | "adha" | "newyear";

export type CardThemeId = "emerald" | "ivory" | "midnight" | "sand";

export interface LocalizedText {
  ar: string;
  en: string;
  hi: string;
}

export interface CountdownResult {
  arrived: boolean;
  days: number;
  hours: number;
  mins: number;
  secs: number;
}

export interface IslamicOccurrence {
  hijri: LocalizedText;
  targetISO: string;
}

export interface IslamicOccasion {
  id: "ramadan" | "fitr" | "adha";
  accent: "emerald" | "gold" | "plum";
  icon: "moon" | "sparkles" | "sun";
  title: LocalizedText;
  occurrences: IslamicOccurrence[];
}

export interface AcademicTerm {
  label: LocalizedText;
  endISO: string;
}

export interface ArabCountry {
  code: string;
  flag: string;
  quick: boolean;
  name: LocalizedText;
  system: LocalizedText;
  terms: AcademicTerm[];
  academicYearEndISO: string;
}

export interface AcademicTargetItem {
  key: string;
  kicker: string;
  title: string;
  ref: string;
  target: Date;
}
