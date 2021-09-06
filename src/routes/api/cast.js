import express from "express";

import {
  createCastHandler,
  deleteCastHandler,
  detailCastHandler,
  getCastsHandler,
  updateCastHandler,
} from "../../controllers/cast";
import validator from "../../middlewares/schemaValidator";
import { createCastSchema, updateCastSchema } from "../../schemas/cast";

const router = express.Router();

router.get("/", getCastsHandler);
router.post("/", validator(createCastSchema), createCastHandler);
router.get("/:id", detailCastHandler);
router.put("/:id", validator(updateCastSchema), updateCastHandler);
router.delete("/:id", deleteCastHandler);

export default router;
