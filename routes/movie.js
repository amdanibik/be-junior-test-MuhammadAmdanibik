const router = require("express").Router();
const movieController = require("../controllers/movieController");
router.get("/", movieController.list);
router.get("/:id", movieController.getById);
router.post("/", movieController.addMovie);
router.put("/:id", movieController.updateMovie);
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
