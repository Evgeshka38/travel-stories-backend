import { getCategories } from "./categories/getCategories.js";
import { getStories } from "./stories/getStories.js";
import { createStory } from "./stories/createStory.js";
import { updateStory } from "./stories/updateStory.js";
import { createSession } from "./auth/createSession.js";
import { setSessionCookies } from "./auth/setSessionCookies.js";
import { getStory } from "./stories/getStory.js";
import { updateUserService } from "./users/updateUser.js";
import { getTravellerProfileService } from "./users/getTravellerProfile.js";
import { getAllUsersService } from "./users/getAllUsers.js";
import { clearSessionCookies } from "./auth/clearSessionCookies.js";

export const categoriesService = {
  getCategories,
};

export const storiesService = {
  getStories,
  createStory,
  updateStory,
  getStory,
};

export const authService = {
  createSession,
  setSessionCookies,
  clearSessionCookies,
};

export const usersService = {
  getAllUsersService,
  getTravellerProfileService,
  updateUserService,
};
