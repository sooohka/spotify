import { ACCESS_TOKEN_KEY } from "@/common/cookie";
import { RecommendationService } from "@/service/recommendation";
import express, { Router } from "express";
import { recommendationsSchema } from "schema";
import qs from "qs";

export const RecommendationRouter: Router = express.Router({
  mergeParams: true,
});

RecommendationRouter.get("/", async (req, res) => {
  const acToken = req.cookies[ACCESS_TOKEN_KEY];
  const query = recommendationsSchema.parse(req.query);

  const params = new URLSearchParams(qs.stringify(query));

  const recommendationService = new RecommendationService();

  const data = await recommendationService.getRecommendation(
    acToken,
    params.toString(),
  );
  res.status(200).json(data);
});
