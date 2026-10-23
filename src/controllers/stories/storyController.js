import { getOwnStoriesService } from "../../services/stories/getOwnStories.js";
import { getSavedStoriesService } from "../../services/stories/getSavedStories.js";

export const getOwnStories = async (req, res) => {
  const data = await getOwnStoriesService(req.user._id, req.query);

  res.status(200).json({
    status: 200,
    message: "Successfully found own stories",
    data,
  });
};

export const getSavedStories = async (req, res) => {
  const data = await getSavedStoriesService(req.user._id, req.query);

  res.status(200).json({
    status: 200,
    message: "Successfully found saved stories",
    data,
  });
};
