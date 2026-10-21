import { Category } from "../../models/index.js";

export const getCategories = async () => {
  const categories = await Category.find();

  return categories;
};
