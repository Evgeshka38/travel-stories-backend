import { Router } from "express";
import { celebrate } from "celebrate";
import { storiesController } from "../controllers/index.js";
import {
  getStoriesSchema,
  getOwnStoriesSchema,
  storyBodySchema,
  updateStoryBodySchema,
  getPopularStoriesSchema,
} from "../validations/storiesValidation.js";
import { ctrlWrapper } from "../utils/index.js";
import { authenticate } from "../middlewares/authenticate.js";
import { addFavoriteStory } from "../controllers/stories/addFavoriteStory.js";

const router = Router();

router.get(
  "/",
  celebrate(getStoriesSchema),
  ctrlWrapper(storiesController.getStories),
);

router.get(
  "/own",
  authenticate,
  celebrate(getOwnStoriesSchema),
  ctrlWrapper(storiesController.getOwnStories),
);

router.get(
  "/popular",
  celebrate(getPopularStoriesSchema),
  ctrlWrapper(storiesController.getPopularStories),
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

router.patch(
  "/favorite/add/:storyId",
  authenticate,
  celebrate(),
  ctrlWrapper(addFavoriteStory),
);

router.patch(
  "/favorites/remove/:storyId",
  authenticate,
  celebrate(),
  ctrlWrapper(),
);

export default router;
