import { Joi, Segments } from "celebrate";

export const loginUserSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().max(64).required(),
    password: Joi.string().required(),
  }),
};
