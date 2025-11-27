import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "smart-spend-ai", // Unique app ID
  name: "smart-spend-ai",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});