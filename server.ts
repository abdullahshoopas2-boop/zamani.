import "dotenv/config";
import express from "express";
import type { Request, Response } from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;

function getAiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured on the server.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

interface IncomingMessage {
  role: "user" | "model";
  text: string;
}

interface GroundingSource {
  title: string;
  uri: string;
}

function extractGroundingSources(
  groundingChunks: Array<{ web?: { uri?: string; title?: string } }> | undefined
): GroundingSource[] {
  if (!Array.isArray(groundingChunks)) return [];
  const seen = new Set<string>();
  const sources: GroundingSource[] = [];
  for (const chunk of groundingChunks) {
    const uri = chunk?.web?.uri;
    const title = chunk?.web?.title;
    if (uri && !seen.has(uri)) {
      seen.add(uri);
      sources.push({
        uri,
        title: title || uri,
      });
    }
  }
  return sources;
}

function getLanguageInstruction(lang: string): string {
  if (lang === "ar") {
    return "Respond primarily in clear, eloquent Modern Standard Arabic (matching the user's language if they write in English or Hindi).";
  }
  if (lang === "hi") {
    return "Respond primarily in clear, natural Hindi (Devanagari script), matching the user's language if they write in Arabic or English.";
  }
  return "Respond primarily in clear, natural English (matching the user's language if they write in Arabic or Hindi).";
}

function buildSystemInstruction(
  lang: string,
  mode: string,
  countryName?: string
): string {
  const today = new Date().toISOString().slice(0, 10);
  const countryContext = countryName
    ? `The user currently has ${countryName} selected in their academic calendar panel.`
    : "";

  const modeRole =
    mode === "thinking"
      ? "You are operating in Deep Reasoning mode: analyze multi-step constraints carefully, compare calendars or dates systematically, and provide thorough, well-structured guidance."
      : mode === "fast"
      ? "You are operating in Fast Concise mode: provide crisp, accurate, and directly actionable answers."
      : "You are operating in Live Search-Grounded mode: verify recent official announcements, moon-sighting news, and Ministry of Education schedules with live search when applicable.";

  return [
    "You are Zamani Advisor (مستشار زماني), an expert cultural, astronomical, and academic calendar assistant for the Zamani web application.",
    `Today's reference date is ${today}. ${countryContext}`,
    modeRole,
    "Your specialties include:",
    "1. Islamic Hijri calendar (Umm al-Qura & regional moon sightings), Ramadan, Eid al-Fitr, Eid al-Adha, and Hijri-Gregorian conversions.",
    "2. Official school and university academic calendars across all 22 Arab League countries (Saudi Arabia, UAE, Egypt, Jordan, Qatar, Kuwait, Bahrain, Oman, Morocco, Algeria, Tunisia, Iraq, Lebanon, Palestine, Syria, Yemen, Libya, Sudan, Mauritania, Somalia, Djibouti, Comoros).",
    "3. Etiquette, study planning around Ramadan/exams, and culturally authentic Arabic, English, and Hindi greetings.",
    getLanguageInstruction(lang),
    "Format responses with clean Markdown headings, bullet points, or short paragraphs. Never fabricate exact official decree dates if uncertain—clearly distinguish astronomical estimates from confirmed moon sightings or official ministry decrees.",
  ].join("\n");
}

