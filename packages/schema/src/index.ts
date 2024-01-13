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

export const idSchema = z.object({
  id: z.string(),
});

export const recommendationsSchema = z.object({
  /** The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response. Default: 20. Minimum: 1. Maximum: 100. */
  limit: z.number().optional(),
  /** An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking. Because min_*, max_* and target_* are applied to pools before relinking, the generated results may not precisely match the filters applied. Original, non-relinked tracks are available via the linked_from attribute of the relinked track response. */
  market: z.string().optional(),
  max_acousticness: z.number().optional(),
  max_danceability: z.number().optional(),
  max_duration_ms: z.number().optional(),
  max_energy: z.number().optional(),
  max_instrumentalness: z.number().optional(),
  max_key: z.number().optional(),
  max_liveness: z.number().optional(),
  max_loudness: z.number().optional(),
  max_mode: z.number().optional(),
  max_popularity: z.number().optional(),
  max_speechiness: z.number().optional(),
  max_tempo: z.number().optional(),
  max_time_signature: z.number().optional(),
  max_valence: z.number().optional(),
  min_acousticness: z.number().optional(),
  min_danceability: z.number().optional(),
  min_duration_ms: z.number().optional(),
  min_energy: z.number().optional(),
  min_instrumentalness: z.number().optional(),
  min_key: z.number().optional(),
  min_liveness: z.number().optional(),
  min_loudness: z.number().optional(),
  min_mode: z.number().optional(),
  min_popularity: z.number().optional(),
  min_speechiness: z.number().optional(),
  min_tempo: z.number().optional(),
  min_time_signature: z.number().optional(),
  min_valence: z.number().optional(),
  /** A comma separated list of Spotify IDs for seed artists. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres. */
  seed_artists: z.string().optional(),
  /** A comma separated list of any genres in the set of available genre seeds. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres. */
  seed_genres: z.string().optional(), // Array of strings or Comma separated string
  /** A comma separated list of Spotify IDs for a seed track. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres. */
  seed_tracks: z.string().optional(), // Array of strings or Comma separated string
  target_acousticness: z.number().optional(),
  target_danceability: z.number().optional(),
  target_duration_ms: z.number().optional(),
  target_energy: z.number().optional(),
  target_instrumentalness: z.number().optional(),
  target_key: z.number().optional(),
  target_liveness: z.number().optional(),
  target_loudness: z.number().optional(),
  target_mode: z.number().optional(),
  target_popularity: z.number().optional(),
  target_speechiness: z.number().optional(),
  target_tempo: z.number().optional(),
  target_time_signature: z.number().optional(),
  target_valence: z.number().optional(),
});
