-- SQL to insert Surah Maryam (19) and Al-Ankabut (29)
-- generated with dynamic ID handling

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    19,
    19,
    'سُورَةُ مَرۡيَمَ',
    'Maryam',
    'Mary',
    98,
    2, -- Complexity: assuming Intermediate for these longer Surahs
    'Meccan Surah. 98 Verses.'
) ON CONFLICT (id) DO NOTHING;

DO $$
DECLARE
    next_id bigint;
BEGIN
    SELECT COALESCE(MAX(id), 0) + 1 INTO next_id FROM verses;

    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        1,
        'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ كهيعص',
        'Kaf, Ha, Ya, ''Ayn, Sad.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        2,
        'ذِكْرُ رَحْمَتِ رَبِّكَ عَبْدَهُ زَكَرِيَّا',
        '[This is] a mention of the mercy of your Lord to His servant Zechariah'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        3,
        'إِذْ نَادَىٰ رَبَّهُ نِدَاءً خَفِيًّا',
        'When he called to his Lord a private supplication.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        4,
        'قَالَ رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي وَاشْتَعَلَ الرَّأْسُ شَيْبًا وَلَمْ أَكُنْ بِدُعَائِكَ رَبِّ شَقِيًّا',
        'He said, "My Lord, indeed my bones have weakened, and my head has filled with white, and never have I been in my supplication to You, my Lord, unhappy.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        5,
        'وَإِنِّي خِفْتُ الْمَوَالِيَ مِنْ وَرَائِي وَكَانَتِ امْرَأَتِي عَاقِرًا فَهَبْ لِي مِنْ لَدُنْكَ وَلِيًّا',
        'And indeed, I fear the successors after me, and my wife has been barren, so give me from Yourself an heir'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        6,
        'يَرِثُنِي وَيَرِثُ مِنْ آلِ يَعْقُوبَ ۖ وَاجْعَلْهُ رَبِّ رَضِيًّا',
        'Who will inherit me and inherit from the family of Jacob. And make him, my Lord, pleasing [to You]."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        7,
        'يَا زَكَرِيَّا إِنَّا نُبَشِّرُكَ بِغُلَامٍ اسْمُهُ يَحْيَىٰ لَمْ نَجْعَلْ لَهُ مِنْ قَبْلُ سَمِيًّا',
        '[He was told], "O Zechariah, indeed We give you good tidings of a boy whose name will be John. We have not assigned to any before [this] name."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        8,
        'قَالَ رَبِّ أَنَّىٰ يَكُونُ لِي غُلَامٌ وَكَانَتِ امْرَأَتِي عَاقِرًا وَقَدْ بَلَغْتُ مِنَ الْكِبَرِ عِتِيًّا',
        'He said, "My Lord, how will I have a boy when my wife has been barren and I have reached extreme old age?"'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        9,
        'قَالَ كَذَٰلِكَ قَالَ رَبُّكَ هُوَ عَلَيَّ هَيِّنٌ وَقَدْ خَلَقْتُكَ مِنْ قَبْلُ وَلَمْ تَكُ شَيْئًا',
        '[An angel] said, "Thus [it will be]; your Lord says, ''It is easy for Me, for I created you before, while you were nothing.'' "'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        10,
        'قَالَ رَبِّ اجْعَلْ لِي آيَةً ۚ قَالَ آيَتُكَ أَلَّا تُكَلِّمَ النَّاسَ ثَلَاثَ لَيَالٍ سَوِيًّا',
        '[Zechariah] said, "My Lord, make for me a sign." He said, "Your sign is that you will not speak to the people for three nights, [being] sound."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        11,
        'فَخَرَجَ عَلَىٰ قَوْمِهِ مِنَ الْمِحْرَابِ فَأَوْحَىٰ إِلَيْهِمْ أَنْ سَبِّحُوا بُكْرَةً وَعَشِيًّا',
        'So he came out to his people from the prayer chamber and signaled to them to exalt [Allah] in the morning and afternoon.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        12,
        'يَا يَحْيَىٰ خُذِ الْكِتَابَ بِقُوَّةٍ ۖ وَآتَيْنَاهُ الْحُكْمَ صَبِيًّا',
        '[Allah] said, "O John, take the Scripture with determination." And We gave him judgement [while yet] a boy'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        13,
        'وَحَنَانًا مِنْ لَدُنَّا وَزَكَاةً ۖ وَكَانَ تَقِيًّا',
        'And affection from Us and purity, and he was fearing of Allah'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        14,
        'وَبَرًّا بِوَالِدَيْهِ وَلَمْ يَكُنْ جَبَّارًا عَصِيًّا',
        'And dutiful to his parents, and he was not a disobedient tyrant.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        15,
        'وَسَلَامٌ عَلَيْهِ يَوْمَ وُلِدَ وَيَوْمَ يَمُوتُ وَيَوْمَ يُبْعَثُ حَيًّا',
        'And peace be upon him the day he was born and the day he dies and the day he is raised alive.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        16,
        'وَاذْكُرْ فِي الْكِتَابِ مَرْيَمَ إِذِ انْتَبَذَتْ مِنْ أَهْلِهَا مَكَانًا شَرْقِيًّا',
        'And mention, [O Muhammad], in the Book [the story of] Mary, when she withdrew from her family to a place toward the east.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        17,
        'فَاتَّخَذَتْ مِنْ دُونِهِمْ حِجَابًا فَأَرْسَلْنَا إِلَيْهَا رُوحَنَا فَتَمَثَّلَ لَهَا بَشَرًا سَوِيًّا',
        'And she took, in seclusion from them, a screen. Then We sent to her Our Angel, and he represented himself to her as a well-proportioned man.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        18,
        'قَالَتْ إِنِّي أَعُوذُ بِالرَّحْمَٰنِ مِنْكَ إِنْ كُنْتَ تَقِيًّا',
        'She said, "Indeed, I seek refuge in the Most Merciful from you, [so leave me], if you should be fearing of Allah."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        19,
        'قَالَ إِنَّمَا أَنَا رَسُولُ رَبِّكِ لِأَهَبَ لَكِ غُلَامًا زَكِيًّا',
        'He said, "I am only the messenger of your Lord to give you [news of] a pure boy."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        20,
        'قَالَتْ أَنَّىٰ يَكُونُ لِي غُلَامٌ وَلَمْ يَمْسَسْنِي بَشَرٌ وَلَمْ أَكُ بَغِيًّا',
        'She said, "How can I have a boy while no man has touched me and I have not been unchaste?"'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        21,
        'قَالَ كَذَٰلِكِ قَالَ رَبُّكِ هُوَ عَلَيَّ هَيِّنٌ ۖ وَلِنَجْعَلَهُ آيَةً لِلنَّاسِ وَرَحْمَةً مِنَّا ۚ وَكَانَ أَمْرًا مَقْضِيًّا',
        'He said, "Thus [it will be]; your Lord says, ''It is easy for Me, and We will make him a sign to the people and a mercy from Us. And it is a matter [already] decreed.'' "'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        22,
        '۞ فَحَمَلَتْهُ فَانْتَبَذَتْ بِهِ مَكَانًا قَصِيًّا',
        'So she conceived him, and she withdrew with him to a remote place.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        23,
        'فَأَجَاءَهَا الْمَخَاضُ إِلَىٰ جِذْعِ النَّخْلَةِ قَالَتْ يَا لَيْتَنِي مِتُّ قَبْلَ هَٰذَا وَكُنْتُ نَسْيًا مَنْسِيًّا',
        'And the pains of childbirth drove her to the trunk of a palm tree. She said, "Oh, I wish I had died before this and was in oblivion, forgotten."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        24,
        'فَنَادَاهَا مِنْ تَحْتِهَا أَلَّا تَحْزَنِي قَدْ جَعَلَ رَبُّكِ تَحْتَكِ سَرِيًّا',
        'But he called her from below her, "Do not grieve; your Lord has provided beneath you a stream.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        25,
        'وَهُزِّي إِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسَاقِطْ عَلَيْكِ رُطَبًا جَنِيًّا',
        'And shake toward you the trunk of the palm tree; it will drop upon you ripe, fresh dates.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        26,
        'فَكُلِي وَاشْرَبِي وَقَرِّي عَيْنًا ۖ فَإِمَّا تَرَيِنَّ مِنَ الْبَشَرِ أَحَدًا فَقُولِي إِنِّي نَذَرْتُ لِلرَّحْمَٰنِ صَوْمًا فَلَنْ أُكَلِّمَ الْيَوْمَ إِنْسِيًّا',
        'So eat and drink and be contented. And if you see from among humanity anyone, say, ''Indeed, I have vowed to the Most Merciful abstention, so I will not speak today to [any] man.'' "'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        27,
        'فَأَتَتْ بِهِ قَوْمَهَا تَحْمِلُهُ ۖ قَالُوا يَا مَرْيَمُ لَقَدْ جِئْتِ شَيْئًا فَرِيًّا',
        'Then she brought him to her people, carrying him. They said, "O Mary, you have certainly done a thing unprecedented.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        28,
        'يَا أُخْتَ هَارُونَ مَا كَانَ أَبُوكِ امْرَأَ سَوْءٍ وَمَا كَانَتْ أُمُّكِ بَغِيًّا',
        'O sister of Aaron, your father was not a man of evil, nor was your mother unchaste."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        29,
        'فَأَشَارَتْ إِلَيْهِ ۖ قَالُوا كَيْفَ نُكَلِّمُ مَنْ كَانَ فِي الْمَهْدِ صَبِيًّا',
        'So she pointed to him. They said, "How can we speak to one who is in the cradle a child?"'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        30,
        'قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا',
        '[Jesus] said, "Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        31,
        'وَجَعَلَنِي مُبَارَكًا أَيْنَ مَا كُنْتُ وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا دُمْتُ حَيًّا',
        'And He has made me blessed wherever I am and has enjoined upon me prayer and zakah as long as I remain alive'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        32,
        'وَبَرًّا بِوَالِدَتِي وَلَمْ يَجْعَلْنِي جَبَّارًا شَقِيًّا',
        'And [made me] dutiful to my mother, and He has not made me a wretched tyrant.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        33,
        'وَالسَّلَامُ عَلَيَّ يَوْمَ وُلِدْتُ وَيَوْمَ أَمُوتُ وَيَوْمَ أُبْعَثُ حَيًّا',
        'And peace is on me the day I was born and the day I will die and the day I am raised alive."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        34,
        'ذَٰلِكَ عِيسَى ابْنُ مَرْيَمَ ۚ قَوْلَ الْحَقِّ الَّذِي فِيهِ يَمْتَرُونَ',
        'That is Jesus, the son of Mary - the word of truth about which they are in dispute.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        35,
        'مَا كَانَ لِلَّهِ أَنْ يَتَّخِذَ مِنْ وَلَدٍ ۖ سُبْحَانَهُ ۚ إِذَا قَضَىٰ أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُنْ فَيَكُونُ',
        'It is not [befitting] for Allah to take a son; exalted is He! When He decrees an affair, He only says to it, "Be," and it is.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        36,
        'وَإِنَّ اللَّهَ رَبِّي وَرَبُّكُمْ فَاعْبُدُوهُ ۚ هَٰذَا صِرَاطٌ مُسْتَقِيمٌ',
        '[Jesus said], "And indeed, Allah is my Lord and your Lord, so worship Him. That is a straight path."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        37,
        'فَاخْتَلَفَ الْأَحْزَابُ مِنْ بَيْنِهِمْ ۖ فَوَيْلٌ لِلَّذِينَ كَفَرُوا مِنْ مَشْهَدِ يَوْمٍ عَظِيمٍ',
        'Then the factions differed [concerning Jesus] from among them, so woe to those who disbelieved - from the scene of a tremendous Day.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        38,
        'أَسْمِعْ بِهِمْ وَأَبْصِرْ يَوْمَ يَأْتُونَنَا ۖ لَٰكِنِ الظَّالِمُونَ الْيَوْمَ فِي ضَلَالٍ مُبِينٍ',
        'How [clearly] they will hear and see the Day they come to Us, but the wrongdoers today are in clear error.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        39,
        'وَأَنْذِرْهُمْ يَوْمَ الْحَسْرَةِ إِذْ قُضِيَ الْأَمْرُ وَهُمْ فِي غَفْلَةٍ وَهُمْ لَا يُؤْمِنُونَ',
        'And warn them, [O Muhammad], of the Day of Regret, when the matter will be concluded; and [yet], they are in [a state of] heedlessness, and they do not believe.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        40,
        'إِنَّا نَحْنُ نَرِثُ الْأَرْضَ وَمَنْ عَلَيْهَا وَإِلَيْنَا يُرْجَعُونَ',
        'Indeed, it is We who will inherit the earth and whoever is on it, and to Us they will be returned.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        41,
        'وَاذْكُرْ فِي الْكِتَابِ إِبْرَاهِيمَ ۚ إِنَّهُ كَانَ صِدِّيقًا نَبِيًّا',
        'And mention in the Book [the story of] Abraham. Indeed, he was a man of truth and a prophet.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        42,
        'إِذْ قَالَ لِأَبِيهِ يَا أَبَتِ لِمَ تَعْبُدُ مَا لَا يَسْمَعُ وَلَا يُبْصِرُ وَلَا يُغْنِي عَنْكَ شَيْئًا',
        '[Mention] when he said to his father, "O my father, why do you worship that which does not hear and does not see and will not benefit you at all?'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        43,
        'يَا أَبَتِ إِنِّي قَدْ جَاءَنِي مِنَ الْعِلْمِ مَا لَمْ يَأْتِكَ فَاتَّبِعْنِي أَهْدِكَ صِرَاطًا سَوِيًّا',
        'O my father, indeed there has come to me of knowledge that which has not come to you, so follow me; I will guide you to an even path.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        44,
        'يَا أَبَتِ لَا تَعْبُدِ الشَّيْطَانَ ۖ إِنَّ الشَّيْطَانَ كَانَ لِلرَّحْمَٰنِ عَصِيًّا',
        'O my father, do not worship Satan. Indeed Satan has ever been, to the Most Merciful, disobedient.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        45,
        'يَا أَبَتِ إِنِّي أَخَافُ أَنْ يَمَسَّكَ عَذَابٌ مِنَ الرَّحْمَٰنِ فَتَكُونَ لِلشَّيْطَانِ وَلِيًّا',
        'O my father, indeed I fear that there will touch you a punishment from the Most Merciful so you would be to Satan a companion [in Hellfire]."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        46,
        'قَالَ أَرَاغِبٌ أَنْتَ عَنْ آلِهَتِي يَا إِبْرَاهِيمُ ۖ لَئِنْ لَمْ تَنْتَهِ لَأَرْجُمَنَّكَ ۖ وَاهْجُرْنِي مَلِيًّا',
        '[His father] said, "Have you no desire for my gods, O Abraham? If you do not desist, I will surely stone you, so avoid me a prolonged time."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        47,
        'قَالَ سَلَامٌ عَلَيْكَ ۖ سَأَسْتَغْفِرُ لَكَ رَبِّي ۖ إِنَّهُ كَانَ بِي حَفِيًّا',
        '[Abraham] said, "Peace will be upon you. I will ask forgiveness for you of my Lord. Indeed, He is ever gracious to me.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        48,
        'وَأَعْتَزِلُكُمْ وَمَا تَدْعُونَ مِنْ دُونِ اللَّهِ وَأَدْعُو رَبِّي عَسَىٰ أَلَّا أَكُونَ بِدُعَاءِ رَبِّي شَقِيًّا',
        'And I will leave you and those you invoke other than Allah and will invoke my Lord. I expect that I will not be in invocation to my Lord unhappy."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        49,
        'فَلَمَّا اعْتَزَلَهُمْ وَمَا يَعْبُدُونَ مِنْ دُونِ اللَّهِ وَهَبْنَا لَهُ إِسْحَاقَ وَيَعْقُوبَ ۖ وَكُلًّا جَعَلْنَا نَبِيًّا',
        'So when he had left them and those they worshipped other than Allah, We gave him Isaac and Jacob, and each [of them] We made a prophet.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        50,
        'وَوَهَبْنَا لَهُمْ مِنْ رَحْمَتِنَا وَجَعَلْنَا لَهُمْ لِسَانَ صِدْقٍ عَلِيًّا',
        'And We gave them of Our mercy, and we made for them a reputation of high honor.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        51,
        'وَاذْكُرْ فِي الْكِتَابِ مُوسَىٰ ۚ إِنَّهُ كَانَ مُخْلَصًا وَكَانَ رَسُولًا نَبِيًّا',
        'And mention in the Book, Moses. Indeed, he was chosen, and he was a messenger and a prophet.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        52,
        'وَنَادَيْنَاهُ مِنْ جَانِبِ الطُّورِ الْأَيْمَنِ وَقَرَّبْنَاهُ نَجِيًّا',
        'And We called him from the side of the mount at [his] right and brought him near, confiding [to him].'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        53,
        'وَوَهَبْنَا لَهُ مِنْ رَحْمَتِنَا أَخَاهُ هَارُونَ نَبِيًّا',
        'And We gave him out of Our mercy his brother Aaron as a prophet.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        54,
        'وَاذْكُرْ فِي الْكِتَابِ إِسْمَاعِيلَ ۚ إِنَّهُ كَانَ صَادِقَ الْوَعْدِ وَكَانَ رَسُولًا نَبِيًّا',
        'And mention in the Book, Ishmael. Indeed, he was true to his promise, and he was a messenger and a prophet.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        55,
        'وَكَانَ يَأْمُرُ أَهْلَهُ بِالصَّلَاةِ وَالزَّكَاةِ وَكَانَ عِنْدَ رَبِّهِ مَرْضِيًّا',
        'And he used to enjoin on his people prayer and zakah and was to his Lord pleasing.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        56,
        'وَاذْكُرْ فِي الْكِتَابِ إِدْرِيسَ ۚ إِنَّهُ كَانَ صِدِّيقًا نَبِيًّا',
        'And mention in the Book, Idrees. Indeed, he was a man of truth and a prophet.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        57,
        'وَرَفَعْنَاهُ مَكَانًا عَلِيًّا',
        'And We raised him to a high station.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        58,
        'أُولَٰئِكَ الَّذِينَ أَنْعَمَ اللَّهُ عَلَيْهِمْ مِنَ النَّبِيِّينَ مِنْ ذُرِّيَّةِ آدَمَ وَمِمَّنْ حَمَلْنَا مَعَ نُوحٍ وَمِنْ ذُرِّيَّةِ إِبْرَاهِيمَ وَإِسْرَائِيلَ وَمِمَّنْ هَدَيْنَا وَاجْتَبَيْنَا ۚ إِذَا تُتْلَىٰ عَلَيْهِمْ آيَاتُ الرَّحْمَٰنِ خَرُّوا سُجَّدًا وَبُكِيًّا ۩',
        'Those were the ones upon whom Allah bestowed favor from among the prophets of the descendants of Adam and of those We carried [in the ship] with Noah, and of the descendants of Abraham and Israel, and of those whom We guided and chose. When the verses of the Most Merciful were recited to them, they fell in prostration and weeping.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        59,
        '۞ فَخَلَفَ مِنْ بَعْدِهِمْ خَلْفٌ أَضَاعُوا الصَّلَاةَ وَاتَّبَعُوا الشَّهَوَاتِ ۖ فَسَوْفَ يَلْقَوْنَ غَيًّا',
        'But there came after them successors who neglected prayer and pursued desires; so they are going to meet evil -'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        60,
        'إِلَّا مَنْ تَابَ وَآمَنَ وَعَمِلَ صَالِحًا فَأُولَٰئِكَ يَدْخُلُونَ الْجَنَّةَ وَلَا يُظْلَمُونَ شَيْئًا',
        'Except those who repent, believe and do righteousness; for those will enter Paradise and will not be wronged at all.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        61,
        'جَنَّاتِ عَدْنٍ الَّتِي وَعَدَ الرَّحْمَٰنُ عِبَادَهُ بِالْغَيْبِ ۚ إِنَّهُ كَانَ وَعْدُهُ مَأْتِيًّا',
        '[Therein are] gardens of perpetual residence which the Most Merciful has promised His servants in the unseen. Indeed, His promise has ever been coming.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        62,
        'لَا يَسْمَعُونَ فِيهَا لَغْوًا إِلَّا سَلَامًا ۖ وَلَهُمْ رِزْقُهُمْ فِيهَا بُكْرَةً وَعَشِيًّا',
        'They will not hear therein any ill speech - only [greetings of] peace - and they will have their provision therein, morning and afternoon.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        63,
        'تِلْكَ الْجَنَّةُ الَّتِي نُورِثُ مِنْ عِبَادِنَا مَنْ كَانَ تَقِيًّا',
        'That is Paradise, which We give as inheritance to those of Our servants who were fearing of Allah.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        64,
        'وَمَا نَتَنَزَّلُ إِلَّا بِأَمْرِ رَبِّكَ ۖ لَهُ مَا بَيْنَ أَيْدِينَا وَمَا خَلْفَنَا وَمَا بَيْنَ ذَٰلِكَ ۚ وَمَا كَانَ رَبُّكَ نَسِيًّا',
        '[Gabriel said], "And we [angels] descend not except by the order of your Lord. To Him belongs that before us and that behind us and what is in between. And never is your Lord forgetful -'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        65,
        'رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا فَاعْبُدْهُ وَاصْطَبِرْ لِعِبَادَتِهِ ۚ هَلْ تَعْلَمُ لَهُ سَمِيًّا',
        'Lord of the heavens and the earth and whatever is between them - so worship Him and have patience for His worship. Do you know of any similarity to Him?"'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        66,
        'وَيَقُولُ الْإِنْسَانُ أَإِذَا مَا مِتُّ لَسَوْفَ أُخْرَجُ حَيًّا',
        'And the disbeliever says, "When I have died, am I going to be brought forth alive?"'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        67,
        'أَوَلَا يَذْكُرُ الْإِنْسَانُ أَنَّا خَلَقْنَاهُ مِنْ قَبْلُ وَلَمْ يَكُ شَيْئًا',
        'Does man not remember that We created him before, while he was nothing?'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        68,
        'فَوَرَبِّكَ لَنَحْشُرَنَّهُمْ وَالشَّيَاطِينَ ثُمَّ لَنُحْضِرَنَّهُمْ حَوْلَ جَهَنَّمَ جِثِيًّا',
        'So by your Lord, We will surely gather them and the devils; then We will bring them to be present around Hell upon their knees.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        69,
        'ثُمَّ لَنَنْزِعَنَّ مِنْ كُلِّ شِيعَةٍ أَيُّهُمْ أَشَدُّ عَلَى الرَّحْمَٰنِ عِتِيًّا',
        'Then We will surely extract from every sect those of them who were worst against the Most Merciful in insolence.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        70,
        'ثُمَّ لَنَحْنُ أَعْلَمُ بِالَّذِينَ هُمْ أَوْلَىٰ بِهَا صِلِيًّا',
        'Then, surely it is We who are most knowing of those most worthy of burning therein.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        71,
        'وَإِنْ مِنْكُمْ إِلَّا وَارِدُهَا ۚ كَانَ عَلَىٰ رَبِّكَ حَتْمًا مَقْضِيًّا',
        'And there is none of you except he will come to it. This is upon your Lord an inevitability decreed.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        72,
        'ثُمَّ نُنَجِّي الَّذِينَ اتَّقَوْا وَنَذَرُ الظَّالِمِينَ فِيهَا جِثِيًّا',
        'Then We will save those who feared Allah and leave the wrongdoers within it, on their knees.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        73,
        'وَإِذَا تُتْلَىٰ عَلَيْهِمْ آيَاتُنَا بَيِّنَاتٍ قَالَ الَّذِينَ كَفَرُوا لِلَّذِينَ آمَنُوا أَيُّ الْفَرِيقَيْنِ خَيْرٌ مَقَامًا وَأَحْسَنُ نَدِيًّا',
        'And when Our verses are recited to them as clear evidences, those who disbelieve say to those who believe, "Which of [our] two parties is best in position and best in association?"'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        74,
        'وَكَمْ أَهْلَكْنَا قَبْلَهُمْ مِنْ قَرْنٍ هُمْ أَحْسَنُ أَثَاثًا وَرِئْيًا',
        'And how many a generation have We destroyed before them who were better in possessions and [outward] appearance?'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        75,
        'قُلْ مَنْ كَانَ فِي الضَّلَالَةِ فَلْيَمْدُدْ لَهُ الرَّحْمَٰنُ مَدًّا ۚ حَتَّىٰ إِذَا رَأَوْا مَا يُوعَدُونَ إِمَّا الْعَذَابَ وَإِمَّا السَّاعَةَ فَسَيَعْلَمُونَ مَنْ هُوَ شَرٌّ مَكَانًا وَأَضْعَفُ جُنْدًا',
        'Say, "Whoever is in error - let the Most Merciful extend for him an extension [in wealth and time] until, when they see that which they were promised - either punishment [in this world] or the Hour [of resurrection] - they will come to know who is worst in position and weaker in soldiers."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        76,
        'وَيَزِيدُ اللَّهُ الَّذِينَ اهْتَدَوْا هُدًى ۗ وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ عِنْدَ رَبِّكَ ثَوَابًا وَخَيْرٌ مَرَدًّا',
        'And Allah increases those who were guided, in guidance, and the enduring good deeds are better to your Lord for reward and better for recourse.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        77,
        'أَفَرَأَيْتَ الَّذِي كَفَرَ بِآيَاتِنَا وَقَالَ لَأُوتَيَنَّ مَالًا وَوَلَدًا',
        'Then, have you seen he who disbelieved in Our verses and said, "I will surely be given wealth and children [in the next life]?"'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        78,
        'أَطَّلَعَ الْغَيْبَ أَمِ اتَّخَذَ عِنْدَ الرَّحْمَٰنِ عَهْدًا',
        'Has he looked into the unseen, or has he taken from the Most Merciful a promise?'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        79,
        'كَلَّا ۚ سَنَكْتُبُ مَا يَقُولُ وَنَمُدُّ لَهُ مِنَ الْعَذَابِ مَدًّا',
        'No! We will record what he says and extend for him from the punishment extensively.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        80,
        'وَنَرِثُهُ مَا يَقُولُ وَيَأْتِينَا فَرْدًا',
        'And We will inherit him [in] what he mentions, and he will come to Us alone.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        81,
        'وَاتَّخَذُوا مِنْ دُونِ اللَّهِ آلِهَةً لِيَكُونُوا لَهُمْ عِزًّا',
        'And they have taken besides Allah [false] deities that they would be for them [a source of] honor.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        82,
        'كَلَّا ۚ سَيَكْفُرُونَ بِعِبَادَتِهِمْ وَيَكُونُونَ عَلَيْهِمْ ضِدًّا',
        'No! Those "gods" will deny their worship of them and will be against them opponents [on the Day of Judgement].'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        83,
        'أَلَمْ تَرَ أَنَّا أَرْسَلْنَا الشَّيَاطِينَ عَلَى الْكَافِرِينَ تَؤُزُّهُمْ أَزًّا',
        'Do you not see that We have sent the devils upon the disbelievers, inciting them to [evil] with [constant] incitement?'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        84,
        'فَلَا تَعْجَلْ عَلَيْهِمْ ۖ إِنَّمَا نَعُدُّ لَهُمْ عَدًّا',
        'So be not impatient over them. We only count out to them a [limited] number.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        85,
        'يَوْمَ نَحْشُرُ الْمُتَّقِينَ إِلَى الرَّحْمَٰنِ وَفْدًا',
        'On the Day We will gather the righteous to the Most Merciful as a delegation'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        86,
        'وَنَسُوقُ الْمُجْرِمِينَ إِلَىٰ جَهَنَّمَ وِرْدًا',
        'And will drive the criminals to Hell in thirst'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        87,
        'لَا يَمْلِكُونَ الشَّفَاعَةَ إِلَّا مَنِ اتَّخَذَ عِنْدَ الرَّحْمَٰنِ عَهْدًا',
        'None will have [power of] intercession except he who had taken from the Most Merciful a covenant.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        88,
        'وَقَالُوا اتَّخَذَ الرَّحْمَٰنُ وَلَدًا',
        'And they say, "The Most Merciful has taken [for Himself] a son."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        89,
        'لَقَدْ جِئْتُمْ شَيْئًا إِدًّا',
        'You have done an atrocious thing.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        90,
        'تَكَادُ السَّمَاوَاتُ يَتَفَطَّرْنَ مِنْهُ وَتَنْشَقُّ الْأَرْضُ وَتَخِرُّ الْجِبَالُ هَدًّا',
        'The heavens almost rupture therefrom and the earth splits open and the mountains collapse in devastation'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        91,
        'أَنْ دَعَوْا لِلرَّحْمَٰنِ وَلَدًا',
        'That they attribute to the Most Merciful a son.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        92,
        'وَمَا يَنْبَغِي لِلرَّحْمَٰنِ أَنْ يَتَّخِذَ وَلَدًا',
        'And it is not appropriate for the Most Merciful that He should take a son.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        93,
        'إِنْ كُلُّ مَنْ فِي السَّمَاوَاتِ وَالْأَرْضِ إِلَّا آتِي الرَّحْمَٰنِ عَبْدًا',
        'There is no one in the heavens and earth but that he comes to the Most Merciful as a servant.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        94,
        'لَقَدْ أَحْصَاهُمْ وَعَدَّهُمْ عَدًّا',
        'He has enumerated them and counted them a [full] counting.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        95,
        'وَكُلُّهُمْ آتِيهِ يَوْمَ الْقِيَامَةِ فَرْدًا',
        'And all of them are coming to Him on the Day of Resurrection alone.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        96,
        'إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ سَيَجْعَلُ لَهُمُ الرَّحْمَٰنُ وُدًّا',
        'Indeed, those who have believed and done righteous deeds - the Most Merciful will appoint for them affection.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        97,
        'فَإِنَّمَا يَسَّرْنَاهُ بِلِسَانِكَ لِتُبَشِّرَ بِهِ الْمُتَّقِينَ وَتُنْذِرَ بِهِ قَوْمًا لُدًّا',
        'So, [O Muhammad], We have only made Qur''an easy in the Arabic language that you may give good tidings thereby to the righteous and warn thereby a hostile people.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        19,
        98,
        'وَكَمْ أَهْلَكْنَا قَبْلَهُمْ مِنْ قَرْنٍ هَلْ تُحِسُّ مِنْهُمْ مِنْ أَحَدٍ أَوْ تَسْمَعُ لَهُمْ رِكْزًا',
        'And how many have We destroyed before them of generations? Do you perceive of them anyone or hear from them a sound?'
    );
    next_id := next_id + 1;
