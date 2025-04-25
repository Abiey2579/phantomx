import { Mistral } from "@mistralai/mistralai";

const apiKey = "fI4hyW6miO19iSGacKhH45Grc3rJOGUv"; // Ensure secure management

const client = new Mistral({ apiKey });

export async function generateFromOllamaStream(
  prompt: string,
  onToken: (token: string) => void
) {
  try {
    const response = await client.chat.stream({
      model: "mistral-large-latest",
      messages: [{ role: "user", content: prompt }],
    });

    let buffer = "";

    const flushBuffer = () => {
      if (buffer.trim() !== "") {
        const cleaned = cleanHtml(buffer);
        onToken(cleaned);
        buffer = "";
      }
    };

    const handleContent = (content: string) => {
      const trimmed = content.trimStart();
      if (
        trimmed.startsWith("###") ||
        trimmed.startsWith("###") ||
        trimmed.startsWith("##") ||
        trimmed.startsWith("#") ||
        trimmed.startsWith("- ") ||
        trimmed.match(/^\d+\.\s+/)
      ) {
        flushBuffer();
        buffer += "\n" + content;
        flushBuffer();
      } else if (content.endsWith(". ") || content.endsWith(".\n")) {
        buffer += content;
        flushBuffer();
      } else {
        buffer += content;
      }
    };

    for await (const event of response) {
      if (
        event.data &&
        event.data.choices &&
        event.data.choices.length > 0 &&
        event.data.choices[0].delta?.content
      ) {
        const content = event.data.choices[0].delta.content;
        if (typeof content === "string") {
          handleContent(content);
        } else if (Array.isArray(content)) {
          const textChunks = content
            .filter(
              (chunk): chunk is { type: "text"; text: string } =>
                chunk.type === "text" && typeof chunk.text === "string"
            )
            .map((chunk) => chunk.text);
          textChunks.forEach(handleContent);
        }
      }
    }

    flushBuffer();
  } catch (error) {
    console.error("Mistral API error:", error);
    throw new Error("Failed to get response from Mistral API.");
  }
}

// This function removes <p> inside <li> tags
function cleanHtml(input: string): string {
  return input.replace(
    /<li>\s*<p>([\s\S]*?)<\/p>\s*<\/li>/gi,
    (_, inner) => `<li>${inner.trim()}</li>`
  );
}
