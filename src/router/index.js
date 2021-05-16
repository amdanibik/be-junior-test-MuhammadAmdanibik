const express = require("express");
const router = express.Router();
const cast = require("./cast");
const movie = require("./movie");
router.use("/casts", cast);
router.use("/movies", movie);

module.exports = router;
