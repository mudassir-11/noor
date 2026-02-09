
import React, { useState, useMemo, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Search, Heart, Share2, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';
import { duasData, duaCategories } from '../data/duasData';
import { DuaEntry } from '../types';

const DuasView: React.FC = () => {
    const { isDark } = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [expandedDua, setExpandedDua] = useState<number | null>(null);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [copiedId, setCopiedId] = useState<number | null>(null);

    // Load favorites from local storage
    useEffect(() => {
        const stored = localStorage.getItem('favorite_duas');
        if (stored) {
            setFavorites(JSON.parse(stored));
        }
    }, []);

    // Save favorites to local storage
    const toggleFavorite = (id: number, e: React.MouseEvent) => {
        e.stopPropagation();
        const newFavorites = favorites.includes(id)
            ? favorites.filter(fid => fid !== id)
            : [...favorites, id];

        setFavorites(newFavorites);
        localStorage.setItem('favorite_duas', JSON.stringify(newFavorites));
    };

    // Filter logic
    const filteredDuas = useMemo(() => {
        return duasData.filter(dua => {
            const matchesSearch =
                dua.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                dua.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                dua.transliteration.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = selectedCategory === 'All' || dua.category === selectedCategory || (selectedCategory === 'Favorites' && favorites.includes(dua.id));

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory, favorites]);

    // Dua of the Day (random based on date)
    const duaOfTheDay = useMemo(() => {
        const today = new Date();
        const index = (today.getDate() + today.getMonth() + today.getFullYear()) % duasData.length;
        return duasData[index];
    }, []);

    const handleCopy = (dua: DuaEntry, e: React.MouseEvent) => {
        e.stopPropagation();
        const text = `${dua.title}\n\n${dua.arabic}\n\n${dua.translation}\n\nReference: ${dua.reference}`;
        navigator.clipboard.writeText(text);
        setCopiedId(dua.id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-24">
            {/* Search Bar */}
            <div className="relative flex items-center rounded-2xl overflow-hidden"
                style={{
                    backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                    border: '2px solid var(--bg-secondary)'
                }}
            >
                <Search size={20} className="ml-4 opacity-50" />
                <input
                    type="text"
                    placeholder="Search for a dua..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-4 bg-transparent outline-none placeholder:opacity-50"
                    style={{ color: 'var(--text-primary)' }}
                />
            </div>

            {/* Categories */}
            <div className="overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide flex gap-2">
                <button
                    onClick={() => setSelectedCategory('Favorites')}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${selectedCategory === 'Favorites'
                            ? 'scale-105 shadow-md'
                            : 'hover:bg-opacity-80'
                        }`}
                    style={{
                        backgroundColor: selectedCategory === 'Favorites' ? 'var(--accent)' : 'var(--bg-secondary)',
                        color: selectedCategory === 'Favorites' ? 'white' : 'var(--text-secondary)'
                    }}
                >
                    <Heart size={14} className={selectedCategory === 'Favorites' ? 'fill-white' : ''} />
                    Favorites
                </button>
                {duaCategories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                                ? 'scale-105 shadow-md'
                                : 'hover:bg-opacity-80'
                            }`}
                        style={{
                            backgroundColor: selectedCategory === cat ? 'var(--accent)' : 'var(--bg-secondary)',
                            color: selectedCategory === cat ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Dua of the Day Card (only show if not searching) */}
            {!searchQuery && selectedCategory === 'All' && (
                <div className="p-5 rounded-3xl relative overflow-hidden group border transition-all hover:scale-[1.01]"
                    style={{
                        backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                        borderColor: 'var(--accent)',
                        borderWidth: '1px'
                    }}
                >
                    <div className="absolute top-0 right-0 p-3 bg-[var(--accent)] rounded-bl-2xl text-white text-xs font-bold uppercase tracking-wider">
                        Dua of the Day
                    </div>

                    <div className="mt-6 space-y-4">
                        <h3 className="text-xl font-bold" style={{ color: 'var(--accent)' }}>{duaOfTheDay.title}</h3>
                        <p className="arabic-text text-2xl leading-loose text-center py-2" style={{ color: 'var(--text-primary)' }}>
                            {duaOfTheDay.arabic}
                        </p>
                        <p className="text-sm italic opacity-80" style={{ color: 'var(--text-primary)' }}>
                            {duaOfTheDay.translation}
                        </p>
                        <div className="flex justify-between items-center pt-2 border-t" style={{ borderColor: 'var(--glass-border)' }}>
                            <span className="text-xs opacity-60">{duaOfTheDay.reference}</span>
                            <div className="flex gap-2">
                                <button onClick={(e) => toggleFavorite(duaOfTheDay.id, e)} className="p-2 rounded-full hover:bg-[var(--bg-secondary)]">
                                    <Heart size={18} className={favorites.includes(duaOfTheDay.id) ? 'fill-[var(--accent)] text-[var(--accent)]' : 'text-[var(--text-secondary)]'} />
                                </button>
                                <button onClick={(e) => handleCopy(duaOfTheDay, e)} className="p-2 rounded-full hover:bg-[var(--bg-secondary)]">
                                    {copiedId === duaOfTheDay.id ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-[var(--text-secondary)]" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Duas List */}
            <div className="space-y-4">
                {filteredDuas.length === 0 ? (
                    <div className="text-center py-10 opacity-50">
                        <p>No duas found.</p>
                    </div>
                ) : (
                    filteredDuas.map(dua => (
                        <div
                            key={dua.id}
                            className={`rounded-2xl border transition-all duration-300 ${expandedDua === dua.id ? 'shadow-lg ring-1 ring-[var(--accent)]' : 'hover:border-[var(--accent)]'
                                }`}
                            style={{
                                backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                                borderColor: expandedDua === dua.id ? 'var(--accent)' : 'transparent'
                            }}
                        >
                            <button
                                onClick={() => setExpandedDua(expandedDua === dua.id ? null : dua.id)}
                                className="w-full p-4 flex items-center justify-between text-left"
                            >
                                <div>
                                    <h4 className="font-bold" style={{ color: 'var(--text-primary)' }}>{dua.title}</h4>
                                    <span className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-secondary)' }}>
                                        {dua.category}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button onClick={(e) => toggleFavorite(dua.id, e)} className="p-2 rounded-full hover:bg-[var(--bg-primary)] transition-colors">
                                        <Heart size={18} className={favorites.includes(dua.id) ? 'fill-[var(--accent)] text-[var(--accent)]' : 'text-[var(--text-secondary)]'} />
                                    </button>
                                    {expandedDua === dua.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </button>

                            {expandedDua === dua.id && (
                                <div className="px-5 pb-5 pt-0 space-y-4 animate-in slide-in-from-top duration-200">
                                    <div className="h-px w-full bg-[var(--glass-border)] my-2"></div>
                                    <p className="arabic-text text-2xl leading-loose text-center" style={{ color: 'var(--text-primary)' }}>
                                        {dua.arabic}
                                    </p>
                                    <p className="text-sm text-center opacity-80" style={{ color: 'var(--text-primary)' }}>
                                        {dua.transliteration}
                                    </p>
                                    <div className="p-3 rounded-xl bg-[var(--bg-primary)]">
                                        <p className="text-sm italic" style={{ color: 'var(--text-primary)' }}>
                                            "{dua.translation}"
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-xs font-medium opacity-60">{dua.reference}</span>
                                        <button
                                            onClick={(e) => handleCopy(dua, e)}
                                            className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors hover:bg-[var(--bg-primary)]"
                                            style={{ color: 'var(--accent)' }}
                                        >
                                            {copiedId === dua.id ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default DuasView;
