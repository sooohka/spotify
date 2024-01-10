import { SpotifyHttpClient } from "@/common/httpClient";

export class UserService {
  private instance: UserService;
  constructor() {
    //@ts-ignore
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;
  }
  //@ts-ignore
  public async getMe(acToken: string) {
    const client = new SpotifyHttpClient();
    const res = await client.execute<SpotifyApi.CurrentUsersProfileResponse>(
      "/v1/me",
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
