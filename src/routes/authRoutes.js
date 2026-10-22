import { Router } from "express";
import { celebrate } from "celebrate";
import { authValidation } from "../validations/index.js";
import { authController } from "../controllers/index.js";

const router = Router();

router.post(
  "/login",
  celebrate(authValidation.loginUserSchema),
  authController.loginUser,
);

export default router;
