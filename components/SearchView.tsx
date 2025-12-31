
import React, { useState, useEffect, useCallback } from 'react';
import { Search, X, BookOpen } from 'lucide-react';
import { searchLocalVerses, SearchResult, highlightText } from '../services/searchService';
import { useTheme } from '../contexts/ThemeContext';
import { Surah } from '../types';

interface SearchViewProps {
    surahs: Surah[];
    onSelectVerse?: (surahId: number, verseNumber: number) => void;
}

const SearchView: React.FC<SearchViewProps> = ({ surahs, onSelectVerse }) => {
    const { isDark } = useTheme();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [searching, setSearching] = useState(false);

    // Debounced search
    useEffect(() => {
        if (!query || query.length < 2) {
            setResults([]);
            return;
        }

        setSearching(true);
        const timer = setTimeout(() => {
            const searchResults = searchLocalVerses(query, surahs);
            setResults(searchResults);
            setSearching(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [query, surahs]);

    const clearSearch = () => {
        setQuery('');
        setResults([]);
    };

    return (
        <div className="space-y-4 pb-24 animate-in fade-in duration-500">
            {/* Search Header */}
            <div>
                <h2 className="text-xl font-bold" style={{ color: 'var(--accent)' }}>Search Quran</h2>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Search verses by English translation
                </p>
            </div>

            {/* Search Input */}
            <div
                className="relative flex items-center rounded-2xl overflow-hidden"
                style={{ backgroundColor: isDark ? 'var(--bg-secondary)' : 'white', border: '2px solid var(--bg-secondary)' }}
            >
                <Search size={20} className="absolute left-4" style={{ color: 'var(--text-secondary)' }} />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for mercy, guidance, patience..."
                    className="w-full py-4 pl-12 pr-12 bg-transparent outline-none text-base"
                    style={{ color: 'var(--text-primary)' }}
                />
                {query && (
                    <button
                        onClick={clearSearch}
                        className="absolute right-4 p-1 rounded-full"
                        style={{ backgroundColor: 'var(--bg-secondary)' }}
                    >
                        <X size={16} style={{ color: 'var(--text-secondary)' }} />
                    </button>
                )}
            </div>

            {/* Search Results */}
            {searching ? (
                <div className="flex justify-center py-8">
                    <div className="w-8 h-8 border-3 border-[#2D5A4C] border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : results.length > 0 ? (
                <div className="space-y-3">
                    <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {results.length} result{results.length !== 1 ? 's' : ''} found
                    </p>
                    {results.map((result, i) => (
                        <div
                            key={`${result.surah_id}-${result.verse_number}-${i}`}
                            className="p-4 rounded-2xl cursor-pointer transition-all hover:scale-[1.01]"
                            style={{
                                backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                                border: '1px solid var(--bg-secondary)'
                            }}
                            onClick={() => onSelectVerse?.(result.surah_id, result.verse_number)}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <BookOpen size={14} style={{ color: 'var(--accent)' }} />
                                <span className="text-xs font-bold" style={{ color: 'var(--accent)' }}>
                                    {result.surah_english_name}
                                </span>
                                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                                    Verse {result.verse_number}
                                </span>
                            </div>
                            <p
                                className="text-sm leading-relaxed"
                                style={{ color: 'var(--text-primary)' }}
                                dangerouslySetInnerHTML={{ __html: highlightText(result.translation, query) }}
                            />
                            <p
                                className="arabic-text text-lg text-right mt-2"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                {result.verse_text}
                            </p>
                        </div>
                    ))}
                </div>
            ) : query.length >= 2 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Search size={48} style={{ color: 'var(--text-secondary)' }} className="opacity-30 mb-4" />
                    <p style={{ color: 'var(--text-secondary)' }}>No verses found for "{query}"</p>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>Try different keywords</p>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <Search size={36} style={{ color: 'var(--accent)' }} />
                    </div>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Search for Guidance</p>
                    <p className="text-sm mt-1 max-w-xs" style={{ color: 'var(--text-secondary)' }}>
                        Enter at least 2 characters to search through the verses
                    </p>
                </div>
            )}

            {/* Popular Searches */}
            {!query && (
                <div className="pt-4">
                    <p className="text-xs font-bold uppercase mb-3" style={{ color: 'var(--text-secondary)' }}>
                        Popular Searches
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['mercy', 'patience', 'guidance', 'forgiveness', 'prayer', 'faith'].map((term) => (
                            <button
                                key={term}
                                onClick={() => setQuery(term)}
                                className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                                style={{
                                    backgroundColor: 'var(--bg-secondary)',
                                    color: 'var(--text-primary)'
                                }}
                            >
                                {term}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchView;
