import React, { useEffect, useState } from "react";
import { Copy, Download, MessageCircle } from "lucide-react";
import { CARD_OCCASIONS, CARD_THEMES, I18N } from "../data/zamaniData";
import type { CardOccasionKey, CardThemeId, Language } from "../types/zamani";
import { exportGreetingCardPng } from "../utils/cardCanvas";

interface GreetingStudioSectionProps {
  lang: Language;
  onToast: (message: string) => void;
}

export const GreetingStudioSection: React.FC<GreetingStudioSectionProps> = ({ lang, onToast }) => {
  const t = I18N[lang];
  const [occasion, setOccasion] = useState<CardOccasionKey>("ramadan");
  const [cardTheme, setCardTheme] = useState<CardThemeId>("emerald");
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState(CARD_OCCASIONS.ramadan.presets[lang][0]);
  const [customEdited, setCustomEdited] = useState(false);

  useEffect(() => {
    if (!customEdited) {
      setMessage(CARD_OCCASIONS[occasion].presets[lang][0]);
    }
  }, [lang, occasion, customEdited]);

  const handleSelectOccasion = (key: CardOccasionKey) => {
    setOccasion(key);
    setCustomEdited(false);
    setMessage(CARD_OCCASIONS[key].presets[lang][0]);
  };

  const occData = CARD_OCCASIONS[occasion];
  const previewRecipientText = `${t.recipientPrefix}${recipient.trim() || t.defaultRecipient}`;
  const previewSenderText = `${t.senderPrefix}${sender.trim() || t.defaultSender}`;
  const previewMessageText = message.trim() || occData.presets[lang][0];

  const shareText = `${occData.tag[lang]}\n${previewRecipientText}\n\n${previewMessageText}\n\n${previewSenderText}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      onToast(t.toastCopied);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = shareText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      onToast(t.toastCopied);
    }
  };

  const handleDownload = async () => {
    await exportGreetingCardPng({
      lang,
      occasion,
      cardTheme,
      recipient,
      sender,
      message,
    });
    onToast(t.toastDownloaded);
  };

  const cardThemeStyles: Record<
    CardThemeId,
    { bg: string; text: string; line: string; accent: string; sub: string }
  > = {
    emerald: {
      bg: "radial-gradient(circle at top right, #188b76 0%, #0d5447 55%, #083930 100%)",
      text: "#f8f5ec",
      line: "rgba(235, 198, 120, 0.45)",
      accent: "#ebd08c",
      sub: "rgba(248, 245, 236, 0.82)",
    },
    ivory: {
      bg: "radial-gradient(circle at top left, #fffdf8 0%, #f5efe1 65%, #ebe1cd 100%)",
      text: "#1c2421",
      line: "rgba(181, 132, 47, 0.38)",
      accent: "#9a6c1d",
      sub: "#4d5552",
    },
    midnight: {
      bg: "radial-gradient(circle at 20% 15%, #23324d 0%, #131c2e 58%, #0b101b 100%)",
      text: "#f4f2eb",
      line: "rgba(217, 174, 95, 0.42)",
      accent: "#e6bf72",
      sub: "rgba(244, 242, 235, 0.78)",
    },
    sand: {
      bg: "radial-gradient(circle at bottom right, #e9dfd1 0%, #dfd2bf 60%, #d3c2ab 100%)",
      text: "#24211c",
      line: "rgba(15, 107, 91, 0.34)",
      accent: "#0f6b5b",
      sub: "#4f483e",
    },
  };

  const activeStage = cardThemeStyles[cardTheme];

  return (
    <section id="studio" className="mt-14 pt-10 border-t border-[var(--border-subtle)]">
      <div className="mb-6">
        <p className="text-xs font-semibold text-[var(--accent-gold)]">{t.studioEyebrow}</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
          {t.studioTitle}
        </h2>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">{t.studioDesc}</p>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
        {/* Controls Column */}
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 lg:col-span-6">
          <div className="space-y-5">
            {/* Occasion Selector */}
            <div>
              <span className="mb-2 block text-xs font-semibold text-[var(--text-secondary)]">
                {t.cardOccasionLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(CARD_OCCASIONS) as CardOccasionKey[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleSelectOccasion(key)}
                    className={`rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      occasion === key
                        ? "border-[var(--accent-primary)] bg-[var(--accent-primary)] text-white"
                        : "border-[var(--border-subtle)] bg-[var(--bg-surface-soft)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {CARD_OCCASIONS[key].tag[lang]}
                  </button>
                ))}
              </div>
            </div>

            {/* Card Theme Swatches */}
            <div>
              <span className="mb-2 block text-xs font-semibold text-[var(--text-secondary)]">
                {t.cardThemeLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {CARD_THEMES.map((th) => (
                  <button
                    key={th.id}
                    type="button"
                    onClick={() => setCardTheme(th.id)}
                    className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      cardTheme === th.id
                        ? "border-[var(--accent-primary)] bg-[var(--accent-primary-soft)] text-[var(--text-primary)]"
                        : "border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-secondary)]"
                    }`}
                  >
                    <span
                      className="h-3.5 w-3.5 rounded-full border border-black/20"
                      style={{ backgroundColor: th.color }}
                    />
                    <span>{th.label[lang]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recipient & Sender */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="recipientInput"
                  className="mb-1.5 block text-xs font-semibold text-[var(--text-secondary)]"
                >
                  {t.recipientLabel}
                </label>
                <input
                  id="recipientInput"
                  type="text"
                  maxLength={60}
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder={t.recipientPlaceholder}
                  className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-soft)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:bg-[var(--bg-surface)] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="senderInput"
                  className="mb-1.5 block text-xs font-semibold text-[var(--text-secondary)]"
                >
                  {t.senderLabel}
                </label>
                <input
                  id="senderInput"
                  type="text"
                  maxLength={60}
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                  placeholder={t.senderPlaceholder}
                  className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-soft)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:bg-[var(--bg-surface)] focus:outline-none"
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="messageInput"
                className="mb-1.5 block text-xs font-semibold text-[var(--text-secondary)]"
              >
                {t.messageLabel}
              </label>

              <textarea
                id="messageInput"
                maxLength={260}
                rows={4}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setCustomEdited(true);
                }}
                className="w-full resize-y rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-soft)] px-3.5 py-2.5 text-sm leading-relaxed text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:bg-[var(--bg-surface)] focus:outline-none"
              />
            </div>

            {/* Quick Presets */}
            <div>
              <span className="mb-2 block text-xs font-semibold text-[var(--text-secondary)]">
                {t.presetsLabel}
              </span>
              <div className="flex flex-col gap-1.5">
                {occData.presets[lang].map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setMessage(preset);
                      setCustomEdited(true);
                    }}
                    className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3.5 py-2 text-start text-xs leading-relaxed text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Card Preview Column */}
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 lg:sticky lg:top-20 lg:col-span-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[var(--text-secondary)]">{t.previewTitle}</span>
          </div>

          <div
            className="relative flex aspect-[10/7] min-h-[250px] flex-col justify-between overflow-hidden rounded-2xl p-7 transition-all duration-300"
            style={{ background: activeStage.bg, color: activeStage.text }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 rounded-xl border-[1.5px]"
              style={{ borderColor: activeStage.line }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute end-6 top-5 opacity-20"
              style={{ color: activeStage.accent }}
            >
              <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.5a7.5 7.5 0 0 0 9.5 9.5A9.5 9.5 0 1 1 12 2.5Z" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <span
                className="inline-flex self-start rounded-full border px-3 py-1 text-xs font-bold"
                style={{ borderColor: activeStage.line, color: activeStage.accent }}
              >
                {occData.tag[lang]}
              </span>
              <div className="mt-1 text-base font-bold">{previewRecipientText}</div>
            </div>

            <p
              className={`relative z-10 my-3 break-words font-medium leading-relaxed ${
                lang === "ar" ? "font-serif-ar text-xl sm:text-2xl" : "text-base sm:text-lg"
              }`}
            >
              {previewMessageText}
            </p>

            <div
              className="relative z-10 flex items-end justify-between gap-3 border-t pt-3"
              style={{ borderColor: activeStage.line }}
            >
              <span className="text-sm font-bold" style={{ color: activeStage.accent }}>
                {previewSenderText}
              </span>
              <span className="text-[11px] opacity-80" style={{ color: activeStage.sub }}>
                {t.cardStamp}
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--accent-primary)] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[var(--accent-primary-hover)] transition-colors cursor-pointer whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              <span>{t.downloadBtn}</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#168a4d] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#127340] transition-colors whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t.whatsappBtn}</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-soft)] px-4 py-2.5 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors cursor-pointer whitespace-nowrap"
            >
              <Copy className="h-4 w-4" />
              <span>{t.copyBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
