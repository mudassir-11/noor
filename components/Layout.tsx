
import React from 'react';
import { Home, BookOpen, Moon, Star, Settings, Heart } from 'lucide-react';
import { AppScreen } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeScreen, onNavigate }) => {
  const { isDark } = useTheme();

  // Page titles and descriptions
  const pageTitles: Record<AppScreen, { title: string; subtitle?: string }> = {
    [AppScreen.DASHBOARD]: { title: 'Noor', subtitle: 'Enlighten Your Journey' },
    [AppScreen.SURAH_LIST]: { title: 'Quran', subtitle: 'Read & Learn' },
    [AppScreen.READER]: { title: 'Quran', subtitle: 'Read & Learn' },
    [AppScreen.SUNNAH]: { title: 'Sunnah', subtitle: 'Prophetic Traditions' },
    [AppScreen.SALAH_TRACKER]: { title: 'Salah', subtitle: 'Prayer & Tracker' },
    [AppScreen.PRAYER_TIMES]: { title: 'Prayer Times', subtitle: 'Times & Masjids' },
    [AppScreen.DUAS]: { title: 'Duas', subtitle: 'Supplications' },
    [AppScreen.LEARN_SALAH]: { title: 'Learn Salah', subtitle: 'Step by Step Guide' },
    [AppScreen.BOOKMARKS]: { title: 'Bookmarks', subtitle: 'Your Saved Verses' },
    [AppScreen.SEARCH]: { title: 'Search', subtitle: 'Find Verses' },
    [AppScreen.SETTINGS]: { title: 'Settings', subtitle: 'Preferences' },
    [AppScreen.INSIGHTS]: { title: 'Insights', subtitle: 'Your Progress' },
  };

  const currentPage = pageTitles[activeScreen] || { title: 'Noor' };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto shadow-2xl relative" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Header */}
      <header className="p-6 pb-4 sticky top-0 z-10 flex items-center justify-between transition-all duration-300 backdrop-blur-xl"
        style={{
          borderBottom: '1px solid var(--glass-border)',
          backgroundColor: 'rgba(var(--bg-primary), 0.5)',
          marginBottom: '8px'
        }}>
        <div>
          {activeScreen === AppScreen.DASHBOARD ? (
            <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]">
              Noor
            </h1>
          ) : (
            <h1 className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>
              {currentPage.title}
            </h1>
          )}
          {currentPage.subtitle && (
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mt-1 opacity-80" style={{ color: 'var(--text-secondary)' }}>
              {currentPage.subtitle}
            </p>
          )}
        </div>
        <button
          onClick={() => onNavigate(AppScreen.SETTINGS)}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 shadow-sm border border-[var(--glass-border)]"
          style={{
            backgroundColor: activeScreen === AppScreen.SETTINGS ? 'var(--accent)' : 'var(--bg-secondary)',
            color: activeScreen === AppScreen.SETTINGS ? 'white' : 'var(--accent)'
          }}
          title="Settings"
        >
          <Settings size={20} />
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 px-6 pb-32">
        {children}
      </main>

      {/* Tab Bar */}
      {/* Glass Tab Bar */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[calc(28rem-3rem)] rounded-[2rem] p-2 flex justify-between items-center shadow-2xl z-20 transition-all backdrop-blur-xl border border-[var(--glass-border)]"
        style={{
          background: isDark ? 'rgba(13, 31, 26, 0.85)' : 'rgba(255, 255, 255, 0.85)',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)'
        }}>
        {[
          { icon: Home, screen: AppScreen.DASHBOARD },
          { icon: BookOpen, screen: AppScreen.SURAH_LIST },
          { icon: Heart, screen: AppScreen.DUAS },
          { icon: Star, screen: AppScreen.SUNNAH },
          { icon: Moon, screen: AppScreen.SALAH_TRACKER }
        ].map((item, idx) => {
          const isActive = activeScreen === item.screen;
          return (
            <button
              key={idx}
              onClick={() => onNavigate(item.screen)}
              className={`p-4 rounded-[1.5rem] transition-all duration-300 relative group ${isActive ? '-translate-y-1' : 'hover:scale-110'}`}
              style={{
                backgroundColor: isActive ? 'var(--accent)' : 'transparent',
                color: isActive ? 'white' : 'var(--text-secondary)'
              }}
            >
              {isActive && (
                <div className="absolute inset-0 rounded-[1.5rem] opacity-50 blur-lg -z-10" style={{ backgroundColor: 'var(--accent)' }} />
              )}
              <item.icon size={22} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} strokeWidth={isActive ? 2.5 : 2} />
            </button>
          )
        })}
      </nav>
    </div>
  );
};

export default Layout;
