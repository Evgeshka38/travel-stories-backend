import { loginUser } from "./auth/loginUser.js";
import { logoutUser } from "./auth/logoutUser.js";
import { getCategories } from "./categories/getCategories.js";
import { createStory } from "./stories/createStory.js";
import { updateStory } from "./stories/updateStory.js";
import { getStories } from "./stories/getStories.js";
import { getPopularStories } from "./stories/getPopularStories.js";
import { getOwnStories, getSavedStories } from "./stories/storyController.js";
import { addFavoriteStory } from "./stories/addFavoriteStory.js";
import { removeFavoriteStory } from "./stories/removeFavoriteStory.js";
import { updateUser } from "./users/updateUser.js";
import {
  getTravellerProfile,
  getAllUsers,
  getCurrentUser,
} from "./users/userController.js";

export const categoriesController = {
  getCategories,
};

export const storiesController = {
  getStories,
  createStory,
  updateStory,
  getPopularStories,
  getOwnStories,
  getSavedStories,
  addFavoriteStory,
  removeFavoriteStory,
};

export const usersController = {
  getTravellerProfile,
  getAllUsers,
  getCurrentUser,
  updateUser,
};

export const authController = {
  loginUser,
  logoutUser,
};