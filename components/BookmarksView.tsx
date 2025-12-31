
import React, { useState, useEffect } from 'react';
import { getBookmarks, removeBookmark, Bookmark } from '../services/bookmarkService';
import { Bookmark as BookmarkIcon, Trash2, BookOpen } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface BookmarksViewProps {
    onNavigateToSurah?: (surahId: number) => void;
}

const BookmarksView: React.FC<BookmarksViewProps> = ({ onNavigateToSurah }) => {
    const { isDark } = useTheme();
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadBookmarks();
    }, []);

    const loadBookmarks = async () => {
        setLoading(true);
        const data = await getBookmarks();
        setBookmarks(data);
        setLoading(false);
    };

    const handleRemove = async (surahId: number, verseNumber: number) => {
        const success = await removeBookmark(surahId, verseNumber);
        if (success) {
            setBookmarks(prev => prev.filter(
                b => !(b.surah_id === surahId && b.verse_number === verseNumber)
            ));
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <div className="w-12 h-12 border-4 border-[#2D5A4C] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (bookmarks.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                    <BookmarkIcon size={40} style={{ color: 'var(--accent)' }} />
                </div>
                <h2 className="text-xl font-bold" style={{ color: 'var(--accent)' }}>No Bookmarks Yet</h2>
                <p className="max-w-xs" style={{ color: 'var(--text-secondary)' }}>
                    Tap the bookmark icon on any verse while reading to save it here.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4 pb-24">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold" style={{ color: 'var(--accent)' }}>My Bookmarks</h2>
                <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}>
                    {bookmarks.length} saved
                </span>
            </div>

            {bookmarks.map((bookmark) => (
                <div
                    key={`${bookmark.surah_id}-${bookmark.verse_number}`}
                    className="rounded-2xl p-4 border transition-all"
                    style={{
                        backgroundColor: isDark ? 'var(--bg-secondary)' : 'white',
                        borderColor: 'var(--bg-secondary)'
                    }}
                >
                    <div className="flex justify-between items-start gap-3">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                                    {bookmark.surah_name}
                                </span>
                                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                                    Verse {bookmark.verse_number}
                                </span>
                            </div>
                            <p className="arabic-text text-xl text-right mb-2" style={{ color: 'var(--text-primary)' }}>
                                {bookmark.verse_text}
                            </p>
                            <p className="text-sm italic" style={{ color: 'var(--text-secondary)' }}>
                                {bookmark.translation}
                            </p>
                        </div>
                        <button
                            onClick={() => handleRemove(bookmark.surah_id, bookmark.verse_number)}
                            className="p-2 rounded-full hover:bg-red-50 text-red-400 hover:text-red-500 transition-colors"
                            title="Remove bookmark"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookmarksView;
