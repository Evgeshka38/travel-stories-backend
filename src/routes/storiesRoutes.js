import { Router } from "express";
import { celebrate } from "celebrate";
import { storiesController } from "../controllers/index.js";
import { getPopularStoriesSchema } from "../validations/storyValidation.js";
import { ctrlWrapper } from "../utils/index.js";

const router = Router();

router.get(
  "/popular",
  celebrate(getPopularStoriesSchema),
  ctrlWrapper(storiesController.getPopularStories),
);

export default router;
