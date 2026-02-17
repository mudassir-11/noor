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
    },

    // Prayer (Salah) Sunnahs
    {
        id: 27,
        title: 'Straighten the Rows',
        arabic: null,
        description: 'The Prophet (PBUH) said: "Straighten your rows, for straightening the rows is part of perfecting the prayer."',
        category: 'prayer',
        reference: 'Sahih Bukhari 723'
    },
    {
        id: 28,
        title: 'Fill the Gaps in Prayer Rows',
        arabic: null,
        description: 'Fill in the gaps in the rows during congregational prayer. The angels fill in the gaps in their rows before Allah.',
        category: 'prayer',
        reference: 'Sahih Muslim 430'
    },
    {
        id: 29,
        title: 'Du\'a Between Adhan and Iqamah',
        arabic: null,
        description: 'Make du\'a between the Adhan and Iqamah, for it is not rejected at that time.',
        category: 'prayer',
        reference: 'Sunan Abu Dawud 521'
    },
    {
        id: 30,
        title: 'Use a Sutrah',
        arabic: null,
        description: 'When praying, place something in front of you as a barrier (sutrah) to prevent people from walking in front.',
        category: 'prayer',
        reference: 'Sahih Bukhari 510'
    },
    {
        id: 31,
        title: 'Pray Sunnah at Home',
        arabic: null,
        description: 'The best prayer after the obligatory prayers is the one offered at home (referring to voluntary prayers).',
        category: 'prayer',
        reference: 'Sahih Muslim 781'
    },
    {
        id: 32,
        title: 'Two Rak\'ah Before Fajr',
        arabic: null,
        description: 'The two rak\'ah before Fajr are better than the world and everything in it.',
        category: 'prayer',
        reference: 'Sahih Muslim 725'
    },
    {
        id: 33,
        title: 'Tahiyyat al-Masjid',
        arabic: null,
        description: 'When entering the masjid, do not sit until you have prayed two rak\'ah (greeting the mosque).',
        category: 'prayer',
        reference: 'Sahih Bukhari 1163'
    },
    {
        id: 34,
        title: 'Du\'a After Finishing Prayer',
        arabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
        description: 'After each prayer, say: "Allahumma a\'inni \'ala dhikrika wa shukrika wa husni \'ibadatik" (O Allah, help me remember You, thank You, and worship You properly).',
        category: 'prayer',
        reference: 'Sunan Abu Dawud 1522'
    },

    // Travel Sunnahs
    {
        id: 35,
        title: 'Du\'a When Leaving Home',
        arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
        description: 'When leaving home, say: "Bismillah, tawakkaltu \'alallah, wa la hawla wa la quwwata illa billah" (In the name of Allah, I place my trust in Allah, there is no power except with Allah).',
        category: 'travel',
        reference: 'Sunan Abu Dawud 5095'
    },
    {
        id: 36,
        title: 'Du\'a When Entering Home',
        arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ',
        description: 'When entering home, greet your family with salam and remember Allah.',
        category: 'travel',
        reference: 'Sunan Abu Dawud 5096'
    },
    {
        id: 37,
        title: 'Du\'a When Boarding Transport',
        arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ',
        description: 'When riding any transport, say: "Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin" (Glory to Him who has subjected this to us).',
        category: 'travel',
        reference: 'Sunan Abu Dawud 2602'
    },
    {
        id: 38,
        title: 'Enter Masjid with Right Foot',
        arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
        description: 'Enter the masjid with your right foot and say: "Allahumma-ftah li abwaba rahmatik" (O Allah, open for me the doors of Your mercy).',
        category: 'travel',
        reference: 'Sahih Muslim 713'
    },
    {
        id: 39,
        title: 'Exit Masjid with Left Foot',
        arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
        description: 'Exit the masjid with your left foot and say: "Allahumma inni as\'aluka min fadlik" (O Allah, I ask You from Your bounty).',
        category: 'travel',
        reference: 'Sahih Muslim 713'
    },
    {
        id: 40,
        title: 'Travel in a Group',
        arabic: null,
        description: 'The Prophet (PBUH) said: "The rider is a devil, two riders are two devils, but three are a traveling party."',
        category: 'travel',
        reference: 'Sunan Abu Dawud 2607'
    },
    {
        id: 41,
        title: 'Appoint a Leader When Traveling',
        arabic: null,
        description: 'When three people travel together, they should appoint one of them as their leader.',
        category: 'travel',
        reference: 'Sunan Abu Dawud 2608'
    },

    // Social Sunnahs
    {
        id: 42,
        title: 'Say Alhamdulillah When Sneezing',
        arabic: 'الْحَمْدُ لِلَّهِ',
        description: 'When you sneeze, say "Alhamdulillah" (All praise is due to Allah).',
        category: 'social',
        reference: 'Sahih Bukhari 6224'
    },
    {
        id: 43,
        title: 'Reply to a Sneezer',
        arabic: 'يَرْحَمُكَ اللَّهُ',
        description: 'When someone sneezes and says Alhamdulillah, reply with "Yarhamukallah" (May Allah have mercy on you). They should respond "Yahdikumullah" (May Allah guide you).',
        category: 'social',
        reference: 'Sahih Bukhari 6224'
    },
    {
        id: 44,
        title: 'Visit the Sick',
        arabic: null,
        description: 'The Prophet (PBUH) said: "Feed the hungry, visit the sick, and free the captives."',
        category: 'social',
        reference: 'Sahih Bukhari 5649'
    },
    {
        id: 45,
        title: 'Du\'a When Visiting the Sick',
        arabic: 'أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ',
        description: 'Say this du\'a 7 times when visiting the sick: "As\'alullaha al-\'Azeem Rabbal-\'Arshil-\'Azeem an yashfiyak" (I ask Allah the Great, Lord of the Great Throne, to cure you).',
        category: 'social',
        reference: 'Sunan Abu Dawud 3106'
    },
    {
        id: 46,
        title: 'Give Gifts',
        arabic: null,
        description: 'The Prophet (PBUH) said: "Give gifts to one another, for gifts remove malice from the hearts."',
        category: 'social',
        reference: 'Jami at-Tirmidhi 2130'
    },
    {
        id: 47,
        title: 'Accept Invitations',
        arabic: null,
        description: 'Accept invitations when you are invited (to a wedding feast or meal), unless there is a valid reason not to.',
        category: 'social',
        reference: 'Sahih Bukhari 5173'
    },
    {
        id: 48,
        title: 'Return the Salam',
        arabic: 'وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ',
        description: 'Return the greeting of salam with an equal or better greeting.',
        category: 'social',
        reference: 'Quran 4:86'
    },
    {
        id: 49,
        title: 'Cover Yawns',
        arabic: null,
        description: 'When yawning, cover your mouth with your hand. The Prophet (PBUH) disliked yawning openly.',
        category: 'social',
        reference: 'Sahih Bukhari 6226'
    },
    {
        id: 50,
        title: 'Speak Good or Remain Silent',
        arabic: null,
        description: 'The Prophet (PBUH) said: "Whoever believes in Allah and the Last Day, let him speak good or remain silent."',
        category: 'social',
        reference: 'Sahih Bukhari 6018'
    },
    {
        id: 51,
        title: 'Don\'t Point with One Finger',
        arabic: null,
        description: 'When pointing at someone, use your whole hand, not just one finger, as it is more respectful.',
        category: 'social',
        reference: 'Sahih Muslim 2594'
    },
    {
        id: 52,
        title: 'Ask Permission Three Times',
        arabic: null,
        description: 'When seeking permission to enter, ask up to three times. If no response, turn back.',
        category: 'social',
        reference: 'Sahih Bukhari 6245'
    },

    // Family Sunnahs
    {
        id: 53,
        title: 'Be Kind to Parents',
        arabic: null,
        description: 'The pleasure of Allah is in the pleasure of parents, and His anger is in their anger.',
        category: 'family',
        reference: 'Jami at-Tirmidhi 1899'
    },
    {
        id: 54,
        title: 'Kiss Children',
        arabic: null,
        description: 'The Prophet (PBUH) would kiss his grandchildren Hasan and Husayn. He showed love openly to children.',
        category: 'family',
        reference: 'Sahih Bukhari 5997'
    },
    {
        id: 55,
        title: 'Be Gentle with Family',
        arabic: null,
        description: 'The Prophet (PBUH) said: "The best of you is the one who is best to his family, and I am the best of you to my family."',
        category: 'family',
        reference: 'Jami at-Tirmidhi 3895'
    },
    {
        id: 56,
        title: 'Play with Children',
        arabic: null,
        description: 'The Prophet (PBUH) used to play with children and make them laugh. He would let Hasan and Husayn climb on his back.',
        category: 'family',
        reference: 'Sunan An-Nasa\'i 1141'
    },
    {
        id: 57,
        title: 'Help with Housework',
        arabic: null,
        description: 'Aisha (RA) was asked what the Prophet did at home. She said: "He used to serve his family."',
        category: 'family',
        reference: 'Sahih Bukhari 676'
    },
    {
        id: 58,
        title: 'Du\'a for Newlyweds',
        arabic: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
        description: 'For newlyweds, say: "Barakallahu laka wa baraka alayka wa jama\'a baynakuma fi khayr" (May Allah bless you and bring you together in goodness).',
        category: 'family',
        reference: 'Sunan Abu Dawud 2130'
    },
    {
        id: 59,
        title: 'Maintain Family Ties',
        arabic: null,
        description: 'The Prophet (PBUH) said: "The one who severs family ties will not enter Paradise."',
        category: 'family',
        reference: 'Sahih Bukhari 5984'
    },
    {
        id: 60,
        title: 'Give Equal Gifts to Children',
        arabic: null,
        description: 'Be just and fair when giving gifts to your children. Do not favor one over another.',
        category: 'family',
        reference: 'Sahih Bukhari 2587'
    },

    // More General Sunnahs
    {
        id: 61,
        title: 'Saying SubhanAllah 33 Times After Prayer',
        arabic: null,
        description: 'After each prayer, say SubhanAllah 33 times, Alhamdulillah 33 times, Allahu Akbar 33 times, then complete 100 with "La ilaha illallahu wahdahu la sharika lah..."',
        category: 'prayer',
        reference: 'Sahih Muslim 597'
    },
    {
        id: 62,
        title: 'Make Istighfar Often',
        arabic: 'أَسْتَغْفِرُ اللَّهَ',
        description: 'The Prophet (PBUH) used to seek forgiveness more than 70 times a day.',
        category: 'general',
        reference: 'Sahih Bukhari 6307'
    },
    {
        id: 63,
        title: 'Send Salawat on the Prophet',
        arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ',
        description: 'Send blessings upon the Prophet frequently, especially on Fridays.',
        category: 'general',
        reference: 'Sunan Abu Dawud 1047'
    },
    {
        id: 64,
        title: 'Seek Refuge Before Reciting Quran',
        arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
        description: 'Before reciting Quran, say "A\'udhu billahi minash-shaitanir-rajim" (I seek refuge in Allah from Satan).',
        category: 'general',
        reference: 'Quran 16:98'
    },
    {
        id: 65,
        title: 'Begin Important Matters with Bismillah',
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
        description: 'Any important matter that does not begin with Bismillah is cut off from blessings.',
        category: 'general',
        reference: 'Sunan Ibn Majah 1894'
    },
    {
        id: 66,
        title: 'Say Alhamdulillah for Blessings',
        arabic: null,
        description: 'When receiving any blessing or good news, say Alhamdulillah to show gratitude.',
        category: 'general',
        reference: 'General Practice'
    },

    // Dhikr & Du'a Sunnahs
    {
        id: 67,
        title: 'Morning Adhkar',
        arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ',
        description: 'Recite the morning adhkar after Fajr. They include protection, blessings, and remembrance of Allah.',
        category: 'dhikr',
        reference: 'Sahih Muslim 2723'
    },
    {
        id: 68,
        title: 'Evening Adhkar',
        arabic: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ',
        description: 'Recite the evening adhkar after Asr. They include protection through the night.',
        category: 'dhikr',
        reference: 'Sahih Muslim 2723'
    },
    {
        id: 69,
        title: 'Du\'a When Looking in the Mirror',
        arabic: 'اللَّهُمَّ أَنْتَ حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي',
        description: 'When looking in a mirror, say: "Allahumma anta hassanta khalqi fa-hassin khuluqi" (O Allah, You have beautified my appearance, so beautify my character).',
        category: 'dhikr',
        reference: 'Musnad Ahmad 3823'
    },
    {
        id: 70,
        title: 'Du\'a When Wearing New Clothes',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ',
        description: 'When wearing new clothes, say: "Alhamdulillahil-ladhi kasani hadha wa razaqanih" (Praise be to Allah who clothed me with this and provided it for me).',
        category: 'dhikr',
        reference: 'Sunan Abu Dawud 4023'
    },
    {
        id: 71,
        title: 'Du\'a During Rain',
        arabic: 'اللَّهُمَّ صَيِّبًا نَافِعًا',
        description: 'When it rains, say: "Allahumma sayyiban nafi\'an" (O Allah, make it a beneficial rain).',
        category: 'dhikr',
        reference: 'Sahih Bukhari 1032'
    },
    {
        id: 72,
        title: 'Du\'a After Rain',
        arabic: 'مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ',
        description: 'After rain, say: "Mutirna bi-fadlillahi wa rahmatihi" (We have been blessed with rain by the grace and mercy of Allah).',
        category: 'dhikr',
        reference: 'Sahih Bukhari 1038'
    },
    {
        id: 73,
        title: 'Du\'a When Hearing Thunder',
        arabic: 'سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ',
        description: 'When hearing thunder, say: "Subhanal-ladhi yusabbihur-ra\'du bi-hamdih" (Glory be to Him Whom the thunder glorifies with His praise).',
        category: 'dhikr',
        reference: 'Muwatta Malik 3641'
    },
    {
        id: 74,
        title: 'Du\'a When Wind Blows',
        arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَأَعُوذُ بِكَ مِنْ شَرِّهَا',
        description: 'When the wind blows strongly, say: "Allahumma inni as\'aluka khayraha wa a\'udhu bika min sharriha" (O Allah, I ask You for its good and seek refuge from its evil).',
        category: 'dhikr',
        reference: 'Sahih Muslim 899'
    },
    {
        id: 75,
        title: 'Du\'a When Entering Market',
        arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
        description: 'When entering a marketplace, say the dhikr of Tawheed. This is a blessed du\'a in a place where people are often heedless.',
        category: 'dhikr',
        reference: 'Jami at-Tirmidhi 3428'
    },
    {
        id: 76,
        title: 'Sayyid al-Istighfar',
        arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ',
        description: 'The master supplication for forgiveness. Whoever says it with conviction in the day and dies that night will enter Paradise.',
        category: 'dhikr',
        reference: 'Sahih Bukhari 6306'
    },
    {
        id: 77,
        title: 'Du\'a for Anxiety and Sorrow',
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',
        description: 'Say this du\'a for relief from worry and sadness: seeking refuge in Allah from anxiety, grief, weakness, laziness, debt, and being overpowered.',
        category: 'dhikr',
        reference: 'Sahih Bukhari 6369'
    },
    {
        id: 78,
        title: 'Du\'a Before Intimacy',
        arabic: 'بِسْمِ اللَّهِ اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا',
        description: 'Before intimacy with spouse, say: "Bismillah, Allahumma jannibna ash-shaytan wa jannib ash-shaytana ma razaqtana" (In the name of Allah, keep Satan away from us and from what You bless us with).',
        category: 'dhikr',
        reference: 'Sahih Bukhari 141'
    },

    // Friday (Jumu\'ah) Sunnahs
    {
        id: 79,
        title: 'Take Ghusl on Friday',
        arabic: null,
        description: 'Ghusl (full bath) on Friday is highly recommended. The Prophet (PBUH) said it is an obligation for those attending Jumu\'ah.',
        category: 'friday',
        reference: 'Sahih Bukhari 877'
    },
    {
        id: 80,
        title: 'Recite Surah Al-Kahf',
        arabic: null,
        description: 'Whoever recites Surah Al-Kahf on Friday will have light between the two Fridays.',
        category: 'friday',
        reference: 'Al-Mustadrak 2/399'
    },
    {
        id: 81,
        title: 'Go Early to Jumu\'ah',
        arabic: null,
        description: 'Go early to Friday prayer. The earlier you go, the greater the reward - like sacrificing a camel, then a cow, then a ram, then a chicken, then an egg.',
        category: 'friday',
        reference: 'Sahih Bukhari 881'
    },
    {
        id: 82,
        title: 'Wear Best Clothes',
        arabic: null,
        description: 'Wear your best clothes for Friday prayer. White is preferred.',
        category: 'friday',
        reference: 'Sunan Ibn Majah 1097'
    },
    {
        id: 83,
        title: 'Apply Perfume',
        arabic: null,
        description: 'Apply perfume (for men) before going to Jumu\'ah prayer.',
        category: 'friday',
        reference: 'Sahih Bukhari 880'
    },
    {
        id: 84,
        title: 'Listen to the Khutbah',
        arabic: null,
        description: 'Listen attentively to the khutbah. Do not speak or distract others during it.',
        category: 'friday',
        reference: 'Sahih Bukhari 934'
    },
    {
        id: 85,
        title: 'Send More Salawat on Friday',
        arabic: null,
        description: 'Increase sending blessings upon the Prophet (PBUH) on Friday and its night. It is presented to him.',
        category: 'friday',
        reference: 'Sunan Abu Dawud 1047'
    },
    {
        id: 86,
        title: 'Hour of Acceptance on Friday',
        arabic: null,
        description: 'There is an hour on Friday when du\'as are accepted. Seek it especially in the last hour before Maghrib.',
        category: 'friday',
        reference: 'Sahih Bukhari 935'
    },

    // Fasting Sunnahs
    {
        id: 87,
        title: 'Eat Suhoor',
        arabic: null,
        description: 'Do not skip suhoor (pre-dawn meal). The Prophet (PBUH) said: "Eat suhoor, for in suhoor there is blessing."',
        category: 'fasting',
        reference: 'Sahih Bukhari 1923'
    },
    {
        id: 88,
        title: 'Delay Suhoor',
        arabic: null,
        description: 'Delay suhoor until close to Fajr (but stop before Fajr begins).',
        category: 'fasting',
        reference: 'Sahih Bukhari 1921'
    },
    {
        id: 89,
        title: 'Hasten to Break Fast',
        arabic: null,
        description: 'Break the fast as soon as Maghrib enters. The Prophet (PBUH) said people will remain in goodness as long as they hasten to break their fast.',
        category: 'fasting',
        reference: 'Sahih Bukhari 1957'
    },
    {
        id: 90,
        title: 'Break Fast with Dates',
        arabic: null,
        description: 'Break fast with dates. If not available, then with water, for it is pure.',
        category: 'fasting',
        reference: 'Sunan Abu Dawud 2356'
    },
    {
        id: 91,
        title: 'Du\'a When Breaking Fast',
        arabic: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ',
        description: 'When breaking fast, say: "Dhahaba adhdhama\' wabtallatil-uruq, wa thabatal-ajru in sha Allah" (The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills).',
        category: 'fasting',
        reference: 'Sunan Abu Dawud 2357'
    },
    {
        id: 92,
        title: 'Fast Mondays and Thursdays',
        arabic: null,
        description: 'The Prophet (PBUH) used to fast on Mondays and Thursdays, saying: "Deeds are presented on these days."',
        category: 'fasting',
        reference: 'Jami at-Tirmidhi 747'
    },
    {
        id: 93,
        title: 'Fast Six Days of Shawwal',
        arabic: null,
        description: 'Whoever fasts Ramadan then follows it with six days of Shawwal, it is as if they fasted the whole year.',
        category: 'fasting',
        reference: 'Sahih Muslim 1164'
    },
    {
        id: 94,
        title: 'Fast Day of Arafah',
        arabic: null,
        description: 'Fasting the Day of Arafah (9th Dhul Hijjah) expiates sins of the previous year and the coming year.',
        category: 'fasting',
        reference: 'Sahih Muslim 1162'
    },
    {
        id: 95,
        title: 'Fast Day of Ashura',
        arabic: null,
        description: 'Fasting the Day of Ashura (10th Muharram) expiates sins of the previous year. Fast the 9th with it.',
        category: 'fasting',
        reference: 'Sahih Muslim 1162'
    },
    {
        id: 96,
        title: 'Fast Three Days Each Month',
        arabic: null,
        description: 'Fasting three days of each month (preferably 13th, 14th, 15th - the white days) is equivalent to fasting the whole month.',
        category: 'fasting',
        reference: 'Sahih Bukhari 1981'
    },

    // More General Sunnahs
    {
        id: 97,
        title: 'Be Merciful to Others',
        arabic: null,
        description: 'The Prophet (PBUH) said: "The merciful are shown mercy by the Most Merciful. Be merciful to those on earth, and the One in heaven will be merciful to you."',
        category: 'general',
        reference: 'Sunan Abu Dawud 4941'
    },
    {
        id: 98,
        title: 'Control Your Anger',
        arabic: null,
        description: 'The Prophet (PBUH) said: "The strong man is not the one who can wrestle, but the one who controls himself when he is angry."',
        category: 'general',
        reference: 'Sahih Bukhari 6114'
    },
    {
        id: 99,
        title: 'Avoid Suspicion',
        arabic: null,
        description: 'The Prophet (PBUH) said: "Beware of suspicion, for suspicion is the most false of speech."',
        category: 'general',
        reference: 'Sahih Bukhari 6064'
    },
    {
        id: 100,
        title: 'Love for Your Brother What You Love for Yourself',
        arabic: null,
        description: 'The Prophet (PBUH) said: "None of you truly believes until he loves for his brother what he loves for himself."',
        category: 'general',
        reference: 'Sahih Bukhari 13'
    },

    // Additional Sunnahs
    {
        id: 101,
        title: 'Recite Surah Mulk Before Sleep',
        arabic: null,
        description: 'The Prophet (PBUH) said: "There is a surah in the Quran which is only thirty verses. It will intercede for a man until he is forgiven." (Surah Al-Mulk, 67)',
        category: 'sleeping',
        reference: 'Sunan Abu Dawud 1400'
    },
    {
        id: 102,
        title: 'Pray Duha (Forenoon Prayer)',
        arabic: null,
        description: 'The Prophet (PBUH) said: "In the morning charity is due from every bone in the body. Two rak\'ah of Duha is sufficient for this."',
        category: 'prayer',
        reference: 'Sahih Muslim 720'
    },
    {
        id: 103,
        title: 'Say SubhanAllah 100 Times',
        arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
        description: 'Whoever says "SubhanAllahi wa bihamdihi" 100 times in the morning and evening, none shall come on the Day of Resurrection with anything better, except one who has said the same or more.',
        category: 'dhikr',
        reference: 'Sahih Muslim 2692'
    },
    {
        id: 104,
        title: 'Say La ilaha illallah 100 Times',
        arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
        description: 'Whoever says this 100 times gets the reward of freeing 10 slaves, 100 good deeds, 100 sins removed, and is protected from Shaytan for the whole day.',
        category: 'dhikr',
        reference: 'Sahih Bukhari 3293'
    },
    {
        id: 105,
        title: 'Eat Dates in Odd Numbers',
        arabic: null,
        description: 'The Prophet (PBUH) used to eat dates in odd numbers (1, 3, 5, 7) especially before going out for Eid prayer.',
        category: 'eating',
        reference: 'Sahih Bukhari 953'
    },
    {
        id: 106,
        title: 'Pray Tahajjud (Night Prayer)',
        arabic: null,
        description: 'The Prophet (PBUH) said: "The best prayer after the obligatory prayer is the night prayer (Tahajjud)."',
        category: 'prayer',
        reference: 'Sahih Muslim 1163'
    },
    {
        id: 107,
        title: 'Pray Witr Before Sleeping',
        arabic: null,
        description: 'The Prophet (PBUH) said: "Make Witr the last of your night prayer." If you fear you won\'t wake up, pray it before sleeping.',
        category: 'prayer',
        reference: 'Sahih Bukhari 998'
    },
    {
        id: 108,
        title: 'Recite Surah Sajdah Before Sleep',
        arabic: null,
        description: 'The Prophet (PBUH) would not sleep until he had recited Surah As-Sajdah (32) and Surah Al-Mulk (67).',
        category: 'sleeping',
        reference: 'Jami at-Tirmidhi 2892'
    },
    {
        id: 109,
        title: 'Give Charity Daily',
        arabic: null,
        description: 'The Prophet (PBUH) said: "Every day the sun rises, charity is due on every joint of a person\'s body." Even a smile, a kind word, or removing harm from the road counts.',
        category: 'general',
        reference: 'Sahih Bukhari 2989'
    },
    {
        id: 110,
        title: 'Walk to the Masjid',
        arabic: null,
        description: 'Every step to the masjid raises your rank and removes a sin. The farther the distance, the greater the reward.',
        category: 'prayer',
        reference: 'Sahih Muslim 662'
    },
    {
        id: 111,
        title: 'Do Not Waste Food',
        arabic: null,
        description: 'The Prophet (PBUH) said: "If a morsel of food falls, pick it up, clean it, and eat it. Do not leave it for Shaytan."',
        category: 'eating',
        reference: 'Sahih Muslim 2033'
    },
    {
        id: 112,
        title: 'Use Perfume (Attar)',
        arabic: null,
        description: 'The Prophet (PBUH) loved perfume and would not refuse it when offered. He said: "Whoever is offered perfume, should not refuse it."',
        category: 'cleanliness',
        reference: 'Sahih Muslim 2253'
    },
    {
        id: 113,
        title: 'Look After Orphans',
        arabic: null,
        description: 'The Prophet (PBUH) said: "I and the one who looks after an orphan will be like these two in Paradise," showing his index and middle finger.',
        category: 'social',
        reference: 'Sahih Bukhari 5304'
    },
    {
        id: 114,
        title: 'Return Trusts (Amanah)',
        arabic: null,
        description: 'The Prophet (PBUH) said: "Pay the trust to the one who entrusted you, and do not betray the one who betrayed you."',
        category: 'general',
        reference: 'Sunan Abu Dawud 3535'
    },
    {
        id: 115,
        title: 'Keep Promises',
        arabic: null,
        description: 'Breaking promises is a sign of hypocrisy. The Prophet (PBUH) identified three signs: lying, breaking promises, and betraying trusts.',
        category: 'general',
        reference: 'Sahih Bukhari 33'
    },
    {
        id: 116,
        title: 'Drink Zamzam with Intention',
        arabic: null,
        description: 'The Prophet (PBUH) said: "The water of Zamzam is for whatever purpose it is drunk for." Make du\'a while drinking it.',
        category: 'eating',
        reference: 'Sunan Ibn Majah 3062'
    },
    {
        id: 117,
        title: 'Du\'a When Waking at Night',
        arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
        description: 'The Prophet (PBUH) said: "Whoever wakes up at night and says this, then says Alhamdulillah, or SubhanAllah, or makes du\'a — it will be accepted."',
        category: 'sleeping',
        reference: 'Sahih Bukhari 1154'
    },
    {
        id: 118,
        title: 'Make Du\'a in Sujood',
        arabic: null,
        description: 'The Prophet (PBUH) said: "The closest a servant is to his Lord is when he is in prostration. So increase supplications (in it)."',
        category: 'prayer',
        reference: 'Sahih Muslim 482'
    },
    {
        id: 119,
        title: 'Eat Honey',
        arabic: null,
        description: 'The Prophet (PBUH) loved honey and recommended it. Allah says in the Quran: "There comes forth from their bellies, a drink of varying color, wherein is healing for men." (16:69)',
        category: 'eating',
        reference: 'Sahih Bukhari 5684'
    },
    {
        id: 120,
        title: 'Spread Knowledge',
        arabic: null,
        description: 'The Prophet (PBUH) said: "Convey from me, even if it is one verse." Sharing Islamic knowledge is an act of continuous charity (sadaqah jariyah).',
        category: 'general',
        reference: 'Sahih Bukhari 3461'
    }
];

export const categoryLabels: Record<string, string> = {
    morning: '🌅 Morning',
    eating: '🍽️ Eating & Drinking',
    sleeping: '🌙 Sleeping',
    cleanliness: '💧 Cleanliness',
    prayer: '🕌 Prayer',
    travel: '🧭 Travel & Movement',
    social: '💬 Social Etiquette',
    family: '🏠 Family',
    dhikr: '📿 Du\'as & Dhikr',
    friday: '📅 Friday (Jumu\'ah)',
    fasting: '🌙 Fasting',
    general: '✨ General'
};

export const categoryOrder = ['morning', 'prayer', 'dhikr', 'friday', 'fasting', 'eating', 'sleeping', 'cleanliness', 'travel', 'social', 'family', 'general'];
