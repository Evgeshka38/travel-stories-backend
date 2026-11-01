import { Joi, Segments } from "celebrate";
import { noCyrillicRegex } from "../constants/validationConstants.js";

export const loginUserSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string()
      .trim()
      .lowercase()
      .pattern(noCyrillicRegex)
      .email()
      .max(64)
      .required()
      .messages({
        "string.pattern.base": "Cyrillic characters are not allowed",
      }),
    password: Joi.string().min(8).max(128).required(),
  }),
};