function parseApiError(err: unknown): { status: number; message: string } {
  const raw = err instanceof Error ? err.message : String(err);
  if (raw.includes("GEMINI_API_KEY")) {
    return {
      status: 500,
      message: "Server Gemini API key is not configured. Please check Settings > Secrets.",
    };
  }
  if (raw.includes("403") || raw.includes("PERMISSION_DENIED") || raw.includes("API_KEY_INVALID")) {
    return {
      status: 403,
      message: "Gemini API key permission denied or invalid. Please check Settings > Secrets.",
    };
  }
  if (raw.includes("429") || raw.includes("RESOURCE_EXHAUSTED")) {
    return {
      status: 429,
      message: "Gemini API rate limit reached. Please wait a moment and try again.",
    };
  }
  return {
    status: 500,
    message: raw || "Failed to generate AI response.",
  };
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: "1mb" }));

  // Health check
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok" });
  });

  // 1. Multi-turn Gemini Chat (Supports general + Google Search grounding, Deep Thinking, and Fast Lite)
  app.post("/api/chat", async (req: Request, res: Response) => {
    try {
      const body = req.body as {
        messages?: IncomingMessage[];
        mode?: "general" | "thinking" | "fast";
        lang?: "ar" | "en" | "hi";
        countryName?: string;
        useSearch?: boolean;
      };

      const messages = Array.isArray(body.messages) ? body.messages : [];
      if (messages.length === 0) {
        res.status(400).json({ error: "Messages array is required." });
        return;
      }

      const lastMessage = messages[messages.length - 1];
      if (!lastMessage || lastMessage.role !== "user" || !lastMessage.text?.trim()) {
        res.status(400).json({ error: "Last message must be a non-empty user message." });
        return;
      }

      const mode = body.mode === "thinking" || body.mode === "fast" ? body.mode : "general";
      const lang = body.lang === "en" || body.lang === "hi" ? body.lang : "ar";
      const useSearch = body.useSearch !== false;

      const ai = getAiClient();
      const systemInstruction = buildSystemInstruction(lang, mode, body.countryName);

      // Build history from all previous turns (excluding the latest user prompt)
      const history = messages.slice(0, -1).map((m) => ({
        role: m.role,
        parts: [{ text: String(m.text ?? "") }],
      }));

      let model = "gemini-4-hydrogen";
      const config: {
        systemInstruction: string;
        tools?: Array<{ googleSearch: Record<string, never> }>;
        thinkingConfig?: { thinkingLevel: ThinkingLevel };
      } = {
        systemInstruction,
      };

      if (mode === "fast") {
        model = "gemini-3.1-flash-lite";
      } else if (mode === "thinking") {
        model = "gemini-4-hydrogen";
        config.thinkingConfig = {
          thinkingLevel: ThinkingLevel.HIGH,
        };
      } else {
        model = "gemini-4-hydrogen";
        if (useSearch) {
          config.tools = [{ googleSearch: {} }];
        }
      }

      const chat = ai.chats.create({
        model,
        config,
        history,
      });

      const response = await chat.sendMessage({
        message: lastMessage.text.trim(),
      });

      const text = response.text ?? "";
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks as
        | Array<{ web?: { uri?: string; title?: string } }>
        | undefined;
      const sources = extractGroundingSources(groundingChunks);

      res.json({
        text,
        sources,
        modelUsed: model,
        thinkingLevel: mode === "thinking" ? "HIGH" : undefined,
      });
    } catch (err) {
      const parsed = parseApiError(err);
      res.status(parsed.status).json({ error: parsed.message });
    }
  });

  // 2. Search-Grounded Live Calendar Verification (gemini-4-hydrogen + googleSearch)
  app.post("/api/verify-calendar", async (req: Request, res: Response) => {
    try {
      const body = req.body as {
        topic?: "islamic" | "academic";
        countryName?: string;
        lang?: "ar" | "en" | "hi";
      };

      const topic = body.topic === "academic" ? "academic" : "islamic";
      const lang = body.lang === "en" || body.lang === "hi" ? body.lang : "ar";
      const countryName = typeof body.countryName === "string" ? body.countryName.trim() : "";
      const today = new Date().toISOString().slice(0, 10);

      const ai = getAiClient();

      const prompt =
        topic === "academic"
          ? `Today is ${today}. Look up the latest official 2026-2027 Ministry of Education school academic calendar for ${countryName || "Saudi Arabia"} (semester/term end dates, mid-year break, and final academic year end date). Provide a concise, structured summary in ${lang === "ar" ? "Arabic" : lang === "hi" ? "Hindi" : "English"} with exact dates and clarify if any dates are ministry-confirmed vs estimated.`
          : `Today is ${today}. Look up the latest astronomical predictions and official calendar dates for the upcoming Ramadan 1448 AH (2027), Eid al-Fitr 1448 AH (2027), and Eid al-Adha 1448 AH (2027). Provide a clear, concise summary in ${lang === "ar" ? "Arabic" : lang === "hi" ? "Hindi" : "English"} noting moon-sighting variance.`;

      const response = await ai.models.generateContent({
        model: "gemini-4-hydrogen",
        contents: prompt,
        config: {
          systemInstruction: getLanguageInstruction(lang),
          tools: [{ googleSearch: {} }],
        },
      });

      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks as
        | Array<{ web?: { uri?: string; title?: string } }>
        | undefined;
      const sources = extractGroundingSources(groundingChunks);

      res.json({
        summary: response.text ?? "",
        sources,
        verifiedAt: new Date().toISOString(),
      });
    } catch (err) {
      const parsed = parseApiError(err);
      res.status(parsed.status).json({ error: parsed.message });
    }
  });

  // 3. Fast AI Greeting Composer (gemini-3.1-flash-lite)
  app.post("/api/compose-greeting", async (req: Request, res: Response) => {
    try {
      const body = req.body as {
        occasion?: string;
        recipient?: string;
        sender?: string;
        tone?: "warm" | "formal" | "poetic";
        lang?: "ar" | "en" | "hi";
      };

      const lang = body.lang === "en" || body.lang === "hi" ? body.lang : "ar";
      const occasion = String(body.occasion || "Ramadan").slice(0, 80);
      const recipient = String(body.recipient || "").slice(0, 60);
      const sender = String(body.sender || "").slice(0, 60);
      const tone = body.tone === "formal" || body.tone === "poetic" ? body.tone : "warm";

      const ai = getAiClient();
      const targetLangName = lang === "ar" ? "Arabic" : lang === "hi" ? "Hindi (Devanagari)" : "English";

      const prompt = [
        `Write one heartfelt, original greeting card message in ${targetLangName}.`,
        `Occasion: ${occasion}.`,
        `Tone: ${tone}.`,
        recipient ? `Addressed to: ${recipient} (weave naturally if appropriate, or keep universal).` : "",
        sender ? `From: ${sender} (do not add signature line 'From:', only the message body).` : "",
        "Requirements: 1 to 2 sentences only, maximum 220 characters, no quotation marks, no emojis unless subtle, ready to print directly on a luxury greeting card.",
      ]
        .filter(Boolean)
        .join(" ");

      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: prompt,
        config: {
          systemInstruction:
            "You are a refined multilingual greeting card writer. Output only the greeting message text itself without commentary or quotes.",
        },
      });

      const message = (response.text ?? "").trim().replace(/^["«“]|["»”]$/g, "");
      res.json({ message });
    } catch (err) {
      const parsed = parseApiError(err);
      res.status(parsed.status).json({ error: parsed.message });
    }
  });

  // Vite dev middleware vs static production serving
  const isProduction = process.env.NODE_ENV === "production";
  if (!isProduction) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get("*", (_req: Request, res: Response) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Zamani server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
