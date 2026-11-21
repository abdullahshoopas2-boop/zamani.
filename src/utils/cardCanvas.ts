import { CARD_OCCASIONS, I18N } from "../data/zamaniData";
import type { CardOccasionKey, CardThemeId, Language } from "../types/zamani";

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const paragraphs = text.split(/\n+/);
  const lines: string[] = [];
  paragraphs.forEach((para) => {
    const words = para.trim().split(/\s+/);
    let current = "";
    words.forEach((word) => {
      const testLine = current ? `${current} ${word}` : word;
      if (ctx.measureText(testLine).width > maxWidth && current) {
        lines.push(current);
        current = word;
      } else {
        current = testLine;
      }
    });
    if (current) lines.push(current);
  });
  return lines.slice(0, 6);
}

export async function exportGreetingCardPng(params: {
  lang: Language;
  occasion: CardOccasionKey;
  cardTheme: CardThemeId;
  recipient: string;
  sender: string;
  message: string;
}): Promise<void> {
  const { lang, occasion, cardTheme, recipient, sender, message } = params;

  if (document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch {
      // ignore font loading timeout
    }
  }

  const t = I18N[lang];
  const occ = CARD_OCCASIONS[occasion];
  const recipientVal = `${t.recipientPrefix}${recipient.trim() || t.defaultRecipient}`;
  const senderVal = `${t.senderPrefix}${sender.trim() || t.defaultSender}`;
  const msgVal = message.trim() || occ.presets[lang][0];
  const tagText = occ.tag[lang];
  const isRTL = lang === "ar";

  const width = 1400;
  const height = 980;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const palettes: Record<
    CardThemeId,
    { bg1: string; bg2: string; bg3: string; text: string; accent: string; line: string; sub: string }
  > = {
    emerald: {
      bg1: "#188b76",
      bg2: "#0d5447",
      bg3: "#07342c",
      text: "#f8f5ec",
      accent: "#ebd08c",
      line: "rgba(235, 198, 120, 0.5)",
      sub: "rgba(248, 245, 236, 0.78)",
    },
    ivory: {
      bg1: "#fffdf8",
      bg2: "#f5efe1",
      bg3: "#e8dec8",
      text: "#1c2421",
      accent: "#9a6c1d",
      line: "rgba(181, 132, 47, 0.42)",
      sub: "#4d5552",
    },
    midnight: {
      bg1: "#23324d",
      bg2: "#131c2e",
      bg3: "#0a0f19",
      text: "#f4f2eb",
      accent: "#e6bf72",
      line: "rgba(217, 174, 95, 0.48)",
      sub: "rgba(244, 242, 235, 0.76)",
    },
    sand: {
      bg1: "#ede3d6",
      bg2: "#dfd2bf",
      bg3: "#cfbe9f",
      text: "#24211c",
      accent: "#0f6b5b",
      line: "rgba(15, 107, 91, 0.38)",
      sub: "#4f483e",
    },
  };

  const pal = palettes[cardTheme] || palettes.emerald;

  const grad = ctx.createRadialGradient(
    isRTL ? width * 0.85 : width * 0.15,
    height * 0.15,
    60,
    width * 0.5,
    height * 0.5,
    width * 0.9
  );
  grad.addColorStop(0, pal.bg1);
  grad.addColorStop(0.55, pal.bg2);
  grad.addColorStop(1, pal.bg3);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = pal.line;
  ctx.lineWidth = 3;
  roundRect(ctx, 42, 42, width - 84, height - 84, 28);
  ctx.stroke();

  ctx.lineWidth = 1.2;
  roundRect(ctx, 56, 56, width - 112, height - 112, 20);
  ctx.stroke();

  const moonX = isRTL ? 165 : width - 165;
  const moonY = 165;
  ctx.save();
  ctx.fillStyle = pal.accent;
  ctx.globalAlpha = 0.22;
  ctx.beginPath();
  ctx.arc(moonX, moonY, 54, 0.4, Math.PI * 1.85);
  ctx.arc(moonX + (isRTL ? -20 : 20), moonY - 12, 44, Math.PI * 1.75, 0.5, true);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  const fontFamily =
    lang === "ar"
      ? '"IBM Plex Sans Arabic", "Amiri", sans-serif'
      : lang === "hi"
      ? '"Noto Sans Devanagari", sans-serif'
      : '"Plus Jakarta Sans", sans-serif';

  const bodyFontFamily =
    lang === "ar" ? '"Amiri", "IBM Plex Sans Arabic", serif' : fontFamily;

  ctx.direction = isRTL ? "rtl" : "ltr";
  ctx.textAlign = isRTL ? "right" : "left";
  const marginX = isRTL ? width - 110 : 110;
  const maxTextWidth = width - 220;

  ctx.font = `700 28px ${fontFamily}`;
  const tagMetrics = ctx.measureText(tagText);
  const pillW = tagMetrics.width + 58;
  const pillH = 54;
  const pillX = isRTL ? marginX - pillW : marginX;
  const pillY = 112;

  ctx.strokeStyle = pal.line;
  ctx.lineWidth = 2;
  roundRect(ctx, pillX, pillY, pillW, pillH, 27);
  ctx.stroke();

  ctx.fillStyle = pal.accent;
  ctx.textBaseline = "middle";
  ctx.fillText(tagText, isRTL ? marginX - 29 : marginX + 29, pillY + pillH / 2 + 1);

  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = pal.text;
  ctx.font = `700 42px ${fontFamily}`;
  ctx.fillText(recipientVal, marginX, 245, maxTextWidth);

  ctx.fillStyle = pal.text;
  const bodyFontSize = lang === "ar" ? 54 : 42;
  const lineHeight = lang === "ar" ? 86 : 66;
  ctx.font = `500 ${bodyFontSize}px ${bodyFontFamily}`;

  const lines = wrapText(ctx, msgVal, maxTextWidth);
  const totalBlockHeight = lines.length * lineHeight;
  const startY = Math.max(350, (height - totalBlockHeight) / 2 + 25);

  lines.forEach((line, idx) => {
    ctx.fillText(line, marginX, startY + idx * lineHeight);
  });

  ctx.strokeStyle = pal.line;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(110, height - 165);
  ctx.lineTo(width - 110, height - 165);
  ctx.stroke();

  ctx.fillStyle = pal.accent;
  ctx.font = `700 34px ${fontFamily}`;
  ctx.fillText(senderVal, marginX, height - 105, maxTextWidth * 0.65);

  ctx.fillStyle = pal.sub;
  ctx.font = `500 24px ${fontFamily}`;
  ctx.textAlign = isRTL ? "left" : "right";
  ctx.fillText(t.cardStamp, isRTL ? 110 : width - 110, height - 105);

  const link = document.createElement("a");
  link.download = `zamani-card-${occasion}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}
