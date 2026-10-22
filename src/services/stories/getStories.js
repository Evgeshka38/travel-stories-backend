import { Story } from "../../models/index.js";

export const getStories = async ({ page, perPage, category }) => {
  const skip = (page - 1) * perPage;

  const filter = {};

  if (category) {
    filter.category = category;
  }

  const [totalItems, stories] = await Promise.all([
    Story.countDocuments(filter),
    Story.find(filter)
      .populate("category", "name")
      .populate("ownerId", "name avatar avatarUrl")
      .sort({ date: -1, _id: -1 })
      .skip(skip)
      .limit(perPage),
  ]);

  const totalPages = Math.ceil(totalItems / perPage);

  return {
    stories,
    page,
    perPage,
    totalItems,
    totalPages,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };
};
