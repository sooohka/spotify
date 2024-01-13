import express, { Router } from "express";
import { AuthRouter } from "./auth";
import { UserRouter } from "./user";
import { SearchRouter } from "./search";
import { GenreRouter } from "./genre";
import { ArtistRouter } from "./artist";
import { RecommendationRouter } from "./recommendation";

export const ApiRouter: Router = express.Router({ mergeParams: true });

ApiRouter.get("/", (_, res) => {
  res.send("ok");
});
ApiRouter.use("/auth", AuthRouter);
ApiRouter.use("/user", UserRouter);
ApiRouter.use("/search", SearchRouter);
ApiRouter.use("/genre", GenreRouter);
ApiRouter.use("/artist", ArtistRouter);
ApiRouter.use("/recommendation", RecommendationRouter);
