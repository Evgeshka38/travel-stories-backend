import { Joi, Segments } from "celebrate";
import { isValidObjectId } from "mongoose";

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value)
    ? helpers.message({ custom: "Invalid category id format" })
    : value;
};

export const getStoriesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(1).max(20).default(9),
    category: Joi.string().custom(objectIdValidator),
  }),
};
