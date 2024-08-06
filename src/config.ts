import dotenv from "dotenv";

dotenv.config();

const { DISCORD_TOKEN, APPLICATION_ID, OPENAI_API_KEY } = process.env;

if (!DISCORD_TOKEN || !APPLICATION_ID || !OPENAI_API_KEY)
  throw new Error("Missing environment variables");

export const config = { DISCORD_TOKEN, APPLICATION_ID, OPENAI_API_KEY };
