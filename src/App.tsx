import { useCallback, useEffect, useState } from "react";
import { AcademicCalendarSection } from "./components/AcademicCalendarSection";
import { GreetingStudioSection } from "./components/GreetingStudioSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { IslamicOccasionsSection } from "./components/IslamicOccasionsSection";
import { I18N } from "./data/zamaniData";
import type { Language, ThemeMode } from "./types/zamani";

function getInitialTheme(): ThemeMode {
  try {
    const stored = localStorage.getItem("zamani_theme");
    if (stored === "dark" || stored === "light") return stored;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  } catch {
    // ignore storage access issues
  }
  return "light";
}

export default function App() {
  const [lang, setLang] = useState<Language>("ar");
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [countryCode, setCountryCode] = useState<string>("SA");
  const [now, setNow] = useState<Date>(() => new Date());
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const htmlEl = document.documentElement;
    htmlEl.lang = lang;
    htmlEl.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    const htmlEl = document.documentElement;
    if (theme === "dark") {
      htmlEl.classList.add("dark");
    } else {
      htmlEl.classList.remove("dark");
    }
    try {
      localStorage.setItem("zamani_theme", theme);
    } catch {
      // ignore storage access issues
    }
  }, [theme]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => {
      setToast((current) => (current === msg ? null : current));
    }, 2600);
  }, []);

  const t = I18N[lang];

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <Header lang={lang} />

      <main className="mx-auto max-w-[1220px] px-5 pb-16">
        <HeroSection
          lang={lang}
          theme={theme}
          now={now}
          onChangeLang={setLang}
          onToggleTheme={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
        />

        <IslamicOccasionsSection lang={lang} now={now} />

        <AcademicCalendarSection
          lang={lang}
          now={now}
          countryCode={countryCode}
          onSelectCountry={setCountryCode}
        />

        <GreetingStudioSection lang={lang} onToast={showToast} />

        <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-6 text-xs text-[var(--text-muted)]">
          <span>{t.footerNote}</span>
          <span>{t.footerDisclaimer}</span>
        </footer>
      </main>

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 end-6 z-50 rounded-full bg-[var(--text-primary)] px-4 py-2.5 text-xs font-semibold text-[var(--bg-page)] shadow-lg"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
