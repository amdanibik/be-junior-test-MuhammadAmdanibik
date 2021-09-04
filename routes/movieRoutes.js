const express = require("express");
const router = express.Router();

const db = require("../config/database/database");
const controller = require("../controller/index");
router.get("/", controller.movie.getAll);
router.get("/:id", controller.movie.getOne);
router.post("/", controller.movie.post);
router.put("/:id", controller.movie.put);
router.delete("/:id", controller.movie.delete);

module.exports = router;
