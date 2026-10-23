import { User, Story } from "../../models/index.js";

export const getSavedStoriesService = async (userId, query) => {
  const { page = 1, perPage = 12 } = query;

  const skip = (page - 1) * perPage;

  const user = await User.findById(userId).select("favorites");

  const favorites = user?.favorites ?? [];

  const filter = { _id: { $in: favorites } };

  const [totalItems, stories] = await Promise.all([
    Story.countDocuments(filter),
    Story.find(filter).sort({ date: -1, _id: -1 }).skip(skip).limit(perPage),
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
