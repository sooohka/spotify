export class SpotifyHttpClient {
  _instance: SpotifyHttpClient;
  constructor() {
    //@ts-ignore
    if (this._instance) {
      return this._instance;
    }
    this._instance = new SpotifyHttpClient();
  }
  private _getDefaultHeader() {
    const headers = new Headers();

    return headers;
  }
  public async get(url: string, req: RequestInit) {
    const headers = new Headers(this._getDefaultHeader());
    const res = await fetch(url, { method: "GET", headers, ...req });
    const json = await res.json();
    return json;
  }
}
