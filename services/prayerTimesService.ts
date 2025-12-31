
// Prayer Times Service using Aladhan API
// https://aladhan.com/prayer-times-api

export interface PrayerTimes {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
    date: string;
    location: string;
}

export interface Location {
    latitude: number;
    longitude: number;
    city?: string;
    country?: string;
}

// Get user's current location
export async function getUserLocation(): Promise<Location | null> {
    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            console.log('Geolocation not supported');
            resolve(null);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const location: Location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };

                // Try to get city name via reverse geocoding
                try {
                    const response = await fetch(
                        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.latitude}&longitude=${location.longitude}&localityLanguage=en`
                    );
                    const data = await response.json();
                    location.city = data.city || data.locality || 'Unknown';
                    location.country = data.countryName || '';
                } catch (e) {
                    location.city = 'Your Location';
                }

                resolve(location);
            },
            (error) => {
                console.log('Location error:', error);
                resolve(null);
            },
            { timeout: 10000 }
        );
    });
}

// Fetch prayer times from Aladhan API
export async function getPrayerTimes(location: Location): Promise<PrayerTimes | null> {
    try {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();

        const response = await fetch(
            `https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=${location.latitude}&longitude=${location.longitude}&method=2`
        );

        const data = await response.json();

        if (data.code === 200 && data.data?.timings) {
            const timings = data.data.timings;
            return {
                Fajr: formatTime(timings.Fajr),
                Sunrise: formatTime(timings.Sunrise),
                Dhuhr: formatTime(timings.Dhuhr),
                Asr: formatTime(timings.Asr),
                Maghrib: formatTime(timings.Maghrib),
                Isha: formatTime(timings.Isha),
                date: data.data.date.readable,
                location: location.city ? `${location.city}${location.country ? ', ' + location.country : ''}` : 'Your Location'
            };
        }

        return null;
    } catch (error) {
        console.error('Error fetching prayer times:', error);
        return null;
    }
}

// Format 24h time to 12h format
function formatTime(time24: string): string {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
}

// Get next prayer
export function getNextPrayer(times: PrayerTimes): { name: string; time: string; isNow: boolean } | null {
    const now = new Date();
    const prayers = [
        { name: 'Fajr', time: times.Fajr },
        { name: 'Sunrise', time: times.Sunrise },
        { name: 'Dhuhr', time: times.Dhuhr },
        { name: 'Asr', time: times.Asr },
        { name: 'Maghrib', time: times.Maghrib },
        { name: 'Isha', time: times.Isha },
    ];

    for (const prayer of prayers) {
        const prayerTime = parseTime(prayer.time);
        if (prayerTime > now) {
            return { ...prayer, isNow: false };
        }
    }

    // After Isha, next prayer is Fajr tomorrow
    return { name: 'Fajr', time: times.Fajr, isNow: false };
}

// Parse 12h time string to Date
function parseTime(timeStr: string): Date {
    const [time, period] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;

    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}
