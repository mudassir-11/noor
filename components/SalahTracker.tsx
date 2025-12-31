
import React, { useState, useEffect } from 'react';
import { PrayerLog, PrayerName, PRAYER_NAMES, PRAYER_LABELS } from '../types';
import { getTodayLog, togglePrayer, getWeeklyStats, getMonthlyStats } from '../services/salahService';
import { useAuth } from '../contexts/AuthContext';
import { Check, X, Moon, Sun, Sunrise, Sunset, Clock } from 'lucide-react';

const PRAYER_ICONS: Record<PrayerName, React.ReactNode> = {
    fajr: <Sunrise size={20} />,
    dhuhr: <Sun size={20} />,
    asr: <Clock size={20} />,
    maghrib: <Sunset size={20} />,
    isha: <Moon size={20} />
};

const SalahTracker: React.FC = () => {
    const { user } = useAuth();
    const [todayLog, setTodayLog] = useState<PrayerLog | null>(null);
    const [weeklyStats, setWeeklyStats] = useState<Record<PrayerName, { prayed: number; missed: number }> | null>(null);
    const [monthlyStats, setMonthlyStats] = useState<Record<PrayerName, { prayed: number; missed: number }> | null>(null);
    const [viewMode, setViewMode] = useState<'today' | 'weekly' | 'monthly'>('today');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            loadData();
        }
    }, [user]);

    const loadData = async () => {
        setLoading(true);
        const [log, weekly, monthly] = await Promise.all([
            getTodayLog(),
            getWeeklyStats(),
            getMonthlyStats()
        ]);
        setTodayLog(log);
        setWeeklyStats(weekly);
        setMonthlyStats(monthly);
        setLoading(false);
    };

    const handleToggle = async (prayer: PrayerName) => {
        if (!todayLog) return;
        const newValue = !todayLog[prayer];
        const success = await togglePrayer(prayer, newValue);
        if (success) {
            setTodayLog(prev => prev ? { ...prev, [prayer]: newValue } : null);
            const weekly = await getWeeklyStats();
            const monthly = await getMonthlyStats();
            setWeeklyStats(weekly);
            setMonthlyStats(monthly);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <div className="w-12 h-12 border-4 border-[#2D5A4C] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-24">
            {/* Header */}
            <div>
                <h2 className="text-xl font-bold text-[#2D5A4C]">Salah Tracker</h2>
                <p className="text-sm text-[#6B8E85]">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-[#E8F3F0] rounded-2xl p-1">
                {(['today', 'weekly', 'monthly'] as const).map((mode) => (
                    <button
                        key={mode}
                        onClick={() => setViewMode(mode)}
                        className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all ${viewMode === mode
                                ? 'bg-[#2D5A4C] text-white shadow-md'
                                : 'text-[#6B8E85] hover:text-[#2D5A4C]'
                            }`}
                    >
                        {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </button>
                ))}
            </div>

            {/* Today's Prayers */}
            {viewMode === 'today' && todayLog && (
                <div className="space-y-3">
                    <h3 className="text-sm font-bold text-[#6B8E85] uppercase tracking-wider">Today's Prayers</h3>
                    {PRAYER_NAMES.map((prayer) => (
                        <button
                            key={prayer}
                            onClick={() => handleToggle(prayer)}
                            className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all active:scale-98 ${todayLog[prayer]
                                    ? 'bg-[#2D5A4C] border-[#2D5A4C] text-white'
                                    : 'bg-white border-[#E8F3F0] text-[#2D5A4C] hover:border-[#2D5A4C]'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                {PRAYER_ICONS[prayer]}
                                <span className="font-semibold">{PRAYER_LABELS[prayer]}</span>
                            </div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${todayLog[prayer] ? 'bg-white/20' : 'bg-[#E8F3F0]'
                                }`}>
                                {todayLog[prayer] ? <Check size={18} /> : <X size={18} className="text-[#6B8E85]" />}
                            </div>
                        </button>
                    ))}
                </div>
            )}

            {/* Weekly Stats */}
            {viewMode === 'weekly' && weeklyStats && (
                <div className="space-y-3">
                    <h3 className="text-sm font-bold text-[#6B8E85] uppercase tracking-wider">This Week</h3>
                    {PRAYER_NAMES.map((prayer) => {
                        const stats = weeklyStats[prayer];
                        const total = stats.prayed + stats.missed;
                        return (
                            <div key={prayer} className="bg-white p-4 rounded-2xl border border-[#E8F3F0]">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="text-[#2D5A4C]">{PRAYER_ICONS[prayer]}</div>
                                        <span className="font-semibold text-[#2D5A4C]">{PRAYER_LABELS[prayer]}</span>
                                    </div>
                                    <span className={`text-sm font-bold ${stats.missed > 0 ? 'text-amber-600' : 'text-green-600'}`}>
                                        {stats.missed > 0 ? `${stats.missed} of ${total} missed` : 'All prayed! ✨'}
                                    </span>
                                </div>
                                <div className="h-2 bg-[#E8F3F0] rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#2D5A4C] rounded-full transition-all"
                                        style={{ width: `${(stats.prayed / Math.max(total, 1)) * 100}%` }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Monthly Stats */}
            {viewMode === 'monthly' && monthlyStats && (
                <div className="space-y-3">
                    <h3 className="text-sm font-bold text-[#6B8E85] uppercase tracking-wider">This Month</h3>
                    {PRAYER_NAMES.map((prayer) => {
                        const stats = monthlyStats[prayer];
                        const total = stats.prayed + stats.missed;
                        const percentage = total > 0 ? Math.round((stats.prayed / total) * 100) : 0;
                        return (
                            <div key={prayer} className="bg-white p-4 rounded-2xl border border-[#E8F3F0]">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="text-[#2D5A4C]">{PRAYER_ICONS[prayer]}</div>
                                        <span className="font-semibold text-[#2D5A4C]">{PRAYER_LABELS[prayer]}</span>
                                    </div>
                                    <span className="text-2xl font-bold text-[#2D5A4C]">{percentage}%</span>
                                </div>
                                <div className="h-2 bg-[#E8F3F0] rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#2D5A4C] rounded-full transition-all"
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>
                                <p className="text-xs text-[#6B8E85] mt-2">
                                    {stats.prayed} of {total} days prayed
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SalahTracker;
