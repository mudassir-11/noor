
import { Surah } from '../types';

export const QURAN_DATA: Surah[] = [
  {
    id: 1,
    number: 1,
    name: "الفاتحة",
    englishName: "Al-Fatihah",
    meaning: "The Opening",
    versesCount: 7,
    complexity: 1,
    description: "The essence of the Quran, recited in every prayer.",
    verses: [
      { id: 1, number: 1, text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful." },
      { id: 2, number: 2, text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", translation: "[All] praise is [due] to Allah, Lord of the worlds -" },
      { id: 3, number: 3, text: "الرَّحْمَٰنِ الرَّحِيمِ", translation: "The Entirely Merciful, the Especially Merciful," },
      { id: 4, number: 4, text: "مَالِكِ يَوْمِ الدِّينِ", translation: "Sovereign of the Day of Recompense." },
      { id: 5, number: 5, text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", translation: "It is You we worship and You we ask for help." },
      { id: 6, number: 6, text: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", translation: "Guide us to the straight path -" },
      { id: 7, number: 7, text: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", translation: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray." }
    ]
  },
  {
    id: 112,
    number: 112,
    name: "الإخلاص",
    englishName: "Al-Ikhlas",
    meaning: "The Sincerity",
    versesCount: 4,
    complexity: 1,
    description: "Declaring the absolute oneness of God. Equivalent to 1/3 of the Quran.",
    verses: [
      { id: 1121, number: 1, text: "قُلْ هُوَ اللَّهُ أَحَدٌ", translation: "Say, \"He is Allah, [who is] One," },
      { id: 1122, number: 2, text: "اللَّهُ الصَّمَدُ", translation: "Allah, the Eternal Refuge." },
      { id: 1123, number: 3, text: "لَمْ يَلِدْ وَلَمْ يُولَدْ", translation: "He neither begets nor is born," },
      { id: 1124, number: 4, text: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", translation: "Nor is there to Him any equivalent.\"" }
    ]
  },
  {
    id: 103,
    number: 103,
    name: "العصر",
    englishName: "Al-Asr",
    meaning: "The Declining Day",
    versesCount: 3,
    complexity: 1,
    description: "A short yet profound reminder about time and human success.",
    verses: [
      { id: 1031, number: 1, text: "وَالْعَصْرِ", translation: "By time," },
      { id: 1032, number: 2, text: "إِنَّ الْإِنسَانَ لَفِي خُسْرٍ", translation: "Indeed, mankind is in loss," },
      { id: 1033, number: 3, text: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ", translation: "Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience." }
    ]
  },
  {
    id: 108,
    number: 108,
    name: "الكوثر",
    englishName: "Al-Kawthar",
    meaning: "The Abundance",
    versesCount: 3,
    complexity: 1,
    description: "The shortest Surah, consoling the Prophet with the promise of abundance.",
    verses: [
      { id: 1081, number: 1, text: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ", translation: "Indeed, We have granted you, [O Muhammad], al-Kawthar." },
      { id: 1082, number: 2, text: "فَصَلِّ لِرَبِّكَ وَانْحَرْ", translation: "So pray to your Lord and sacrifice [to Him alone]." },
      { id: 1083, number: 3, text: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ", translation: "Indeed, your enemy is the one cut off." }
    ]
  },
  {
    id: 114,
    number: 114,
    name: "الناس",
    englishName: "An-Nas",
    meaning: "Mankind",
    versesCount: 6,
    complexity: 2,
    description: "Seeking refuge from the whispers of evil within ourselves and from others.",
    verses: [
      { id: 1141, number: 1, text: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", translation: "Say, \"I seek refuge in the Lord of mankind," },
      { id: 1142, number: 2, text: "مَلِكِ النَّاسِ", translation: "The Sovereign of mankind." },
      { id: 1143, number: 3, text: "إِلَهِ النَّاسِ", translation: "The God of mankind," },
      { id: 1144, number: 4, text: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", translation: "From the evil of the retreating whisperer -" },
      { id: 1145, number: 5, text: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", translation: "Who whispers [evil] into the breasts of mankind -" },
      { id: 1146, number: 6, text: "مِنَ الْجِنَّةِ وَالنَّاسِ", translation: "From among the jinn and mankind.\"" }
    ]
  }
];
