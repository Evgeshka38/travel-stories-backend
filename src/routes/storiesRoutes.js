import { Router } from "express";
import { celebrate } from "celebrate";
import { storiesController } from "../controllers/index.js";
import { getOwnStoriesSchema } from "../validations/storyValidation.js";
import { authenticate } from "../middlewares/authenticate.js";
import { ctrlWrapper } from "../utils/index.js";

const router = Router();

// мій /own має бути вище за /:storyId (щоб динамічний маршрут його не перехопив)
router.get(
  "/own",
  authenticate,
  celebrate(getOwnStoriesSchema),
  ctrlWrapper(storiesController.getOwnStories),
);

export default router;
