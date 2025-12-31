
import { supabase } from "./supabaseClient";

export interface Bookmark {
    id?: string;
    user_id?: string;
    surah_id: number;
    surah_name: string;
    verse_number: number;
    verse_text: string;
    translation: string;
    created_at?: string;
}

// Get all bookmarks for user
export async function getBookmarks(): Promise<Bookmark[]> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching bookmarks:', error);
        return [];
    }

    return data || [];
}

// Add a bookmark
export async function addBookmark(bookmark: Omit<Bookmark, 'id' | 'user_id' | 'created_at'>): Promise<boolean> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    // Check if already bookmarked
    const { data: existing } = await supabase
        .from('bookmarks')
        .select('id')
        .eq('user_id', user.id)
        .eq('surah_id', bookmark.surah_id)
        .eq('verse_number', bookmark.verse_number)
        .single();

    if (existing) {
        // Already bookmarked
        return true;
    }

    const { error } = await supabase
        .from('bookmarks')
        .insert({ ...bookmark, user_id: user.id });

    if (error) {
        console.error('Error adding bookmark:', error);
        return false;
    }
    return true;
}

// Remove a bookmark
export async function removeBookmark(surahId: number, verseNumber: number): Promise<boolean> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { error } = await supabase
        .from('bookmarks')
        .delete()
        .eq('user_id', user.id)
        .eq('surah_id', surahId)
        .eq('verse_number', verseNumber);

    if (error) {
        console.error('Error removing bookmark:', error);
        return false;
    }
    return true;
}

// Check if a verse is bookmarked
export async function isBookmarked(surahId: number, verseNumber: number): Promise<boolean> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { data } = await supabase
        .from('bookmarks')
        .select('id')
        .eq('user_id', user.id)
        .eq('surah_id', surahId)
        .eq('verse_number', verseNumber)
        .single();

    return !!data;
}

// Toggle bookmark
export async function toggleBookmark(bookmark: Omit<Bookmark, 'id' | 'user_id' | 'created_at'>): Promise<boolean> {
    const isAlreadyBookmarked = await isBookmarked(bookmark.surah_id, bookmark.verse_number);

    if (isAlreadyBookmarked) {
        return removeBookmark(bookmark.surah_id, bookmark.verse_number);
    } else {
        return addBookmark(bookmark);
    }
}
