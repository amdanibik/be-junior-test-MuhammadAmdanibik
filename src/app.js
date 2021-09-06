import createServer from "./server.js";
import config from "./config";
import winston from "./logger";

const startServer = () => {
  const app = createServer();

  app.listen(config.PORT, () => {
    winston.info(`Server listing at http://${config.HOST}:${config.PORT}`);
  });
};

startServer();
