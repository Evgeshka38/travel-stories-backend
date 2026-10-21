import { Router } from 'express';

import { storiesController } from '../controllers/index.js';
import { ctrlWrapper } from '../utils/index.js';

const router = Router();
router.post('/', ctrlWrapper(storiesController.createStory));
router.patch('/:storyId', ctrlWrapper(storiesController.updateStory));

export default router;
