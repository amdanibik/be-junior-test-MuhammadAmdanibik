import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import errorHandler from "./middlewares/errorHandler";
import router from "./routes";
import winston from "./logger";
import HttpException from "./utils/httpException";

export default function createServer() {
  const app = express();

  app.use(morgan("tiny", { stream: winston.stream }));
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // router
  app.use(router);

  // 404 error
  app.get("*", (req, res, next) => {
    const err = new HttpException(404, "Endpoint Not Found");
    next(err);
  });

  // error handler
  app.use(errorHandler);

  return app;
}
