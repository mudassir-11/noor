import { supabase } from "./supabaseClient";
import { NameOfAllah } from "../types";

// Fetch all 99 Names of Allah
export async function fetchAllNames(): Promise<NameOfAllah[]> {
    const { data, error } = await supabase
        .from('names_of_allah')
        .select('*')
        .order('number', { ascending: true });

    if (error) {
        console.error('Error fetching Names of Allah:', error);
        return [];
    }

    return data || [];
}

// Fetch a single name by ID
export async function fetchNameById(id: number): Promise<NameOfAllah | null> {
    const { data, error } = await supabase
        .from('names_of_allah')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching name:', error);
        return null;
    }

    return data;
}

// Get the Name of the Day based on day of year (cycles through 99)
export function getNameOfDay(names: NameOfAllah[]): NameOfAllah | null {
    if (names.length === 0) return null;

    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

    // Cycle through 99 names
    const index = dayOfYear % 99;
    return names[index] || names[0];
}
