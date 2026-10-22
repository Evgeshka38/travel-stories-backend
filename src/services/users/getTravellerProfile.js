import createHttpError from "http-errors";
import { User } from "../../models/user.js";
import { Story } from "../../models/story.js";

export const getTravellerProfileService = async (id, query) => {
  const page = parseInt(query.page, 10) || 1;
  const limit = parseInt(query.limit, 10) || 6;
  const skip = (page - 1) * limit;

  const traveller = await User.findById(id).select(
    "name avatarUrl description articlesAmount",
  );

  if (!traveller) {
    throw createHttpError(404, "Traveller not found");
  }

  const totalStories = await Story.countDocuments({ ownerId: id });

  const stories = await Story.find({ ownerId: id })
    .skip(skip)
    .limit(limit)
    .sort({ date: -1 });

  return {
    traveller,
    stories,
    page,
    perPage: limit,
    totalItems: totalStories,
    hasNextPage: skip + stories.length < totalStories,
  };
};
