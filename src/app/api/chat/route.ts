import { BedrockRuntimeClient, ConverseCommand } from "@aws-sdk/client-bedrock-runtime";
import type { NextApiRequest, NextApiResponse } from "next";
import { API_CHAT } from "@/constants/routes";

export async function POST(request: NextApiRequest, response: NextApiResponse): Promise<void> {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method Not Allowed." });
  }

  const { message } = request.body as { message: string };
  if (!message) {
    return response.status(400).json({ error: "Message is required." });
  }

  const client = new BedrockRuntimeClient({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
  });

  const command = new ConverseCommand({
    inferenceConfig: { maxTokens: 512, temperature: 0.5, topP: 0.9 },
    modelId: process.env.BEDROCK_MODEL_ID as string || "amazon.titan-text-premier-v1:0",
    messages: [{ role: "user", content: [{ text: message }] }],
  });

  try {
    const reply = (await client.send(command)).output?.message?.content?.[0].text || "Terjadi kesalahan saat memproses pertanyaan Anda.";
    return response.status(200).json({ reply });
  } catch (err: unknown) {
    console.error(`❌ Error POST ${API_CHAT}: ${err}`);
    return response.status(500).json({ error: err, message: "Terjadi kesalahan saat memproses pertanyaan Anda." });
  }
}