import z from "zod";

export const searchSchema = z.object({
  q: z.string(),
  type: z.custom<string>((val) => {
    const availableTypes = [
      "album",
      "artist",
      "track",
      // "playlist",
      // "show",
      // "episode",
      // "audiobook",
    ];
    if (typeof val !== "string") return false;
    return val.split(",").every((type) => availableTypes.includes(type));
  }),
  market: z.string().optional(),
  limit: z
    .custom<string>((val) => {
      if (typeof val !== "string") return false;
      const parsedVal = parseInt(val.trim(), 10);
      if (parsedVal < 0 || parsedVal > 50) return false;
    })
    .optional(),
  offset: z
    .custom<string>((val) => {
      if (typeof val !== "string") return false;
      const parsedVal = parseInt(val.trim(), 10);
      if (parsedVal < 0 || parsedVal > 1000) return false;
    })
    .optional(),
});
