
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
        const { verse, surahName } = await req.json()
        const apiKey = Deno.env.get('GROQ_API_KEY')

        if (!apiKey) {
            throw new Error('GROQ_API_KEY is not set')
        }

        const prompt = `Explain verse ${verse.number} of Surah ${surahName}:
Arabic: "${verse.text}"
Translation: "${verse.translation}"

Explain the deeper meaning of this verse in a calm and encouraging way for someone who is learning Quran. Keep it under 100 words.`;

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
                        content: 'You are a knowledgeable and gentle Islamic scholar helping someone learn the Quran. Be encouraging and warm.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 256
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Groq API error:", errorText);
            throw new Error(`Groq API error: ${response.status} - ${errorText}`);
        }

        const result = await response.json();
        const text = result.choices?.[0]?.message?.content || "Deep understanding is coming soon. Stay curious.";

        return new Response(JSON.stringify({ text }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
    } catch (error) {
        console.error("Function error:", error)
        return new Response(JSON.stringify({ error: error.message }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
    }
})
