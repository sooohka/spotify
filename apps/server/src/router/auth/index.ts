import express, { Router } from "express";
import { SpotifyAuthRouter } from "./spotify";

export const AuthRouter: Router = express.Router({ mergeParams: true });

AuthRouter.use("/spotify", SpotifyAuthRouter);
