import { getPopularStoriesService } from "../../services/stories/getPopularStories.js";

export const getPopularStories = async (req, res) => {
  const data = await getPopularStoriesService(req.query);

  res.status(200).json({
    status: 200,
    message: "Successfully found popular stories",
    data,
  });
};
