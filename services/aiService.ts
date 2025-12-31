
import { supabase } from "./supabaseClient";
import { Surah, Verse } from "../types";

export async function getSurahInsights(surah: Surah) {
    try {
        const { data, error } = await supabase.functions.invoke('groq-insight', {
            body: { surah }
        });

        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Error fetching insights:", error);
        return null;
    }
}

export async function explainVerse(verse: Verse, surahName: string) {
    try {
        const { data, error } = await supabase.functions.invoke('groq-explanation', {
            body: { verse, surahName }
        });

        if (error) throw error;
        return data.text;
    } catch (error) {
        console.error("Error explaining verse:", error);
        return "Deep understanding is coming soon. Stay curious.";
    }
}
