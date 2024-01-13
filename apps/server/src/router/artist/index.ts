import { ACCESS_TOKEN_KEY } from "@/common/cookie";
import qs from "qs";
import { ArtistService } from "@/service/artist";
import express, { Router } from "express";
import { idSchema } from "schema";

export const ArtistRouter: Router = express.Router({ mergeParams: true });

ArtistRouter.get("/related-artists", async (req, res) => {
  const acToken = req.cookies[ACCESS_TOKEN_KEY];
  const params = new URLSearchParams(req.url.split("?")[1]);

  const parsedParams = idSchema.parse(qs.parse(params.toString()));

  const userService = new ArtistService();
  const data = await userService.getRelatedArtists(parsedParams.id, acToken);
  res.status(200).json(data);
});
