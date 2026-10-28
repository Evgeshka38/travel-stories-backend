import { Story } from "../../models/index.js";

export const getStoryById = async (storyId) => {
  const story = await Story.findById(storyId)
    .populate("category", "name")
    .populate("ownerId", "name avatarUrl");

  return story;
};
