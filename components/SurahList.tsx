
import React, { useState, useMemo } from 'react';
import { Surah, UserProgress } from '../types';
import { CheckCircle2, ArrowRight, Search, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SurahListProps {
  surahs: Surah[];
  progress: UserProgress;
  onSelect: (surah: Surah) => void;
}

const SurahList: React.FC<SurahListProps> = ({ surahs, progress, onSelect }) => {
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
        <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Journey Map</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Start with the easy steps to reach profound wisdom.</p>
      </header>

      {/* Search Bar */}
      <div
        className="relative flex items-center rounded-2xl overflow-hidden"
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
          placeholder="Search Surah name or topic (mercy, patience...)"
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
                className="p-5 rounded-3xl border transition-all flex items-center justify-between hover:shadow-md cursor-pointer active:scale-95"
                style={{
                  backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                  borderColor: 'var(--bg-secondary)'
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg"
                    style={{
                      backgroundColor: isCompleted ? 'var(--accent)' : 'var(--bg-secondary)',
                      color: isCompleted ? 'white' : 'var(--accent)'
                    }}
                  >
                    {isCompleted ? <CheckCircle2 size={24} /> : surah.number}
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: 'var(--text-primary)' }}>{surah.englishName}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{surah.versesCount} Verses</span>
                      <span className="w-1 h-1 rounded-full bg-[#cbd5e1]"></span>
                      <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-md ${surah.complexity === 1 ? 'bg-green-100 text-green-700' :
                        surah.complexity === 2 ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                        }`}>
                        {surah.complexity === 1 ? 'Beginner' : surah.complexity === 2 ? 'Intermediate' : 'Advanced'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex flex-col items-end">
                    <span className="arabic-text text-xl" style={{ color: 'var(--accent)' }}>{surah.name}</span>
                    <ArrowRight size={16} style={{ color: 'var(--accent)', opacity: 0.3 }} />
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
