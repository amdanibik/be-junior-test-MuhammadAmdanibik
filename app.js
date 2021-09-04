const express = require("express");
const router = require("./routes");
const { errorHandler, errorNotFound } = require("./middlewares/errorHandler");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api/v1", router);

app.use(errorNotFound);

app.listen(port, () => console.log(`App running on port ${port}`));
