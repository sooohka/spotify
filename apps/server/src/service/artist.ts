import { SpotifyHttpClient } from "@/common/httpClient";

export class ArtistService {
  private instance: ArtistService;
  constructor() {
    //@ts-ignore
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;
  }

  public async getRelatedArtists(artistId: string, acToken: string) {
    const client = new SpotifyHttpClient();
    const res = await client.execute<SpotifyApi.ArtistsRelatedArtistsResponse>(
      `/v1/artists/${artistId}/related-artists`,
      { method: "GET", headers: { Authorization: `Bearer ${acToken}` } },
    );
    return res;
  }
}
