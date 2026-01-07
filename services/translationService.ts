
interface ApiVerse {
    number: number;
    text: string;
}

const EDITION_MAP: Record<string, string> = {
    'ur': 'ur.jalandhry',
    'roman': 'en.transliteration',
    'en': 'en.sahih'
};

export async function fetchSurahTranslation(surahNumber: number, language: string): Promise<Record<number, string>> {
    if (language === 'en') return {}; // Default is already in DB

    const edition = EDITION_MAP[language];
    if (!edition) return {};

    try {
        const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/${edition}`);
        const data = await response.json();

        if (data.code === 200 && data.status === 'OK') {
            const translationMap: Record<number, string> = {};
            data.data.ayahs.forEach((ayah: any) => {
                translationMap[ayah.numberInSurah] = ayah.text;
            });
            return translationMap;
        }
        return {};
    } catch (error) {
        console.error(`Error fetching translation for ${language}:`, error);
        return {};
    }
}
