import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Simple health check
app.get("/", (req, res) => {
  res.send("Statistics chatbot API is running.");
});

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = req.body.message || "";

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a friendly statistics tutor. Only answer questions about statistics, probability, data analysis, and related topics. If the user asks about other things, politely say you only handle statistics questions. Use clear, simple explanations suitable for undergraduate students."
        },
        {
          role: "user",
          content: userMessage
        }
      ]
    });

    const reply = response.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Error contacting ChatGPT API."
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Stats chatbot API listening on port ${port}`);
});

