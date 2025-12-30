
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

export enum AppScreen {
  DASHBOARD = 'DASHBOARD',
  SURAH_LIST = 'SURAH_LIST',
  READER = 'READER',
  INSIGHTS = 'INSIGHTS'
}
