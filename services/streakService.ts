
import { supabase } from './supabaseClient';

export interface StreakData {
    currentStreak: number;
    longestStreak: number;
    lastReadDate: string | null;
    totalDaysRead: number;
    thisWeekDays: number[];  // Array of day numbers this week that user read
}

// Get today's date in YYYY-MM-DD format
function getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
}

// Get start of current week (Sunday)
function getWeekStart(): Date {
    const now = new Date();
    const day = now.getDay();
    const diff = now.getDate() - day;
    return new Date(now.setDate(diff));
}

// Calculate streak from reading history
export async function getStreakData(): Promise<StreakData> {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return {
            currentStreak: 0,
            longestStreak: 0,
            lastReadDate: null,
            totalDaysRead: 0,
            thisWeekDays: []
        };
    }

    // Get reading history from database
    const { data: readings, error } = await supabase
        .from('reading_history')
        .select('read_date')
        .eq('user_id', user.id)
        .order('read_date', { ascending: false });

    if (error || !readings || readings.length === 0) {
        return {
            currentStreak: 0,
            longestStreak: 0,
            lastReadDate: null,
            totalDaysRead: 0,
            thisWeekDays: []
        };
    }

    // Get unique dates
    const uniqueDates = [...new Set(readings.map(r => r.read_date))].sort().reverse();
    const today = getTodayDate();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    // Calculate current streak
    let currentStreak = 0;
    let checkDate = new Date(today);

    // If last read was today or yesterday, start counting
    if (uniqueDates[0] === today || uniqueDates[0] === yesterdayStr) {
        for (const dateStr of uniqueDates) {
            const expectedDate = checkDate.toISOString().split('T')[0];
            if (dateStr === expectedDate) {
                currentStreak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else if (dateStr < expectedDate) {
                // Gap in reading, streak broken
                break;
            }
        }
    }

    // Calculate longest streak
    let longestStreak = 0;
    let tempStreak = 1;
    const sortedDates = [...uniqueDates].sort();

    for (let i = 1; i < sortedDates.length; i++) {
        const prevDate = new Date(sortedDates[i - 1]);
        const currDate = new Date(sortedDates[i]);
        const diffDays = Math.round((currDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            tempStreak++;
        } else {
            longestStreak = Math.max(longestStreak, tempStreak);
            tempStreak = 1;
        }
    }
    longestStreak = Math.max(longestStreak, tempStreak, currentStreak);

    // Calculate this week's reading days
    const weekStart = getWeekStart();
    const thisWeekDays: number[] = [];

    for (const dateStr of uniqueDates) {
        const date = new Date(dateStr);
        if (date >= weekStart) {
            thisWeekDays.push(date.getDay());
        }
    }

    return {
        currentStreak,
        longestStreak,
        lastReadDate: uniqueDates[0] || null,
        totalDaysRead: uniqueDates.length,
        thisWeekDays: [...new Set(thisWeekDays)]
    };
}

// Record that user read today
export async function recordReading(): Promise<boolean> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const today = getTodayDate();

    // Check if already recorded today
    const { data: existing } = await supabase
        .from('reading_history')
        .select('id')
        .eq('user_id', user.id)
        .eq('read_date', today)
        .single();

    if (existing) {
        // Already recorded today
        return true;
    }

    // Insert new record
    const { error } = await supabase
        .from('reading_history')
        .insert({ user_id: user.id, read_date: today });

    if (error) {
        console.error('Error recording reading:', error);
        return false;
    }

    return true;
}
