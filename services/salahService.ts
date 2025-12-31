
import { supabase } from "./supabaseClient";
import { PrayerLog, PrayerName } from "../types";

// Get today's date in YYYY-MM-DD format
export function getToday(): string {
    return new Date().toISOString().split('T')[0];
}

// Get the start of the week (Sunday)
export function getWeekStart(): string {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const diff = now.getDate() - dayOfWeek;
    const weekStart = new Date(now.setDate(diff));
    return weekStart.toISOString().split('T')[0];
}

// Get the start of the month
export function getMonthStart(): string {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
}

// Get or create today's prayer log
export async function getTodayLog(): Promise<PrayerLog | null> {
    const today = getToday();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
        .from('prayer_logs')
        .select('*')
        .eq('user_id', user.id)
        .eq('prayer_date', today)
        .single();

    if (error && error.code !== 'PGRST116') {
        console.error('Error fetching prayer log:', error);
        return null;
    }

    if (!data) {
        // Create a new log for today
        const newLog: PrayerLog = {
            prayer_date: today,
            fajr: false,
            dhuhr: false,
            asr: false,
            maghrib: false,
            isha: false
        };

        const { data: created, error: createError } = await supabase
            .from('prayer_logs')
            .insert({ ...newLog, user_id: user.id })
            .select()
            .single();

        if (createError) {
            console.error('Error creating prayer log:', createError);
            return null;
        }
        return created;
    }

    return data;
}

// Toggle a prayer
export async function togglePrayer(prayer: PrayerName, value: boolean): Promise<boolean> {
    const today = getToday();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { error } = await supabase
        .from('prayer_logs')
        .update({ [prayer]: value })
        .eq('user_id', user.id)
        .eq('prayer_date', today);

    if (error) {
        console.error('Error toggling prayer:', error);
        return false;
    }
    return true;
}

// Get weekly stats
export async function getWeeklyStats(): Promise<Record<PrayerName, { prayed: number; missed: number }> | null> {
    const weekStart = getWeekStart();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
        .from('prayer_logs')
        .select('*')
        .eq('user_id', user.id)
        .gte('prayer_date', weekStart);

    if (error) {
        console.error('Error fetching weekly stats:', error);
        return null;
    }

    const prayers: PrayerName[] = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    const totalDays = Math.min(7, new Date().getDay() + 1); // Days elapsed this week

    const stats = {} as Record<PrayerName, { prayed: number; missed: number }>;

    for (const prayer of prayers) {
        const prayed = data?.filter(log => log[prayer]).length || 0;
        stats[prayer] = {
            prayed,
            missed: totalDays - prayed
        };
    }

    return stats;
}

// Get monthly stats
export async function getMonthlyStats(): Promise<Record<PrayerName, { prayed: number; missed: number }> | null> {
    const monthStart = getMonthStart();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
        .from('prayer_logs')
        .select('*')
        .eq('user_id', user.id)
        .gte('prayer_date', monthStart);

    if (error) {
        console.error('Error fetching monthly stats:', error);
        return null;
    }

    const prayers: PrayerName[] = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    const totalDays = new Date().getDate(); // Days elapsed this month

    const stats = {} as Record<PrayerName, { prayed: number; missed: number }>;

    for (const prayer of prayers) {
        const prayed = data?.filter(log => log[prayer]).length || 0;
        stats[prayer] = {
            prayed,
            missed: totalDays - prayed
        };
    }

    return stats;
}
