const express = require("express");
const {errorHandler, errorNotFound} = require("./src/middleware/errorHandler");
const router = require("./src/router");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())
app.get("/", (req, res, next) => {
  res.json({
    success: true,
    message: "Movie - Cast Rest",
  });
});

app.use("/api/v1", router)

app.use(errorHandler)
app.use(errorNotFound)

app.listen(port, () => console.log(`app run on port : ${port}`));
