
// Audio service using AlQuran.cloud API
// API provides free Quran audio from various reciters

// Available reciters (most popular)
export const RECITERS = {
    alafasy: { id: 'ar.alafasy', name: 'Mishary Rashid Alafasy' },
    husary: { id: 'ar.husary', name: 'Mahmoud Khalil Al-Husary' },
    minshawi: { id: 'ar.minshawi', name: 'Mohamed Siddiq Al-Minshawi' },
    sudais: { id: 'ar.abdurrahmaansudais', name: 'Abdurrahman As-Sudais' },
} as const;

export type ReciterKey = keyof typeof RECITERS;

const DEFAULT_RECITER = RECITERS.alafasy.id;

// Get verse number within entire Quran (global ayah number)
// Each surah starts at a different offset
const SURAH_VERSE_OFFSETS: Record<number, number> = {
    1: 0,      // Al-Fatihah starts at 1
    103: 6214, // Al-Asr
    108: 6231, // Al-Kawthar
    112: 6221, // Al-Ikhlas
    114: 6230, // An-Nas
};

// Fetch audio URL from API
async function getAudioUrl(surahNumber: number, verseNumber: number, reciter: string): Promise<string | null> {
    try {
        const response = await fetch(
            `https://api.alquran.cloud/v1/ayah/${surahNumber}:${verseNumber}/${reciter}`
        );
        const data = await response.json();

        if (data.code === 200 && data.data?.audio) {
            return data.data.audio;
        }

        // Fallback: try alternate format
        if (data.code === 200 && data.data?.audioSecondary?.[0]) {
            return data.data.audioSecondary[0];
        }

        return null;
    } catch (error) {
        console.error('Error fetching audio URL:', error);
        return null;
    }
}

// Audio player class for managing playback state
export class AudioPlayer {
    private audio: HTMLAudioElement | null = null;
    private currentVerse: string | null = null;

    async play(surahNumber: number, verseNumber: number, reciter: string = DEFAULT_RECITER): Promise<void> {
        const verseKey = `${surahNumber}:${verseNumber}`;

        // If same verse is playing, pause it
        if (this.currentVerse === verseKey && this.audio && !this.audio.paused) {
            this.pause();
            return;
        }

        // Stop any current playback
        this.stop();

        // Fetch the audio URL from API
        const url = await getAudioUrl(surahNumber, verseNumber, reciter);

        if (!url) {
            console.error('Could not get audio URL for', verseKey);
            throw new Error('Audio URL not found');
        }



        return new Promise((resolve, reject) => {
            this.audio = new Audio(url);
            this.currentVerse = verseKey;

            this.audio.onended = () => {
                this.currentVerse = null;
                resolve();
            };

            this.audio.onerror = (e) => {
                console.error('Audio playback error:', e);
                this.currentVerse = null;
                reject(e);
            };

            this.audio.oncanplaythrough = () => {

            };

            this.audio.play().catch(reject);
        });
    }

    pause(): void {
        if (this.audio) {
            this.audio.pause();
        }
    }

    stop(): void {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
            this.audio = null;
            this.currentVerse = null;
        }
    }

    isPlaying(surahNumber: number, verseNumber: number): boolean {
        return this.currentVerse === `${surahNumber}:${verseNumber}` &&
            this.audio !== null &&
            !this.audio.paused;
    }

    getCurrentVerse(): string | null {
        return this.currentVerse;
    }
}

// Singleton instance
export const audioPlayer = new AudioPlayer();
