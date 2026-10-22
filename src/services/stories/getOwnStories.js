import { Story } from "../../models/index.js";

export const getOwnStoriesService = async (userId, query) => {
  const { page = 1, limit = 12 } = query;

  const skip = (page - 1) * limit;

  const filter = { ownerId: userId };

  const [totalItems, stories] = await Promise.all([
    Story.countDocuments(filter),
    Story.find(filter).skip(skip).limit(limit),
  ]);

  const hasNextPage = skip + stories.length < totalItems;

  return {
    stories,
    page: Number(page),
    perPage: Number(limit),
    totalItems,
    hasNextPage,
  };
};
