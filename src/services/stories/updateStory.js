import { Story } from '../../models/index.js';

export const updateStory = async (storyId, updateData) => {
  const story = await Story.findByIdAndUpdate(storyId, updateData, {
    new: true,
    runValidators: true,
  });

  return story;
};
