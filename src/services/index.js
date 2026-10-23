import { getCategories } from "./categories/getCategories.js";
import { getStories } from "./stories/getStories.js";
import { createStory } from "./stories/createStory.js";
import { updateStory } from "./stories/updateStory.js";
import { createSession } from "./auth/createSession.js";
import { setSessionCookies } from "./auth/setSessionCookies.js";
import { clearSessionCookies } from "./auth/clearSessionCookies.js";

export const categoriesService = {
  getCategories,
};

export const storiesService = {
  getStories,
  createStory,
  updateStory,
};

export const authService = {
  createSession,
  setSessionCookies,
  clearSessionCookies,
};