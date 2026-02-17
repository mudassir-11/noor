// Learn Salah - Step-by-step prayer guide with meanings
// Each step includes Arabic, transliteration, translation, and posture

export interface SalahStep {
    id: number;
    name: string;
    arabicName: string;
    arabic: string | null;
    transliteration: string | null;
    translation: string | null;
    instruction: string;
    posture: string;
    significance: string;
}

export interface SalahPosition {
    id: string;
    name: string;
    description: string;
    steps: SalahStep[];
}

export interface Prayer {
    id: string;
    name: string;
    arabicName: string;
    rakats: number;
    fard: number;
    sunnah: { before: number; after: number };
    description: string;
    fardBenefits: string[];
    sunnahBenefits: string[];
}

// The 5 daily prayers
export const prayers: Prayer[] = [
    {
        id: 'fajr',
        name: 'Fajr',
        arabicName: 'الفجر',
        rakats: 2,
        fard: 2,
        sunnah: { before: 2, after: 0 },
        description: 'The dawn prayer, performed before sunrise',
        fardBenefits: [
            'Whoever prays Fajr is under the protection of Allah (Sahih Muslim 657)',
            'Fajr and Isha in congregation equal praying the entire night (Sahih Muslim 656)',
            'Light on the Day of Judgment for those who walk to Fajr in darkness (Sunan Abu Dawud 561)',
            'Angels of the day and night witness this prayer (Sahih Bukhari 555)'
        ],
        sunnahBenefits: [
            'The two rak\'ah before Fajr are better than the world and everything in it (Sahih Muslim 725)',
            'The Prophet (PBUH) never left these sunnah rak\'ah, even while traveling (Sahih Bukhari 1169)'
        ]
    },
    {
        id: 'dhuhr',
        name: 'Dhuhr',
        arabicName: 'الظهر',
        rakats: 4,
        fard: 4,
        sunnah: { before: 4, after: 2 },
        description: 'The midday prayer, performed after the sun passes its zenith',
        fardBenefits: [
            'One of the five pillars — the first thing asked about on the Day of Judgment (Sunan Abu Dawud 864)',
            'Prayers are an expiation for sins committed between them (Sahih Muslim 228)',
            'The best deed in the sight of Allah after the declaration of faith (Sahih Bukhari 527)'
        ],
        sunnahBenefits: [
            'Whoever prays 4 rak\'ah before Dhuhr and 4 after, Allah will make Hellfire Haram for them (Jami at-Tirmidhi 428)',
            'Whoever guards 4 rak\'ah before Dhuhr will enter Jannah (Sunan Abu Dawud 1269)'
        ]
    },
    {
        id: 'asr',
        name: 'Asr',
        arabicName: 'العصر',
        rakats: 4,
        fard: 4,
        sunnah: { before: 0, after: 0 },
        description: 'The afternoon prayer, performed in the late afternoon',
        fardBenefits: [
            'Whoever misses Asr prayer, it is as if he lost his family and wealth (Sahih Bukhari 552)',
            'Whoever prays the two cool prayers (Fajr and Asr) will enter Jannah (Sahih Bukhari 574)',
            'The angels of day and night meet at this prayer, testifying for you before Allah (Sahih Bukhari 555)'
        ],
        sunnahBenefits: [
            'May Allah have mercy on the one who prays 4 rak\'ah before Asr (Sunan Abu Dawud 1271)',
            'Though not strongly emphasized, the reward is still great for any voluntary prayer'
        ]
    },
    {
        id: 'maghrib',
        name: 'Maghrib',
        arabicName: 'المغرب',
        rakats: 3,
        fard: 3,
        sunnah: { before: 0, after: 2 },
        description: 'The evening prayer, performed just after sunset',
        fardBenefits: [
            'Should be prayed immediately at sunset — delaying it is disliked (Sahih Bukhari 560)',
            'Completes the chain of daily prayers that are expiation for sins between them (Sahih Muslim 228)',
            'Part of the 5 daily prayers that are like a river washing away sins five times a day (Sahih Bukhari 528)'
        ],
        sunnahBenefits: [
            'The 2 rak\'ah after Maghrib are among the 12 regular sunnah that earn a house in Jannah (Sahih Muslim 728)',
            'Reciting Surah Al-Kafirun and Surah Al-Ikhlas in these sunnah is recommended (Sunan Ibn Majah 1166)'
        ]
    },
    {
        id: 'isha',
        name: 'Isha',
        arabicName: 'العشاء',
        rakats: 4,
        fard: 4,
        sunnah: { before: 0, after: 2 },
        description: 'The night prayer, performed after twilight disappears',
        fardBenefits: [
            'Praying Isha in congregation equals praying half the night (Sahih Muslim 656)',
            'Combined with Fajr in congregation, it equals praying the whole night (Sahih Muslim 656)',
            'This is the hardest prayer for the hypocrites — praying it shows true faith (Sahih Bukhari 657)'
        ],
        sunnahBenefits: [
            'The 2 rak\'ah after Isha are among the 12 regular sunnah that build a house in Jannah (Sahih Muslim 728)',
            'Praying Witr after Isha is highly recommended — the Prophet never left it (Sahih Bukhari 998)'
        ]
    }
];

