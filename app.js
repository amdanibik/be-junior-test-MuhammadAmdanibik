const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

// include routes
const castRoutes = require("./routes/castRoutes");
const movieRoutes = require("./routes/movieRoutes");
const movie_castRoutes = require("./routes/movie_castRoutes");

// morgan untuk melihat status pada comment cli
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

// bodyparser untuk mengirimkan data api
app.use(bodyParser.json());

// gunakan routes
app.use("/cast", castRoutes);
app.use("/movie", movieRoutes);
app.use("/movie_cast", movie_castRoutes);

// menggunakan handling error
app.use((req, res, next) => {
  const error = new Error("Tidak Ditemukan");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
