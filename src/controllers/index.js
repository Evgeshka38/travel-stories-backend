import { getCategories } from "./categories/getCategories.js";
import { getTravellerProfile } from "./users/userController.js";
import { getAllUsers } from "./users/userController.js";
import { getPopularStories } from "./stories/getPopularStories.js";

export const categoriesController = {
  getCategories,
};

export const usersController = {
  getTravellerProfile,
  getAllUsers,
};

export const storiesController = {
  getPopularStories,
};
