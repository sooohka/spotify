import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/common/cookie";
import axios from "axios";
import express, { Router } from "express";

export const SpotifyAuthRouter: Router = express.Router({ mergeParams: true });
type TokenResponse = {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
};

SpotifyAuthRouter.get("/", (req, res) => {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: "ed6d4b75963044a0aadbc0527fa426a3", // process.env.SPOTIFY_CLIENT_ID,
    scope: "user-read-private user-read-email",
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
  });
  const url = `https://accounts.spotify.com/authorize?${params.toString()}`;

  res.redirect(307, url);
});

SpotifyAuthRouter.get("/callback", async (req, res) => {
  const code = req.query.code as string;
  const error = req.query.error as string;

  if (error || !code) {
    const res = new Response(JSON.stringify({ error }), { status: 403 });
    return res;
  }

  const url = `https://accounts.spotify.com/api/token`;

  const params = new URLSearchParams();
  params.append("code", code);
  params.append("redirect_uri", process.env.SPOTIFY_REDIRECT_URI);
  params.append("grant_type", "authorization_code");

  const BasicToken = `Basic ${Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
    "utf-8",
  ).toString("base64")}`;

  const { data } = await axios.post<TokenResponse>(url, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: BasicToken,
    },
  });

  res.cookie(ACCESS_TOKEN_KEY, data.access_token, {
    maxAge: data.expires_in * 1000,
    path: "/",
    httpOnly: true,
  });
  res.cookie(REFRESH_TOKEN_KEY, data.refresh_token, {
    maxAge: 2628000 * 1000,
    path: "/",
    httpOnly: true,
  });
  res.redirect(process.env.WEB_CLIENT_URL);
});
