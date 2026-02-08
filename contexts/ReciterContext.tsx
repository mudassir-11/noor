import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Available reciters
export const RECITERS = {
    alafasy: { id: 'ar.alafasy', name: 'Mishary Rashid Alafasy', style: 'Melodious' },
    husary: { id: 'ar.husary', name: 'Mahmoud Khalil Al-Husary', style: 'Clear & Slow' },
    minshawi: { id: 'ar.minshawi', name: 'Mohamed Siddiq Al-Minshawi', style: 'Traditional' },
    sudais: { id: 'ar.abdurrahmaansudais', name: 'Abdurrahman As-Sudais', style: 'Imam of Makkah' },
} as const;

export type ReciterKey = keyof typeof RECITERS;

interface ReciterContextType {
    reciter: ReciterKey;
    setReciter: (reciter: ReciterKey) => void;
    getReciterId: () => string;
}

const ReciterContext = createContext<ReciterContextType | undefined>(undefined);

const STORAGE_KEY = 'noor_reciter';

export function ReciterProvider({ children }: { children: ReactNode }) {
    const [reciter, setReciterState] = useState<ReciterKey>('alafasy');

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && saved in RECITERS) {
            setReciterState(saved as ReciterKey);
        }
    }, []);

    const setReciter = (newReciter: ReciterKey) => {
        setReciterState(newReciter);
        localStorage.setItem(STORAGE_KEY, newReciter);
    };

    const getReciterId = () => RECITERS[reciter].id;

    return (
        <ReciterContext.Provider value={{ reciter, setReciter, getReciterId }}>
            {children}
        </ReciterContext.Provider>
    );
}

export function useReciter() {
    const context = useContext(ReciterContext);
    if (context === undefined) {
        throw new Error('useReciter must be used within a ReciterProvider');
    }
    return context;
}
