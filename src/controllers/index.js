import { loginUser } from "./auth/loginUser.js";
import { logoutUser } from "./auth/logoutUser.js";
import { getCategories } from "./categories/getCategories.js";
import { createStory } from "./stories/createStory.js";
import { updateStory } from "./stories/updateStory.js";
import { getStories } from "./stories/getStories.js";
import { getPopularStories } from "./stories/getPopularStories.js";
import { getOwnStories } from "./stories/storyController.js";
import { updateUser } from "./users/updateUser.js";
import { getTravellerProfile, getAllUsers } from "./users/userController.js";

export const categoriesController = {
  getCategories,
};

export const storiesController = {
  getStories,
  createStory,
  updateStory,
  getPopularStories,
  getOwnStories,
};

export const usersController = {
  getTravellerProfile,
  getAllUsers,
  updateUser,
};

export const authController = {
  loginUser,
  logoutUser,
};
