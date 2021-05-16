const express = require("express");
const MovieController = require("../controller/movie.controller");
const router = express.Router();

router
  .get("/", MovieController.list)

module.exports = router;
