
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import SurahList from './components/SurahList';
import SurahReader from './components/SurahReader';
import { AppScreen, UserProgress, Surah } from './types';
import { QURAN_DATA } from './data/surahs';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<AppScreen>(AppScreen.DASHBOARD);
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('nur_progress');
    return saved ? JSON.parse(saved) : {
      completedSurahs: [],
      currentSurahId: null,
      dailyStreak: 3 // Mocked for demo
    };
  });
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);

  useEffect(() => {
    localStorage.setItem('nur_progress', JSON.stringify(progress));
  }, [progress]);

  const handleStartSurah = (surah: Surah) => {
    setSelectedSurah(surah);
    setActiveScreen(AppScreen.READER);
  };

  const handleCompleteSurah = (id: number) => {
    setProgress(prev => {
      if (prev.completedSurahs.includes(id)) return prev;
      return {
        ...prev,
        completedSurahs: [...prev.completedSurahs, id],
        dailyStreak: prev.dailyStreak + (prev.completedSurahs.length === 0 ? 1 : 0) // Simplify for demo
      };
    });
    setActiveScreen(AppScreen.DASHBOARD);
    setSelectedSurah(null);
  };

  const getNextSurah = () => {
    const nextIdx = progress.completedSurahs.length;
    return QURAN_DATA[nextIdx] || QURAN_DATA[QURAN_DATA.length - 1];
  };

  return (
    <Layout activeScreen={activeScreen} onNavigate={setActiveScreen}>
      {activeScreen === AppScreen.DASHBOARD && (
        <Dashboard 
          progress={progress} 
          nextSurah={getNextSurah()} 
          onStart={handleStartSurah} 
        />
      )}
      {activeScreen === AppScreen.SURAH_LIST && (
        <SurahList 
          surahs={QURAN_DATA} 
          progress={progress} 
          onSelect={handleStartSurah} 
        />
      )}
      {activeScreen === AppScreen.READER && selectedSurah && (
        <SurahReader 
          surah={selectedSurah} 
          onBack={() => setActiveScreen(AppScreen.SURAH_LIST)} 
          onComplete={handleCompleteSurah}
        />
      )}
      {activeScreen === AppScreen.INSIGHTS && (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center space-y-4">
            <div className="w-24 h-24 bg-[#E8F3F0] rounded-full flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-[#2D5A4C] border-dashed rounded-full animate-spin-slow"></div>
            </div>
            <h2 className="text-xl font-bold">Deep Insights Pending</h2>
            <p className="text-[#6B8E85] max-w-xs mx-auto">Continue your journey to unlock advanced spiritual metrics and personalized learning paths.</p>
        </div>
      )}
    </Layout>
  );
};

export default App;
