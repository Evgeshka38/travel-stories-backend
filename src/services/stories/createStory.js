import { Story } from "../../models/index.js";

export const createStory = async (storyData) => {
  const story = await Story.create(storyData);
  return story;
};