// Complete steps of a 2 rakat prayer (simplest form)
export const salahSteps: SalahStep[] = [
    // Pre-Prayer
    {
        id: 1,
        name: 'Niyyah (Intention)',
        arabicName: 'النية',
        arabic: null,
        transliteration: null,
        translation: null,
        instruction: 'Make the intention in your heart to pray. You don\'t need to say it out loud. Simply intend which prayer you are performing (e.g., "I intend to pray 2 rakats of Fajr").',
        posture: 'Standing, facing the Qibla',
        significance: 'The prayer begins with sincere intention. Actions are judged by intentions, as the Prophet ﷺ said.'
    },
    // Standing - Takbir
    {
        id: 2,
        name: 'Takbiratul Ihram',
        arabicName: 'تكبيرة الإحرام',
        arabic: 'اللَّهُ أَكْبَرُ',
        transliteration: 'Allahu Akbar',
        translation: 'Allah is the Greatest',
        instruction: 'Raise both hands up to your ears (or shoulders for women) and say "Allahu Akbar". This officially begins the prayer.',
        posture: 'Standing, hands raised to ears',
        significance: 'By saying "Allah is Greatest", you declare that nothing is more important than Allah at this moment. All worldly matters are left behind.'
    },
    // Standing - Hands Folded
    {
        id: 3,
        name: 'Qiyam (Standing)',
        arabicName: 'القيام',
        arabic: null,
        transliteration: null,
        translation: null,
        instruction: 'Lower your hands and fold them on your chest (right hand over left). Keep your gaze fixed on the place of prostration.',
        posture: 'Standing, hands folded on chest',
        significance: 'Standing before Allah in humility and submission, ready to converse with your Creator.'
    },
    // Thana (Opening Supplication)
    {
        id: 4,
        name: 'Thana (Opening Du\'a)',
        arabicName: 'الثناء',
        arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَىٰ جَدُّكَ، وَلَا إِلٰهَ غَيْرُكَ',
        transliteration: 'Subhanaka Allahumma wa bihamdika, wa tabarakasmuka, wa ta\'ala jadduka, wa la ilaha ghayruk',
        translation: 'Glory be to You, O Allah, and praise. Blessed is Your name, exalted is Your majesty, and there is no god but You.',
        instruction: 'Recite this opening supplication silently. This is said only in the first rakat.',
        posture: 'Standing, hands folded',
        significance: 'Beginning your conversation with Allah by glorifying and praising Him.'
    },
    // Ta'awwuz
    {
        id: 5,
        name: 'Ta\'awwuz (Seeking Refuge)',
        arabicName: 'التعوذ',
        arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
        transliteration: 'A\'udhu billahi minash-shaytanir-rajeem',
        translation: 'I seek refuge in Allah from Satan, the accursed',
        instruction: 'Seek Allah\'s protection from Satan before reciting the Quran.',
        posture: 'Standing, hands folded',
        significance: 'Protecting yourself from Satan\'s whispers so you can focus on your prayer.'
    },
    // Bismillah
    {
        id: 6,
        name: 'Bismillah',
        arabicName: 'البسملة',
        arabic: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
        transliteration: 'Bismillahir-Rahmanir-Raheem',
        translation: 'In the name of Allah, the Most Gracious, the Most Merciful',
        instruction: 'Begin the Quran recitation with Bismillah.',
        posture: 'Standing, hands folded',
        significance: 'Starting every good deed in Allah\'s name invites His blessings.'
    },
    // Surah Al-Fatiha
    {
        id: 7,
        name: 'Surah Al-Fatiha',
        arabicName: 'سورة الفاتحة',
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ ۝ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        transliteration: 'Alhamdu lillahi Rabbil-\'aalameen. Ar-Rahmaanir-Raheem. Maaliki yawmid-deen. Iyyaaka na\'budu wa iyyaaka nasta\'een. Ihdinas-siraatal-mustaqeem. Siraatal-lazeena an\'amta \'alayhim. Ghayril-maghdoobi \'alayhim wa lad-daalleen.',
        translation: 'All praise is due to Allah, Lord of the worlds. The Most Gracious, the Most Merciful. Master of the Day of Judgment. You alone we worship, and You alone we ask for help. Guide us to the straight path. The path of those upon whom You have bestowed favor, not of those who have earned Your anger or of those who have gone astray.',
        instruction: 'Recite Surah Al-Fatiha completely. This is obligatory in every rakat. After finishing, say "Ameen" (O Allah, accept).',
        posture: 'Standing, hands folded',
        significance: 'Al-Fatiha is the greatest Surah in the Quran. It is a conversation between you and Allah - when you say each verse, Allah responds.'
    },
    // Additional Surah
    {
        id: 8,
        name: 'Additional Surah',
        arabicName: 'سورة إضافية',
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ',
        transliteration: 'Qul huwa Allahu ahad. Allahus-samad. Lam yalid wa lam yoolad. Wa lam yakun lahu kufuwan ahad.',
        translation: 'Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born. Nor is there to Him any equivalent.',
        instruction: 'After Al-Fatiha, recite any Surah or verses from the Quran. This is done in the first two rakats. Surah Al-Ikhlas is shown here as an example.',
        posture: 'Standing, hands folded',
        significance: 'Reciting additional Quran after Al-Fatiha is Sunnah in the first two rakats.'
    },
    // Takbir for Ruku
    {
        id: 9,
        name: 'Takbir for Ruku',
        arabicName: 'التكبير للركوع',
        arabic: 'اللَّهُ أَكْبَرُ',
        transliteration: 'Allahu Akbar',
        translation: 'Allah is the Greatest',
        instruction: 'Say "Allahu Akbar" while moving to the bowing position.',
        posture: 'Transitioning from standing to bowing',
        significance: 'Each transition reminds us of Allah\'s greatness.'
    },
    // Ruku
    {
        id: 10,
        name: 'Ruku (Bowing)',
        arabicName: 'الركوع',
        arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
        transliteration: 'Subhana Rabbiyal-\'Azeem',
        translation: 'Glory be to my Lord, the Almighty',
        instruction: 'Bow down with your back straight and parallel to the ground. Place hands on knees, fingers spread. Say the dhikr at least 3 times.',
        posture: 'Bowing, back parallel to ground, hands on knees',
        significance: 'Bowing in humility before the Almighty, acknowledging His greatness over all creation.'
    },
    // Rising from Ruku
    {
        id: 11,
        name: 'Rising from Ruku',
        arabicName: 'الرفع من الركوع',
        arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ',
        transliteration: 'Sami\' Allahu liman hamidah',
        translation: 'Allah hears those who praise Him',
        instruction: 'Rise from bowing while saying this. The Imam says this out loud.',
        posture: 'Rising back to standing',
        significance: 'Allah hears and accepts the praise of those who praise Him sincerely.'
    },
    // Standing after Ruku
    {
        id: 12,
        name: 'Standing after Ruku',
        arabicName: 'القيام بعد الركوع',
        arabic: 'رَبَّنَا وَلَكَ الْحَمْدُ',
        transliteration: 'Rabbana wa lakal-hamd',
        translation: 'Our Lord, and to You is all praise',
        instruction: 'Stand straight and say this. Some add: "Hamdan katheeran tayyiban mubarakan feeh" (Abundant, pure, and blessed praise).',
        posture: 'Standing straight, hands at sides momentarily',
        significance: 'Responding to Allah\'s hearing with praise and gratitude.'
    },
    // Takbir for Sujood
    {
        id: 13,
        name: 'Takbir for Sujood',
        arabicName: 'التكبير للسجود',
        arabic: 'اللَّهُ أَكْبَرُ',
        transliteration: 'Allahu Akbar',
        translation: 'Allah is the Greatest',
        instruction: 'Say "Allahu Akbar" while going down for prostration.',
        posture: 'Transitioning to prostration',
        significance: 'Preparing to perform the most intimate position with Allah.'
    },
    // First Sujood
    {
        id: 14,
        name: 'Sujood (Prostration)',
        arabicName: 'السجود',
        arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَىٰ',
        transliteration: 'Subhana Rabbiyal-A\'la',
        translation: 'Glory be to my Lord, the Most High',
        instruction: 'Prostrate with 7 body parts touching the ground: forehead with nose, both palms, both knees, and toes of both feet. Say the dhikr at least 3 times.',
        posture: 'Forehead, nose, palms, knees, and toes on the ground',
        significance: 'The closest a servant is to Allah is during prostration. This is the best time to make du\'a. You place the highest part of your body (head) on the lowest place (ground) in ultimate humility.'
    },
    // Rising from first Sujood
    {
        id: 15,
        name: 'Sitting between Sujood',
        arabicName: 'الجلوس بين السجدتين',
        arabic: 'اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي',
        transliteration: 'Allahummaghfir li warhamni',
        translation: 'O Allah, forgive me and have mercy on me',
        instruction: 'Rise from prostration saying "Allahu Akbar" and sit briefly. Sit on your left foot with right foot upright. Say the du\'a.',
        posture: 'Sitting on left foot, right foot upright, hands on thighs',
        significance: 'A moment of rest and seeking forgiveness between prostrations.'
    },
    // Second Sujood
    {
        id: 16,
        name: 'Second Sujood',
        arabicName: 'السجدة الثانية',
        arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَىٰ',
        transliteration: 'Subhana Rabbiyal-A\'la',
        translation: 'Glory be to my Lord, the Most High',
        instruction: 'Say "Allahu Akbar" and prostrate again. Repeat the dhikr at least 3 times.',
        posture: 'Prostration (same as first)',
        significance: 'Two prostrations in each rakat emphasize absolute submission to Allah.'
    },
    // Rising for second rakat
    {
        id: 17,
        name: 'Rising for Next Rakat',
        arabicName: 'القيام للركعة التالية',
        arabic: 'اللَّهُ أَكْبَرُ',
        transliteration: 'Allahu Akbar',
        translation: 'Allah is the Greatest',
        instruction: 'Say "Allahu Akbar" and rise to standing for the next rakat. Repeat from Surah Al-Fatiha.',
        posture: 'Rising to standing',
        significance: 'Beginning the next unit of prayer.'
    },
    // Tashahhud
    {
        id: 18,
        name: 'Tashahhud (Sitting)',
        arabicName: 'التشهد',
        arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
        transliteration: 'At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu \'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh. As-salamu \'alayna wa \'ala \'ibadillahis-saliheen. Ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan \'abduhu wa rasuluh.',
        translation: 'All greetings, prayers, and pure words are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and messenger.',
        instruction: 'After the second prostration of the 2nd rakat (or 4th for longer prayers), sit and recite the Tashahhud. Point your index finger when saying "la ilaha illallah".',
        posture: 'Sitting, left foot under, right foot upright, hands on thighs',
        significance: 'Testifying to the oneness of Allah and the prophethood of Muhammad ﷺ - the core of our faith.'
    },
    // Durood Ibrahim
    {
        id: 19,
        name: 'Durood Ibrahim',
        arabicName: 'الصلاة الإبراهيمية',
        arabic: 'اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ',
        transliteration: 'Allahumma salli \'ala Muhammadin wa \'ala aali Muhammad, kama sallayta \'ala Ibrahima wa \'ala aali Ibrahim, innaka Hamidun Majeed. Allahumma barik \'ala Muhammadin wa \'ala aali Muhammad, kama barakta \'ala Ibrahima wa \'ala aali Ibrahim, innaka Hamidun Majeed.',
        translation: 'O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy, Glorious. O Allah, bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim. Indeed, You are Praiseworthy, Glorious.',
        instruction: 'After Tashahhud in the final sitting, recite the Durood. This is recited in the last rakat before ending the prayer.',
        posture: 'Sitting (same as Tashahhud)',
        significance: 'Sending blessings upon the Prophet ﷺ and his family, connecting us to the legacy of prophets Ibrahim and Muhammad.'
    },
    // Du'a before Salam
    {
        id: 20,
        name: 'Du\'a before Salam',
        arabicName: 'الدعاء قبل السلام',
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
        transliteration: 'Allahumma inni a\'udhu bika min \'adhabi jahannam, wa min \'adhabil-qabr, wa min fitnatil-mahya wal-mamat, wa min sharri fitnatil-masihid-dajjal.',
        translation: 'O Allah, I seek refuge in You from the punishment of Hell, from the punishment of the grave, from the trials of life and death, and from the evil of the trial of the False Messiah.',
        instruction: 'After Durood, make this du\'a (or any other du\'a). This is a Sunnah before ending the prayer.',
        posture: 'Sitting (same as Tashahhud)',
        significance: 'Seeking protection from the greatest trials before concluding your audience with Allah.'
    },
    // Tasleem (Salam)
    {
        id: 21,
        name: 'Tasleem (Ending Prayer)',
        arabicName: 'التسليم',
        arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
        transliteration: 'As-salamu \'alaykum wa rahmatullah',
        translation: 'Peace and mercy of Allah be upon you',
        instruction: 'Turn your face to the right and say the salam. Then turn to the left and repeat. This concludes the prayer.',
        posture: 'Sitting, turning head right then left',
        significance: 'Ending the prayer by sending peace to the angels on your right and left, and to your fellow Muslims.'
    }
];

// Category groupings for display
export const stepCategories = [
    { id: 'preparation', name: 'Preparation', emoji: '✨', steps: [1] },
    { id: 'standing', name: 'Standing (Qiyam)', emoji: '🕋', steps: [2, 3, 4, 5, 6, 7, 8] },
    { id: 'bowing', name: 'Bowing (Ruku)', emoji: '📿', steps: [9, 10, 11, 12] },
    { id: 'prostration', name: 'Prostration (Sujood)', emoji: '☪️', steps: [13, 14, 15, 16, 17] },
    { id: 'sitting', name: 'Final Sitting', emoji: '🌙', steps: [18, 19, 20, 21] }
];
