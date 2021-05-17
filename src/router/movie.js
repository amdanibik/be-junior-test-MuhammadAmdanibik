const express = require("express");
const MovieController = require("../controller/movieController");
const router = express.Router();
const { createMovie } = require("../helper/schemaValidation");
const validation = require("../middleware/validation");

router
  .get("/", MovieController.list)
  .delete("/:id", MovieController.delete)
  .get("/:id", MovieController.getById)
  .put("/:id", MovieController.update)
  .post("/", validation(createMovie), MovieController.insert)

module.exports = router;
