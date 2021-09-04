const express = require("express");
const router = express.Router();

const db = require("../config/database/database");
const controller = require("../controller/index");
router.get("/", controller.movie_cast.getAll);
router.get("/:id", controller.movie_cast.getOne);
router.post("/", controller.movie_cast.post);
router.put("/:id", controller.movie_cast.put);
router.delete("/:id", controller.movie_cast.delete);

module.exports = router;
