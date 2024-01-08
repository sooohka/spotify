import { z } from "zod";

export const ENV = z.object({
  port: z.string().default("3000"),
  SPOTIFY_CLIENT_ID: z.string(),
  SPOTIFY_CLIENT_SECRET: z.string(),
  SPOTIFY_REDIRECT_URI: z.string(),
  SPOTIFY_URL: z.string(),
  WEB_CLIENT_URL: z.string(),
  LOG_LEVEL: z.union([
    z.literal("error"),
    z.literal("warn"),
    z.literal("info"),
    z.literal("http"),
    z.literal("verbose"),
    z.literal("debug"),
    z.literal("silly"),
  ]),
});

export type envType = z.infer<typeof ENV>;
