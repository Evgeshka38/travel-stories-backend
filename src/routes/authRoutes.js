import { Router } from "express";
import { celebrate } from "celebrate";
import { authValidation } from "../validations/index.js";
import { authController } from "../controllers/index.js";
import { ctrlWrapper } from "../utils/index.js";
import { authenticate } from "../middlewares/index.js";

const router = Router();

router.post(
  "/login",
  celebrate(authValidation.loginUserSchema),
  ctrlWrapper(authController.loginUser),
);

router.post("/logout", authenticate, ctrlWrapper(authController.logoutUser));

export default router;
