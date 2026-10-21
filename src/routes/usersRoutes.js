import { Router } from "express";
import { celebrate } from "celebrate";
import { usersController } from "../controllers/index.js";
import { getTravellerProfileSchema } from "../validations/userValidation.js";
import { ctrlWrapper } from "../middlewares/ctrlWrapper.js";

const router = Router();

router.get(
  "/:id",
  celebrate(getTravellerProfileSchema),
  ctrlWrapper(usersController.getTravellerProfile),
);

export default router;