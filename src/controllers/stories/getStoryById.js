import createHttpError from "http-errors";
import { storiesService } from "../../services/index.js";

export const getStoryById = async (req, res) => {
  const { storyId } = req.params;

  const story = await storiesService.getStoryById(storyId);

  if (!story) {
    throw createHttpError(404, "Story not found");
  }

  res.status(200).json({
    status: 200,
    message: "Successfully found story",
    data: story,
  });
};
