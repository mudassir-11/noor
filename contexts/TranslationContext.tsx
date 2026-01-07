import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ur' | 'roman';

interface TranslationContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    getLanguageLabel: (lang: Language) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const getLanguageLabel = (lang: Language): string => {
        switch (lang) {
            case 'en': return 'English';
            case 'ur': return 'Urdu';
            case 'roman': return 'Transliteration';
            default: return 'English';
        }
    };

    return (
        <TranslationContext.Provider value={{ language, setLanguage, getLanguageLabel }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
};
