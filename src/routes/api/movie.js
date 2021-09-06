import express from "express";

import validator from "../../middlewares/schemaValidator";
import {
  assignMovieHandler,
  createMovieHandler,
  deleteMovieHandler,
  detailMovieHandler,
  getMoviesHandler,
  updateMovieHandler,
} from "../../controllers/movie";
import { createMovieSchema, updateMovieSchema } from "../../schemas/movie";

const router = express.Router();

router.get("/", getMoviesHandler);
router.post("/", validator(createMovieSchema), createMovieHandler);
router.get("/:id", detailMovieHandler);
router.put("/:id", validator(updateMovieSchema), updateMovieHandler);
router.post("/:id/assign", assignMovieHandler);
router.delete("/:id", deleteMovieHandler);

export default router;
