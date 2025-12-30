
import React from 'react';
import { Home, BookOpen, BarChart2, Settings } from 'lucide-react';
import { AppScreen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeScreen, onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9] text-[#1A2F2B] max-w-md mx-auto shadow-2xl relative">
      {/* Header */}
      <header className="p-6 pb-2 sticky top-0 bg-[#F8FAF9]/80 backdrop-blur-md z-10 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#2D5A4C]">Nur</h1>
          <p className="text-xs text-[#6B8E85] font-medium uppercase tracking-widest">Enlighten Your Journey</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#E8F3F0] flex items-center justify-center text-[#2D5A4C]">
            <Settings size={20} />
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-6 pb-32">
        {children}
      </main>

      {/* Tab Bar */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[calc(28rem-3rem)] bg-[#1A2F2B] text-white rounded-3xl p-3 flex justify-around items-center shadow-xl z-20 transition-all">
        <button 
          onClick={() => onNavigate(AppScreen.DASHBOARD)}
          className={`p-3 rounded-2xl transition-all ${activeScreen === AppScreen.DASHBOARD ? 'bg-[#2D5A4C] text-white shadow-lg' : 'text-[#6B8E85] hover:text-white'}`}
        >
          <Home size={22} />
        </button>
        <button 
          onClick={() => onNavigate(AppScreen.SURAH_LIST)}
          className={`p-3 rounded-2xl transition-all ${activeScreen === AppScreen.SURAH_LIST ? 'bg-[#2D5A4C] text-white shadow-lg' : 'text-[#6B8E85] hover:text-white'}`}
        >
          <BookOpen size={22} />
        </button>
        <button 
          onClick={() => onNavigate(AppScreen.INSIGHTS)}
          className={`p-3 rounded-2xl transition-all ${activeScreen === AppScreen.INSIGHTS ? 'bg-[#2D5A4C] text-white shadow-lg' : 'text-[#6B8E85] hover:text-white'}`}
        >
          <BarChart2 size={22} />
        </button>
      </nav>
    </div>
  );
};

export default Layout;
