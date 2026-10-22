import { Joi, Segments } from 'celebrate';

const objectIdPattern = /^[0-9a-fA-F]{24}$/;

export const storyBodySchema = {
  [Segments.BODY]: Joi.object({
    img: Joi.string().uri().required(),
    title: Joi.string().trim().min(1).max(80).required(),
    article: Joi.string().trim().min(1).max(2500).required(),
    category: Joi.string().pattern(objectIdPattern).required(),
    ownerId: Joi.string().pattern(objectIdPattern).required(),
    date: Joi.string().isoDate().optional(),
  }),
};
export const updateStoryBodySchema = {
  [Segments.PARAMS]: Joi.object({
    storyId: Joi.string().pattern(objectIdPattern).required(),
  }),
  [Segments.BODY]: Joi.object({
    img: Joi.string().uri().optional(),
    title: Joi.string().trim().min(1).max(80).optional(),
    article: Joi.string().trim().min(1).max(2500),
    category: Joi.string().pattern(objectIdPattern),
    date: Joi.string().isoDate().optional(),
  }).min(1),
};
