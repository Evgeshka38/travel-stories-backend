import { Story } from "../../models/index.js";

export const getPopularStoriesService = async (query) => {
  const page = parseInt(query.page, 10) || 1;
  const perPage = parseInt(query.perPage, 10) || 3;
  const skip = (page - 1) * perPage;

  const [totalItems, stories] = await Promise.all([
    Story.countDocuments(),
    Story.find()
      .sort({ favoriteCount: -1, _id: -1 })
      .skip(skip)
      .limit(perPage)
      .populate("category", "name")
      .populate("ownerId", "name avatarUrl"),
  ]);

  return {
    stories,
    page,
    perPage,
    totalItems,
    hasNextPage: skip + stories.length < totalItems,
  };
};
