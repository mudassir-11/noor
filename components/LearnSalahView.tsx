import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { salahSteps, stepCategories, prayers, SalahStep } from '../data/salahGuideData';
import {
    ChevronDown, ChevronUp, BookOpen, Play, CheckCircle2,
    Circle, Info, Sparkles, Clock, ArrowLeft
} from 'lucide-react';

interface LearnSalahViewProps {
    onBack: () => void;
}

const LearnSalahView: React.FC<LearnSalahViewProps> = ({ onBack }) => {
    const { isDark } = useTheme();
    const [expandedStep, setExpandedStep] = useState<number | null>(null);
    const [expandedCategory, setExpandedCategory] = useState<string | null>('standing');
    const [selectedPrayer, setSelectedPrayer] = useState<string | null>(null);

    const toggleStep = (id: number) => {
        setExpandedStep(expandedStep === id ? null : id);
    };

    const toggleCategory = (id: string) => {
        setExpandedCategory(expandedCategory === id ? null : id);
    };

    const getStepById = (id: number): SalahStep | undefined => {
        return salahSteps.find(s => s.id === id);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-24">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="p-3 rounded-2xl transition-all hover:scale-105 active:scale-95"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
                <ArrowLeft size={24} style={{ color: 'var(--accent)' }} />
            </button>

            {/* Prayer Overview Cards */}
            <section>
                <h3 className="text-sm font-bold uppercase mb-3" style={{ color: 'var(--text-secondary)' }}>
                    <Clock size={14} className="inline mr-2" />
                    The Five Daily Prayers
                </h3>
                <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                    {prayers.map((prayer) => (
                        <button
                            key={prayer.id}
                            onClick={() => setSelectedPrayer(selectedPrayer === prayer.id ? null : prayer.id)}
                            className={`flex-shrink-0 p-4 rounded-2xl transition-all ${selectedPrayer === prayer.id ? 'scale-105' : 'hover:scale-102'}`}
                            style={{
                                backgroundColor: selectedPrayer === prayer.id ? 'var(--accent)' : isDark ? 'var(--bg-secondary)' : 'white',
                                color: selectedPrayer === prayer.id ? 'white' : 'var(--text-primary)',
                                border: '1px solid var(--glass-border)',
                                minWidth: '100px'
                            }}
                        >
                            <div className="text-2xl font-arabic mb-1">{prayer.arabicName}</div>
                            <div className="font-bold">{prayer.name}</div>
                            <div className="text-xs opacity-70">{prayer.rakats} Rakats</div>
                        </button>
                    ))}
                </div>

                {/* Selected Prayer Details */}
                {selectedPrayer && (
                    <div
                        className="mt-3 p-4 rounded-2xl animate-in slide-in-from-top-2 duration-300"
                        style={{ backgroundColor: isDark ? 'var(--bg-secondary)' : 'white', border: '1px solid var(--glass-border)' }}
                    >
                        {(() => {
                            const prayer = prayers.find(p => p.id === selectedPrayer);
                            if (!prayer) return null;
                            return (
                                <div className="space-y-2">
                                    <h4 className="font-bold" style={{ color: 'var(--accent)' }}>{prayer.name} Prayer</h4>
                                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{prayer.description}</p>
                                    <div className="flex gap-4 text-sm">
                                        <span><strong>Fard:</strong> {prayer.fard} rakats</span>
                                        {prayer.sunnah.before > 0 && <span><strong>Sunnah Before:</strong> {prayer.sunnah.before}</span>}
                                        {prayer.sunnah.after > 0 && <span><strong>Sunnah After:</strong> {prayer.sunnah.after}</span>}
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                )}
            </section>

            {/* How to Pray Section */}
            <section>
                <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={16} style={{ color: 'var(--accent)' }} />
                    <h3 className="text-sm font-bold uppercase" style={{ color: 'var(--text-secondary)' }}>
                        Complete Prayer Steps
                    </h3>
                </div>

                {/* Step Categories */}
                <div className="space-y-3">
                    {stepCategories.map((category) => (
                        <div key={category.id}>
                            {/* Category Header */}
                            <button
                                onClick={() => toggleCategory(category.id)}
                                className="w-full p-4 rounded-2xl flex items-center justify-between transition-all hover:scale-[1.01] active:scale-[0.99]"
                                style={{
                                    backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                                    border: '1px solid var(--glass-border)'
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{category.emoji}</span>
                                    <span className="font-bold" style={{ color: 'var(--text-primary)' }}>
                                        {category.name}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className="text-xs px-2 py-1 rounded-full font-bold"
                                        style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--accent)' }}
                                    >
                                        {category.steps.length} steps
                                    </span>
                                    {expandedCategory === category.id ? (
                                        <ChevronUp size={20} style={{ color: 'var(--text-secondary)' }} />
                                    ) : (
                                        <ChevronDown size={20} style={{ color: 'var(--text-secondary)' }} />
                                    )}
                                </div>
                            </button>

                            {/* Category Steps */}
                            {expandedCategory === category.id && (
                                <div className="mt-2 space-y-2 pl-2 animate-in slide-in-from-top-2 duration-300">
                                    {category.steps.map((stepId) => {
                                        const step = getStepById(stepId);
                                        if (!step) return null;
                                        const isExpanded = expandedStep === step.id;

                                        return (
                                            <div
                                                key={step.id}
                                                className="rounded-xl overflow-hidden transition-all"
                                                style={{
                                                    backgroundColor: isDark ? 'rgba(var(--bg-secondary-rgb), 0.5)' : 'rgba(255,255,255,0.8)',
                                                    border: '1px solid var(--glass-border)'
                                                }}
                                            >
                                                {/* Step Header */}
                                                <button
                                                    onClick={() => toggleStep(step.id)}
                                                    className="w-full p-4 flex items-start gap-3 text-left"
                                                >
                                                    <div
                                                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                                        style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                                                    >
                                                        {step.id}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold" style={{ color: 'var(--text-primary)' }}>
                                                            {step.name}
                                                        </h4>
                                                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                                            {step.arabicName}
                                                        </p>
                                                        {!isExpanded && step.arabic && (
                                                            <p className="text-sm mt-1 opacity-70 line-clamp-1" style={{ color: 'var(--accent)' }}>
                                                                {step.arabic.substring(0, 40)}...
                                                            </p>
                                                        )}
                                                    </div>
                                                    {isExpanded ? (
                                                        <ChevronUp size={20} style={{ color: 'var(--text-secondary)' }} />
                                                    ) : (
                                                        <ChevronDown size={20} style={{ color: 'var(--text-secondary)' }} />
                                                    )}
                                                </button>

                                                {/* Expanded Content */}
                                                {isExpanded && (
                                                    <div className="px-4 pb-4 space-y-4 animate-in fade-in duration-200">
                                                        {/* Arabic */}
                                                        {step.arabic && (
                                                            <div
                                                                className="p-4 rounded-xl"
                                                                style={{ backgroundColor: 'var(--bg-secondary)' }}
                                                            >
                                                                <p className="text-xl font-arabic text-right leading-loose mb-2" dir="rtl" style={{ color: 'var(--accent)' }}>
                                                                    {step.arabic}
                                                                </p>
                                                                {step.transliteration && (
                                                                    <p className="text-sm italic" style={{ color: 'var(--text-secondary)' }}>
                                                                        {step.transliteration}
                                                                    </p>
                                                                )}
                                                                {step.translation && (
                                                                    <p className="text-sm mt-2 font-medium" style={{ color: 'var(--text-primary)' }}>
                                                                        "{step.translation}"
                                                                    </p>
                                                                )}
                                                            </div>
                                                        )}

                                                        {/* How to do it */}
                                                        <div>
                                                            <h5 className="text-xs font-bold uppercase mb-2" style={{ color: 'var(--text-secondary)' }}>
                                                                📖 How to do it
                                                            </h5>
                                                            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
                                                                {step.instruction}
                                                            </p>
                                                        </div>

                                                        {/* Posture */}
                                                        <div>
                                                            <h5 className="text-xs font-bold uppercase mb-2" style={{ color: 'var(--text-secondary)' }}>
                                                                ➤ Posture
                                                            </h5>
                                                            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
                                                                {step.posture}
                                                            </p>
                                                        </div>

                                                        {/* Significance */}
                                                        <div
                                                            className="p-3 rounded-xl"
                                                            style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.1)' }}
                                                        >
                                                            <h5 className="text-xs font-bold uppercase mb-2" style={{ color: 'var(--accent)' }}>
                                                                ✨ Why this matters
                                                            </h5>
                                                            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
                                                                {step.significance}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick Tips */}
            <section
                className="p-4 rounded-2xl"
                style={{ backgroundColor: isDark ? 'var(--bg-secondary)' : 'white', border: '1px solid var(--glass-border)' }}
            >
                <h3 className="font-bold mb-3" style={{ color: 'var(--accent)' }}>
                    💡 Quick Tips
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-primary)' }}>
                    <li className="flex gap-2">
                        <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                        <span>Perform wudu (ablution) before praying</span>
                    </li>
                    <li className="flex gap-2">
                        <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                        <span>Face the Qibla (direction of Kaaba)</span>
                    </li>
                    <li className="flex gap-2">
                        <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                        <span>Pray in a clean place wearing clean clothes</span>
                    </li>
                    <li className="flex gap-2">
                        <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                        <span>Focus on the meaning, not just the words</span>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default LearnSalahView;
