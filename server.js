import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/assistant", async (req, res) => {
  try {
    const { question } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a cross-platform command assistant.

User question: ${question}

Return ONLY this format:

Linux:
<best linux command>

Windows CMD:
<best windows cmd command>

PowerShell:
<best powershell command>

Safety:
Safe/Caution/Dangerous

Risk:
<1-10>

Explanation:
<one short sentence>

Rules:
- Give commands for all 3 platforms.
- Keep commands short.
- Do not give tutorials.
- If deleting, formatting, sudo/admin, permissions, or system changes are involved, mark Caution or Dangerous.
- Never say extra text outside the format.`,
    });

    res.json({ answer: response.text });
  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ error: "Gemini request failed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});