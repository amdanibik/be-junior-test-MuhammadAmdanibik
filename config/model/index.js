const cast = require("./cast");
const movie = require("./movie");
const movie_cast = require("./movie_cast");
const model = {};

model.cast = cast;
model.movie = movie;
model.movie_cast = movie_cast;
module.exports = model;
