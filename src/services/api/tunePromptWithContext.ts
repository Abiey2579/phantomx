import { PhantomXContext } from "@/utils/test";
import { Mistral } from "@mistralai/mistralai";

const apiKey = "fI4hyW6miO19iSGacKhH45Grc3rJOGUv";
const client = new Mistral({ apiKey });

export async function tunePromptWithContext(
  userPrompt: string
): Promise<string> {
  try {
    const systemPrompt = `
    You are a world-class prompt engineer tasked with helping elite financial institutions like BlackRock Inc. and State Street craft exceptionally effective prompts to extract maximum value from their advanced financial AI model — PhantomX.
    
    Your job is to take a user’s initial prompt and enhance it with deep contextual variables relevant to economic analysis. These include:
    
    - Regional GDP
    - Inflation
    - Supply and demand dynamics
    - Market sentiment
    - Financial literacy rates
    - Predominant income sources (e.g., jobs, business, informal sector)
    - Socioeconomic and cultural factors
    - Business and job market trends
    
    Use the following **PhantomX context** to guide the enhancement:
    ---
    ${PhantomXContext}
    ---
    
    Now, take the user’s original prompt and rewrite it as a clear, focused, and insight-driven financial query, embedding the relevant context from PhantomX to maximize analytical depth.
    
    Respond with **only** the enhanced prompt — not an answer.
    
    User Prompt: "${userPrompt}"
    `;

    const response = await client.chat.complete({
      model: "mistral-large-latest",
      messages: [{ role: "system", content: systemPrompt }],
    });

    const message = response.choices?.[0]?.message?.content;

    if (typeof message === "string") {
      return message.trim();
    }

    if (Array.isArray(message)) {
      const textChunks = message
        .filter(
          (chunk): chunk is { type: "text"; text: string } =>
            chunk.type === "text" && typeof chunk.text === "string"
        )
        .map((chunk) => chunk.text);
      return textChunks.join(" ").trim();
    }

    return userPrompt; // fallback: return original prompt if something goes wrong
  } catch (error) {
    console.error("Error tuning prompt:", error);
    return userPrompt; // fallback on error
  }
}
