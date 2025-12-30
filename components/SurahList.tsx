
import React from 'react';
import { Surah, UserProgress } from '../types';
import { CheckCircle2, Lock, ArrowRight } from 'lucide-react';

interface SurahListProps {
  surahs: Surah[];
  progress: UserProgress;
  onSelect: (surah: Surah) => void;
}

const SurahList: React.FC<SurahListProps> = ({ surahs, progress, onSelect }) => {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <header>
        <h2 className="text-2xl font-bold">Journey Map</h2>
        <p className="text-[#6B8E85]">Progressing from shortest to more complex themes.</p>
      </header>

      <div className="space-y-4">
        {surahs.map((surah, index) => {
          const isCompleted = progress.completedSurahs.includes(surah.id);
          const isLocked = index > progress.completedSurahs.length;
          
          return (
            <div 
              key={surah.id}
              onClick={() => !isLocked && onSelect(surah)}
              className={`
                p-5 rounded-3xl border transition-all flex items-center justify-between
                ${isLocked ? 'opacity-50 cursor-not-allowed bg-gray-50 border-gray-100' : 'bg-white border-[#E8F3F0] hover:border-[#2D5A4C]/30 hover:shadow-md cursor-pointer active:scale-95'}
              `}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg ${isCompleted ? 'bg-[#2D5A4C] text-white' : 'bg-[#F1F5F4] text-[#2D5A4C]'}`}>
                  {isCompleted ? <CheckCircle2 size={24} /> : surah.number}
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2F2B]">{surah.englishName}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#6B8E85]">{surah.versesCount} Verses</span>
                    <span className="w-1 h-1 rounded-full bg-[#cbd5e1]"></span>
                    <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-md ${
                        surah.complexity === 1 ? 'bg-green-100 text-green-700' : 
                        surah.complexity === 2 ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                        {surah.complexity === 1 ? 'Beginner' : surah.complexity === 2 ? 'Intermediate' : 'Advanced'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                {isLocked ? (
                  <Lock size={20} className="text-[#cbd5e1]" />
                ) : (
                  <div className="flex flex-col items-end">
                    <span className="arabic-text text-xl text-[#2D5A4C]">{surah.name}</span>
                    <ArrowRight size={16} className="text-[#2D5A4C]/30" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SurahList;
