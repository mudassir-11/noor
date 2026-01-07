
import React, { useState, useEffect } from 'react';
import { UserProgress, Surah } from '../types';
import { Play, TrendingUp, Award, Clock, Flame, Calendar } from 'lucide-react';
import { getStreakData, StreakData } from '../services/streakService';
import { useTheme } from '../contexts/ThemeContext';

interface DashboardProps {
  progress: UserProgress;
  nextSurah: Surah;
  onStart: (surah: Surah) => void;
}

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const Dashboard: React.FC<DashboardProps> = ({ progress, nextSurah, onStart }) => {
  const { isDark } = useTheme();
  const [streak, setStreak] = useState<StreakData | null>(null);

  useEffect(() => {
    loadStreak();
  }, []);

  const loadStreak = async () => {
    const data = await getStreakData();
    setStreak(data);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-24">
      {/* Welcome & Stats */}
      <section className="mt-4">
        <h2 className="text-xl font-medium" style={{ color: 'var(--accent)' }}>Assalamu Alaikum</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Your path to wisdom is unfolding.</p>

        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="p-4 rounded-3xl border flex flex-col items-center justify-center space-y-1" style={{ backgroundColor: isDark ? 'var(--bg-secondary)' : 'white', borderColor: 'var(--bg-secondary)' }}>
            <Flame size={22} className="text-orange-500" />
            <span className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{streak?.currentStreak || progress.dailyStreak}</span>
            <span className="text-[10px] font-medium uppercase" style={{ color: 'var(--text-secondary)' }}>Streak</span>
          </div>
          <div className="p-4 rounded-3xl border flex flex-col items-center justify-center space-y-1" style={{ backgroundColor: isDark ? 'var(--bg-secondary)' : 'white', borderColor: 'var(--bg-secondary)' }}>
            <Award size={22} className="text-amber-500" />
            <span className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{progress.completedSurahs.length}</span>
            <span className="text-[10px] font-medium uppercase" style={{ color: 'var(--text-secondary)' }}>Mastered</span>
          </div>
          <div className="p-4 rounded-3xl border flex flex-col items-center justify-center space-y-1" style={{ backgroundColor: isDark ? 'var(--bg-secondary)' : 'white', borderColor: 'var(--bg-secondary)' }}>
            <TrendingUp size={22} style={{ color: 'var(--accent)' }} />
            <span className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{streak?.longestStreak || 0}</span>
            <span className="text-[10px] font-medium uppercase" style={{ color: 'var(--text-secondary)' }}>Best</span>
          </div>
        </div>
      </section>

      {/* Weekly Reading Calendar */}
      <section className="p-4 rounded-3xl" style={{ backgroundColor: isDark ? 'var(--bg-secondary)' : 'white', border: '1px solid var(--bg-secondary)' }}>
        <div className="flex items-center gap-2 mb-3">
          <Calendar size={16} style={{ color: 'var(--accent)' }} />
          <span className="text-sm font-bold uppercase" style={{ color: 'var(--text-secondary)' }}>This Week</span>
        </div>
        <div className="flex justify-between">
          {DAYS.map((day, i) => {
            const isRead = streak?.thisWeekDays.includes(i);
            const isToday = new Date().getDay() === i;
            return (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-[10px] font-medium" style={{ color: 'var(--text-secondary)' }}>{day}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${isToday ? 'ring-2 ring-offset-2' : ''
                    }`}
                  style={{
                    backgroundColor: isRead ? 'var(--accent)' : 'var(--bg-secondary)',
                    color: isRead ? 'white' : 'var(--text-secondary)'
                  }}
                >
                  {isRead ? '✓' : ''}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Next Surah Card */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Your Next Lesson</h3>
          <span className="text-xs font-bold px-2 py-1 rounded-full uppercase" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--accent)' }}>
            Step {progress.completedSurahs.length + 1}
          </span>
        </div>
        <div
          onClick={() => onStart(nextSurah)}
          className="p-6 rounded-[2.5rem] text-white relative overflow-hidden group cursor-pointer active:scale-95 transition-all shadow-xl"
          style={{ backgroundColor: 'var(--accent)' }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-8 -mt-8 blur-2xl group-hover:bg-white/10 transition-all"></div>

          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-white/70 text-sm font-medium uppercase tracking-wider mb-1">Surah {nextSurah.number}</p>
              <h4 className="text-3xl font-bold">{nextSurah.englishName}</h4>
              <p className="text-white/60 text-sm">{nextSurah.meaning}</p>
            </div>
            <div className="arabic-text text-5xl opacity-40 group-hover:opacity-60 transition-all">{nextSurah.name}</div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Clock size={16} />
              <span>{nextSurah.versesCount} Verses</span>
            </div>
            <button className="bg-white text-[#2D5A4C] px-5 py-2.5 rounded-2xl font-bold flex items-center gap-2 shadow-lg group-hover:pr-7 transition-all">
              Start <Play size={16} fill="currentColor" />
            </button>
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="p-6 rounded-3xl" style={{ backgroundColor: isDark ? 'rgba(45, 90, 76, 0.1)' : 'rgba(232, 243, 240, 0.5)', border: '1px solid rgba(45, 90, 76, 0.1)' }}>
        <p className="italic font-medium leading-relaxed" style={{ color: 'var(--accent)' }}>
          "Indeed, this Quran guides to that which is most suitable and gives good tidings to the believers who do righteous deeds..."
        </p>
        <p className="text-xs mt-2 font-bold" style={{ color: 'var(--text-secondary)' }}>— Quran 17:9</p>
      </section>
    </div>
  );
};

export default Dashboard;
