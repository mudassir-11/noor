
// Masjid Service using Overpass API (OpenStreetMap)
// Free, no API key required

import { Location } from './prayerTimesService';

export interface Masjid {
    id: string;
    name: string;
    distance: number; // in km
    latitude: number;
    longitude: number;
    address?: string;
}

// Calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Fetch nearby masjids using Overpass API (OpenStreetMap)
export async function getNearbyMasjids(location: Location, radiusKm: number = 5): Promise<Masjid[]> {
    try {
        const radiusMeters = radiusKm * 1000;

        // Overpass QL query to find mosques
        const query = `
            [out:json][timeout:25];
            (
                node["amenity"="place_of_worship"]["religion"="muslim"](around:${radiusMeters},${location.latitude},${location.longitude});
                way["amenity"="place_of_worship"]["religion"="muslim"](around:${radiusMeters},${location.latitude},${location.longitude});
                node["building"="mosque"](around:${radiusMeters},${location.latitude},${location.longitude});
                way["building"="mosque"](around:${radiusMeters},${location.latitude},${location.longitude});
            );
            out center;
        `;

        const response = await fetch('https://overpass-api.de/api/interpreter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `data=${encodeURIComponent(query)}`
        });

        if (!response.ok) {
            throw new Error('Failed to fetch masjids');
        }

        const data = await response.json();

        const masjids: Masjid[] = data.elements
            .map((element: any) => {
                // For ways, use center coordinates
                const lat = element.lat || element.center?.lat;
                const lon = element.lon || element.center?.lon;

                if (!lat || !lon) return null;

                const tags = element.tags || {};
                const name = tags.name || tags['name:en'] || tags['name:ar'] || 'Masjid';

                // Build address from available tags
                const addressParts = [
                    tags['addr:street'],
                    tags['addr:city'],
                    tags['addr:suburb']
                ].filter(Boolean);

                return {
                    id: `${element.type}/${element.id}`,
                    name: name,
                    latitude: lat,
                    longitude: lon,
                    distance: calculateDistance(location.latitude, location.longitude, lat, lon),
                    address: addressParts.length > 0 ? addressParts.join(', ') : undefined
                };
            })
            .filter((m: Masjid | null): m is Masjid => m !== null)
            .sort((a: Masjid, b: Masjid) => a.distance - b.distance);

        return masjids;
    } catch (error) {
        console.error('Error fetching nearby masjids:', error);
        return [];
    }
}

// Format distance for display
export function formatDistance(distanceKm: number): string {
    if (distanceKm < 1) {
        return `${Math.round(distanceKm * 1000)} m`;
    }
    return `${distanceKm.toFixed(1)} km`;
}

// Get Google Maps directions URL
export function getDirectionsUrl(masjid: Masjid): string {
    return `https://www.google.com/maps/dir/?api=1&destination=${masjid.latitude},${masjid.longitude}&destination_place_id=${masjid.name}`;
}

// Get Google Maps URL for the masjid
export function getMapsUrl(masjid: Masjid): string {
    return `https://www.google.com/maps/search/?api=1&query=${masjid.latitude},${masjid.longitude}`;
}
