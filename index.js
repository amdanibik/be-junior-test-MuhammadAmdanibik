const express = require("express");

const movieController = require("./controllers/movie");
const castController = require("./controllers/cast");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 1337;

app.use("/api/movies", movieController);
app.use("/api/casts", castController);

app.listen(port, () => {
  console.log(`Listening at http:localhost:${port}`);
});
