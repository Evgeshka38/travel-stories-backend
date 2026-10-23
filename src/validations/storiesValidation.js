import { Joi, Segments } from "celebrate";
import { isValidObjectId } from "mongoose";

const objectIdPattern = /^[0-9a-fA-F]{24}$/;

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

export const getOwnStoriesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(1).max(50).default(12),
  }),
};

export const getPopularStoriesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(1).max(12).default(3),
  }),
};

export const storyBodySchema = {
  [Segments.BODY]: Joi.object({
    img: Joi.string().uri().required(),
    title: Joi.string().trim().min(1).max(80).required(),
    article: Joi.string().trim().min(1).max(2500).required(),
    category: Joi.string().pattern(objectIdPattern).required(),
    date: Joi.string().isoDate().required(),
  }),
};

export const updateStoryBodySchema = {
  [Segments.PARAMS]: Joi.object({
    storyId: Joi.string().pattern(objectIdPattern).required(),
  }),
  [Segments.BODY]: Joi.object({
    img: Joi.string().uri().optional(),
    title: Joi.string().trim().min(1).max(80).optional(),
    article: Joi.string().trim().min(1).max(2500).optional(),
    category: Joi.string().pattern(objectIdPattern),
    date: Joi.string().isoDate().optional(),
  }).min(1),
};

export const storyIdSchema = {
  [Segments.PARAMS]: Joi.object({
    storyId: Joi.string().hex().length(24).required(),
  }),
};
