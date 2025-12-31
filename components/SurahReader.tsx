import React, { useState, useEffect } from 'react';
import { Surah, Verse } from '../types';
import { ChevronLeft, Info, Sparkles, X, ChevronRight, Check, Bookmark, BookmarkCheck, Play, Pause, Volume2 } from 'lucide-react';
import { getSurahInsights, explainVerse } from '../services/aiService';
import { toggleBookmark, getBookmarks, Bookmark as BookmarkType } from '../services/bookmarkService';
import { audioPlayer } from '../services/audioService';
import { recordReading } from '../services/streakService';

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
  const [bookmarkedVerses, setBookmarkedVerses] = useState<Set<number>>(new Set());
  const [playingVerse, setPlayingVerse] = useState<number | null>(null);
  const [audioLoading, setAudioLoading] = useState<number | null>(null);

  useEffect(() => {
    async function loadData() {
      // Record that user is reading today (for streak)
      await recordReading();

      // Load insights
      setLoadingInsights(true);
      const data = await getSurahInsights(surah);
      setInsights(data);
      setLoadingInsights(false);

      // Load bookmarks for this surah
      const bookmarks = await getBookmarks();
      const bookmarkedInSurah = bookmarks
        .filter(b => b.surah_id === surah.id)
        .map(b => b.verse_number);
      setBookmarkedVerses(new Set(bookmarkedInSurah));
    }
    loadData();
  }, [surah]);

  const handleExplainVerse = async (verse: Verse) => {
    setSelectedVerse(verse);
    setExplainingVerse(true);
    const explanation = await explainVerse(verse, surah.englishName);
    setVerseExplanation(explanation);
    setExplainingVerse(false);
  };

  const handleToggleBookmark = async (e: React.MouseEvent, verse: Verse) => {
    e.stopPropagation(); // Don't trigger verse explanation

    const success = await toggleBookmark({
      surah_id: surah.id,
      surah_name: surah.englishName,
      verse_number: verse.number,
      verse_text: verse.text,
      translation: verse.translation
    });

    if (success) {
      setBookmarkedVerses(prev => {
        const newSet = new Set(prev);
        if (newSet.has(verse.number)) {
          newSet.delete(verse.number);
        } else {
          newSet.add(verse.number);
        }
        return newSet;
      });
    }
  };

  const handlePlayAudio = async (e: React.MouseEvent, verse: Verse) => {
    e.stopPropagation();

    // If this verse is currently playing, stop it
    if (playingVerse === verse.number) {
      audioPlayer.stop();
      setPlayingVerse(null);
      return;
    }

    // Stop any current playback
    audioPlayer.stop();
    setPlayingVerse(null);
    setAudioLoading(verse.number);

    try {
      setPlayingVerse(verse.number);
      await audioPlayer.play(surah.number, verse.number);
      setPlayingVerse(null);
    } catch (error) {
      console.error('Audio playback failed:', error);
      setPlayingVerse(null);
    } finally {
      setAudioLoading(null);
    }
  };

  return (
    <div className="flex flex-col h-full -mx-6 pb-20 animate-in fade-in zoom-in-95 duration-500">
      {/* Sticky Reader Header */}
      <div className="px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-[#E8F3F0] flex items-center justify-between" style={{ backgroundColor: 'rgba(var(--bg-primary-rgb, 248, 250, 249), 0.8)' }}>
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
            <span className="arabic-text text-3xl text-[#2D5A4C]">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
          </div>
        )}

        {surah.verses.map((verse) => (
          <div
            key={verse.id}
            className="group cursor-pointer space-y-4 pb-6 border-b border-[#E8F3F0]/50 last:border-0"
            onClick={() => handleExplainVerse(verse)}
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col items-center gap-2">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F1F5F4] text-[#6B8E85] text-[10px] flex items-center justify-center font-bold">
                  {verse.number}
                </span>
                <button
                  onClick={(e) => handleToggleBookmark(e, verse)}
                  className={`p-1.5 rounded-full transition-all ${bookmarkedVerses.has(verse.number)
                    ? 'text-amber-500 bg-amber-50'
                    : 'text-[#6B8E85] hover:text-amber-500 hover:bg-amber-50'
                    }`}
                  title={bookmarkedVerses.has(verse.number) ? 'Remove bookmark' : 'Add bookmark'}
                >
                  {bookmarkedVerses.has(verse.number) ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                </button>
                <button
                  onClick={(e) => handlePlayAudio(e, verse)}
                  className={`p-1.5 rounded-full transition-all ${playingVerse === verse.number
                    ? 'text-[#2D5A4C] bg-[#E8F3F0]'
                    : 'text-[#6B8E85] hover:text-[#2D5A4C] hover:bg-[#E8F3F0]'
                    }`}
                  title={playingVerse === verse.number ? 'Stop audio' : 'Play audio'}
                >
                  {audioLoading === verse.number ? (
                    <div className="w-4 h-4 border-2 border-[#2D5A4C] border-t-transparent rounded-full animate-spin" />
                  ) : playingVerse === verse.number ? (
                    <Pause size={16} />
                  ) : (
                    <Play size={16} />
                  )}
                </button>
              </div>
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
            <Check size={20} /> Mark as Learned
          </button>
          <p className="mt-4 text-xs text-[#6B8E85]">Tap when you have fully understood this Surah.</p>
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
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-[#6B8E85] uppercase tracking-wider mb-1">The Essence</h4>
                  <p className="text-sm text-[#1A2F2B]">{insights.summary}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#6B8E85] uppercase tracking-wider mb-1">Historical Context</h4>
                  <p className="text-sm text-[#1A2F2B]">{insights.historicalContext}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#6B8E85] uppercase tracking-wider mb-1">Key Lesson</h4>
                  <p className="text-sm text-[#1A2F2B] font-medium">{insights.spiritualLesson}</p>
                </div>
                {insights.keyVocabulary && insights.keyVocabulary.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-[#6B8E85] uppercase tracking-wider mb-2">Key Vocabulary</h4>
                    <div className="flex flex-wrap gap-2">
                      {insights.keyVocabulary.map((v: any, i: number) => (
                        <span key={i} className="px-3 py-1 bg-[#E8F3F0] rounded-full text-xs">
                          <span className="arabic-text font-bold">{v.word}</span> - {v.meaning}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-sm text-[#6B8E85]">Could not load insights. Please try again.</p>
            )}
          </div>
        </div>
      )}

      {/* Verse Explanation Modal */}
      {selectedVerse && (
        <div className="fixed inset-0 z-50 bg-[#1A2F2B]/40 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedVerse(null)}>
          <div className="bg-white w-full max-w-md rounded-3xl p-6 space-y-4 shadow-2xl animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#6B8E85] uppercase tracking-wider">Verse {selectedVerse.number}</span>
              <button onClick={() => setSelectedVerse(null)} className="p-1 rounded-full hover:bg-gray-100">
                <X size={18} />
              </button>
            </div>
            <p className="arabic-text text-2xl text-right text-[#2D5A4C] leading-[3.5rem]">{selectedVerse.text}</p>
            <p className="text-sm italic text-[#6B8E85] border-l-2 border-[#2D5A4C] pl-3">{selectedVerse.translation}</p>
            <div className="pt-2">
              {explainingVerse ? (
                <div className="flex items-center gap-2 text-[#6B8E85]">
                  <div className="w-4 h-4 border-2 border-[#2D5A4C] border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm">Thinking...</span>
                </div>
              ) : verseExplanation ? (
                <p className="text-sm text-[#1A2F2B] leading-relaxed">{verseExplanation}</p>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurahReader;
