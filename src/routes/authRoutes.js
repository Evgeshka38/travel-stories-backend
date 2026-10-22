import { celebrate } from "celebrate";
import { Router } from "express";
import { registerUserSchema } from "../validations/userValidation.js";
import { ctrlWrapper } from "../utils/index.js";
import { registerUser } from "../controllers/auth/authController.js";

const router = Router();
router.post(
  "/register",
  celebrate(registerUserSchema),
  ctrlWrapper(registerUser),
);
import { authValidation } from "../validations/index.js";
import { authController } from "../controllers/index.js";

router.post(
  "/login",
  celebrate(authValidation.loginUserSchema),
  ctrlWrapper(authController.loginUser),
);

export default router;
