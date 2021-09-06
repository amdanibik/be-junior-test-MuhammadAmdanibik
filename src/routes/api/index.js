import express from "express";

import movieRouter from "../api/movie";
import castRouter from "../api/cast";

const router = express.Router();

router.use("/movie", movieRouter);
router.use("/cast", castRouter);

export default router;
