import { storiesService } from '../../services/index.js';

export const updateStory = async (req, res) => {
  const { storyId } = req.params;
  const { img, title, article, category, date } = req.body;

  const updateData = { img, title, article, category, date };

  Object.keys(updateData).forEach(key => {
    if (updateData[key] === undefined) {
      delete updateData[key];
    }
  });

  const story = await storiesService.updateStory(
    storyId,
    updateData,
    req.user._id
  );

  if (!story) {
    return res.status(404).json({
      status: 404,
      message: 'Story not found',
    });
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully updated a story!',
    data: story,
  });
};
