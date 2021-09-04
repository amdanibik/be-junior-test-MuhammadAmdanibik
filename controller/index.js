const cast = require("./cast");
const movie = require("./movie");
const movie_cast = require("./movie_cast");
const controller = {};

controller.cast = cast;
controller.movie = movie;
controller.movie_cast = movie_cast;
module.exports = controller;
