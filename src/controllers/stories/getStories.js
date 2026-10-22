import { storiesService } from "../../services/index.js";

export const getStories = async (req, res) => {
  const { page, perPage, category } = req.query;

  const result = await storiesService.getStories({
    page,
    perPage,
    category,
  });

  res.status(200).json({
    status: 200,
    message: "Successfully found stories!",
    data: result,
  });
};
