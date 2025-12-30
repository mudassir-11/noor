
import { GoogleGenAI, Type } from "@google/genai";
import { Surah, Verse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getSurahInsights(surah: Surah) {
  const prompt = `Provide a spiritual insight and historical context for Surah ${surah.englishName} (${surah.name}).
  The meaning of the name is "${surah.meaning}". 
  The verses include themes like ${surah.description}.
  
  Please provide the response in the following JSON format:
  {
    "summary": "A concise summary of the surah's main message",
    "historicalContext": "The background and period of revelation",
    "spiritualLesson": "One key takeaway for the learner today",
    "keyVocabulary": [
      {"word": "Arabic Word", "meaning": "English Meaning"}
    ]
  }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            historicalContext: { type: Type.STRING },
            spiritualLesson: { type: Type.STRING },
            keyVocabulary: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  word: { type: Type.STRING },
                  meaning: { type: Type.STRING }
                },
                required: ["word", "meaning"]
              }
            }
          },
          required: ["summary", "historicalContext", "spiritualLesson", "keyVocabulary"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error fetching Gemini insights:", error);
    return null;
  }
}

export async function explainVerse(verse: Verse, surahName: string) {
    const prompt = `Explain verse ${verse.number} of Surah ${surahName}:
    Arabic: "${verse.text}"
    Translation: "${verse.translation}"
    
    Explain the deeper meaning of this verse in a calm and encouraging way for someone who is learning Quran. Keep it under 100 words.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt
        });
        return response.text;
    } catch (error) {
        return "Deep understanding is coming soon. Stay curious.";
    }
}
