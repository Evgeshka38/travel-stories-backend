import { randomUUID } from 'node:crypto';
import { storiesService } from '../../services/index.js';
import { saveStoryCoverToCloudinary } from '../../utils/saveStoryCoverToCloudinary.js';

export const createStory = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      status: 400,
      message: 'Необхідна обкладинка історії',
    });
  }

  const coverId = randomUUID();
  const cover = await saveStoryCoverToCloudinary(req.file.buffer, coverId);

  const story = await storiesService.createStory({
    ...req.body,
    img: cover.secure_url,
    ownerId: req.user._id,
    date: new Date().toISOString().slice(0, 10),
  });

  res.status(201).json({
    status: 201,
    message: 'Історія успішно створена!',
    data: story,
  });
};
