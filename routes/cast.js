const router = require("express").Router();
const castController = require("../controllers/castController");
router.get("/", castController.list);
router.get("/:id", castController.getById);
router.post("/", castController.addCast);
router.put("/:id", castController.updateCast);
router.delete("/:id", castController.deleteCast);

module.exports = router;
