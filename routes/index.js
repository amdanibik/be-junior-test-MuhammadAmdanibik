const router = require("express").Router();
const movie = require("./movie");
const cast = require("./cast");

router.use("/movie", movie);
router.use("/cast", cast);

module.exports = router;
