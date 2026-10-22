import { Router } from "express";
import { celebrate } from "celebrate";
import { usersController } from "../controllers/index.js";
import { getTravellerProfileSchema } from "../validations/userValidation.js";
import { ctrlWrapper } from "../utils/index.js";
import { getAllUsersSchema } from "../validations/userValidation.js"

const router = Router();

router.get(
  "/:id",
  celebrate(getTravellerProfileSchema),
  ctrlWrapper(usersController.getTravellerProfile),
);

router.get(
  "/", 
  celebrate(getAllUsersSchema), 
  ctrlWrapper(usersController.getAllUsers),
);

export default router;
