import { Router } from "express";

import { categoriesController } from "../controllers/index.js";
import { ctrlWrapper } from "../utils/index.js";

const router = Router();

router.get("/", ctrlWrapper(categoriesController.getCategories));

export default router;
