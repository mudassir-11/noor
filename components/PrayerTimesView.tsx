
import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Sunrise, Sun, Sunset, Moon, RefreshCw, Navigation, ExternalLink } from 'lucide-react';
import { getUserLocation, getPrayerTimes, getNextPrayer, PrayerTimes, Location } from '../services/prayerTimesService';
import { getNearbyMasjids, formatDistance, getDirectionsUrl, Masjid } from '../services/masjidService';
import { useTheme } from '../contexts/ThemeContext';

const PRAYER_ICONS: Record<string, React.ReactNode> = {
    Fajr: <Sunrise size={20} />,
    Sunrise: <Sun size={20} />,
    Dhuhr: <Sun size={20} />,
    Asr: <Clock size={20} />,
    Maghrib: <Sunset size={20} />,
    Isha: <Moon size={20} />
};

const PRAYER_COLORS: Record<string, string> = {
    Fajr: 'from-indigo-500 to-purple-600',
    Sunrise: 'from-orange-400 to-yellow-500',
    Dhuhr: 'from-yellow-400 to-orange-400',
    Asr: 'from-amber-400 to-orange-500',
    Maghrib: 'from-orange-500 to-red-500',
    Isha: 'from-indigo-600 to-purple-800'
};

const PrayerTimesView: React.FC = () => {
    const { isDark } = useTheme();
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState<Location | null>(null);
    const [times, setTimes] = useState<PrayerTimes | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string } | null>(null);
    const [masjids, setMasjids] = useState<Masjid[]>([]);
    const [loadingMasjids, setLoadingMasjids] = useState(false);

    useEffect(() => {
        loadPrayerTimes();
    }, []);

    const loadPrayerTimes = async () => {
        setLoading(true);
        setError(null);

        const loc = await getUserLocation();
        if (!loc) {
            setError('Location access needed for prayer times');
            setLoading(false);
            return;
        }

        setLocation(loc);
        const prayerTimes = await getPrayerTimes(loc);

        if (prayerTimes) {
            setTimes(prayerTimes);
            const next = getNextPrayer(prayerTimes);
            setNextPrayer(next);
        } else {
            setError('Could not fetch prayer times');
        }

        setLoading(false);

        // Fetch nearby masjids in background
        setLoadingMasjids(true);
        const nearbyMasjids = await getNearbyMasjids(loc, 5); // 5km radius
        setMasjids(nearbyMasjids);
        setLoadingMasjids(false);
    };


    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
                <div className="w-12 h-12 border-4 border-[#2D5A4C] border-t-transparent rounded-full animate-spin"></div>
                <p style={{ color: 'var(--text-secondary)' }}>Getting your location...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
                <MapPin size={48} style={{ color: 'var(--text-secondary)' }} />
                <h2 className="text-xl font-bold" style={{ color: 'var(--accent)' }}>Location Required</h2>
                <p style={{ color: 'var(--text-secondary)' }} className="max-w-xs">{error}</p>
                <button
                    onClick={loadPrayerTimes}
                    className="px-6 py-3 rounded-2xl font-bold flex items-center gap-2"
                    style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                >
                    <RefreshCw size={18} />
                    Try Again
                </button>
            </div>
        );
    }

    if (!times) return null;

    const prayers = [
        { name: 'Fajr', time: times.Fajr },
        { name: 'Sunrise', time: times.Sunrise },
        { name: 'Dhuhr', time: times.Dhuhr },
        { name: 'Asr', time: times.Asr },
        { name: 'Maghrib', time: times.Maghrib },
        { name: 'Isha', time: times.Isha },
    ];

    return (
        <div className="space-y-6 pb-24 animate-in fade-in duration-500">
            {/* Header with location */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold" style={{ color: 'var(--accent)' }}>Prayer Times</h2>
                    <div className="flex items-center gap-1 mt-1" style={{ color: 'var(--text-secondary)' }}>
                        <MapPin size={14} />
                        <span className="text-sm">{times.location}</span>
                    </div>
                </div>
                <button
                    onClick={loadPrayerTimes}
                    className="p-2 rounded-full"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                >
                    <RefreshCw size={18} style={{ color: 'var(--accent)' }} />
                </button>
            </div>

            {/* Next Prayer Card */}
            {nextPrayer && (
                <div className={`p-6 rounded-3xl text-white bg-gradient-to-br ${PRAYER_COLORS[nextPrayer.name]} shadow-xl`}>
                    <p className="text-white/80 text-sm uppercase tracking-wider mb-1">Next Prayer</p>
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-3xl font-bold">{nextPrayer.name}</h3>
                            <p className="text-white/70 mt-1">{times.date}</p>
                        </div>
                        <div className="text-right">
                            <span className="text-4xl font-bold">{nextPrayer.time}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* All Prayer Times */}
            <div className="space-y-3">
                {prayers.map((prayer) => {
                    const isNext = nextPrayer?.name === prayer.name;
                    return (
                        <div
                            key={prayer.name}
                            className={`flex items-center justify-between p-4 rounded-2xl transition-all ${isNext ? 'ring-2' : ''
                                }`}
                            style={{
                                backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                                border: '1px solid var(--bg-secondary)'
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--accent)' }}
                                >
                                    {PRAYER_ICONS[prayer.name]}
                                </div>
                                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                                    {prayer.name}
                                </span>
                                {isNext && (
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">
                                        Next
                                    </span>
                                )}
                            </div>
                            <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                                {prayer.time}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Nearby Masjids Section */}
            <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Navigation size={20} style={{ color: 'var(--accent)' }} />
                        <h3 className="text-lg font-bold" style={{ color: 'var(--accent)' }}>
                            Nearby Masjids
                        </h3>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}>
                        Within 5km
                    </span>
                </div>

                {loadingMasjids ? (
                    <div className="flex items-center justify-center py-8">
                        <div className="w-8 h-8 border-3 border-[#2D5A4C] border-t-transparent rounded-full animate-spin"></div>
                        <span className="ml-3 text-sm" style={{ color: 'var(--text-secondary)' }}>Finding masjids...</span>
                    </div>
                ) : masjids.length === 0 ? (
                    <div
                        className="p-6 rounded-2xl text-center"
                        style={{ backgroundColor: isDark ? 'var(--bg-secondary)' : 'white', border: '1px solid var(--bg-secondary)' }}
                    >
                        <Navigation size={32} className="mx-auto mb-2 opacity-50" style={{ color: 'var(--text-secondary)' }} />
                        <p style={{ color: 'var(--text-secondary)' }}>No masjids found nearby</p>
                        <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>Try increasing your search radius</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {masjids.slice(0, 5).map((masjid) => (
                            <div
                                key={masjid.id}
                                className="p-4 rounded-2xl transition-all hover:scale-[1.01]"
                                style={{
                                    backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                                    border: '1px solid var(--bg-secondary)'
                                }}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
                                            {masjid.name}
                                        </h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span
                                                className="text-xs px-2 py-0.5 rounded-full font-medium"
                                                style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                                            >
                                                {formatDistance(masjid.distance)}
                                            </span>
                                            {masjid.address && (
                                                <span className="text-xs truncate" style={{ color: 'var(--text-secondary)' }}>
                                                    {masjid.address}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <a
                                        href={getDirectionsUrl(masjid)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-3 p-2 rounded-xl flex items-center gap-1 transition-all hover:scale-105"
                                        style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                        {masjids.length > 5 && (
                            <p className="text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                                +{masjids.length - 5} more masjids found
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PrayerTimesView;
