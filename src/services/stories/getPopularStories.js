import { Story } from "../../models/index.js";

export const getPopularStoriesService = async (query) => {
  const page = parseInt(query.page, 10) || 1;
  const limit = parseInt(query.limit, 10) || 3;
  const skip = (page - 1) * limit;

  const [totalItems, stories] = await Promise.all([
    Story.countDocuments(),
    Story.find()
      .sort({ favoriteCount: -1, _id: -1 })
      .skip(skip)
      .limit(limit)
      .populate("category", "name")
      .populate("ownerId", "name avatarUrl"),
  ]);

  return {
    stories,
    page,
    perPage: limit,
    totalItems,
    hasNextPage: skip + stories.length < totalItems,
  };
};
