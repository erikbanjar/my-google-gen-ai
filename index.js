import { GoogleGenAI } from "@google/genai";

// ditaruh di .env
const ai = new GoogleGenAI({ apiKey: "AIzaSyB64nhc_odh1iF_iJzZOSwNMkRnggUsws0" });

async function main() {
    const model = await ai.models.get({ model: "gemini-2.0-flash" });
    const result = await model


  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Say Hi from ErikBanjar and let me hear your whisper!",
  });
  console.log(response.text);
}

// Prompt: "Say Hi from ErikBanjar and let me hear your whisper!"

await main();

// 2 jenis import syntax
// CommonJS --> require () untuk import, module.exports untuk export
// ES Module --> import untuk import, export untuk export