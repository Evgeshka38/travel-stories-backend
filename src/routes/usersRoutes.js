import { Router } from 'express';
import { celebrate } from 'celebrate';
import { usersController } from '../controllers/index.js';
import {
  getTravellerProfileSchema,
  updateUserSchema,
  getAllUsersSchema,
} from '../validations/userValidation.js';
import { ctrlWrapper } from '../utils/index.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.get(
  "/me",
  authenticate,
  ctrlWrapper(usersController.getCurrentUser),
);

router.get(
  '/',
  celebrate(getAllUsersSchema),
  ctrlWrapper(usersController.getAllUsers)
);

router.patch(
  '/',
  authenticate,
  celebrate(updateUserSchema),
  ctrlWrapper(usersController.updateUser)
);

router.get(
  "/:id",
  celebrate(getTravellerProfileSchema),
  ctrlWrapper(usersController.getTravellerProfile),
);

export default router;