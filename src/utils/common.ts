// Function to remove <think> tags from reseponse
export const removeThinkTags = (text: string) => {
  return text.replace(/<think>.*?<\/think>/gs, "").trim();
};
