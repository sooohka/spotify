import { ACCESS_TOKEN_KEY } from "@/common/cookie";
import { SearchService } from "@/service/search";
import express, { Router } from "express";
import { searchSchema } from "schema";

export const SearchRouter: Router = express.Router({ mergeParams: true });

SearchRouter.get("/", async (req, res) => {
  const query = searchSchema.parse(req.query);
  const params = new URLSearchParams(query);

  const searchService = new SearchService();

  const fetchRes = await searchService.search(
    req.cookies[ACCESS_TOKEN_KEY],
    params.toString(),
  );

  res.status(fetchRes.status).json(fetchRes.body);
});
