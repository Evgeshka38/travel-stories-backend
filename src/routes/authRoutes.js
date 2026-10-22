import { celebrate } from "celebrate";
import { Router } from "express";
import { registerUserSchema } from "../validations/userValidation.js";
import { registerUser } from "../controllers/auth/authController.js";

const router = Router();

router.post("/auth/register", celebrate(registerUserSchema), registerUser);

export default router;
