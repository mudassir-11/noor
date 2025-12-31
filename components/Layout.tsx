
import React from 'react';
import { Home, BookOpen, Moon, Sun, Bookmark, Clock } from 'lucide-react';
import { AppScreen } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeScreen, onNavigate }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto shadow-2xl relative" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Header */}
      <header className="p-6 pb-2 sticky top-0 backdrop-blur-md z-10 flex items-center justify-between" style={{ backgroundColor: isDark ? 'rgba(15, 26, 24, 0.8)' : 'rgba(248, 250, 249, 0.8)' }}>
        <div>
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--accent)' }}>Nur</h1>
          <p className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>Enlighten Your Journey</p>
        </div>
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--accent)' }}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 px-6 pb-32">
        {children}
      </main>

      {/* Tab Bar */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[calc(28rem-3rem)] rounded-3xl p-3 flex justify-around items-center shadow-xl z-20 transition-all" style={{ backgroundColor: isDark ? '#1A2F2B' : '#1A2F2B' }}>
        <button
          onClick={() => onNavigate(AppScreen.DASHBOARD)}
          className={`p-3 rounded-2xl transition-all ${activeScreen === AppScreen.DASHBOARD ? 'shadow-lg' : 'hover:text-white'}`}
          style={{
            backgroundColor: activeScreen === AppScreen.DASHBOARD ? 'var(--accent)' : 'transparent',
            color: activeScreen === AppScreen.DASHBOARD ? 'white' : '#6B8E85'
          }}
        >
          <Home size={22} />
        </button>
        <button
          onClick={() => onNavigate(AppScreen.SURAH_LIST)}
          className={`p-3 rounded-2xl transition-all ${activeScreen === AppScreen.SURAH_LIST ? 'shadow-lg' : 'hover:text-white'}`}
          style={{
            backgroundColor: activeScreen === AppScreen.SURAH_LIST ? 'var(--accent)' : 'transparent',
            color: activeScreen === AppScreen.SURAH_LIST ? 'white' : '#6B8E85'
          }}
        >
          <BookOpen size={22} />
        </button>
        <button
          onClick={() => onNavigate(AppScreen.SALAH_TRACKER)}
          className={`p-3 rounded-2xl transition-all ${activeScreen === AppScreen.SALAH_TRACKER ? 'shadow-lg' : 'hover:text-white'}`}
          style={{
            backgroundColor: activeScreen === AppScreen.SALAH_TRACKER ? 'var(--accent)' : 'transparent',
            color: activeScreen === AppScreen.SALAH_TRACKER ? 'white' : '#6B8E85'
          }}
        >
          <Moon size={22} />
        </button>
        <button
          onClick={() => onNavigate(AppScreen.BOOKMARKS)}
          className={`p-3 rounded-2xl transition-all ${activeScreen === AppScreen.BOOKMARKS ? 'shadow-lg' : 'hover:text-white'}`}
          style={{
            backgroundColor: activeScreen === AppScreen.BOOKMARKS ? 'var(--accent)' : 'transparent',
            color: activeScreen === AppScreen.BOOKMARKS ? 'white' : '#6B8E85'
          }}
        >
          <Bookmark size={22} />
        </button>
        <button
          onClick={() => onNavigate(AppScreen.PRAYER_TIMES)}
          className={`p-3 rounded-2xl transition-all ${activeScreen === AppScreen.PRAYER_TIMES ? 'shadow-lg' : 'hover:text-white'}`}
          style={{
            backgroundColor: activeScreen === AppScreen.PRAYER_TIMES ? 'var(--accent)' : 'transparent',
            color: activeScreen === AppScreen.PRAYER_TIMES ? 'white' : '#6B8E85'
          }}
        >
          <Clock size={22} />
        </button>
      </nav>
    </div>
  );
};

export default Layout;
