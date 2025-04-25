import { Mistral } from "@mistralai/mistralai";

const apiKey = "fI4hyW6miO19iSGacKhH45Grc3rJOGUv"; // Secure this key in production
const client = new Mistral({ apiKey });

export async function checkPromptClarity(
  prompt: string
): Promise<{ isClear: boolean; followUpQuestion?: string }> {
  const clarityPrompt = `
  You are an AI assistant evaluating user prompts for clarity.
  
  1. If the prompt is clear, respond exactly: "clear"
  2. If the prompt is vague or lacks context, respond like this:
  "vague: [ask a smart follow-up question to get more clarity]"
  
  Prompt: """${prompt}"""
  `;

  try {
    const res = await client.chat.complete({
      model: "mistral-large-latest",
      messages: [{ role: "user", content: clarityPrompt }],
    });

    const message = res.choices?.[0]?.message?.content;

    let clarityResponse = "";

    if (typeof message === "string") {
      clarityResponse = message;
    } else if (Array.isArray(message)) {
      const textChunks = message
        .filter(
          (chunk): chunk is { type: "text"; text: string } =>
            chunk.type === "text" && typeof chunk.text === "string"
        )
        .map((chunk) => chunk.text);
      clarityResponse = textChunks.join(" ");
    }

    if (clarityResponse.toLowerCase().startsWith("clear")) {
      return { isClear: true };
    } else if (clarityResponse.toLowerCase().startsWith("vague:")) {
      const question = clarityResponse.slice(6).trim();
      return { isClear: false, followUpQuestion: question };
    }

    return {
      isClear: false,
      followUpQuestion: "Can you clarify your question or add more context?",
    };
  } catch (err) {
    console.error("Error checking prompt clarity:", err);
    return {
      isClear: false,
      followUpQuestion: "⚠️ Failed to evaluate prompt clarity.",
    };
  }
}
