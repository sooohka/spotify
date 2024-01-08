import SpotifyWebApi from "spotify-web-api-node";

export type PromiseReturnBySpotify<T extends keyof SpotifyWebApi> = Awaited<
  ReturnType<SpotifyWebApi[T]>
>;
