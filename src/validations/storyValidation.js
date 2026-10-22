import { Joi, Segments } from "celebrate";

export const getPopularStoriesSchema = {
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(1).max(12).default(3),
  }),
};
