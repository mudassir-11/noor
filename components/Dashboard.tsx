
import React from 'react';
import { UserProgress, Surah } from '../types';
import { Play, TrendingUp, Award, Clock } from 'lucide-react';

interface DashboardProps {
  progress: UserProgress;
  nextSurah: Surah;
  onStart: (surah: Surah) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ progress, nextSurah, onStart }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Welcome & Stats */}
      <section className="mt-4">
        <h2 className="text-xl font-medium text-[#2D5A4C]">Assalamu Alaikum</h2>
        <p className="text-[#6B8E85]">Your path to wisdom is unfolding.</p>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-4 rounded-3xl border border-[#E8F3F0] flex flex-col items-center justify-center space-y-2">
            <TrendingUp size={24} className="text-[#2D5A4C]" />
            <span className="text-2xl font-bold">{progress.dailyStreak}</span>
            <span className="text-xs text-[#6B8E85] font-medium uppercase">Day Streak</span>
          </div>
          <div className="bg-white p-4 rounded-3xl border border-[#E8F3F0] flex flex-col items-center justify-center space-y-2">
            <Award size={24} className="text-[#DAA520]" />
            <span className="text-2xl font-bold">{progress.completedSurahs.length}</span>
            <span className="text-xs text-[#6B8E85] font-medium uppercase">Mastered</span>
          </div>
        </div>
      </section>

      {/* Next Surah Card */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-semibold">Your Next Lesson</h3>
          <span className="text-xs font-bold text-[#2D5A4C] bg-[#E8F3F0] px-2 py-1 rounded-full uppercase">Step {progress.completedSurahs.length + 1}</span>
        </div>
        <div 
          onClick={() => onStart(nextSurah)}
          className="bg-[#2D5A4C] p-6 rounded-[2.5rem] text-white relative overflow-hidden group cursor-pointer active:scale-95 transition-all shadow-xl"
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
      <section className="bg-[#E8F3F0]/50 p-6 rounded-3xl border border-[#2D5A4C]/10">
        <p className="italic text-[#2D5A4C] font-medium leading-relaxed">
          "Indeed, this Quran guides to that which is most suitable and gives good tidings to the believers who do righteous deeds..."
        </p>
        <p className="text-xs text-[#6B8E85] mt-2 font-bold">— Quran 17:9</p>
      </section>
    </div>
  );
};

export default Dashboard;
