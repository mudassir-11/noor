import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

// Load environment variables
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase credentials in .env");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

interface DBVerse {
    id: number;
    surah_id: number;
    number: number;
    text: string;
}

interface APIVerse {
    id: number;
    verse_key: string;
    text_uthmani: string;
}

async function fetchDbVerses(): Promise<DBVerse[]> {
    console.log('Fetching verses from Supabase...');
    let allVerses: DBVerse[] = [];
    let from = 0;
    const step = 1000;
    let hasMore = true;

    while (hasMore) {
        const { data, error } = await supabase
            .from('verses')
            .select('id, surah_id, number, text')
            .order('surah_id', { ascending: true })
            .order('number', { ascending: true })
            .range(from, from + step - 1);

        if (error) {
            console.error('Error fetching from Supabase:', error);
            process.exit(1);
        }

        if (data && data.length > 0) {
            allVerses = allVerses.concat(data);
            console.log(`Fetched ${data.length} verses (Total: ${allVerses.length})`);
            from += step;
        } else {
            hasMore = false;
        }
    }

    return allVerses;
}

async function verifyVerses() {
    const dbVerses = await fetchDbVerses();
    console.log(`\nTotal DB Verses: ${dbVerses.length}`);

    const discrepancies: string[] = [];
    let totalCompared = 0;
    let mismatches = 0;

    console.log('\nFetching from Quran.com API and comparing...');

    // To avoid hitting rate limits too hard, we do it surah by surah
    for (let surahId = 1; surahId <= 114; surahId++) {
        const dbSurahVerses = dbVerses.filter(v => v.surah_id === surahId);

        if (dbSurahVerses.length === 0) continue;

        console.log(`Checking Surah ${surahId} (${dbSurahVerses.length} verses)...`);

        try {
            const response = await fetch(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${surahId}`);
            if (!response.ok) {
                console.error(`Failed to fetch surah ${surahId} from Quran.com: ${response.statusText}`);
                continue;
            }

            const data = await response.json() as any;
            const apiVerses: APIVerse[] = data.verses;

            if (dbSurahVerses.length !== apiVerses.length) {
                const errorMsg = `Surah ${surahId}: Count mismatch! DB has ${dbSurahVerses.length}, API has ${apiVerses.length}`;
                discrepancies.push(errorMsg);
                console.log(errorMsg);
            }

            for (let i = 0; i < dbSurahVerses.length; i++) {
                const dbVerse = dbSurahVerses[i];
                const apiVerse = apiVerses.find(v => v.verse_key === `${surahId}:${dbVerse.number}`);

                if (!apiVerse) {
                    discrepancies.push(`Surah ${surahId}:${dbVerse.number} - Missing in API!`);
                    continue;
                }

                totalCompared++;

                // Normalize text slightly to avoid basic encoding issues, but keep harakat
                // Sometimes APIs return the end-of-ayah marker (۝), DB might not have it.
                const dbText = dbVerse.text.trim().replace(/[\u06DD]/g, '');
                const apiText = apiVerse.text_uthmani.trim().replace(/[\u06DD]/g, '');

                if (dbText !== apiText) {
                    mismatches++;
                    discrepancies.push(`Mismatch Surah ${surahId}:${dbVerse.number}\nDB : ${dbText}\nAPI: ${apiText}\n`);
                }
            }
        } catch (e: any) {
            console.error(`Error processing Surah ${surahId}:`, e.message);
        }

        // small delay to respect rate limits
        await new Promise(resolve => setTimeout(resolve, 200));
    }

    console.log('\n=== VERIFICATION COMPLETE ===');
    console.log(`Total Compared: ${totalCompared}`);
    console.log(`Total Mismatches: ${mismatches}`);

    if (discrepancies.length > 0) {
        const reportPath = 'verification_report.txt';
        fs.writeFileSync(reportPath, discrepancies.join('\n'));
        console.log(`\nDiscrepancies found. Report written to ${reportPath}`);
    } else {
        console.log('\nNo discrepancies found. All texts match perfectly.');
    }
}

verifyVerses().catch(console.error);
