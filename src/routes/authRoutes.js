import { Router } from "express";
import { celebrate } from "celebrate";
import { registerUserSchema } from "../validations/userValidation.js";
import { authValidation } from "../validations/index.js";
import { authController } from "../controllers/index.js";
import { registerUser } from "../controllers/auth/authController.js";
import { ctrlWrapper } from "../utils/index.js";
import { authenticate } from "../middlewares/index.js";

const router = Router();

router.post(
  "/register",
  celebrate(registerUserSchema),
  ctrlWrapper(registerUser),
);

router.post(
  "/login",
  celebrate(authValidation.loginUserSchema),
  ctrlWrapper(authController.loginUser),
);

router.post(
  "/logout",
  authenticate,
  ctrlWrapper(authController.logoutUser),
);

export default router;