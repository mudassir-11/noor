
import React, { useState, useMemo } from 'react';
import { Surah, UserProgress } from '../types';
import { CheckCircle2, ArrowRight, Search, X, Bookmark } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SurahListProps {
  surahs: Surah[];
  progress: UserProgress;
  onSelect: (surah: Surah) => void;
  onBookmarksClick: () => void;
}

const SurahList: React.FC<SurahListProps> = ({ surahs, progress, onSelect, onBookmarksClick }) => {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter surahs based on search query
  const filteredSurahs = useMemo(() => {
    if (!searchQuery.trim()) return surahs;

    const query = searchQuery.toLowerCase().trim();

    return surahs.filter(surah => {
      // Search by name
      if (surah.englishName.toLowerCase().includes(query)) return true;
      if (surah.name.includes(searchQuery)) return true; // Arabic
      if (surah.meaning.toLowerCase().includes(query)) return true;

      // Search by topic (in description)
      if (surah.description.toLowerCase().includes(query)) return true;

      // Search in verse translations (topic search)
      const hasMatchingVerse = surah.verses.some(verse =>
        verse.translation.toLowerCase().includes(query)
      );
      if (hasMatchingVerse) return true;

      return false;
    });
  }, [surahs, searchQuery]);

  const clearSearch = () => setSearchQuery('');

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 pb-24">

      <header>
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">Journey Map</h2>
        <p className="mt-2 text-sm font-medium tracking-wide opacity-80" style={{ color: 'var(--text-secondary)' }}>Start with the easy steps to reach profound wisdom.</p>
      </header>

      {/* Search Bar & Bookmark Actions */}
      <div className="flex gap-3 h-14">
        {/* Search Bar */}
        <div
          className="relative flex items-center rounded-2xl overflow-hidden flex-1"
          style={{
            backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
            border: '2px solid var(--bg-secondary)'
          }}
        >
          <Search size={20} className="absolute left-4" style={{ color: 'var(--text-secondary)' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Surah..."
            className="w-full py-3 pl-12 pr-12 bg-transparent outline-none text-base"
            style={{ color: 'var(--text-primary)' }}
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-4 p-1 rounded-full"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <X size={16} style={{ color: 'var(--text-secondary)' }} />
            </button>
          )}
        </div>

        {/* Bookmark Trigger */}
        <button
          onClick={onBookmarksClick}
          className="aspect-square h-full rounded-2xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          style={{
            backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
            border: '2px solid var(--bg-secondary)',
            color: 'var(--accent)'
          }}
          title="Saved Bookmarks"
        >
          <Bookmark size={22} strokeWidth={2.5} />
        </button>
      </div>

      {/* Search Results Count */}
      {searchQuery && (
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          {filteredSurahs.length} Surah{filteredSurahs.length !== 1 ? 's' : ''} found
          {filteredSurahs.length > 0 && ` for "${searchQuery}"`}
        </p>
      )}

      {/* Surah List */}
      <div className="space-y-4">
        {filteredSurahs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Search size={48} style={{ color: 'var(--text-secondary)' }} className="opacity-30 mb-4" />
            <p style={{ color: 'var(--text-secondary)' }}>No Surahs found for "{searchQuery}"</p>
            <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>Try different keywords</p>
          </div>
        ) : (

          filteredSurahs.map((surah) => {
            const isCompleted = progress.completedSurahs.includes(surah.id);

            return (
              <div
                key={surah.id}
                onClick={() => onSelect(surah)}
                className="group p-5 rounded-[2rem] border transition-all duration-300 flex items-center justify-between cursor-pointer hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]"
                style={{
                  backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                  borderColor: isDark ? 'transparent' : 'var(--bg-secondary)',
                  boxShadow: isDark ? 'none' : '0 4px 20px -5px rgba(0,0,0,0.05)'
                }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-500 ${isCompleted ? 'shadow-lg shadow-emerald-500/20' : ''}`}
                    style={{
                      background: isCompleted ? 'linear-gradient(135deg, var(--accent), var(--accent-light))' : 'var(--bg-secondary)',
                      color: isCompleted ? 'white' : 'var(--text-secondary)'
                    }}
                  >
                    {isCompleted ? <CheckCircle2 size={24} /> : surah.number}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold tracking-tight mb-1 group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>{surah.englishName}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{surah.versesCount} Verses</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-lg tracking-wider ${surah.complexity === 1 ? 'bg-green-100/50 text-green-700' :
                        surah.complexity === 2 ? 'bg-blue-100/50 text-blue-700' : 'bg-orange-100/50 text-orange-700'
                        }`}>
                        {surah.complexity === 1 ? 'Beginner' : surah.complexity === 2 ? 'Intermediate' : 'Advanced'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-right pl-4">
                  <div className="flex flex-col items-end gap-2">
                    <span className="arabic-text text-2xl group-hover:scale-110 transition-transform origin-right duration-300" style={{ color: 'var(--text-primary)' }}>{surah.name}</span>
                    <ArrowRight size={18} className="transition-all duration-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" style={{ color: 'var(--accent)' }} />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SurahList;
