import { Router } from "express";
import { celebrate } from "celebrate";

import { storiesController } from "../controllers/index.js";
import { getStoriesSchema } from "../validations/index.js";
import { ctrlWrapper } from "../utils/index.js";

const router = Router();

router.get(
  "/",
  celebrate(getStoriesSchema),
  ctrlWrapper(storiesController.getStories),
);

export default router;
