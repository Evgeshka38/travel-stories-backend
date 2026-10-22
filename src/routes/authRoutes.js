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
export default router;
