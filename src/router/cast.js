const express = require("express");
const CastController = require("../controller/cast.controller");
const { createCast, updateCast } = require("../helper/schema.validation");
const validation = require("../middleware/validation");
const router = express.Router();

router
  .get("/", CastController.list)
  .get("/:id", CastController.castById)
  .delete("/:id", CastController.delete)
  .get("/restore/:id", CastController.restore)
  .post("/", validation(createCast), CastController.insert)
  .put("/:id", validation(updateCast), CastController.update);

module.exports = router;
