import { AxiosError } from "axios";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { ENV } from "./env";
import { MyError } from "./modules/error";
import { logger } from "./modules/logger";
import { ApiRouter } from "./router";

dotenv.config();

async function validate() {
  try {
    ENV.parse(process.env);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    logger.error(e.message);
    process.exit(1);
  }
}

await validate();

const app = express();
const port = 4000;

app.use(cors({ origin: process.env.WEB_CLIENT_URL, credentials: true }));
app.use(cookieParser());

app.use("/api", ApiRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof MyError) {
    logger.error(error.toString());

    res.status(error.status).send(error.message);
  } else if (error instanceof AxiosError) {
    const sporityError = error.response?.data?.error as SpotifyApi.ErrorObject;
    const status = sporityError?.status ?? error.status ?? 500;
    const message =
      sporityError?.message ?? error.message ?? "Something went wrong";
    logger.error(error.toString());
    res.status(status).send(message);
  } else {
    logger.error(error.toString());
    res.status(500).send(error.message);
  }
  next();
});

app.listen(port, () => {
  logger.info(`server is running on port ${port}`);
});
