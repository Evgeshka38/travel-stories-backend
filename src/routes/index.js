import { Router } from "express";

import authRoutes from "./authRoutes.js";
import usersRoutes from "./usersRoutes.js";
import storiesRoutes from "./storiesRoutes.js";
import categoriesRoutes from "./categoriesRoutes.js";

const router = Router();

router.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Travel Stories API is running",
  });
});

router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/stories", storiesRoutes);
router.use("/categories", categoriesRoutes);

export default router;
