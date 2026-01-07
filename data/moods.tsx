
import React from 'react';
import { Mood } from '../types';
import { Heart, CloudRain, Zap, Compass, Smile, Frown } from 'lucide-react';

export const MOODS: Mood[] = [
    {
        id: 'anxious',
        label: 'Anxious',
        icon: <Zap size={ 24} />,
    color: 'bg-amber-100 text-amber-600',
    description: 'Find peace and tranquility in Allah\'s remembrance.',
    verses: [
        { surah: 13, verse: 28 }, // Truly in the remembrance of Allah do hearts find rest
        { surah: 94, verse: 5 },  // Verily, with hardship comes ease
        { surah: 2, verse: 286 }, // Allah does not burden a soul beyond that it can bear
    ]
  },
{
    id: 'sad',
        label: 'Sad',
            icon: <CloudRain size={ 24 } />,
    color: 'bg-blue-100 text-blue-600',
        description: 'Comfort for a heavy heart.',
            verses: [
                { surah: 93, verse: 3 },  // Your Lord has not abandoned you
                { surah: 12, verse: 86 }, // I complain of my grief and sorrow only to Allah
                { surah: 94, verse: 6 },  // With hardship comes ease (reiteration)
            ]
},
{
    id: 'lost',
        label: 'Lost',
            icon: <Compass size={ 24 } />,
    color: 'bg-indigo-100 text-indigo-600',
        description: 'Guidance when the path seems unclear.',
            verses: [
                { surah: 1, verse: 6 },   // Guide us to the straight path
                { surah: 2, verse: 186 }, // I am near. I respond to the invocation of the supplicant
                { surah: 24, verse: 35 }, // Allah is the Light of the heavens and the earth
            ]
},
{
    id: 'grateful',
        label: 'Grateful',
            icon: <Heart size={ 24 } />,
    color: 'bg-rose-100 text-rose-600',
        description: 'Verses of thanks and abundance.',
            verses: [
                { surah: 14, verse: 7 },  // If you are grateful, I will surely increase you [in favor]
                { surah: 55, verse: 13 }, // So which of the favors of your Lord would you deny?
                { surah: 2, verse: 152 }, // So remember Me; I will remember you
            ]
},
{
    id: 'angry',
        label: 'Angry',
            icon: <Frown size={ 24 } />,
    color: 'bg-red-100 text-red-600',
        description: 'Calm the fire within through patience.',
            verses: [
                { surah: 3, verse: 134 }, // Who repress anger and who pardon the people
                { surah: 41, verse: 34 }, // Repel [evil] by that [deed] which is better
                { surah: 25, verse: 63 }, // And when the ignorant address them [harshly], they say, "Peace"
            ]
},
{
    id: 'happy',
        label: 'Happy',
            icon: <Smile size={ 24 } />,
    color: 'bg-emerald-100 text-emerald-600',
        description: 'Celebrating the joy Allah has bestowed.',
            verses: [
                { surah: 10, verse: 58 }, // In the bounty of Allah and in His mercy - in that let them rejoice
                { surah: 93, verse: 11 }, // And as for the favor of your Lord, report [it]
                { surah: 87, verse: 14 }, // He has certainly succeeded who purifies himself
            ]
}
];
