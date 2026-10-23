import { Story } from "../../models/index.js";

export const getStory = async (storyId) => {
  const story = await Story.findById(storyId);
  return story;
};
