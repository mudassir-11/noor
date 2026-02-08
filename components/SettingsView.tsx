import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useReciter, RECITERS, ReciterKey } from '../contexts/ReciterContext';
import { useTranslation } from '../contexts/TranslationContext';
import {
    User, Moon, Sun, Volume2, Globe, Info, LogOut, ChevronRight,
    Settings, Sparkles, Heart
} from 'lucide-react';

interface SettingsViewProps {
    onBack?: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = () => {
    const { isDark, toggleTheme } = useTheme();
    const { user, signOut } = useAuth();
    const { reciter, setReciter } = useReciter();
    const { language, setLanguage, getLanguageLabel } = useTranslation();

    const handleLogout = async () => {
        if (window.confirm('Are you sure you want to logout?')) {
            await signOut();
        }
    };

    const SettingItem = ({
        icon: Icon,
        label,
        value,
        onClick,
        danger = false
    }: {
        icon: any;
        label: string;
        value?: string;
        onClick?: () => void;
        danger?: boolean;
    }) => (
        <button
            onClick={onClick}
            className="w-full flex items-center justify-between p-4 rounded-2xl transition-all hover:scale-[1.01] active:scale-[0.99]"
            style={{
                backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                border: '1px solid var(--glass-border)'
            }}
        >
            <div className="flex items-center gap-3">
                <div
                    className="p-2 rounded-xl"
                    style={{
                        backgroundColor: danger ? 'rgba(239, 68, 68, 0.1)' : 'var(--bg-secondary)',
                        color: danger ? '#EF4444' : 'var(--accent)'
                    }}
                >
                    <Icon size={20} />
                </div>
                <span
                    className="font-medium"
                    style={{ color: danger ? '#EF4444' : 'var(--text-primary)' }}
                >
                    {label}
                </span>
            </div>
            <div className="flex items-center gap-2">
                {value && (
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {value}
                    </span>
                )}
                {onClick && <ChevronRight size={18} style={{ color: 'var(--text-secondary)' }} />}
            </div>
        </button>
    );

    const reciterOptions = Object.entries(RECITERS).map(([key, val]) => ({
        key: key as ReciterKey,
        ...val
    }));

    const translationOptions = [
        { key: 'en', label: 'English' },
        { key: 'ur', label: 'Urdu' },
        { key: 'roman', label: 'Roman Urdu' }
    ] as const;

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-24">
            {/* Header */}
            <section className="mt-4">
                <div className="flex items-center gap-3">
                    <div
                        className="p-3 rounded-2xl"
                        style={{ backgroundColor: 'var(--bg-secondary)' }}
                    >
                        <Settings size={24} style={{ color: 'var(--accent)' }} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold" style={{ color: 'var(--accent)' }}>
                            Settings
                        </h2>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            Customize your experience
                        </p>
                    </div>
                </div>
            </section>

            {/* Profile Section */}
            <section className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider px-1" style={{ color: 'var(--text-secondary)' }}>
                    Account
                </h3>
                <div
                    className="p-4 rounded-2xl"
                    style={{
                        backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                        border: '1px solid var(--glass-border)'
                    }}
                >
                    <div className="flex items-center gap-4">
                        <div
                            className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold"
                            style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                        >
                            {user?.email?.charAt(0).toUpperCase() || 'U'}
                        </div>
                        <div>
                            <p className="font-bold" style={{ color: 'var(--text-primary)' }}>
                                {user?.email || 'Guest User'}
                            </p>
                            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                Member since {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Appearance Section */}
            <section className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider px-1" style={{ color: 'var(--text-secondary)' }}>
                    Appearance
                </h3>
                <SettingItem
                    icon={isDark ? Moon : Sun}
                    label="Theme"
                    value={isDark ? 'Dark' : 'Light'}
                    onClick={toggleTheme}
                />
            </section>

            {/* Audio Section */}
            <section className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider px-1" style={{ color: 'var(--text-secondary)' }}>
                    Audio
                </h3>
                <div
                    className="p-4 rounded-2xl space-y-3"
                    style={{
                        backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                        border: '1px solid var(--glass-border)'
                    }}
                >
                    <div className="flex items-center gap-3 mb-3">
                        <Volume2 size={20} style={{ color: 'var(--accent)' }} />
                        <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Reciter</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        {reciterOptions.map((r) => (
                            <button
                                key={r.key}
                                onClick={() => setReciter(r.key)}
                                className="p-3 rounded-xl text-left transition-all"
                                style={{
                                    backgroundColor: reciter === r.key
                                        ? 'var(--accent)'
                                        : isDark ? 'rgba(255,255,255,0.05)' : 'var(--bg-secondary)',
                                    color: reciter === r.key ? 'white' : 'var(--text-primary)'
                                }}
                            >
                                <p className="font-medium text-sm">{r.name}</p>
                                <p className="text-xs opacity-70">{r.style}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Translation Section */}
            <section className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider px-1" style={{ color: 'var(--text-secondary)' }}>
                    Translation
                </h3>
                <div
                    className="p-4 rounded-2xl space-y-3"
                    style={{
                        backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                        border: '1px solid var(--glass-border)'
                    }}
                >
                    <div className="flex items-center gap-3 mb-3">
                        <Globe size={20} style={{ color: 'var(--accent)' }} />
                        <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Default Language</span>
                    </div>
                    <div className="flex gap-2">
                        {translationOptions.map((t) => (
                            <button
                                key={t.key}
                                onClick={() => setLanguage(t.key)}
                                className="flex-1 p-3 rounded-xl text-center transition-all"
                                style={{
                                    backgroundColor: language === t.key
                                        ? 'var(--accent)'
                                        : isDark ? 'rgba(255,255,255,0.05)' : 'var(--bg-secondary)',
                                    color: language === t.key ? 'white' : 'var(--text-primary)'
                                }}
                            >
                                <p className="font-medium text-sm">{t.label}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider px-1" style={{ color: 'var(--text-secondary)' }}>
                    About
                </h3>
                <div
                    className="p-4 rounded-2xl"
                    style={{
                        backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                        border: '1px solid var(--glass-border)'
                    }}
                >
                    <div className="flex items-center gap-3">
                        <Sparkles size={20} style={{ color: 'var(--accent)' }} />
                        <div>
                            <p className="font-bold" style={{ color: 'var(--text-primary)' }}>Noor</p>
                            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Version 1.0.0</p>
                        </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        A beautiful app to help you learn and understand the Quran. Built with love for the Ummah.
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-xs" style={{ color: 'var(--accent)' }}>
                        <span>Made with</span>
                        <Heart size={12} className="fill-current" />
                        <span>for the Ummah</span>
                    </div>
                </div>
            </section>

            {/* Logout */}
            <section className="space-y-3 pt-4">
                <SettingItem
                    icon={LogOut}
                    label="Logout"
                    onClick={handleLogout}
                    danger
                />
            </section>
        </div>
    );
};

export default SettingsView;
