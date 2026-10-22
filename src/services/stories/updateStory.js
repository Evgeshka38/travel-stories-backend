import { Story } from '../../models/index.js';

export const updateStory = async (storyId, updateData, userId) => {
  const story = await Story.findOneAndUpdate(
    { _id: storyId, ownerId: userId },
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );

  return story;
};
