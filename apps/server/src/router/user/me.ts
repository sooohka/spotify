import { ACCESS_TOKEN_KEY } from "@/common/cookie";
import type { PromiseReturnBySpotify } from "@/types/spotify";
import axios from "axios";
import express, { Router } from "express";

export const MeRouter: Router = express.Router({ mergeParams: true });

MeRouter.get("/", async (req, res) => {
  const acToken = req.cookies[ACCESS_TOKEN_KEY];
  const { data } = await axios.get<PromiseReturnBySpotify<"getMe">>("/v1/me", {
    baseURL: process.env.SPOTIFY_URL,
    headers: {
      Authorization: `Bearer ${acToken}`,
    },
  });
  res.send(JSON.stringify(data));
});
