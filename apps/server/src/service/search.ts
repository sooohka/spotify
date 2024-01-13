import { SpotifyHttpClient } from "@/common/httpClient";

export class SearchService {
  private instance: SearchService;
  constructor() {
    //@ts-ignore
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;
  }

  public async search(acToken: string, params: string) {
    const client = new SpotifyHttpClient();
    const res = await client.execute<SpotifyApi.SearchResponse>(
      `/v1/search?${params}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${acToken}`,
        },
      },
    );
    return res;
  }
}
