import { SpotifyHttpClient } from "@/common/httpClient";

export class RecommendationService {
  private instance: RecommendationService;
  constructor() {
    //@ts-ignore
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;
  }

  public async getRecommendation(acToken: string, params: string) {
    const client = new SpotifyHttpClient();
    const res =
      await client.execute<SpotifyApi.RecommendationsFromSeedsResponse>(
        `/v1/recommendations?${params}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${acToken}` },
        },
      );
    return res;
  }
}
