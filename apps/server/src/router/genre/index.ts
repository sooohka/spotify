import { ACCESS_TOKEN_KEY } from "@/common/cookie";
import { GenreService } from "@/service/genre";
import express, { Router } from "express";

export const GenreRouter: Router = express.Router({ mergeParams: true });

GenreRouter.get("/", async (req, res) => {
  const acToken = req.cookies[ACCESS_TOKEN_KEY];

  const genreService = new GenreService();
  const data = await genreService.getGenres(acToken);
  res.status(200).json(data);
});
