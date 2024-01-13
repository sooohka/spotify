import { ACCESS_TOKEN_KEY } from "@/common/cookie";
import { UserService } from "@/service/user";
import express, { Router } from "express";

export const UserRouter: Router = express.Router({ mergeParams: true });

UserRouter.get("/me", async (req, res) => {
  const acToken = req.cookies[ACCESS_TOKEN_KEY];

  const userService = new UserService();
  const data = await userService.getMe(acToken);
  res.status(200).json(data);
});
