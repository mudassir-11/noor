import React, { useState, useMemo } from 'react';
import { Sunnah } from '../types';
import { sunnahData, categoryLabels, categoryOrder } from '../data/sunnahData';
import { useTheme } from '../contexts/ThemeContext';
import { ChevronDown, ChevronUp, BookOpen, Search, X, Sparkles, ArrowRight } from 'lucide-react';

const SunnahView: React.FC = () => {
    const { isDark } = useTheme();
    const [expandedCategory, setExpandedCategory] = useState<string | null>('morning');
    const [expandedSunnah, setExpandedSunnah] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Sunnah of the Day Logic (Pseudo-random based on date)
    const sunnahOfTheDay = useMemo(() => {
        const today = new Date();
        // Use date components to get a consistent index for the day
        const index = (today.getDate() + today.getMonth() + today.getFullYear()) % sunnahData.length;
        return sunnahData[index];
    }, []);

    // Filter sunnahs based on search
    const filteredData = useMemo(() => {
        if (!searchQuery.trim()) return sunnahData;

        const query = searchQuery.toLowerCase().trim();
        return sunnahData.filter(s =>
            s.title.toLowerCase().includes(query) ||
            s.description.toLowerCase().includes(query) ||
            s.category.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    // Group filtered sunnahs by category
    const groupedSunnahs = useMemo(() => {
        return categoryOrder.reduce((acc, category) => {
            const inCategory = filteredData.filter(s => s.category === category);
            if (inCategory.length > 0) {
                acc[category] = inCategory;
            }
            return acc;
        }, {} as Record<string, Sunnah[]>);
    }, [filteredData]);

    const toggleCategory = (category: string) => {
        setExpandedCategory(expandedCategory === category ? null : category);
    };

    const toggleSunnah = (id: number) => {
        setExpandedSunnah(expandedSunnah === id ? null : id);
    };

    const clearSearch = () => setSearchQuery('');

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-24">
            {/* Header */}
            <section className="mt-4 space-y-4">
                <div className="flex items-center gap-3">
                    <div
                        className="p-3 rounded-2xl"
                        style={{ backgroundColor: 'var(--bg-secondary)' }}
                    >
                        <BookOpen size={24} style={{ color: 'var(--accent)' }} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold" style={{ color: 'var(--accent)' }}>
                            Daily Sunnahs
                        </h2>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            Follow the Prophet's (ﷺ) way
                        </p>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative flex items-center rounded-2xl overflow-hidden"
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
                        placeholder="Search for a habit (e.g., sleeping)..."
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
            </section>

            {/* Sunnah of the Day (Only show when not searching) */}
            {!searchQuery && (
                <section className="animate-in slide-in-from-top-4 duration-500 delay-150">
                    <div className="flex items-center gap-2 mb-3">
                        <Sparkles size={16} style={{ color: 'var(--accent)' }} />
                        <span className="text-sm font-bold uppercase" style={{ color: 'var(--text-secondary)' }}>Sunnah of the Day</span>
                    </div>
                    <div
                        onClick={() => toggleSunnah(sunnahOfTheDay.id)}
                        className="p-5 rounded-3xl relative overflow-hidden group cursor-pointer active:scale-[0.98] transition-all"
                        style={{
                            background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
                            color: 'white'
                        }}
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 rounded-full -mr-6 -mt-6 blur-2xl group-hover:scale-110 transition-all" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}></div>

                        <div className="relative z-10">
                            <span className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1 block">
                                {categoryLabels[sunnahOfTheDay.category]}
                            </span>
                            <h3 className="text-2xl font-bold mb-2">{sunnahOfTheDay.title}</h3>
                            <p className="text-white/90 text-sm line-clamp-2 leading-relaxed">
                                {sunnahOfTheDay.description}
                            </p>
                            <div className="mt-4 flex items-center text-xs font-bold opacity-80 gap-1">
                                <span>Read more</span>
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Category Sections */}
            {Object.keys(groupedSunnahs).length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center opacity-70">
                    <Search size={48} className="mb-4 text-gray-400" />
                    <p style={{ color: 'var(--text-secondary)' }}>No Sunnahs found for "{searchQuery}"</p>
                </div>
            ) : (
                categoryOrder.filter(cat => groupedSunnahs[cat]).map((category) => (
                    <section key={category}>
                        <button
                            onClick={() => toggleCategory(category)}
                            className="w-full p-4 rounded-2xl flex items-center justify-between transition-all hover:scale-[1.01] active:scale-[0.99]"
                            style={{
                                backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                                border: '1px solid var(--glass-border)'
                            }}
                        >
                            <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                                {categoryLabels[category]}
                            </span>
                            <div className="flex items-center gap-2">
                                <span
                                    className="text-xs px-2 py-1 rounded-full font-bold"
                                    style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--accent)' }}
                                >
                                    {groupedSunnahs[category].length}
                                </span>
                                {expandedCategory === category || searchQuery ? (
                                    <ChevronUp size={20} style={{ color: 'var(--text-secondary)' }} />
                                ) : (
                                    <ChevronDown size={20} style={{ color: 'var(--text-secondary)' }} />
                                )}
                            </div>
                        </button>

                        {/* Sunnah Cards */}
                        {(expandedCategory === category || searchQuery) && (
                            <div className="mt-3 space-y-3 animate-in slide-in-from-top-2 duration-300">
                                {groupedSunnahs[category].map((sunnah) => (
                                    <div
                                        key={sunnah.id}
                                        className="p-4 rounded-2xl cursor-pointer transition-all hover:scale-[1.01]"
                                        style={{
                                            backgroundColor: isDark ? 'rgba(45, 90, 76, 0.1)' : 'rgba(232, 243, 240, 0.5)',
                                            border: '1px solid var(--glass-border)'
                                        }}
                                        onClick={() => toggleSunnah(sunnah.id)}
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1">
                                                <h4 className="font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                                                    {sunnah.title}
                                                </h4>

                                                {/* Show Arabic if available */}
                                                {sunnah.arabic && expandedSunnah === sunnah.id && (
                                                    <p
                                                        className="arabic-text text-xl text-right my-3 p-3 rounded-xl leading-loose"
                                                        style={{
                                                            backgroundColor: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.8)',
                                                            color: 'var(--accent)'
                                                        }}
                                                    >
                                                        {sunnah.arabic}
                                                    </p>
                                                )}

                                                <p
                                                    className={`text-sm leading-relaxed ${expandedSunnah === sunnah.id ? '' : 'line-clamp-2'}`}
                                                    style={{ color: 'var(--text-secondary)' }}
                                                >
                                                    {sunnah.description}
                                                </p>

                                                {expandedSunnah === sunnah.id && (
                                                    <p
                                                        className="text-xs mt-3 font-medium italic"
                                                        style={{ color: 'var(--accent)' }}
                                                    >
                                                        📖 {sunnah.reference}
                                                    </p>
                                                )}
                                            </div>

                                            {expandedSunnah === sunnah.id ? (
                                                <ChevronUp size={18} style={{ color: 'var(--text-secondary)' }} />
                                            ) : (
                                                <ChevronDown size={18} style={{ color: 'var(--text-secondary)' }} />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                ))
            )}

            {/* Footer Quote */}
            {!searchQuery && (
                <section
                    className="p-5 rounded-3xl text-center"
                    style={{
                        backgroundColor: isDark ? 'rgba(45, 90, 76, 0.15)' : 'rgba(232, 243, 240, 0.7)',
                        border: '1px solid var(--glass-border)'
                    }}
                >
                    <p className="italic text-sm leading-relaxed" style={{ color: 'var(--accent)' }}>
                        "Whoever revives a Sunnah of mine that has died after me, he will have a reward equivalent to that of those who act upon it..."
                    </p>
                    <p className="text-xs mt-2 font-bold" style={{ color: 'var(--text-secondary)' }}>
                        — Sunan Ibn Majah 209
                    </p>
                </section>
            )}
        </div>
    );
};

export default SunnahView;
