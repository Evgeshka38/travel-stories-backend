import { getCategories } from "./categories/getCategories.js";
import { createStory } from "./stories/createStory.js";
import { updateStory } from "./stories/updateStory.js";
import { getTravellerProfile, getAllUsers } from "./users/userController.js";

export const categoriesController = {
  getCategories,
};

export const storiesController = {
  createStory,
  updateStory,
};

export const usersController = {
  getTravellerProfile,
  getAllUsers,
};