import { storiesService } from '../../services/index.js';

export const createStory = async (req, res) => {
  const story = await storiesService.createStory(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a story!',
    data: story,
  });
};
