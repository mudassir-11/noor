-- SQL to insert Surahs 101-114

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    101,
    101,
    'سُورَةُ القَارِعَةِ',
    'Al-Qaari''a',
    'The Calamity',
    11,
    1, -- Complexity: Beginner
    'Meccan Surah. 11 Verses.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO verses (surah_id, number, text, translation) VALUES (
    101,
    1,
    'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ الْقَارِعَةُ',
    'The Striking Calamity -'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    101,
    2,
    'مَا الْقَارِعَةُ',
    'What is the Striking Calamity?'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    101,
    3,
    'وَمَا أَدْرَاكَ مَا الْقَارِعَةُ',
    'And what can make you know what is the Striking Calamity?'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    101,
    4,
    'يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ',
    'It is the Day when people will be like moths, dispersed,'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    101,
    5,
    'وَتَكُونُ الْجِبَالُ كَالْعِهْنِ الْمَنْفُوشِ',
    'And the mountains will be like wool, fluffed up.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    101,
    6,
    'فَأَمَّا مَنْ ثَقُلَتْ مَوَازِينُهُ',
    'Then as for one whose scales are heavy [with good deeds],'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    101,
    7,
    'فَهُوَ فِي عِيشَةٍ رَاضِيَةٍ',
    'He will be in a pleasant life.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    101,
    8,
    'وَأَمَّا مَنْ خَفَّتْ مَوَازِينُهُ',
    'But as for one whose scales are light,'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    101,
    9,
    'فَأُمُّهُ هَاوِيَةٌ',
    'His refuge will be an abyss.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    101,
    10,
    'وَمَا أَدْرَاكَ مَا هِيَهْ',
    'And what can make you know what that is?'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    101,
    11,
    'نَارٌ حَامِيَةٌ',
    'It is a Fire, intensely hot.'
);

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    102,
    102,
    'سُورَةُ التَّكَاثُرِ',
    'At-Takaathur',
    'Competition',
    8,
    1, -- Complexity: Beginner
    'Meccan Surah. 8 Verses.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO verses (surah_id, number, text, translation) VALUES (
    102,
    1,
    'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ أَلْهَاكُمُ التَّكَاثُرُ',
    'Competition in [worldly] increase diverts you'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    102,
    2,
    'حَتَّىٰ زُرْتُمُ الْمَقَابِرَ',
    'Until you visit the graveyards.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    102,
    3,
    'كَلَّا سَوْفَ تَعْلَمُونَ',
    'No! You are going to know.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    102,
    4,
    'ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ',
    'Then no! You are going to know.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    102,
    5,
    'كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ',
    'No! If you only knew with knowledge of certainty...'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    102,
    6,
    'لَتَرَوُنَّ الْجَحِيمَ',
    'You will surely see the Hellfire.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    102,
    7,
    'ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِينِ',
    'Then you will surely see it with the eye of certainty.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    102,
    8,
    'ثُمَّ لَتُسْأَلُنَّ يَوْمَئِذٍ عَنِ النَّعِيمِ',
    'Then you will surely be asked that Day about pleasure.'
);

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    103,
    103,
    'سُورَةُ العَصۡرِ',
    'Al-Asr',
    'The Declining Day, Epoch',
    3,
    1, -- Complexity: Beginner
    'Meccan Surah. 3 Verses.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO verses (surah_id, number, text, translation) VALUES (
    103,
    1,
    'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ وَالْعَصْرِ',
    'By time,'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    103,
    2,
    'إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ',
    'Indeed, mankind is in loss,'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    103,
    3,
    'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
    'Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.'
);

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    104,
    104,
    'سُورَةُ الهُمَزَةِ',
    'Al-Humaza',
    'The Traducer',
    9,
    1, -- Complexity: Beginner
    'Meccan Surah. 9 Verses.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO verses (surah_id, number, text, translation) VALUES (
    104,
    1,
    'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ وَيْلٌ لِكُلِّ هُمَزَةٍ لُمَزَةٍ',
    'Woe to every scorner and mocker'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    104,
    2,
    'الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ',
    'Who collects wealth and [continuously] counts it.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    104,
    3,
    'يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ',
    'He thinks that his wealth will make him immortal.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    104,
    4,
    'كَلَّا ۖ لَيُنْبَذَنَّ فِي الْحُطَمَةِ',
    'No! He will surely be thrown into the Crusher.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    104,
    5,
    'وَمَا أَدْرَاكَ مَا الْحُطَمَةُ',
    'And what can make you know what is the Crusher?'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    104,
    6,
    'نَارُ اللَّهِ الْمُوقَدَةُ',
    'It is the fire of Allah, [eternally] fueled,'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    104,
    7,
    'الَّتِي تَطَّلِعُ عَلَى الْأَفْئِدَةِ',
    'Which mounts directed at the hearts.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    104,
    8,
    'إِنَّهَا عَلَيْهِمْ مُؤْصَدَةٌ',
    'Indeed, Hellfire will be closed down upon them'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    104,
    9,
    'فِي عَمَدٍ مُمَدَّدَةٍ',
    'In extended columns.'
);

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    105,
    105,
    'سُورَةُ الفِيلِ',
    'Al-Fil',
    'The Elephant',
    5,
    1, -- Complexity: Beginner
    'Meccan Surah. 5 Verses.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO verses (surah_id, number, text, translation) VALUES (
    105,
    1,
    'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ',
    'Have you not considered, [O Muhammad], how your Lord dealt with the companions of the elephant?'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    105,
    2,
    'أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ',
    'Did He not make their plan into misguidance?'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    105,
    3,
    'وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ',
    'And He sent against them birds in flocks,'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    105,
    4,
    'تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ',
    'Striking them with stones of hard clay,'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    105,
    5,
    'فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ',
    'And He made them like eaten straw.'
);

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    106,
    106,
    'سُورَةُ قُرَيۡشٍ',
    'Quraish',
    'Quraysh',
    4,
    1, -- Complexity: Beginner
    'Meccan Surah. 4 Verses.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO verses (surah_id, number, text, translation) VALUES (
    106,
    1,
    'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ لِإِيلَافِ قُرَيْشٍ',
    'For the accustomed security of the Quraysh -'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    106,
    2,
    'إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ',
    'Their accustomed security [in] the caravan of winter and summer -'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    106,
    3,
    'فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ',
    'Let them worship the Lord of this House,'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    106,
    4,
    'الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُمْ مِنْ خَوْفٍ',
    'Who has fed them, [saving them] from hunger and made them safe, [saving them] from fear.'
);

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    107,
    107,
    'سُورَةُ المَاعُونِ',
    'Al-Maa''un',
    'Almsgiving',
    7,
    1, -- Complexity: Beginner
    'Meccan Surah. 7 Verses.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO verses (surah_id, number, text, translation) VALUES (
    107,
    1,
    'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ',
    'Have you seen the one who denies the Recompense?'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    107,
    2,
    'فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ',
    'For that is the one who drives away the orphan'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    107,
    3,
    'وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ',
    'And does not encourage the feeding of the poor.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    107,
    4,
    'فَوَيْلٌ لِلْمُصَلِّينَ',
    'So woe to those who pray'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    107,
    5,
    'الَّذِينَ هُمْ عَنْ صَلَاتِهِمْ سَاهُونَ',
    '[But] who are heedless of their prayer -'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    107,
    6,
    'الَّذِينَ هُمْ يُرَاءُونَ',
    'Those who make show [of their deeds]'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    107,
    7,
    'وَيَمْنَعُونَ الْمَاعُونَ',
    'And withhold [simple] assistance.'
);

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    108,
    108,
    'سُورَةُ الكَوۡثَرِ',
    'Al-Kawthar',
    'Abundance',
    3,
    1, -- Complexity: Beginner
    'Meccan Surah. 3 Verses.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO verses (surah_id, number, text, translation) VALUES (
    108,
    1,
    'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
    'Indeed, We have granted you, [O Muhammad], al-Kawthar.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    108,
    2,
    'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
    'So pray to your Lord and sacrifice [to Him alone].'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    108,
    3,
    'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ',
    'Indeed, your enemy is the one cut off.'
);

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    109,
    109,
    'سُورَةُ الكَافِرُونَ',
    'Al-Kaafiroon',
    'The Disbelievers',
    6,
    1, -- Complexity: Beginner
    'Meccan Surah. 6 Verses.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO verses (surah_id, number, text, translation) VALUES (
    109,
    1,
    'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ قُلْ يَا أَيُّهَا الْكَافِرُونَ',
    'Say, "O disbelievers,'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    109,
    2,
    'لَا أَعْبُدُ مَا تَعْبُدُونَ',
    'I do not worship what you worship.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    109,
    3,
    'وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ',
    'Nor are you worshippers of what I worship.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    109,
    4,
    'وَلَا أَنَا عَابِدٌ مَا عَبَدْتُمْ',
    'Nor will I be a worshipper of what you worship.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    109,
    5,
    'وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ',
    'Nor will you be worshippers of what I worship.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    109,
    6,
    'لَكُمْ دِينُكُمْ وَلِيَ دِينِ',
    'For you is your religion, and for me is my religion."'
);

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    110,
    110,
    'سُورَةُ النَّصۡرِ',
    'An-Nasr',
    'Divine Support',
    3,
    1, -- Complexity: Beginner
    'Medinan Surah. 3 Verses.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO verses (surah_id, number, text, translation) VALUES (
    110,
    1,
    'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ',
    'When the victory of Allah has come and the conquest,'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    110,
    2,
    'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا',
    'And you see the people entering into the religion of Allah in multitudes,'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    110,
    3,
    'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا',
    'Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.'
);

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    111,
    111,
    'سُورَةُ المَسَدِ',
    'Al-Masad',
    'The Palm Fibre',
    5,
    1, -- Complexity: Beginner
    'Meccan Surah. 5 Verses.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO verses (surah_id, number, text, translation) VALUES (
    111,
    1,
    'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ',
    'May the hands of Abu Lahab be ruined, and ruined is he.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    111,
    2,
    'مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ',
    'His wealth will not avail him or that which he gained.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    111,
    3,
    'سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ',
    'He will [enter to] burn in a Fire of [blazing] flame'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    111,
    4,
    'وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ',
    'And his wife [as well] - the carrier of firewood.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    111,
    5,
    'فِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ',
    'Around her neck is a rope of [twisted] fiber.'
);

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    112,
    112,
    'سُورَةُ الإِخۡلَاصِ',
    'Al-Ikhlaas',
    'Sincerity',
    4,
    1, -- Complexity: Beginner
    'Meccan Surah. 4 Verses.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO verses (surah_id, number, text, translation) VALUES (
    112,
    1,
    'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ قُلْ هُوَ اللَّهُ أَحَدٌ',
    'Say, "He is Allah, [who is] One,'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    112,
    2,
    'اللَّهُ الصَّمَدُ',
    'Allah, the Eternal Refuge.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    112,
    3,
    'لَمْ يَلِدْ وَلَمْ يُولَدْ',
    'He neither begets nor is born,'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    112,
    4,
    'وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ',
    'Nor is there to Him any equivalent."'
);

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    113,
    113,
    'سُورَةُ الفَلَقِ',
    'Al-Falaq',
    'The Dawn',
    5,
    1, -- Complexity: Beginner
    'Meccan Surah. 5 Verses.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO verses (surah_id, number, text, translation) VALUES (
    113,
    1,
    'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
    'Say, "I seek refuge in the Lord of daybreak'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    113,
    2,
    'مِنْ شَرِّ مَا خَلَقَ',
    'From the evil of that which He created'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    113,
    3,
    'وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ',
    'And from the evil of darkness when it settles'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    113,
    4,
    'وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
    'And from the evil of the blowers in knots'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    113,
    5,
    'وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ',
    'And from the evil of an envier when he envies."'
);

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    114,
    114,
    'سُورَةُ النَّاسِ',
    'An-Naas',
    'Mankind',
    6,
    1, -- Complexity: Beginner
    'Meccan Surah. 6 Verses.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO verses (surah_id, number, text, translation) VALUES (
    114,
    1,
    'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
    'Say, "I seek refuge in the Lord of mankind,'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    114,
    2,
    'مَلِكِ النَّاسِ',
    'The Sovereign of mankind.'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    114,
    3,
    'إِلَٰهِ النَّاسِ',
    'The God of mankind,'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    114,
    4,
    'مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
    'From the evil of the retreating whisperer -'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    114,
    5,
    'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
    'Who whispers [evil] into the breasts of mankind -'
);
INSERT INTO verses (surah_id, number, text, translation) VALUES (
    114,
    6,
    'مِنَ الْجِنَّةِ وَالنَّاسِ',
    'From among the jinn and mankind."'
);

