
import React, { useState, useEffect } from 'react';
import { Surah, Verse } from '../types';
import { ChevronLeft, Info, Sparkles, X, ChevronRight, Check } from 'lucide-react';
import { getSurahInsights, explainVerse } from '../services/geminiService';

interface SurahReaderProps {
  surah: Surah;
  onBack: () => void;
  onComplete: (id: number) => void;
}

const SurahReader: React.FC<SurahReaderProps> = ({ surah, onBack, onComplete }) => {
  const [insights, setInsights] = useState<any>(null);
  const [loadingInsights, setLoadingInsights] = useState(false);
  const [showInsightsModal, setShowInsightsModal] = useState(false);
  const [selectedVerse, setSelectedVerse] = useState<Verse | null>(null);
  const [verseExplanation, setVerseExplanation] = useState<string | null>(null);
  const [explainingVerse, setExplainingVerse] = useState(false);

  useEffect(() => {
    async function loadInsights() {
      setLoadingInsights(true);
      const data = await getSurahInsights(surah);
      setInsights(data);
      setLoadingInsights(false);
    }
    loadInsights();
  }, [surah]);

  const handleExplainVerse = async (verse: Verse) => {
    setSelectedVerse(verse);
    setExplainingVerse(true);
    const explanation = await explainVerse(verse, surah.englishName);
    setVerseExplanation(explanation);
    setExplainingVerse(false);
  };

  return (
    <div className="flex flex-col h-full -mx-6 pb-20 animate-in fade-in zoom-in-95 duration-500">
      {/* Sticky Reader Header */}
      <div className="px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-[#E8F3F0] flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 text-[#6B8E85] hover:text-[#2D5A4C]">
          <ChevronLeft size={24} />
        </button>
        <div className="text-center">
          <h3 className="font-bold text-[#2D5A4C]">{surah.englishName}</h3>
          <p className="text-[10px] text-[#6B8E85] uppercase tracking-widest">{surah.meaning}</p>
        </div>
        <button 
          onClick={() => setShowInsightsModal(true)} 
          className="p-2 -mr-2 text-[#2D5A4C] bg-[#E8F3F0] rounded-full hover:bg-[#D9EAE5] transition-colors"
        >
          <Sparkles size={18} />
        </button>
      </div>

      {/* Reading Content */}
      <div className="flex-1 px-6 space-y-10 pt-8 overflow-y-auto">
        {/* Basmalah (if not Al-Fatihah or At-Tawbah) */}
        {surah.number !== 1 && surah.number !== 9 && (
          <div className="text-center pb-8 border-b border-[#E8F3F0]">
            <span className="arabic-text text-3xl text-[#2D5A4C]">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
          </div>
        )}

        {surah.verses.map((verse) => (
          <div 
            key={verse.id} 
            className="group cursor-pointer space-y-4 pb-6 border-b border-[#E8F3F0]/50 last:border-0"
            onClick={() => handleExplainVerse(verse)}
          >
            <div className="flex justify-between items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F1F5F4] text-[#6B8E85] text-[10px] flex items-center justify-center font-bold">
                {verse.number}
              </span>
              <p className="arabic-text text-3xl leading-[4.5rem] text-right text-[#1A2F2B] group-hover:text-[#2D5A4C] transition-colors">
                {verse.text}
              </p>
            </div>
            <div className="pl-12">
              <p className="text-[#6B8E85] leading-relaxed text-sm italic font-light group-hover:text-[#2D5A4C] transition-colors">
                {verse.translation}
              </p>
            </div>
          </div>
        ))}

        {/* Completion Footer */}
        <div className="pt-10 pb-24 flex flex-col items-center">
            <button 
                onClick={() => onComplete(surah.id)}
                className="bg-[#2D5A4C] text-white px-8 py-4 rounded-[2rem] font-bold flex items-center gap-3 shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
                <Check size={20} /> Mark as Completed
            </button>
            <p className="mt-4 text-xs text-[#6B8E85]">Take a moment to reflect on your learning.</p>
        </div>
      </div>

      {/* Insights Modal */}
      {showInsightsModal && (
        <div className="fixed inset-0 z-50 bg-[#1A2F2B]/40 backdrop-blur-sm flex items-end justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-[3rem] p-8 space-y-6 shadow-2xl animate-in slide-in-from-bottom-full duration-500 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-[#2D5A4C]">
                <Sparkles size={20} className="fill-[#2D5A4C]" />
                <h3 className="text-xl font-bold">Divine Insights</h3>
              </div>
              <button onClick={() => setShowInsightsModal(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <X size={20} />
              </button>
            </div>

            {loadingInsights ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-4">
                <div className="w-10 h-10 border-4 border-[#2D5A4C] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm text-[#6B8E85] animate-pulse">Gathering wisdom from the heavens...</p>
              </div>
            ) : insights ? (
              <div className="space-y-6">
                <section>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#6B8E85] mb-2">The Essence</h4>
                  <p className="text-[#2D5A4C] leading-relaxed italic">"{insights.summary}"</p>
                </section>
                <section>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#6B8E85] mb-2">Historical Context</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{insights.historicalContext}</p>
                </section>
                <section className="bg-[#E8F3F0] p-5 rounded-2xl">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#2D5A4C] mb-2">Key Lesson</h4>
                  <p className="text-[#2D5A4C] font-medium">{insights.spiritualLesson}</p>
                </section>
                <section>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-[#6B8E85] mb-2">Key Vocabulary</h4>
                    <div className="grid grid-cols-2 gap-3">
                        {insights.keyVocabulary.map((item: any, i: number) => (
                            <div key={i} className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                <span className="arabic-text text-lg block text-[#2D5A4C]">{item.word}</span>
                                <span className="text-xs text-[#6B8E85]">{item.meaning}</span>
                            </div>
                        ))}
                    </div>
                </section>
              </div>
            ) : (
                <p>Failed to load insights. Reflect on the verses themselves.</p>
            )}
            
            <button 
              onClick={() => setShowInsightsModal(false)}
              className="w-full bg-[#1A2F2B] text-white py-4 rounded-2xl font-bold shadow-lg"
            >
              Continue Reading
            </button>
          </div>
        </div>
      )}

      {/* Verse Explanation Modal */}
      {selectedVerse && (
        <div className="fixed inset-0 z-50 bg-[#1A2F2B]/40 backdrop-blur-sm flex items-center justify-center p-6">
            <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 space-y-6 shadow-2xl relative">
                <button 
                    onClick={() => { setSelectedVerse(null); setVerseExplanation(null); }} 
                    className="absolute top-6 right-6 p-1 text-gray-400 hover:text-gray-600"
                >
                    <X size={20} />
                </button>
                
                <div className="space-y-2">
                    <span className="text-[10px] font-bold text-[#2D5A4C] bg-[#E8F3F0] px-2 py-0.5 rounded uppercase">Verse {selectedVerse.number}</span>
                    <p className="arabic-text text-2xl text-[#2D5A4C] leading-loose">{selectedVerse.text}</p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                    <h4 className="flex items-center gap-2 text-[#6B8E85] text-xs font-bold uppercase tracking-widest mb-3">
                        <Sparkles size={14} className="text-amber-400" /> Reflection
                    </h4>
                    {explainingVerse ? (
                        <div className="flex gap-2 animate-pulse">
                            <div className="h-4 w-full bg-gray-100 rounded"></div>
                        </div>
                    ) : (
                        <p className="text-[#2D5A4C] text-sm leading-relaxed">{verseExplanation}</p>
                    )}
                </div>

                <button 
                    onClick={() => { setSelectedVerse(null); setVerseExplanation(null); }}
                    className="w-full bg-[#2D5A4C] text-white py-3 rounded-xl font-bold text-sm"
                >
                    SubhanAllah
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default SurahReader;
