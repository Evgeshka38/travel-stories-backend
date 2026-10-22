import { Router } from 'express';

import { storiesController } from '../controllers/index.js';
import { ctrlWrapper } from '../utils/index.js';
import { celebrate } from 'celebrate';
import {
  storyBodySchema,
  updateStoryBodySchema,
} from '../validations/storyValidation.js';

const router = Router();
router.post(
  '/',
  celebrate(storyBodySchema),
  ctrlWrapper(storiesController.createStory)
);
router.patch(
  '/:storyId',
  celebrate(updateStoryBodySchema),
  ctrlWrapper(storiesController.updateStory)
);

export default router;
