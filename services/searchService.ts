
import { supabase } from './supabaseClient';
import { Verse, Surah } from '../types';

export interface SearchResult {
    surah_id: number;
    surah_name: string;
    surah_english_name: string;
    verse_number: number;
    verse_text: string;
    translation: string;
}

// Search verses in the database
export async function searchVerses(query: string): Promise<SearchResult[]> {
    if (!query || query.length < 2) return [];

    const searchTerm = query.toLowerCase().trim();

    try {
        // Search in the verses table for translations containing the search term
        const { data: verses, error } = await supabase
            .from('verses')
            .select(`
        id,
        verse_number,
        text,
        translation,
        surah_id,
        surahs!inner (
          id,
          name,
          english_name
        )
      `)
            .ilike('translation', `%${searchTerm}%`)
            .limit(20);

        if (error) {
            console.error('Search error:', error);
            return [];
        }

        if (!verses) return [];

        return verses.map((v: any) => ({
            surah_id: v.surah_id,
            surah_name: v.surahs.name,
            surah_english_name: v.surahs.english_name,
            verse_number: v.verse_number,
            verse_text: v.text,
            translation: v.translation
        }));
    } catch (error) {
        console.error('Search error:', error);
        return [];
    }
}

// Search in local data (fallback when database search fails)
export function searchLocalVerses(query: string, surahs: Surah[]): SearchResult[] {
    if (!query || query.length < 2) return [];

    const searchTerm = query.toLowerCase().trim();
    const results: SearchResult[] = [];

    for (const surah of surahs) {
        for (const verse of surah.verses) {
            if (
                verse.translation.toLowerCase().includes(searchTerm) ||
                verse.text.includes(query) // Arabic search
            ) {
                results.push({
                    surah_id: surah.id,
                    surah_name: surah.name,
                    surah_english_name: surah.englishName,
                    verse_number: verse.number,
                    verse_text: verse.text,
                    translation: verse.translation
                });

                if (results.length >= 20) return results;
            }
        }
    }

    return results;
}

// Highlight search term in text
export function highlightText(text: string, query: string): string {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}
