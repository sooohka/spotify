import { MyError } from "@/modules/error";
import { logger } from "@/modules/logger";

export class SpotifyHttpClient {
  _instance: SpotifyHttpClient;
  constructor() {
    //@ts-ignore
    if (this._instance) {
      return this._instance;
    }
    this._instance = this;
  }
  // type PromiseReturnBySpotify<T extends keyof SpotifyWebApi> = Awaited<
  //   ReturnType<SpotifyWebApi[T]>
  // >;

  public async execute<T>(endpointExceptBase: string, init: RequestInit) {
    const res = await fetch(
      `${process.env.SPOTIFY_URL}${endpointExceptBase}`,
      init,
    );
    logger.info(
      `successfully fetched ${res.url} ${res.status} ${res.statusText}`,
    );
    if (!res.ok) {
      const json = (await res.json()) as {
        error: { status: number; message: string };
      };
      throw new MyError(json.error.status, json.error.message);
    }
    const json = (await res.json()) as T;

    return { status: res.status, statusText: res.statusText, body: json };
  }
}
