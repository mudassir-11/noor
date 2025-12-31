
import { supabase } from "./supabaseClient";
import { UserProgress } from "../types";

// Get user progress from database
export async function getProgress(): Promise<UserProgress | null> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .single();

    if (error && error.code !== 'PGRST116') {
        console.error('Error fetching progress:', error);
        return null;
    }

    // If no record exists, create one
    if (!data) {
        const newProgress: UserProgress = {
            completedSurahs: [],
            currentSurahId: null,
            dailyStreak: 0
        };

        const { data: created, error: createError } = await supabase
            .from('user_progress')
            .insert({
                user_id: user.id,
                completed_surahs: [],
                daily_streak: 0
            })
            .select()
            .single();

        if (createError) {
            console.error('Error creating progress:', createError);
            return newProgress;
        }

        return {
            completedSurahs: created.completed_surahs || [],
            currentSurahId: null,
            dailyStreak: created.daily_streak || 0
        };
    }

    return {
        completedSurahs: data.completed_surahs || [],
        currentSurahId: null,
        dailyStreak: data.daily_streak || 0
    };
}

// Update user progress in database
export async function updateProgress(progress: UserProgress): Promise<boolean> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { error } = await supabase
        .from('user_progress')
        .update({
            completed_surahs: progress.completedSurahs,
            daily_streak: progress.dailyStreak,
            updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id);

    if (error) {
        console.error('Error updating progress:', error);
        return false;
    }
    return true;
}

// Mark a surah as complete
export async function markSurahComplete(surahId: number): Promise<UserProgress | null> {
    const progress = await getProgress();
    if (!progress) return null;

    if (!progress.completedSurahs.includes(surahId)) {
        progress.completedSurahs.push(surahId);
        progress.dailyStreak += 1;
        await updateProgress(progress);
    }

    return progress;
}
