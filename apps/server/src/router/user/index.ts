import express, { Router } from "express";
import { MeRouter } from "./me";

export const UserRouter: Router = express.Router({ mergeParams: true });

UserRouter.use("/me", MeRouter);
