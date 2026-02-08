import React from 'react';

export interface Verse {
  id: number;
  number: number;
  text: string;
  translation: string;
}

export interface Surah {
  id: number;
  number: number;
  name: string;
  englishName: string;
  meaning: string;
  versesCount: number;
  complexity: number; // 1 to 5
  description: string;
  verses: Verse[];
}

export interface UserProgress {
  completedSurahs: number[]; // IDs
  currentSurahId: number | null;
  dailyStreak: number;
}

export interface PrayerLog {
  id?: string;
  user_id?: string;
  prayer_date: string; // YYYY-MM-DD
  fajr: boolean;
  dhuhr: boolean;
  asr: boolean;
  maghrib: boolean;
  isha: boolean;
}

export type PrayerName = 'fajr' | 'dhuhr' | 'asr' | 'maghrib' | 'isha';

export const PRAYER_NAMES: PrayerName[] = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];

export const PRAYER_LABELS: Record<PrayerName, string> = {
  fajr: 'Fajr',
  dhuhr: 'Dhuhr',
  asr: 'Asr',
  maghrib: 'Maghrib',
  isha: 'Isha'
};

export enum AppScreen {
  DASHBOARD = 'DASHBOARD',
  SURAH_LIST = 'SURAH_LIST',
  READER = 'READER',
  INSIGHTS = 'INSIGHTS',
  SALAH_TRACKER = 'SALAH_TRACKER',
  BOOKMARKS = 'BOOKMARKS',
  PRAYER_TIMES = 'PRAYER_TIMES',
  SEARCH = 'SEARCH',
  SUNNAH = 'SUNNAH',
  SETTINGS = 'SETTINGS'
}

export interface Sunnah {
  id: number;
  title: string;
  arabic: string | null;
  description: string;
  category: 'morning' | 'eating' | 'sleeping' | 'general' | 'cleanliness';
  reference: string;
}

export interface Mood {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  verses: {
    surah: number;
    verse: number;
  }[];
}

// Names of Allah (Asma ul Husna) types
export interface QuranReference {
  surah: number;
  verse: number;
  text: string;
}

export interface Dua {
  arabic: string;
  transliteration: string;
  meaning: string;
}

export interface NameOfAllah {
  id: number;
  number: number;
  arabic: string;
  transliteration: string;
  meaning: string;
  description: string | null;
  quran_references: QuranReference[] | null;
  duas: Dua[] | null;
  practical_application: string | null;
}
