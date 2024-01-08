import express, { Router } from "express";
import { AuthRouter } from "./auth";
import { UserRouter } from "./user";

export const ApiRouter: Router = express.Router({ mergeParams: true });

ApiRouter.get("/", (_, res) => {
  res.send("ok");
});
ApiRouter.use("/auth", AuthRouter);
ApiRouter.use("/user", UserRouter);
