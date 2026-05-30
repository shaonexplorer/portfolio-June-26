import { streamText, UIMessage, convertToModelMessages } from "ai";

import { createGoogleGenerativeAI } from "@ai-sdk/google";

import { createHuggingFace } from "@ai-sdk/huggingface";

const huggingface = createHuggingFace({
  apiKey: process.env.HF_TOKEN,
});

const google = createGoogleGenerativeAI({
  // custom settings
  apiKey: process.env.GEMINI_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const demo = await convertToModelMessages(messages);

  console.log("Received messages:", demo[0]);

  try {
    const result = streamText({
      // model: google("gemini-2.5-flash"),
      model: huggingface("openai/gpt-oss-120b:groq"),

      messages: demo,
    });
    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error in chat route:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
