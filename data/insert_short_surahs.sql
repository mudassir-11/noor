-- SQL Insert statements for 13 short surahs
-- Run this in your Supabase SQL Editor to add these surahs to your database
-- Surahs included: 94, 95, 97, 99, 102, 104, 105, 106, 107, 109, 110, 111, 113

-- =====================================================
-- INSERT SURAHS
-- =====================================================

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES
(94, 94, 'الشرح', 'Ash-Sharh', 'The Consolation', 8, 1, 'A comforting reminder that with every hardship comes ease.'),
(95, 95, 'التين', 'At-Tin', 'The Fig', 8, 1, 'An oath by the fig and olive about the noble creation of man.'),
(97, 97, 'القدر', 'Al-Qadr', 'The Power', 5, 1, 'Describes the Night of Decree, better than a thousand months.'),
(99, 99, 'الزلزلة', 'Az-Zalzala', 'The Earthquake', 8, 2, 'Describes the Day of Judgment when the earth reveals all.'),
(102, 102, 'التكاثر', 'At-Takaathur', 'Competition', 8, 1, 'Warning against distraction by worldly competition.'),
(104, 104, 'الهمزة', 'Al-Humaza', 'The Traducer', 9, 2, 'Condemns backbiters and those who hoard wealth.'),
(105, 105, 'الفيل', 'Al-Fil', 'The Elephant', 5, 1, 'Recalls how Allah destroyed the army of the elephant.'),
(106, 106, 'قريش', 'Quraish', 'Quraysh', 4, 1, 'Reminds Quraysh of Allah''s blessings and protection.'),
(107, 107, 'الماعون', 'Al-Maa''un', 'Almsgiving', 7, 1, 'Condemns hypocrisy in worship and neglecting the needy.'),
(109, 109, 'الكافرون', 'Al-Kaafiroon', 'The Disbelievers', 6, 1, 'Declaration of separation from false worship.'),
(110, 110, 'النصر', 'An-Nasr', 'Divine Support', 3, 1, 'Foretells the victory of Islam and urges gratitude.'),
(111, 111, 'المسد', 'Al-Masad', 'The Palm Fibre', 5, 1, 'Condemns Abu Lahab for his hostility to the Prophet.'),
(113, 113, 'الفلق', 'Al-Falaq', 'The Daybreak', 5, 1, 'Seeking refuge in Allah from all forms of evil.');

-- =====================================================
-- INSERT VERSES
-- =====================================================

