import { Router } from "express";
import { celebrate } from "celebrate";
import { storiesController } from "../controllers/index.js";
import {
  getStoriesSchema,
  getOwnStoriesSchema,
  storyBodySchema,
  updateStoryBodySchema,
  getPopularStoriesSchema,
  storyIdSchema,
} from "../validations/storiesValidation.js";
import { ctrlWrapper } from "../utils/index.js";
import { authenticate } from "../middlewares/authenticate.js";
import { addFavoriteStory } from "../controllers/stories/addFavoriteStory.js";
import { removeFavoriteStory } from "../controllers/stories/removeFavoriteStory.js";

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
  "/saved",
  authenticate,
  celebrate(getOwnStoriesSchema),
  ctrlWrapper(storiesController.getSavedStories),
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
  celebrate(storyIdSchema),
  ctrlWrapper(addFavoriteStory),
);

router.patch(
  "/favorite/remove/:storyId",
  authenticate,
  celebrate(storyIdSchema),
  ctrlWrapper(removeFavoriteStory),
);

export default router;
