import React, { useState, useEffect } from 'react';
import { Surah, Verse } from '../types';
import { ChevronLeft, Info, Sparkles, X, ChevronRight, Check, Bookmark, BookmarkCheck, Play, Pause, Volume2, Shield } from 'lucide-react';
import { getSurahInsights, explainVerse } from '../services/aiService';
import { toggleBookmark, getBookmarks, Bookmark as BookmarkType } from '../services/bookmarkService';
import { audioPlayer } from '../services/audioService';
import { recordReading } from '../services/streakService';
import { useTranslation } from '../contexts/TranslationContext';
import { useReciter } from '../contexts/ReciterContext';
import { fetchSurahTranslation } from '../services/translationService';
import { Globe } from 'lucide-react';

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
  const [isTestMode, setIsTestMode] = useState(false);
  const [revealedVerses, setRevealedVerses] = useState<Set<number>>(new Set());

  const { language, setLanguage, getLanguageLabel } = useTranslation();
  const { getReciterId } = useReciter();
  const [customTranslations, setCustomTranslations] = useState<Record<number, string>>({});
  const [loadingTranslation, setLoadingTranslation] = useState(false);

  useEffect(() => {
    // Scroll to top when surah opens
    window.scrollTo({ top: 0, behavior: 'instant' });

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

  useEffect(() => {
    async function updateTranslation() {
      if (language === 'en') {
        setCustomTranslations({});
        return;
      }

      setLoadingTranslation(true);
      const translations = await fetchSurahTranslation(surah.number, language);
      setCustomTranslations(translations);
      setLoadingTranslation(false);
    }
    updateTranslation();
  }, [surah, language]);

  const handleExplainVerse = async (verse: Verse) => {
    // If in test mode, tapping toggles reveal instead of explaining
    if (isTestMode) {
      setRevealedVerses(prev => {
        const newSet = new Set(prev);
        if (newSet.has(verse.number)) {
          newSet.delete(verse.number);
        } else {
          newSet.add(verse.number);
        }
        return newSet;
      });
      return;
    }

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

  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const shouldContinuePlayback = React.useRef(false);
  const verseRefs = React.useRef<Record<number, HTMLDivElement | null>>({});

  const scrollToVerse = (verseNumber: number) => {
    const element = verseRefs.current[verseNumber];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // ... (existing effects) ...

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      shouldContinuePlayback.current = false;
      audioPlayer.stop();
      audioPlayer.clearPreload();
    };
  }, []);

  const stopPlayback = () => {
    audioPlayer.stop();
    audioPlayer.clearPreload();
    setPlayingVerse(null);
    shouldContinuePlayback.current = false;
    setIsPlayingAll(false);
    setAudioLoading(null);
  };

  const handlePlayAll = async () => {
    if (isPlayingAll) {
      stopPlayback();
      return;
    }

    shouldContinuePlayback.current = true;
    setIsPlayingAll(true);

    // Sort verses by number to ensure correct order
    const sortedVerses = [...surah.verses].sort((a, b) => a.number - b.number);
    const reciterId = getReciterId();

    // Preload first verse before starting
    if (sortedVerses.length > 0) {
      await audioPlayer.preload(surah.number, sortedVerses[0].number, reciterId);
    }

    for (let i = 0; i < sortedVerses.length; i++) {
      const verse = sortedVerses[i];
      if (!shouldContinuePlayback.current) break;

      try {
        setPlayingVerse(verse.number);
        setAudioLoading(verse.number);
        // Scroll to the current verse
        scrollToVerse(verse.number);

        // Preload NEXT verse while current one plays (if exists)
        if (i + 1 < sortedVerses.length) {
          audioPlayer.preload(surah.number, sortedVerses[i + 1].number, reciterId);
        }

        // play() resolves when audio ENDS, so we await it to play sequentially
        await audioPlayer.play(surah.number, verse.number, reciterId);
      } catch (e) {
        console.error("Playback interrupted or failed", e);
        break;
      } finally {
        setAudioLoading(null);
      }
    }

    if (shouldContinuePlayback.current) {
      setIsPlayingAll(false);
      setPlayingVerse(null);
      shouldContinuePlayback.current = false;
    }
  };

  const handlePlayAudio = async (e: React.MouseEvent, verse: Verse) => {
    e.stopPropagation();

    // If "Play All" is active, stop it first
    if (isPlayingAll) {
      stopPlayback();
      // Don't start the individual verse immediately to avoid race conditions, 
      // or just let the stop finish.
      return;
    }

    // If this specific verse is currently playing (individually), stop it
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
      await audioPlayer.play(surah.number, verse.number, getReciterId());
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
        <button onClick={() => { stopPlayback(); onBack(); }} className="p-2 -ml-2 text-[#6B8E85] hover:text-[#2D5A4C]">
          <ChevronLeft size={24} />
        </button>
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-[#2D5A4C]">{surah.englishName}</h3>
          <p className="text-[10px] text-[#6B8E85] uppercase tracking-widest">{surah.meaning}</p>
        </div>
        <div className="flex items-center gap-1 -mr-2">
          <button
            onClick={handlePlayAll}
            className={`p-2 rounded-full transition-all ${isPlayingAll
              ? 'text-[#2D5A4C] bg-[#E8F3F0] animate-pulse'
              : 'text-[#2D5A4C] hover:bg-[#E8F3F0]'}`}
            title={isPlayingAll ? "Stop Recitation" : "Play Surah"}
          >
            {isPlayingAll ? <Pause size={20} className="fill-current" /> : <Play size={20} className="fill-current" />}
          </button>
          <button
            onClick={() => setShowInsightsModal(true)}
            className="p-2 text-[#2D5A4C] hover:bg-[#E8F3F0] rounded-full transition-colors"
            title="Surah Insights"
          >
            <Sparkles size={20} />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 py-2">
        <button
          onClick={() => {
            const langs = ['en', 'ur', 'roman'] as const;
            const currentIndex = langs.indexOf(language as any);
            const nextIndex = (currentIndex + 1) % langs.length;
            setLanguage(langs[nextIndex]);
          }}
          className="px-3 py-1.5 rounded-full transition-transform active:scale-95 flex items-center gap-2 hover:brightness-110"
          style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
          title={`Language: ${getLanguageLabel(language)}`}
        >
          <Globe size={16} />
          <span className="text-xs font-bold uppercase">{language === 'roman' ? 'TR' : language}</span>
        </button>
        <button
          onClick={() => {
            setIsTestMode(!isTestMode);
            setRevealedVerses(new Set()); // Reset reveals when toggling
          }}
          className="px-3 py-1.5 rounded-full transition-transform active:scale-95 flex items-center gap-2 hover:brightness-110"
          style={{
            backgroundColor: isTestMode ? 'var(--accent)' : 'var(--bg-secondary)',
            color: isTestMode ? '#fff' : 'var(--text-secondary)'
          }}
          title={isTestMode ? "Exit Hifz Mode" : "Enter Hifz Mode"}
        >
          <Shield size={16} className={isTestMode ? "fill-current" : ""} />
          <span className="text-xs font-bold uppercase">Hifz</span>
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
            ref={(el) => { verseRefs.current[verse.number] = el; }}
            className={`group cursor-pointer space-y-4 pb-6 border-b border-[#E8F3F0]/50 last:border-0 transition-all duration-300 ${playingVerse === verse.number ? 'bg-[#E8F3F0]/30 rounded-xl -mx-3 px-3 py-4' : ''}`}
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
              <p className={`
                arabic-text text-3xl leading-[4.5rem] text-right transition-all duration-300
                ${isTestMode && !revealedVerses.has(verse.number)
                  ? 'text-transparent bg-[#1A2F2B]/5 rounded-xl select-none blur-sm'
                  : 'group-hover:opacity-80'}
              `}
                style={{ color: isTestMode && !revealedVerses.has(verse.number) ? 'transparent' : 'var(--accent)' }}>
                {isTestMode && !revealedVerses.has(verse.number) ? verse.text.replace(/[^\s]/g, '—') : verse.text}
              </p>
            </div>
            <div className="pl-12 transition-all duration-300">
              <p className={`
                leading-relaxed text-lg italic font-light transition-colors
                ${isTestMode && !revealedVerses.has(verse.number)
                  ? 'text-transparent bg-[#F1F5F4] rounded select-none'
                  : 'group-hover:opacity-80'}
              `}
                style={{ color: isTestMode && !revealedVerses.has(verse.number) ? 'transparent' : 'var(--accent)', opacity: 0.75 }}>
                {loadingTranslation ? 'Loading...' : (customTranslations[verse.number] || verse.translation)}
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
      {
        showInsightsModal && (
          <div className="fixed inset-0 z-50 flex items-end justify-center p-4 backdrop-blur-sm" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="w-full max-w-md rounded-[3rem] p-8 space-y-6 shadow-2xl animate-in slide-in-from-bottom-full duration-500 max-h-[85vh] overflow-y-auto"
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--glass-border)'
              }}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2" style={{ color: 'var(--accent)' }}>
                  <Sparkles size={20} className="fill-current" />
                  <h3 className="text-xl font-bold">Divine Insights</h3>
                </div>
                <button onClick={() => setShowInsightsModal(false)} className="p-2 rounded-full transition-colors hover:opacity-80" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}>
                  <X size={20} />
                </button>
              </div>

              {loadingInsights ? (
                <div className="py-12 flex flex-col items-center justify-center space-y-4">
                  <div className="w-10 h-10 border-4 border-t-transparent rounded-full animate-spin" style={{ borderColor: 'var(--accent)', borderTopColor: 'transparent' }}></div>
                  <p className="text-sm animate-pulse" style={{ color: 'var(--text-secondary)' }}>Gathering wisdom from the heavens...</p>
                </div>
              ) : insights ? (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)' }}>The Essence</h4>
                    <p className="text-sm" style={{ color: 'var(--text-primary)' }}>{insights.summary}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)' }}>Historical Context</h4>
                    <p className="text-sm" style={{ color: 'var(--text-primary)' }}>{insights.historicalContext}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)' }}>Key Lesson</h4>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{insights.spiritualLesson}</p>
                  </div>
                  {insights.keyVocabulary && insights.keyVocabulary.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>Key Vocabulary</h4>
                      <div className="flex flex-wrap gap-2">
                        {insights.keyVocabulary.map((v: any, i: number) => (
                          <span key={i} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                            <span className="arabic-text font-bold text-sm">{v.word}</span> <span className="opacity-70">- {v.meaning}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Could not load insights. Please try again.</p>
              )}
            </div>
          </div>
        )
      }

      {/* Verse Explanation Modal */}
      {
        selectedVerse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={() => setSelectedVerse(null)}>
            <div className="w-full max-w-md rounded-3xl p-6 space-y-4 shadow-2xl animate-in zoom-in-95 duration-300"
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--glass-border)'
              }}
              onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Verse {selectedVerse.number}</span>
                <button onClick={() => setSelectedVerse(null)} className="p-1 rounded-full hover:opacity-80 transition-opacity" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}>
                  <X size={18} />
                </button>
              </div>
              <p className="arabic-text text-2xl text-right leading-[3.5rem]" style={{ color: 'var(--accent)' }}>{selectedVerse.text}</p>
              <p className="text-sm italic pl-3 border-l-2" style={{ color: 'var(--text-secondary)', borderColor: 'var(--accent)' }}>{selectedVerse.translation}</p>
              <div className="pt-2">
                {explainingVerse ? (
                  <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                    <div className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: 'var(--accent)', borderTopColor: 'transparent' }}></div>
                    <span className="text-sm">Thinking...</span>
                  </div>
                ) : verseExplanation ? (
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>{verseExplanation}</p>
                ) : null}
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default SurahReader;
