import { ACCESS_TOKEN_KEY } from "@/common/cookie";
import { UserService } from "@/service/user";
import express, { Router } from "express";

export const MeRouter: Router = express.Router({ mergeParams: true });

MeRouter.get("/", async (req, res) => {
  const acToken = req.cookies[ACCESS_TOKEN_KEY];

  const userService = new UserService();
  const data = await userService.getMe(acToken);
  res.status(200).json(data);
});