END $$;

INSERT INTO surahs (id, number, name, english_name, meaning, verses_count, complexity, description) VALUES (
    29,
    29,
    'سُورَةُ العَنكَبُوتِ',
    'Al-Ankaboot',
    'The Spider',
    69,
    2, -- Complexity: assuming Intermediate for these longer Surahs
    'Meccan Surah. 69 Verses.'
) ON CONFLICT (id) DO NOTHING;

DO $$
DECLARE
    next_id bigint;
BEGIN
    SELECT COALESCE(MAX(id), 0) + 1 INTO next_id FROM verses;

    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        1,
        'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ الم',
        'Alif, Lam, Meem'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        2,
        'أَحَسِبَ النَّاسُ أَنْ يُتْرَكُوا أَنْ يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ',
        'Do the people think that they will be left to say, "We believe" and they will not be tried?'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        3,
        'وَلَقَدْ فَتَنَّا الَّذِينَ مِنْ قَبْلِهِمْ ۖ فَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ صَدَقُوا وَلَيَعْلَمَنَّ الْكَاذِبِينَ',
        'But We have certainly tried those before them, and Allah will surely make evident those who are truthful, and He will surely make evident the liars.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        4,
        'أَمْ حَسِبَ الَّذِينَ يَعْمَلُونَ السَّيِّئَاتِ أَنْ يَسْبِقُونَا ۚ سَاءَ مَا يَحْكُمُونَ',
        'Or do those who do evil deeds think they can outrun Us? Evil is what they judge.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        5,
        'مَنْ كَانَ يَرْجُو لِقَاءَ اللَّهِ فَإِنَّ أَجَلَ اللَّهِ لَآتٍ ۚ وَهُوَ السَّمِيعُ الْعَلِيمُ',
        'Whoever should hope for the meeting with Allah - indeed, the term decreed by Allah is coming. And He is the Hearing, the Knowing.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        6,
        'وَمَنْ جَاهَدَ فَإِنَّمَا يُجَاهِدُ لِنَفْسِهِ ۚ إِنَّ اللَّهَ لَغَنِيٌّ عَنِ الْعَالَمِينَ',
        'And whoever strives only strives for [the benefit of] himself. Indeed, Allah is free from need of the worlds.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        7,
        'وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَنُكَفِّرَنَّ عَنْهُمْ سَيِّئَاتِهِمْ وَلَنَجْزِيَنَّهُمْ أَحْسَنَ الَّذِي كَانُوا يَعْمَلُونَ',
        'And those who believe and do righteous deeds - We will surely remove from them their misdeeds and will surely reward them according to the best of what they used to do.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        8,
        'وَوَصَّيْنَا الْإِنْسَانَ بِوَالِدَيْهِ حُسْنًا ۖ وَإِنْ جَاهَدَاكَ لِتُشْرِكَ بِي مَا لَيْسَ لَكَ بِهِ عِلْمٌ فَلَا تُطِعْهُمَا ۚ إِلَيَّ مَرْجِعُكُمْ فَأُنَبِّئُكُمْ بِمَا كُنْتُمْ تَعْمَلُونَ',
        'And We have enjoined upon man goodness to parents. But if they endeavor to make you associate with Me that of which you have no knowledge, do not obey them. To Me is your return, and I will inform you about what you used to do.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        9,
        'وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَنُدْخِلَنَّهُمْ فِي الصَّالِحِينَ',
        'And those who believe and do righteous deeds - We will surely admit them among the righteous [into Paradise].'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        10,
        'وَمِنَ النَّاسِ مَنْ يَقُولُ آمَنَّا بِاللَّهِ فَإِذَا أُوذِيَ فِي اللَّهِ جَعَلَ فِتْنَةَ النَّاسِ كَعَذَابِ اللَّهِ وَلَئِنْ جَاءَ نَصْرٌ مِنْ رَبِّكَ لَيَقُولُنَّ إِنَّا كُنَّا مَعَكُمْ ۚ أَوَلَيْسَ اللَّهُ بِأَعْلَمَ بِمَا فِي صُدُورِ الْعَالَمِينَ',
        'And of the people are some who say, "We believe in Allah," but when one [of them] is harmed for [the cause of] Allah, they consider the trial of the people as [if it were] the punishment of Allah. But if victory comes from your Lord, they say, "Indeed, We were with you." Is not Allah most knowing of what is within the breasts of all creatures?'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        11,
        'وَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ آمَنُوا وَلَيَعْلَمَنَّ الْمُنَافِقِينَ',
        'And Allah will surely make evident those who believe, and He will surely make evident the hypocrites.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        12,
        'وَقَالَ الَّذِينَ كَفَرُوا لِلَّذِينَ آمَنُوا اتَّبِعُوا سَبِيلَنَا وَلْنَحْمِلْ خَطَايَاكُمْ وَمَا هُمْ بِحَامِلِينَ مِنْ خَطَايَاهُمْ مِنْ شَيْءٍ ۖ إِنَّهُمْ لَكَاذِبُونَ',
        'And those who disbelieve say to those who believe, "Follow our way, and we will carry your sins." But they will not carry anything of their sins. Indeed, they are liars.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        13,
        'وَلَيَحْمِلُنَّ أَثْقَالَهُمْ وَأَثْقَالًا مَعَ أَثْقَالِهِمْ ۖ وَلَيُسْأَلُنَّ يَوْمَ الْقِيَامَةِ عَمَّا كَانُوا يَفْتَرُونَ',
        'But they will surely carry their [own] burdens and [other] burdens along with their burdens, and they will surely be questioned on the Day of Resurrection about what they used to invent.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        14,
        'وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا فَأَخَذَهُمُ الطُّوفَانُ وَهُمْ ظَالِمُونَ',
        'And We certainly sent Noah to his people, and he remained among them a thousand years minus fifty years, and the flood seized them while they were wrongdoers.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        15,
        'فَأَنْجَيْنَاهُ وَأَصْحَابَ السَّفِينَةِ وَجَعَلْنَاهَا آيَةً لِلْعَالَمِينَ',
        'But We saved him and the companions of the ship, and We made it a sign for the worlds.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        16,
        'وَإِبْرَاهِيمَ إِذْ قَالَ لِقَوْمِهِ اعْبُدُوا اللَّهَ وَاتَّقُوهُ ۖ ذَٰلِكُمْ خَيْرٌ لَكُمْ إِنْ كُنْتُمْ تَعْلَمُونَ',
        'And [We sent] Abraham, when he said to his people, "Worship Allah and fear Him. That is best for you, if you should know.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        17,
        'إِنَّمَا تَعْبُدُونَ مِنْ دُونِ اللَّهِ أَوْثَانًا وَتَخْلُقُونَ إِفْكًا ۚ إِنَّ الَّذِينَ تَعْبُدُونَ مِنْ دُونِ اللَّهِ لَا يَمْلِكُونَ لَكُمْ رِزْقًا فَابْتَغُوا عِنْدَ اللَّهِ الرِّزْقَ وَاعْبُدُوهُ وَاشْكُرُوا لَهُ ۖ إِلَيْهِ تُرْجَعُونَ',
        'You only worship, besides Allah, idols, and you produce a falsehood. Indeed, those you worship besides Allah do not possess for you [the power of] provision. So seek from Allah provision and worship Him and be grateful to Him. To Him you will be returned."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        18,
        'وَإِنْ تُكَذِّبُوا فَقَدْ كَذَّبَ أُمَمٌ مِنْ قَبْلِكُمْ ۖ وَمَا عَلَى الرَّسُولِ إِلَّا الْبَلَاغُ الْمُبِينُ',
        'And if you [people] deny [the message] - already nations before you have denied. And there is not upon the Messenger except [the duty of] clear notification.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        19,
        'أَوَلَمْ يَرَوْا كَيْفَ يُبْدِئُ اللَّهُ الْخَلْقَ ثُمَّ يُعِيدُهُ ۚ إِنَّ ذَٰلِكَ عَلَى اللَّهِ يَسِيرٌ',
        'Have they not considered how Allah begins creation and then repeats it? Indeed that, for Allah, is easy.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        20,
        'قُلْ سِيرُوا فِي الْأَرْضِ فَانْظُرُوا كَيْفَ بَدَأَ الْخَلْقَ ۚ ثُمَّ اللَّهُ يُنْشِئُ النَّشْأَةَ الْآخِرَةَ ۚ إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
        'Say, [O Muhammad], "Travel through the land and observe how He began creation. Then Allah will produce the final creation. Indeed Allah, over all things, is competent."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        21,
        'يُعَذِّبُ مَنْ يَشَاءُ وَيَرْحَمُ مَنْ يَشَاءُ ۖ وَإِلَيْهِ تُقْلَبُونَ',
        'He punishes whom He wills and has mercy upon whom He wills, and to Him you will be returned.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        22,
        'وَمَا أَنْتُمْ بِمُعْجِزِينَ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ ۖ وَمَا لَكُمْ مِنْ دُونِ اللَّهِ مِنْ وَلِيٍّ وَلَا نَصِيرٍ',
        'And you will not cause failure [to Allah] upon the earth or in the heaven. And you have not other than Allah any protector or any helper.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        23,
        'وَالَّذِينَ كَفَرُوا بِآيَاتِ اللَّهِ وَلِقَائِهِ أُولَٰئِكَ يَئِسُوا مِنْ رَحْمَتِي وَأُولَٰئِكَ لَهُمْ عَذَابٌ أَلِيمٌ',
        'And the ones who disbelieve in the signs of Allah and the meeting with Him - those have despaired of My mercy, and they will have a painful punishment.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        24,
        'فَمَا كَانَ جَوَابَ قَوْمِهِ إِلَّا أَنْ قَالُوا اقْتُلُوهُ أَوْ حَرِّقُوهُ فَأَنْجَاهُ اللَّهُ مِنَ النَّارِ ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يُؤْمِنُونَ',
        'And the answer of Abraham''s people was not but that they said, "Kill him or burn him," but Allah saved him from the fire. Indeed in that are signs for a people who believe.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        25,
        'وَقَالَ إِنَّمَا اتَّخَذْتُمْ مِنْ دُونِ اللَّهِ أَوْثَانًا مَوَدَّةَ بَيْنِكُمْ فِي الْحَيَاةِ الدُّنْيَا ۖ ثُمَّ يَوْمَ الْقِيَامَةِ يَكْفُرُ بَعْضُكُمْ بِبَعْضٍ وَيَلْعَنُ بَعْضُكُمْ بَعْضًا وَمَأْوَاكُمُ النَّارُ وَمَا لَكُمْ مِنْ نَاصِرِينَ',
        'And [Abraham] said, "You have only taken, other than Allah, idols as [a bond of] affection among you in worldly life. Then on the Day of Resurrection you will deny one another and curse one another, and your refuge will be the Fire, and you will not have any helpers."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        26,
        '۞ فَآمَنَ لَهُ لُوطٌ ۘ وَقَالَ إِنِّي مُهَاجِرٌ إِلَىٰ رَبِّي ۖ إِنَّهُ هُوَ الْعَزِيزُ الْحَكِيمُ',
        'And Lot believed him. [Abraham] said, "Indeed, I will emigrate to [the service of] my Lord. Indeed, He is the Exalted in Might, the Wise."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        27,
        'وَوَهَبْنَا لَهُ إِسْحَاقَ وَيَعْقُوبَ وَجَعَلْنَا فِي ذُرِّيَّتِهِ النُّبُوَّةَ وَالْكِتَابَ وَآتَيْنَاهُ أَجْرَهُ فِي الدُّنْيَا ۖ وَإِنَّهُ فِي الْآخِرَةِ لَمِنَ الصَّالِحِينَ',
        'And We gave to Him Isaac and Jacob and placed in his descendants prophethood and scripture. And We gave him his reward in this world, and indeed, he is in the Hereafter among the righteous.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        28,
        'وَلُوطًا إِذْ قَالَ لِقَوْمِهِ إِنَّكُمْ لَتَأْتُونَ الْفَاحِشَةَ مَا سَبَقَكُمْ بِهَا مِنْ أَحَدٍ مِنَ الْعَالَمِينَ',
        'And [mention] Lot, when he said to his people, "Indeed, you commit such immorality as no one has preceded you with from among the worlds.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        29,
        'أَئِنَّكُمْ لَتَأْتُونَ الرِّجَالَ وَتَقْطَعُونَ السَّبِيلَ وَتَأْتُونَ فِي نَادِيكُمُ الْمُنْكَرَ ۖ فَمَا كَانَ جَوَابَ قَوْمِهِ إِلَّا أَنْ قَالُوا ائْتِنَا بِعَذَابِ اللَّهِ إِنْ كُنْتَ مِنَ الصَّادِقِينَ',
        'Indeed, you approach men and obstruct the road and commit in your meetings [every] evil." And the answer of his people was not but they said, "Bring us the punishment of Allah, if you should be of the truthful."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        30,
        'قَالَ رَبِّ انْصُرْنِي عَلَى الْقَوْمِ الْمُفْسِدِينَ',
        'He said, "My Lord, support me against the corrupting people."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        31,
        'وَلَمَّا جَاءَتْ رُسُلُنَا إِبْرَاهِيمَ بِالْبُشْرَىٰ قَالُوا إِنَّا مُهْلِكُو أَهْلِ هَٰذِهِ الْقَرْيَةِ ۖ إِنَّ أَهْلَهَا كَانُوا ظَالِمِينَ',
        'And when Our messengers came to Abraham with the good tidings, they said, "Indeed, we will destroy the people of that Lot''s city. Indeed, its people have been wrongdoers."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        32,
        'قَالَ إِنَّ فِيهَا لُوطًا ۚ قَالُوا نَحْنُ أَعْلَمُ بِمَنْ فِيهَا ۖ لَنُنَجِّيَنَّهُ وَأَهْلَهُ إِلَّا امْرَأَتَهُ كَانَتْ مِنَ الْغَابِرِينَ',
        '[Abraham] said, "Indeed, within it is Lot." They said, "We are more knowing of who is within it. We will surely save him and his family, except his wife. She is to be of those who remain behind."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        33,
        'وَلَمَّا أَنْ جَاءَتْ رُسُلُنَا لُوطًا سِيءَ بِهِمْ وَضَاقَ بِهِمْ ذَرْعًا وَقَالُوا لَا تَخَفْ وَلَا تَحْزَنْ ۖ إِنَّا مُنَجُّوكَ وَأَهْلَكَ إِلَّا امْرَأَتَكَ كَانَتْ مِنَ الْغَابِرِينَ',
        'And when Our messengers came to Lot, he was distressed for them and felt for them great discomfort. They said, "Fear not, nor grieve. Indeed, we will save you and your family, except your wife; she is to be of those who remain behind.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        34,
        'إِنَّا مُنْزِلُونَ عَلَىٰ أَهْلِ هَٰذِهِ الْقَرْيَةِ رِجْزًا مِنَ السَّمَاءِ بِمَا كَانُوا يَفْسُقُونَ',
        'Indeed, we will bring down on the people of this city punishment from the sky because they have been defiantly disobedient."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        35,
        'وَلَقَدْ تَرَكْنَا مِنْهَا آيَةً بَيِّنَةً لِقَوْمٍ يَعْقِلُونَ',
        'And We have certainly left of it a sign as clear evidence for a people who use reason.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        36,
        'وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا فَقَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ وَارْجُوا الْيَوْمَ الْآخِرَ وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ',
        'And to Madyan [We sent] their brother Shu''ayb, and he said, "O my people, worship Allah and expect the Last Day and do not commit abuse on the earth, spreading corruption."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        37,
        'فَكَذَّبُوهُ فَأَخَذَتْهُمُ الرَّجْفَةُ فَأَصْبَحُوا فِي دَارِهِمْ جَاثِمِينَ',
        'But they denied him, so the earthquake seized them, and they became within their home [corpses] fallen prone.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        38,
        'وَعَادًا وَثَمُودَ وَقَدْ تَبَيَّنَ لَكُمْ مِنْ مَسَاكِنِهِمْ ۖ وَزَيَّنَ لَهُمُ الشَّيْطَانُ أَعْمَالَهُمْ فَصَدَّهُمْ عَنِ السَّبِيلِ وَكَانُوا مُسْتَبْصِرِينَ',
        'And [We destroyed] ''Aad and Thamud, and it has become clear to you from their [ruined] dwellings. And Satan had made pleasing to them their deeds and averted them from the path, and they were endowed with perception.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        39,
        'وَقَارُونَ وَفِرْعَوْنَ وَهَامَانَ ۖ وَلَقَدْ جَاءَهُمْ مُوسَىٰ بِالْبَيِّنَاتِ فَاسْتَكْبَرُوا فِي الْأَرْضِ وَمَا كَانُوا سَابِقِينَ',
        'And [We destroyed] Qarun and Pharaoh and Haman. And Moses had already come to them with clear evidences, and they were arrogant in the land, but they were not outrunners [of Our punishment].'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        40,
        'فَكُلًّا أَخَذْنَا بِذَنْبِهِ ۖ فَمِنْهُمْ مَنْ أَرْسَلْنَا عَلَيْهِ حَاصِبًا وَمِنْهُمْ مَنْ أَخَذَتْهُ الصَّيْحَةُ وَمِنْهُمْ مَنْ خَسَفْنَا بِهِ الْأَرْضَ وَمِنْهُمْ مَنْ أَغْرَقْنَا ۚ وَمَا كَانَ اللَّهُ لِيَظْلِمَهُمْ وَلَٰكِنْ كَانُوا أَنْفُسَهُمْ يَظْلِمُونَ',
        'So each We seized for his sin; and among them were those upon whom We sent a storm of stones, and among them were those who were seized by the blast [from the sky], and among them were those whom We caused the earth to swallow, and among them were those whom We drowned. And Allah would not have wronged them, but it was they who were wronging themselves.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        41,
        'مَثَلُ الَّذِينَ اتَّخَذُوا مِنْ دُونِ اللَّهِ أَوْلِيَاءَ كَمَثَلِ الْعَنْكَبُوتِ اتَّخَذَتْ بَيْتًا ۖ وَإِنَّ أَوْهَنَ الْبُيُوتِ لَبَيْتُ الْعَنْكَبُوتِ ۖ لَوْ كَانُوا يَعْلَمُونَ',
        'The example of those who take allies other than Allah is like that of the spider who takes a home. And indeed, the weakest of homes is the home of the spider, if they only knew.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        42,
        'إِنَّ اللَّهَ يَعْلَمُ مَا يَدْعُونَ مِنْ دُونِهِ مِنْ شَيْءٍ ۚ وَهُوَ الْعَزِيزُ الْحَكِيمُ',
        'Indeed, Allah knows whatever thing they call upon other than Him. And He is the Exalted in Might, the Wise.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        43,
        'وَتِلْكَ الْأَمْثَالُ نَضْرِبُهَا لِلنَّاسِ ۖ وَمَا يَعْقِلُهَا إِلَّا الْعَالِمُونَ',
        'And these examples We present to the people, but none will understand them except those of knowledge.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        44,
        'خَلَقَ اللَّهُ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ ۚ إِنَّ فِي ذَٰلِكَ لَآيَةً لِلْمُؤْمِنِينَ',
        'Allah created the heavens and the earth in truth. Indeed in that is a sign for the believers.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        45,
        'اتْلُ مَا أُوحِيَ إِلَيْكَ مِنَ الْكِتَابِ وَأَقِمِ الصَّلَاةَ ۖ إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ ۗ وَلَذِكْرُ اللَّهِ أَكْبَرُ ۗ وَاللَّهُ يَعْلَمُ مَا تَصْنَعُونَ',
        'Recite, [O Muhammad], what has been revealed to you of the Book and establish prayer. Indeed, prayer prohibits immorality and wrongdoing, and the remembrance of Allah is greater. And Allah knows that which you do.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        46,
        '۞ وَلَا تُجَادِلُوا أَهْلَ الْكِتَابِ إِلَّا بِالَّتِي هِيَ أَحْسَنُ إِلَّا الَّذِينَ ظَلَمُوا مِنْهُمْ ۖ وَقُولُوا آمَنَّا بِالَّذِي أُنْزِلَ إِلَيْنَا وَأُنْزِلَ إِلَيْكُمْ وَإِلَٰهُنَا وَإِلَٰهُكُمْ وَاحِدٌ وَنَحْنُ لَهُ مُسْلِمُونَ',
        'And do not argue with the People of the Scripture except in a way that is best, except for those who commit injustice among them, and say, "We believe in that which has been revealed to us and revealed to you. And our God and your God is one; and we are Muslims [in submission] to Him."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        47,
        'وَكَذَٰلِكَ أَنْزَلْنَا إِلَيْكَ الْكِتَابَ ۚ فَالَّذِينَ آتَيْنَاهُمُ الْكِتَابَ يُؤْمِنُونَ بِهِ ۖ وَمِنْ هَٰؤُلَاءِ مَنْ يُؤْمِنُ بِهِ ۚ وَمَا يَجْحَدُ بِآيَاتِنَا إِلَّا الْكَافِرُونَ',
        'And thus We have sent down to you the Qur''an. And those to whom We [previously] gave the Scripture believe in it. And among these [people of Makkah] are those who believe in it. And none reject Our verses except the disbelievers.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        48,
        'وَمَا كُنْتَ تَتْلُو مِنْ قَبْلِهِ مِنْ كِتَابٍ وَلَا تَخُطُّهُ بِيَمِينِكَ ۖ إِذًا لَارْتَابَ الْمُبْطِلُونَ',
        'And you did not recite before it any scripture, nor did you inscribe one with your right hand. Otherwise the falsifiers would have had [cause for] doubt.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        49,
        'بَلْ هُوَ آيَاتٌ بَيِّنَاتٌ فِي صُدُورِ الَّذِينَ أُوتُوا الْعِلْمَ ۚ وَمَا يَجْحَدُ بِآيَاتِنَا إِلَّا الظَّالِمُونَ',
        'Rather, the Qur''an is distinct verses [preserved] within the breasts of those who have been given knowledge. And none reject Our verses except the wrongdoers.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        50,
        'وَقَالُوا لَوْلَا أُنْزِلَ عَلَيْهِ آيَاتٌ مِنْ رَبِّهِ ۖ قُلْ إِنَّمَا الْآيَاتُ عِنْدَ اللَّهِ وَإِنَّمَا أَنَا نَذِيرٌ مُبِينٌ',
        'But they say, "Why are not signs sent down to him from his Lord?" Say, "The signs are only with Allah, and I am only a clear warner."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        51,
        'أَوَلَمْ يَكْفِهِمْ أَنَّا أَنْزَلْنَا عَلَيْكَ الْكِتَابَ يُتْلَىٰ عَلَيْهِمْ ۚ إِنَّ فِي ذَٰلِكَ لَرَحْمَةً وَذِكْرَىٰ لِقَوْمٍ يُؤْمِنُونَ',
        'And is it not sufficient for them that We revealed to you the Book which is recited to them? Indeed in that is a mercy and reminder for a people who believe.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        52,
        'قُلْ كَفَىٰ بِاللَّهِ بَيْنِي وَبَيْنَكُمْ شَهِيدًا ۖ يَعْلَمُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ ۗ وَالَّذِينَ آمَنُوا بِالْبَاطِلِ وَكَفَرُوا بِاللَّهِ أُولَٰئِكَ هُمُ الْخَاسِرُونَ',
        'Say, "Sufficient is Allah between me and you as Witness. He knows what is in the heavens and earth. And they who have believed in falsehood and disbelieved in Allah - it is those who are the losers."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        53,
        'وَيَسْتَعْجِلُونَكَ بِالْعَذَابِ ۚ وَلَوْلَا أَجَلٌ مُسَمًّى لَجَاءَهُمُ الْعَذَابُ وَلَيَأْتِيَنَّهُمْ بَغْتَةً وَهُمْ لَا يَشْعُرُونَ',
        'And they urge you to hasten the punishment. And if not for [the decree of] a specified term, punishment would have reached them. But it will surely come to them suddenly while they perceive not.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        54,
        'يَسْتَعْجِلُونَكَ بِالْعَذَابِ وَإِنَّ جَهَنَّمَ لَمُحِيطَةٌ بِالْكَافِرِينَ',
        'They urge you to hasten the punishment. And indeed, Hell will be encompassing of the disbelievers'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        55,
        'يَوْمَ يَغْشَاهُمُ الْعَذَابُ مِنْ فَوْقِهِمْ وَمِنْ تَحْتِ أَرْجُلِهِمْ وَيَقُولُ ذُوقُوا مَا كُنْتُمْ تَعْمَلُونَ',
        'On the Day the punishment will cover them from above them and from below their feet and it is said, "Taste [the result of] what you used to do."'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        56,
        'يَا عِبَادِيَ الَّذِينَ آمَنُوا إِنَّ أَرْضِي وَاسِعَةٌ فَإِيَّايَ فَاعْبُدُونِ',
        'O My servants who have believed, indeed My earth is spacious, so worship only Me.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        57,
        'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ۖ ثُمَّ إِلَيْنَا تُرْجَعُونَ',
        'Every soul will taste death. Then to Us will you be returned.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        58,
        'وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَنُبَوِّئَنَّهُمْ مِنَ الْجَنَّةِ غُرَفًا تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا ۚ نِعْمَ أَجْرُ الْعَامِلِينَ',
        'And those who have believed and done righteous deeds - We will surely assign to them of Paradise [elevated] chambers beneath which rivers flow, wherein they abide eternally. Excellent is the reward of the [righteous] workers'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        59,
        'الَّذِينَ صَبَرُوا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ',
        'Who have been patient and upon their Lord rely.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        60,
        'وَكَأَيِّنْ مِنْ دَابَّةٍ لَا تَحْمِلُ رِزْقَهَا اللَّهُ يَرْزُقُهَا وَإِيَّاكُمْ ۚ وَهُوَ السَّمِيعُ الْعَلِيمُ',
        'And how many a creature carries not its [own] provision. Allah provides for it and for you. And He is the Hearing, the Knowing.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        61,
        'وَلَئِنْ سَأَلْتَهُمْ مَنْ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ لَيَقُولُنَّ اللَّهُ ۖ فَأَنَّىٰ يُؤْفَكُونَ',
        'If you asked them, "Who created the heavens and earth and subjected the sun and the moon?" they would surely say, "Allah." Then how are they deluded?'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        62,
        'اللَّهُ يَبْسُطُ الرِّزْقَ لِمَنْ يَشَاءُ مِنْ عِبَادِهِ وَيَقْدِرُ لَهُ ۚ إِنَّ اللَّهَ بِكُلِّ شَيْءٍ عَلِيمٌ',
        'Allah extends provision for whom He wills of His servants and restricts for him. Indeed Allah is, of all things, Knowing.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        63,
        'وَلَئِنْ سَأَلْتَهُمْ مَنْ نَزَّلَ مِنَ السَّمَاءِ مَاءً فَأَحْيَا بِهِ الْأَرْضَ مِنْ بَعْدِ مَوْتِهَا لَيَقُولُنَّ اللَّهُ ۚ قُلِ الْحَمْدُ لِلَّهِ ۚ بَلْ أَكْثَرُهُمْ لَا يَعْقِلُونَ',
        'And if you asked them, "Who sends down rain from the sky and gives life thereby to the earth after its lifelessness?" they would surely say " Allah." Say, "Praise to Allah "; but most of them do not reason.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        64,
        'وَمَا هَٰذِهِ الْحَيَاةُ الدُّنْيَا إِلَّا لَهْوٌ وَلَعِبٌ ۚ وَإِنَّ الدَّارَ الْآخِرَةَ لَهِيَ الْحَيَوَانُ ۚ لَوْ كَانُوا يَعْلَمُونَ',
        'And this worldly life is not but diversion and amusement. And indeed, the home of the Hereafter - that is the [eternal] life, if only they knew.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        65,
        'فَإِذَا رَكِبُوا فِي الْفُلْكِ دَعَوُا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ فَلَمَّا نَجَّاهُمْ إِلَى الْبَرِّ إِذَا هُمْ يُشْرِكُونَ',
        'And when they board a ship, they supplicate Allah, sincere to Him in religion. But when He delivers them to the land, at once they associate others with Him'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        66,
        'لِيَكْفُرُوا بِمَا آتَيْنَاهُمْ وَلِيَتَمَتَّعُوا ۖ فَسَوْفَ يَعْلَمُونَ',
        'So that they will deny what We have granted them, and they will enjoy themselves. But they are going to know.'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        67,
        'أَوَلَمْ يَرَوْا أَنَّا جَعَلْنَا حَرَمًا آمِنًا وَيُتَخَطَّفُ النَّاسُ مِنْ حَوْلِهِمْ ۚ أَفَبِالْبَاطِلِ يُؤْمِنُونَ وَبِنِعْمَةِ اللَّهِ يَكْفُرُونَ',
        'Have they not seen that We made [Makkah] a safe sanctuary, while people are being taken away all around them? Then in falsehood do they believe, and in the favor of Allah they disbelieve?'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        68,
        'وَمَنْ أَظْلَمُ مِمَّنِ افْتَرَىٰ عَلَى اللَّهِ كَذِبًا أَوْ كَذَّبَ بِالْحَقِّ لَمَّا جَاءَهُ ۚ أَلَيْسَ فِي جَهَنَّمَ مَثْوًى لِلْكَافِرِينَ',
        'And who is more unjust than one who invents a lie about Allah or denies the truth when it has come to him? Is there not in Hell a [sufficient] residence for the disbelievers?'
    );
    next_id := next_id + 1;
    INSERT INTO verses (id, surah_id, number, text, translation) VALUES (
        next_id,
        29,
        69,
        'وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ',
        'And those who strive for Us - We will surely guide them to Our ways. And indeed, Allah is with the doers of good.'
    );
    next_id := next_id + 1;
END $$;

