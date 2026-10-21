import { categoriesService } from "../../services/index.js";

export const getCategories = async (req, res) => {
  const categories = await categoriesService.getCategories();

  res.status(200).json({
    status: 200,
    message: "Successfully found categories!",
    data: categories,
  });
};
