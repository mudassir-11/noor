
import { supabase } from "./supabaseClient";
import { Surah, Verse } from "../types";

// Fetch all surahs with their verses from the database
export async function fetchSurahs(): Promise<Surah[]> {
    const { data: surahs, error: surahError } = await supabase
        .from('surahs')
        .select('*')
        .order('complexity', { ascending: true })
        .order('verses_count', { ascending: true });

    if (surahError) {
        console.error('Error fetching surahs:', surahError);
        return [];
    }

    const { data: verses, error: verseError } = await supabase
        .from('verses')
        .select('*')
        .order('number');

    if (verseError) {
        console.error('Error fetching verses:', verseError);
        return [];
    }

    // Group verses by surah_id
    const versesBySurah: Record<number, Verse[]> = {};
    for (const verse of verses || []) {
        if (!versesBySurah[verse.surah_id]) {
            versesBySurah[verse.surah_id] = [];
        }
        versesBySurah[verse.surah_id].push({
            id: verse.id,
            number: verse.number,
            text: verse.text,
            translation: verse.translation
        });
    }

    // Map to Surah type with verses
    return (surahs || []).map(s => ({
        id: s.id,
        number: s.number,
        name: s.name,
        englishName: s.english_name,
        meaning: s.meaning,
        versesCount: s.verses_count,
        complexity: s.complexity,
        description: s.description,
        verses: versesBySurah[s.id] || []
    }));
}

// Fetch a single surah by ID
export async function fetchSurahById(id: number): Promise<Surah | null> {
    const { data: surah, error: surahError } = await supabase
        .from('surahs')
        .select('*')
        .eq('id', id)
        .single();

    if (surahError || !surah) {
        console.error('Error fetching surah:', surahError);
        return null;
    }

    const { data: verses, error: verseError } = await supabase
        .from('verses')
        .select('*')
        .eq('surah_id', id)
        .order('number');

    if (verseError) {
        console.error('Error fetching verses:', verseError);
    }

    return {
        id: surah.id,
        number: surah.number,
        name: surah.name,
        englishName: surah.english_name,
        meaning: surah.meaning,
        versesCount: surah.verses_count,
        complexity: surah.complexity,
        description: surah.description,
        verses: (verses || []).map(v => ({
            id: v.id,
            number: v.number,
            text: v.text,
            translation: v.translation
        }))
    };
}