-- Surah 94: Ash-Sharh (The Consolation) - 8 verses
INSERT INTO verses (surah_id, number, text, translation) VALUES
(94, 1, 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ', 'Did We not expand for you, [O Muhammad], your breast?'),
(94, 2, 'وَوَضَعْنَا عَنكَ وِزْرَكَ', 'And We removed from you your burden'),
(94, 3, 'ٱلَّذِىٓ أَنقَضَ ظَهْرَكَ', 'Which had weighed upon your back'),
(94, 4, 'وَرَفَعْنَا لَكَ ذِكْرَكَ', 'And raised high for you your repute.'),
(94, 5, 'فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا', 'For indeed, with hardship [will be] ease.'),
(94, 6, 'إِنَّ مَعَ ٱلْعُسْرِ يُسْرًۭا', 'Indeed, with hardship [will be] ease.'),
(94, 7, 'فَإِذَا فَرَغْتَ فَٱنصَبْ', 'So when you have finished [your duties], then stand up [for worship].'),
(94, 8, 'وَإِلَىٰ رَبِّكَ فَٱرْغَب', 'And to your Lord direct [your] longing.');

-- Surah 95: At-Tin (The Fig) - 8 verses
INSERT INTO verses (surah_id, number, text, translation) VALUES
(95, 1, 'بِّسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ وَٱلتِّينِ وَٱلزَّيْتُونِ', 'By the fig and the olive'),
(95, 2, 'وَطُورِ سِينِينَ', 'And [by] Mount Sinai'),
(95, 3, 'وَهَٰذَا ٱلْبَلَدِ ٱلْأَمِينِ', 'And [by] this secure city [Makkah],'),
(95, 4, 'لَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍۢ', 'We have certainly created man in the best of stature;'),
(95, 5, 'ثُمَّ رَدَدْنَٰهُ أَسْفَلَ سَٰفِلِينَ', 'Then We return him to the lowest of the low,'),
(95, 6, 'إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍۢ', 'Except for those who believe and do righteous deeds, for they will have a reward uninterrupted.'),
(95, 7, 'فَمَا يُكَذِّبُكَ بَعْدُ بِٱلدِّينِ', 'So what yet causes you to deny the Recompense?'),
(95, 8, 'أَلَيْسَ ٱللَّهُ بِأَحْكَمِ ٱلْحَٰكِمِينَ', 'Is not Allah the most just of judges?');

-- Surah 97: Al-Qadr (The Power) - 5 verses
INSERT INTO verses (surah_id, number, text, translation) VALUES
(97, 1, 'بِّسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ إِنَّآ أَنزَلْنَٰهُ فِى لَيْلَةِ ٱلْقَدْرِ', 'Indeed, We sent the Quran down during the Night of Decree.'),
(97, 2, 'وَمَآ أَدْرَىٰكَ مَا لَيْلَةُ ٱلْقَدْرِ', 'And what can make you know what is the Night of Decree?'),
(97, 3, 'لَيْلَةُ ٱلْقَدْرِ خَيْرٌۭ مِّنْ أَلْفِ شَهْرٍۢ', 'The Night of Decree is better than a thousand months.'),
(97, 4, 'تَنَزَّلُ ٱلْمَلَٰٓئِكَةُ وَٱلرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍۢ', 'The angels and the Spirit descend therein by permission of their Lord for every matter.'),
(97, 5, 'سَلَٰمٌ هِىَ حَتَّىٰ مَطْلَعِ ٱلْفَجْرِ', 'Peace it is until the emergence of dawn.');

-- Surah 99: Az-Zalzala (The Earthquake) - 8 verses
INSERT INTO verses (surah_id, number, text, translation) VALUES
(99, 1, 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ إِذَا زُلْزِلَتِ ٱلْأَرْضُ زِلْزَالَهَا', 'When the earth is shaken with its [final] earthquake'),
(99, 2, 'وَأَخْرَجَتِ ٱلْأَرْضُ أَثْقَالَهَا', 'And the earth discharges its burdens'),
(99, 3, 'وَقَالَ ٱلْإِنسَٰنُ مَا لَهَا', 'And man says, "What is [wrong] with it?" -'),
(99, 4, 'يَوْمَئِذٍۢ تُحَدِّثُ أَخْبَارَهَا', 'That Day, it will report its news'),
(99, 5, 'بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا', 'Because your Lord has commanded it.'),
(99, 6, 'يَوْمَئِذٍۢ يَصْدُرُ ٱلنَّاسُ أَشْتَاتًۭا لِّيُرَوْا۟ أَعْمَٰلَهُمْ', 'That Day, the people will depart separated [into categories] to be shown [the result of] their deeds.'),
(99, 7, 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًۭا يَرَهُۥ', 'So whoever does an atoms weight of good will see it,'),
(99, 8, 'وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍۢ شَرًّۭا يَرَهُۥ', 'And whoever does an atoms weight of evil will see it.');

-- Surah 102: At-Takaathur (Competition) - 8 verses
INSERT INTO verses (surah_id, number, text, translation) VALUES
(102, 1, 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ أَلْهَىٰكُمُ ٱلتَّكَاثُرُ', 'Competition in [worldly] increase diverts you'),
(102, 2, 'حَتَّىٰ زُرْتُمُ ٱلْمَقَابِرَ', 'Until you visit the graveyards.'),
(102, 3, 'كَلَّا سَوْفَ تَعْلَمُونَ', 'No! You are going to know.'),
(102, 4, 'ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ', 'Then no! You are going to know.'),
(102, 5, 'كَلَّا لَوْ تَعْلَمُونَ عِلْمَ ٱلْيَقِينِ', 'No! If you only knew with knowledge of certainty...'),
(102, 6, 'لَتَرَوُنَّ ٱلْجَحِيمَ', 'You will surely see the Hellfire.'),
(102, 7, 'ثُمَّ لَتَرَوُنَّهَا عَيْنَ ٱلْيَقِينِ', 'Then you will surely see it with the eye of certainty.'),
(102, 8, 'ثُمَّ لَتُسْـَٔلُنَّ يَوْمَئِذٍ عَنِ ٱلنَّعِيمِ', 'Then you will surely be asked that Day about pleasure.');

-- Surah 104: Al-Humaza (The Traducer) - 9 verses
INSERT INTO verses (surah_id, number, text, translation) VALUES
(104, 1, 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ وَيْلٌۭ لِّكُلِّ هُمَزَةٍۢ لُّمَزَةٍ', 'Woe to every scorner and mocker'),
(104, 2, 'ٱلَّذِى جَمَعَ مَالًۭا وَعَدَّدَهُۥ', 'Who collects wealth and [continuously] counts it.'),
(104, 3, 'يَحْسَبُ أَنَّ مَالَهُۥٓ أَخْلَدَهُۥ', 'He thinks that his wealth will make him immortal.'),
(104, 4, 'كَلَّا ۖ لَيُنۢبَذَنَّ فِى ٱلْحُطَمَةِ', 'No! He will surely be thrown into the Crusher.'),
(104, 5, 'وَمَآ أَدْرَىٰكَ مَا ٱلْحُطَمَةُ', 'And what can make you know what is the Crusher?'),
(104, 6, 'نَارُ ٱللَّهِ ٱلْمُوقَدَةُ', 'It is the fire of Allah, [eternally] fueled,'),
(104, 7, 'ٱلَّتِى تَطَّلِعُ عَلَى ٱلْأَفْـِٔدَةِ', 'Which mounts directed at the hearts.'),
(104, 8, 'إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌۭ', 'Indeed, Hellfire will be closed down upon them'),
(104, 9, 'فِى عَمَدٍۢ مُّمَدَّدَةٍۭ', 'In extended columns.');

-- Surah 105: Al-Fil (The Elephant) - 5 verses
INSERT INTO verses (surah_id, number, text, translation) VALUES
(105, 1, 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَٰبِ ٱلْفِيلِ', 'Have you not considered, [O Muhammad], how your Lord dealt with the companions of the elephant?'),
(105, 2, 'أَلَمْ يَجْعَلْ كَيْدَهُمْ فِى تَضْلِيلٍۢ', 'Did He not make their plan into misguidance?'),
(105, 3, 'وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ', 'And He sent against them birds in flocks,'),
(105, 4, 'تَرْمِيهِمْ بِحِجَارَةٍۢ مِّن سِجِّيلٍۢ', 'Striking them with stones of hard clay,'),
(105, 5, 'فَجَعَلَهُمْ كَعَصْفٍۢ مَّأْكُولٍۭ', 'And He made them like eaten straw.');

-- Surah 106: Quraish (Quraysh) - 4 verses
INSERT INTO verses (surah_id, number, text, translation) VALUES
(106, 1, 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ لِإِيلَٰفِ قُرَيْشٍ', 'For the accustomed security of the Quraysh -'),
(106, 2, 'إِۦلَٰفِهِمْ رِحْلَةَ ٱلشِّتَآءِ وَٱلصَّيْفِ', 'Their accustomed security [in] the caravan of winter and summer -'),
(106, 3, 'فَلْيَعْبُدُوا۟ رَبَّ هَٰذَا ٱلْبَيْتِ', 'Let them worship the Lord of this House,'),
(106, 4, 'ٱلَّذِىٓ أَطْعَمَهُم مِّن جُوعٍۢ وَءَامَنَهُم مِّنْ خَوْفٍۭ', 'Who has fed them, [saving them] from hunger and made them safe, [saving them] from fear.');

-- Surah 107: Al-Maa'un (Almsgiving) - 7 verses
INSERT INTO verses (surah_id, number, text, translation) VALUES
(107, 1, 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ أَرَءَيْتَ ٱلَّذِى يُكَذِّبُ بِٱلدِّينِ', 'Have you seen the one who denies the Recompense?'),
(107, 2, 'فَذَٰلِكَ ٱلَّذِى يَدُعُّ ٱلْيَتِيمَ', 'For that is the one who drives away the orphan'),
(107, 3, 'وَلَا يَحُضُّ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ', 'And does not encourage the feeding of the poor.'),
(107, 4, 'فَوَيْلٌۭ لِّلْمُصَلِّينَ', 'So woe to those who pray'),
(107, 5, 'ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ', '[But] who are heedless of their prayer -'),
(107, 6, 'ٱلَّذِينَ هُمْ يُرَآءُونَ', 'Those who make show [of their deeds]'),
(107, 7, 'وَيَمْنَعُونَ ٱلْمَاعُونَ', 'And withhold [simple] assistance.');

-- Surah 109: Al-Kaafiroon (The Disbelievers) - 6 verses
INSERT INTO verses (surah_id, number, text, translation) VALUES
(109, 1, 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ قُلْ يَٰٓأَيُّهَا ٱلْكَٰفِرُونَ', 'Say, "O disbelievers,'),
(109, 2, 'لَآ أَعْبُدُ مَا تَعْبُدُونَ', 'I do not worship what you worship.'),
(109, 3, 'وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ', 'Nor are you worshippers of what I worship.'),
(109, 4, 'وَلَآ أَنَا۠ عَابِدٌۭ مَّا عَبَدتُّمْ', 'Nor will I be a worshipper of what you worship.'),
(109, 5, 'وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ', 'Nor will you be worshippers of what I worship.'),
(109, 6, 'لَكُمْ دِينُكُمْ وَلِىَ دِينِ', 'For you is your religion, and for me is my religion."');

-- Surah 110: An-Nasr (Divine Support) - 3 verses
INSERT INTO verses (surah_id, number, text, translation) VALUES
(110, 1, 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ إِذَا جَآءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ', 'When the victory of Allah has come and the conquest,'),
(110, 2, 'وَرَأَيْتَ ٱلنَّاسَ يَدْخُلُونَ فِى دِينِ ٱللَّهِ أَفْوَاجًۭا', 'And you see the people entering into the religion of Allah in multitudes,'),
(110, 3, 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَٱسْتَغْفِرْهُ ۚ إِنَّهُۥ كَانَ تَوَّابًۢا', 'Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.');

-- Surah 111: Al-Masad (The Palm Fibre) - 5 verses
INSERT INTO verses (surah_id, number, text, translation) VALUES
(111, 1, 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ تَبَّتْ يَدَآ أَبِى لَهَبٍۢ وَتَبَّ', 'May the hands of Abu Lahab be ruined, and ruined is he.'),
(111, 2, 'مَآ أَغْنَىٰ عَنْهُ مَالُهُۥ وَمَا كَسَبَ', 'His wealth will not avail him or that which he gained.'),
(111, 3, 'سَيَصْلَىٰ نَارًۭا ذَاتَ لَهَبٍۢ', 'He will [enter to] burn in a Fire of [blazing] flame'),
(111, 4, 'وَٱمْرَأَتُهُۥ حَمَّالَةَ ٱلْحَطَبِ', 'And his wife [as well] - the carrier of firewood.'),
(111, 5, 'فِى جِيدِهَا حَبْلٌۭ مِّن مَّسَدٍۭ', 'Around her neck is a rope of [twisted] fiber.');

-- Surah 113: Al-Falaq (The Daybreak) - 5 verses
INSERT INTO verses (surah_id, number, text, translation) VALUES
(113, 1, 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ', 'Say, "I seek refuge in the Lord of daybreak'),
(113, 2, 'مِن شَرِّ مَا خَلَقَ', 'From the evil of that which He created'),
(113, 3, 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ', 'And from the evil of darkness when it settles'),
(113, 4, 'وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ', 'And from the evil of the blowers in knots'),
(113, 5, 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ', 'And from the evil of an envier when he envies."');
