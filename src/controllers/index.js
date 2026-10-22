import { getCategories } from "./categories/getCategories.js";
import { getTravellerProfile } from "./users/userController.js";
import { getAllUsers } from "./users/userController.js";

export const categoriesController = {
  getCategories,
};

export const usersController = {
  getTravellerProfile,
  getAllUsers,
};
