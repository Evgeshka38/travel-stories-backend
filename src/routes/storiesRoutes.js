import { Router } from 'express';

import { storiesController } from '../controllers/index.js';
import { ctrlWrapper } from '../utils/index.js';
import { celebrate } from 'celebrate';
import {
  storyBodySchema,
  updateStoryBodySchema,
} from '../validations/storyValidation.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();
router.post(
  '/',
  authenticate,
  celebrate(storyBodySchema),
  ctrlWrapper(storiesController.createStory)
);
router.patch(
  '/:storyId',
  authenticate,
  celebrate(updateStoryBodySchema),
  ctrlWrapper(storiesController.updateStory)
);

export default router;
