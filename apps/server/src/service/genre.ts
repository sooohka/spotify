import { SpotifyHttpClient } from "@/common/httpClient";

export class GenreService {
  private instance: GenreService;
  constructor() {
    //@ts-ignore
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;
  }

  public async getGenres(acToken: string) {
    const client = new SpotifyHttpClient();
    const res = await client.execute<SpotifyApi.AvailableGenreSeedsResponse>(
      `/v1/recommendations/available-genre-seeds`,
      { method: "GET", headers: { Authorization: `Bearer ${acToken}` } },
    );
    return res;
  }
}
