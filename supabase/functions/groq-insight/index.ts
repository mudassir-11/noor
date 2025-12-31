
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const { surah } = await req.json()
        const apiKey = Deno.env.get('GROQ_API_KEY')

        if (!apiKey) {
            throw new Error('GROQ_API_KEY is not set')
        }

        const prompt = `Provide a spiritual insight and historical context for Surah ${surah.englishName} (${surah.name}).
The meaning of the name is "${surah.meaning}". 
The verses include themes like ${surah.description}.

Please provide the response in the following JSON format only, no other text:
{
  "summary": "A concise summary of the surah's main message",
  "historicalContext": "The background and period of revelation",
  "spiritualLesson": "One key takeaway for the learner today",
  "keyVocabulary": [
    {"word": "Arabic Word", "meaning": "English Meaning"}
  ]
}`;

        console.log("Calling Groq API for surah:", surah.englishName);

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a knowledgeable Islamic scholar who provides spiritual insights about Quran. Always respond with valid JSON only.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 1024,
                response_format: { type: 'json_object' }
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Groq API error:", errorText);
            throw new Error(`Groq API error: ${response.status} - ${errorText}`);
        }

        const result = await response.json();
        const text = result.choices?.[0]?.message?.content;

        if (!text) {
            throw new Error("No text in Groq response");
        }

        const data = JSON.parse(text);

        return new Response(JSON.stringify(data), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
    } catch (error) {
        console.error("Function error:", error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
    }
})
