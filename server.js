const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
  res.json({
    success: true,
    message: "Movie - Cast Rest",
  });
});

app.listen(port, () => console.log(`app run on port : ${port}`));
