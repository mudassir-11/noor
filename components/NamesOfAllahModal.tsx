import React, { useState } from 'react';
import { X, ChevronRight, BookOpen, Heart, Lightbulb, Star } from 'lucide-react';
import { NameOfAllah } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface NamesOfAllahModalProps {
    names: NameOfAllah[];
    isOpen: boolean;
    onClose: () => void;
    initialNameId?: number;
}

const NamesOfAllahModal: React.FC<NamesOfAllahModalProps> = ({ names, isOpen, onClose, initialNameId }) => {
    const { isDark } = useTheme();
    const [selectedName, setSelectedName] = useState<NameOfAllah | null>(
        initialNameId ? names.find(n => n.id === initialNameId) || null : null
    );

    if (!isOpen) return null;

    const handleNameClick = (name: NameOfAllah) => {
        setSelectedName(selectedName?.id === name.id ? null : name);
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={handleBackdropClick}
        >
            <div
                className="w-full max-w-md h-[90vh] rounded-t-[2.5rem] overflow-hidden flex flex-col animate-in slide-in-from-bottom duration-300"
                style={{ backgroundColor: 'var(--bg-primary)' }}
            >
                {/* Header */}
                <div className="p-6 pb-4 flex items-center justify-between border-b" style={{ borderColor: 'var(--bg-secondary)' }}>
                    <div>
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]">
                            99 Names of Allah
                        </h2>
                        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>Asma ul Husna</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                        style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Names Grid */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {names.map((name) => (
                        <div key={name.id}>
                            {/* Name Card */}
                            <button
                                onClick={() => handleNameClick(name)}
                                className="w-full p-4 rounded-2xl text-left transition-all hover:scale-[1.02] active:scale-[0.98] border"
                                style={{
                                    backgroundColor: selectedName?.id === name.id
                                        ? 'var(--accent)'
                                        : isDark ? 'var(--bg-secondary)' : 'white',
                                    borderColor: selectedName?.id === name.id ? 'var(--accent)' : 'var(--bg-secondary)',
                                    color: selectedName?.id === name.id ? 'white' : 'var(--text-primary)'
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <span
                                            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm"
                                            style={{
                                                backgroundColor: selectedName?.id === name.id ? 'rgba(255,255,255,0.2)' : 'var(--bg-secondary)',
                                                color: selectedName?.id === name.id ? 'white' : 'var(--accent)'
                                            }}
                                        >
                                            {name.number}
                                        </span>
                                        <div>
                                            <p className="font-bold">{name.transliteration}</p>
                                            <p className="text-sm opacity-70">{name.meaning}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="arabic-text text-2xl opacity-80">{name.arabic}</span>
                                        <ChevronRight
                                            size={18}
                                            className={`transition-transform ${selectedName?.id === name.id ? 'rotate-90' : ''}`}
                                            style={{ opacity: 0.5 }}
                                        />
                                    </div>
                                </div>
                            </button>

                            {/* Expanded Detail View */}
                            {selectedName?.id === name.id && (
                                <div
                                    className="mt-2 p-5 rounded-2xl space-y-5 animate-in slide-in-from-top duration-200 border"
                                    style={{
                                        backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                                        borderColor: 'var(--bg-secondary)'
                                    }}
                                >
                                    {/* Description */}
                                    {name.description && (
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Star size={16} style={{ color: 'var(--accent)' }} />
                                                <span className="text-xs font-bold uppercase" style={{ color: 'var(--text-secondary)' }}>Description</span>
                                            </div>
                                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>{name.description}</p>
                                        </div>
                                    )}

                                    {/* Quranic References */}
                                    {name.quran_references && name.quran_references.length > 0 && (
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <BookOpen size={16} style={{ color: 'var(--accent)' }} />
                                                <span className="text-xs font-bold uppercase" style={{ color: 'var(--text-secondary)' }}>Quranic References</span>
                                            </div>
                                            <div className="space-y-2">
                                                {name.quran_references.map((ref, idx) => (
                                                    <div key={idx} className="p-3 rounded-xl" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                                        <p className="text-sm italic" style={{ color: 'var(--text-primary)' }}>"{ref.text}"</p>
                                                        <p className="text-xs mt-1" style={{ color: 'var(--accent)' }}>— Surah {ref.surah}, Verse {ref.verse}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Duas */}
                                    {name.duas && name.duas.length > 0 && (
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Heart size={16} style={{ color: 'var(--accent)' }} />
                                                <span className="text-xs font-bold uppercase" style={{ color: 'var(--text-secondary)' }}>Related Dua</span>
                                            </div>
                                            {name.duas.map((dua, idx) => (
                                                <div key={idx} className="p-3 rounded-xl space-y-1" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                                    <p className="arabic-text text-xl text-center" style={{ color: 'var(--text-primary)' }}>{dua.arabic}</p>
                                                    <p className="text-sm text-center italic" style={{ color: 'var(--text-secondary)' }}>{dua.transliteration}</p>
                                                    <p className="text-xs text-center" style={{ color: 'var(--accent)' }}>{dua.meaning}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Practical Application */}
                                    {name.practical_application && (
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Lightbulb size={16} style={{ color: 'var(--accent)' }} />
                                                <span className="text-xs font-bold uppercase" style={{ color: 'var(--text-secondary)' }}>Practical Application</span>
                                            </div>
                                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>{name.practical_application}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NamesOfAllahModal;
