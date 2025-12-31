
import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import SurahList from './components/SurahList';
import SurahReader from './components/SurahReader';
import SalahTracker from './components/SalahTracker';
import { AppScreen, UserProgress, Surah } from './types';
import { fetchSurahs } from './services/surahService';
import { getProgress, updateProgress, markSurahComplete } from './services/progressService';
import { QURAN_DATA } from './data/surahs';

// Inner app component that uses auth context
const AppContent: React.FC = () => {
  const { user, loading: authLoading } = useAuth();
  const [activeScreen, setActiveScreen] = useState<AppScreen>(AppScreen.DASHBOARD);
  const [surahs, setSurahs] = useState<Surah[]>(QURAN_DATA);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState<UserProgress>({
    completedSurahs: [],
    currentSurahId: null,
    dailyStreak: 0
  });
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);

  // Load data when user logs in
  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user]);

  const loadData = async () => {
    setLoading(true);
    try {
      // Load surahs
      const surahData = await fetchSurahs();
      if (surahData.length > 0) {
        setSurahs(surahData);
      }

      // Load progress from database
      const userProgress = await getProgress();
      if (userProgress) {
        setProgress(userProgress);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStartSurah = (surah: Surah) => {
    setSelectedSurah(surah);
    setActiveScreen(AppScreen.READER);
  };

  const handleCompleteSurah = async (id: number) => {
    const updatedProgress = await markSurahComplete(id);
    if (updatedProgress) {
      setProgress(updatedProgress);
    }
    setActiveScreen(AppScreen.DASHBOARD);
    setSelectedSurah(null);
  };

  const getNextSurah = () => {
    const nextIdx = progress.completedSurahs.length;
    return surahs[nextIdx] || surahs[surahs.length - 1];
  };

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F8FAF9]">
        <div className="w-16 h-16 border-4 border-[#2D5A4C] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Show login page if not authenticated
  if (!user) {
    return <LoginPage />;
  }

  // Show loading while fetching data
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F8FAF9]">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-[#2D5A4C] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-[#6B8E85]">Loading your journey...</p>
        </div>
      </div>
    );
  }

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
          surahs={surahs}
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
      {activeScreen === AppScreen.SALAH_TRACKER && (
        <SalahTracker />
      )}
      {activeScreen === AppScreen.INSIGHTS && (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center space-y-4">
          <div className="w-24 h-24 bg-[#E8F3F0] rounded-full flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-[#2D5A4C] border-dashed rounded-full animate-spin-slow"></div>
          </div>
          <h2 className="text-xl font-bold">Deep Insights Pending</h2>
          <p className="text-[#6B8E85] max-w-xs mx-auto">Continue your journey to unlock advanced spiritual metrics.</p>
        </div>
      )}
    </Layout>
  );
};

// Main App wrapped with AuthProvider
const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
