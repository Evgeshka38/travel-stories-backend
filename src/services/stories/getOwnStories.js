import { Story } from "../../models/index.js";

export const getOwnStoriesService = async (userId, query) => {
  const { page = 1, perPage = 12 } = query;

  const skip = (page - 1) * perPage;

  const filter = { ownerId: userId };

  const [totalItems, stories] = await Promise.all([
    Story.countDocuments(filter),
    Story.find(filter)
      .populate("category", "name")
      .populate("ownerId", "name avatarUrl")
      .sort({ date: -1, _id: -1 })
      .skip(skip)
      .limit(perPage),
  ]);

  const hasNextPage = skip + stories.length < totalItems;

  return {
    stories,
    page: Number(page),
    perPage: Number(perPage),
    totalItems,
    hasNextPage,
  };
};
