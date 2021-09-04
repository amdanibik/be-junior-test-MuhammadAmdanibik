const express = require("express");
const router = express.Router();

const db = require("../config/database/database");

const controller = require("../controller/index");
router.get("/", controller.cast.getAll);
router.get("/:id", controller.cast.getOne);
router.post("/", controller.cast.post);
router.put("/:id", controller.cast.put);
router.delete("/:id", controller.cast.delete);

module.exports = router;
