
import React, { useState, useEffect } from 'react';
import { PrayerLog, PrayerName, PRAYER_NAMES, PRAYER_LABELS, AppScreen } from '../types';
import { getTodayLog, togglePrayer, getWeeklyStats, getMonthlyStats } from '../services/salahService';
import { getUserLocation, getPrayerTimes, getNextPrayer, PrayerTimes } from '../services/prayerTimesService';
import { useAuth } from '../contexts/AuthContext';
import { Check, X, Moon, Sun, Sunrise, Sunset, Clock, GraduationCap, MapPin, Navigation } from 'lucide-react';

const PRAYER_ICONS: Record<PrayerName, React.ReactNode> = {
    fajr: <Sunrise size={20} />,
    dhuhr: <Sun size={20} />,
    asr: <Clock size={20} />,
    maghrib: <Sunset size={20} />,
    isha: <Moon size={20} />
};

const PRAYER_COLORS: Record<string, string> = {
    Fajr: 'from-indigo-500 to-purple-600',
    Dhuhr: 'from-yellow-400 to-orange-400',
    Asr: 'from-amber-400 to-orange-500',
    Maghrib: 'from-orange-500 to-red-500',
    Isha: 'from-indigo-600 to-purple-800'
};

interface SalahTrackerProps {
    onNavigate: (screen: AppScreen) => void;
}

const SalahTracker: React.FC<SalahTrackerProps> = ({ onNavigate }) => {
    const { user } = useAuth();
    const [todayLog, setTodayLog] = useState<PrayerLog | null>(null);
    const [weeklyStats, setWeeklyStats] = useState<Record<PrayerName, { prayed: number; missed: number }> | null>(null);
    const [monthlyStats, setMonthlyStats] = useState<Record<PrayerName, { prayed: number; missed: number }> | null>(null);
    const [viewMode, setViewMode] = useState<'today' | 'weekly' | 'monthly'>('today');
    const [loading, setLoading] = useState(true);
    const [loadingTimes, setLoadingTimes] = useState(true);
    const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string } | null>(null);
    const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);

    useEffect(() => {
        if (user) {
            loadData();
            loadPrayerTimes(); // Load prayer times separately (non-blocking)
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

    // Load prayer times separately so it doesn't block the main UI
    const loadPrayerTimes = async () => {
        setLoadingTimes(true);
        try {
            const loc = await getUserLocation();
            if (loc) {
                const times = await getPrayerTimes(loc);
                if (times) {
                    setPrayerTimes(times);
                    const next = getNextPrayer(times);
                    setNextPrayer(next);
                }
            }
        } catch (e) {
            console.log('Could not fetch prayer times');
        }
        setLoadingTimes(false);
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

    // Removed blocking spinner - page shows immediately with inline loading states

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-24">

            {/* Next Prayer Card */}
            {loadingTimes && !nextPrayer ? (
                <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl animate-pulse">
                    <div className="h-3 w-20 bg-white/30 rounded mb-2"></div>
                    <div className="flex items-center justify-between">
                        <div className="h-8 w-24 bg-white/30 rounded"></div>
                        <div className="h-10 w-20 bg-white/30 rounded"></div>
                    </div>
                </div>
            ) : nextPrayer && (
                <div className={`p-5 rounded-3xl text-white bg-gradient-to-br ${PRAYER_COLORS[nextPrayer.name] || 'from-emerald-500 to-teal-600'} shadow-xl`}>
                    <p className="text-white/80 text-xs uppercase tracking-wider mb-1">Next Prayer</p>
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold">{nextPrayer.name}</h3>
                        <span className="text-3xl font-bold">{nextPrayer.time}</span>
                    </div>
                    {prayerTimes && (
                        <p className="text-white/60 text-xs mt-2 flex items-center gap-1">
                            <MapPin size={12} />
                            {prayerTimes.location}
                        </p>
                    )}
                </div>
            )}

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
                {/* Learn How to Pray */}
                <button
                    onClick={() => onNavigate(AppScreen.LEARN_SALAH)}
                    className="p-4 rounded-2xl flex flex-col items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                        background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
                        color: 'white'
                    }}
                >
                    <GraduationCap size={24} />
                    <span className="text-sm font-bold">Learn Salah</span>
                </button>

                {/* View Times & Masjids */}
                <button
                    onClick={() => onNavigate(AppScreen.PRAYER_TIMES)}
                    className="p-4 rounded-2xl flex flex-col items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        color: 'white'
                    }}
                >
                    <Navigation size={24} />
                    <span className="text-sm font-bold">Times & Masjids</span>
                </button>
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
            {viewMode === 'today' && (
                <div className="space-y-3">
                    <h3 className="text-sm font-bold text-[#6B8E85] uppercase tracking-wider">Today's Prayers</h3>
                    {loading ? (
                        // Skeleton loader
                        PRAYER_NAMES.map((prayer) => (
                            <div
                                key={prayer}
                                className="w-full flex items-center justify-between p-4 rounded-2xl border-2 border-[#E8F3F0] bg-white animate-pulse"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-gray-200 rounded"></div>
                                    <div className="h-5 w-16 bg-gray-200 rounded"></div>
                                </div>
                                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                            </div>
                        ))
                    ) : todayLog ? (
                        PRAYER_NAMES.map((prayer) => (
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
                        ))
                    ) : null}
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
