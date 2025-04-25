export async function generateFromOllamaStream(
  prompt: string,
  onToken: (token: string) => void
) {
  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "deepseek-r1:1.5b", // or your preferred model
      prompt,
      stream: true, // Enable streaming
      options: {
        temperature: 0.7,
        num_predict: 2048,
        top_k: 40,
        top_p: 0.9,
        // You can add other model parameters here
      },
    }),
  });

  console.log("Status:", res.status);
  if (!res.ok) {
    const errorText = await res.text();
    console.error("Ollama error:", errorText);
    throw new Error(`Ollama API error: ${res.status} ${errorText}`);
  }

  const reader = res.body?.getReader();
  if (!reader) {
    throw new Error("Response body reader could not be created");
  }

  const decoder = new TextDecoder("utf-8");

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });

      for (const line of chunk.split("\n")) {
        if (!line) continue;

        try {
          const json = JSON.parse(line);

          if (json.response) {
            onToken(json.response);
          }

          // If this is the final message, break the loop
          if (json.done) {
            break;
          }
        } catch (e) {
          console.log("Error parsing line:", e);
          // Continue with other lines even if one fails
        }
      }
    }
  } catch (error) {
    console.error("Stream reading error:", error);
    throw error;
  } finally {
    reader.releaseLock();
  }
}
