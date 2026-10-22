import { getCategories } from "./categories/getCategories.js";
import { getStories } from "./stories/getStories.js";

import { createSession } from "./auth/createSession.js";
import { setSessionCookies } from "./auth/setSessionCookies.js";

export const categoriesService = {
  getCategories,
};

export const storiesService = {
  getStories,
};

export const authService = {
  createSession,
  setSessionCookies,
};
