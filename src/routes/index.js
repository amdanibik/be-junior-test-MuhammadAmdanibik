import express from "express";

import api from "./api";

const router = express.Router();

router.get("/healthcheck", (req, res, next) => {
  res.status(200).json({ message: "API HEALTH CHECK" });
});

router.use("/api", api);

export default router;
