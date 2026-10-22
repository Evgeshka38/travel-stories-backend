import { Router } from "express";
import { celebrate } from "celebrate";
import { storiesController } from "../controllers/index.js";
import {
  getStoriesSchema,
  storyBodySchema,
  updateStoryBodySchema,
  getPopularStoriesSchema,
} from "../validations/storiesValidation.js";
import { ctrlWrapper } from "../utils/index.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = Router();

router.get(
  "/",
  celebrate(getStoriesSchema),
  ctrlWrapper(storiesController.getStories),
);

router.post(
  "/",
  authenticate,
  celebrate(storyBodySchema),
  ctrlWrapper(storiesController.createStory),
);

router.patch(
  "/:storyId",
  authenticate,
  celebrate(updateStoryBodySchema),
  ctrlWrapper(storiesController.updateStory),
);

router.get(
  "/popular",
  celebrate(getPopularStoriesSchema),
  ctrlWrapper(storiesController.getPopularStories),
);

export default router;