import { Sunnah } from '../types';

export const sunnahData: Sunnah[] = [
    // Morning Sunnahs
    {
        id: 1,
        title: 'Wake Up with Dhikr',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
        description: 'Upon waking, say "Alhamdulillahil-ladhi ahyana ba\'da ma amatana wa ilayhin-nushur" (All praise is for Allah who gave us life after death and unto Him is the resurrection).',
        category: 'morning',
        reference: 'Sahih Bukhari 6312'
    },
    {
        id: 2,
        title: 'Use Miswak',
        arabic: null,
        description: 'The Prophet (PBUH) used to clean his teeth with a miswak (tooth-stick) upon waking up.',
        category: 'morning',
        reference: 'Sahih Bukhari 889'
    },
    {
        id: 3,
        title: 'Wash Hands Three Times',
        arabic: null,
        description: 'Upon waking, wash your hands three times before putting them in any vessel, as the hands may have touched impure areas during sleep.',
        category: 'morning',
        reference: 'Sahih Muslim 278'
    },

    // Eating Sunnahs
    {
        id: 4,
        title: 'Say Bismillah Before Eating',
        arabic: 'بِسْمِ اللَّهِ',
        description: 'Begin every meal by saying "Bismillah" (In the name of Allah). If you forget at the start, say "Bismillahi awwalahu wa akhirahu".',
        category: 'eating',
        reference: 'Sunan Abu Dawud 3767'
    },
    {
        id: 5,
        title: 'Eat with Right Hand',
        arabic: null,
        description: 'The Prophet (PBUH) said: "Eat with your right hand and drink with your right hand, for Shaytan eats with his left hand and drinks with his left hand."',
        category: 'eating',
        reference: 'Sahih Muslim 2020'
    },
    {
        id: 6,
        title: 'Eat from What is Nearest',
        arabic: null,
        description: 'Eat from the edges of the plate nearest to you, not from the middle or others\' portions.',
        category: 'eating',
        reference: 'Sahih Bukhari 5376'
    },
    {
        id: 7,
        title: 'Sit While Drinking',
        arabic: null,
        description: 'The Prophet (PBUH) preferred to sit while drinking water and drink in three sips.',
        category: 'eating',
        reference: 'Sahih Muslim 2024'
    },
    {
        id: 8,
        title: 'Thank Allah After Eating',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
        description: 'After eating, praise Allah for the provision by saying "Alhamdulillahil-ladhi at\'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah".',
        category: 'eating',
        reference: 'Sunan Abu Dawud 4023'
    },

    // Sleeping Sunnahs
    {
        id: 9,
        title: 'Make Wudu Before Sleep',
        arabic: null,
        description: 'The Prophet (PBUH) recommended performing ablution (wudu) before going to sleep.',
        category: 'sleeping',
        reference: 'Sahih Bukhari 247'
    },
    {
        id: 10,
        title: 'Dust the Bed Three Times',
        arabic: null,
        description: 'Before lying down, dust off your bed three times with the edge of your garment.',
        category: 'sleeping',
        reference: 'Sahih Bukhari 6320'
    },
    {
        id: 11,
        title: 'Sleep on Right Side',
        arabic: null,
        description: 'Lie down on your right side. The Prophet (PBUH) said: "When you go to bed, perform wudu... then lie down on your right side."',
        category: 'sleeping',
        reference: 'Sahih Bukhari 6311'
    },
    {
        id: 12,
        title: 'Recite Ayat al-Kursi',
        arabic: null,
        description: 'Recite Ayat al-Kursi (Quran 2:255) before sleeping for protection throughout the night.',
        category: 'sleeping',
        reference: 'Sahih Bukhari 5010'
    },
    {
        id: 13,
        title: 'Recite Last Three Surahs',
        arabic: null,
        description: 'Cup your hands, blow into them, recite Al-Ikhlas, Al-Falaq, and An-Nas, then wipe over as much of your body as possible. Do this three times.',
        category: 'sleeping',
        reference: 'Sahih Bukhari 5017'
    },

    // Cleanliness Sunnahs
    {
        id: 14,
        title: 'Trim Nails Regularly',
        arabic: null,
        description: 'Keep nails trimmed as part of natural cleanliness (fitrah). The Prophet set a limit of not leaving them longer than 40 days.',
        category: 'cleanliness',
        reference: 'Sahih Muslim 258'
    },
    {
        id: 15,
        title: 'Enter Bathroom with Left Foot',
        arabic: 'بِسْمِ اللَّهِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
        description: 'Enter the bathroom with the left foot, saying "Bismillah, Allahumma inni a\'udhu bika minal-khubuthi wal-khaba\'ith".',
        category: 'cleanliness',
        reference: 'Sahih Bukhari 142'
    },
    {
        id: 16,
        title: 'Exit Bathroom with Right Foot',
        arabic: 'غُفْرَانَكَ',
        description: 'Exit the bathroom with the right foot, saying "Ghufranaka" (I seek Your forgiveness).',
        category: 'cleanliness',
        reference: 'Sunan Abu Dawud 30'
    },

    // General Sunnahs
    {
        id: 17,
        title: 'Smile at Others',
        arabic: null,
        description: 'The Prophet (PBUH) said: "Your smiling in the face of your brother is charity."',
        category: 'general',
        reference: 'Jami at-Tirmidhi 1956'
    },
    {
        id: 18,
        title: 'Say Salam First',
        arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ',
        description: 'Initiate the greeting of "Assalamu Alaikum" when meeting fellow Muslims. The one who greets first is closer to Allah.',
        category: 'general',
        reference: 'Sunan Abu Dawud 5197'
    },
    {
        id: 19,
        title: 'Be Kind to Neighbors',
        arabic: null,
        description: 'The Prophet (PBUH) said: "Jibril kept advising me to be good to my neighbor until I thought he would make him my heir."',
        category: 'general',
        reference: 'Sahih Bukhari 6014'
    },
    {
        id: 20,
        title: 'Remove Harm from the Path',
        arabic: null,
        description: 'Removing harmful objects from the road is a branch of faith and an act of charity.',
        category: 'general',
        reference: 'Sahih Muslim 35'
    },
    {
        id: 21,
        title: 'Wear Shoes Right First',
        arabic: null,
        description: 'When putting on shoes, start with the right foot. When taking them off, start with the left. The right should be first to be worn and last to be removed.',
        category: 'general',
        reference: 'Sahih Bukhari 5856'
    },
    {
        id: 22,
        title: 'Don\'t Blow on Food',
        arabic: null,
        description: 'Do not blow onto hot food or drink to cool it down. Wait patiently for it to cool.',
        category: 'eating',
        reference: 'Sunan Ibn Majah 3288'
    },
    {
        id: 23,
        title: 'Lick Fingers After Eating',
        arabic: null,
        description: 'The Prophet (PBUH) would lick his three fingers after finishing his meal before wiping them, showing appreciation for the blessing of food.',
        category: 'eating',
        reference: 'Sahih Muslim 2032'
    },
    {
        id: 24,
        title: 'Salam to Family',
        arabic: null,
        description: 'When entering your home, say Salam to your family. It is a blessing for you and your household.',
        category: 'general',
        reference: 'Jami at-Tirmidhi 2698'
    },
    {
        id: 25,
        title: 'Answer the Adhan',
        arabic: null,
        description: 'Repeat the words of the Adhan after the Muazzin. It is a means of forgiveness and intercession.',
        category: 'general',
        reference: 'Sahih Muslim 384'
    },
    {
        id: 26,
        title: 'Walk Barefoot Occasionally',
        arabic: null,
        description: 'The Prophet (PBUH) commanded his companions to walk barefoot occasionally to remain humble and tough.',
        category: 'general',
        reference: 'Sunan Abu Dawud 4160'
    }
];

export const categoryLabels: Record<string, string> = {
    morning: '🌅 Morning',
    eating: '🍽️ Eating & Drinking',
    sleeping: '🌙 Sleeping',
    cleanliness: '🧼 Cleanliness',
    general: '✨ General'
};

export const categoryOrder = ['morning', 'eating', 'sleeping', 'cleanliness', 'general'];
