import { SESSION_COOKIE_OPTIONS } from "../../constants/cookiesOptions.js";

export const clearSessionCookies = (res) => {
  res.clearCookie("sessionId", SESSION_COOKIE_OPTIONS);
  res.clearCookie("accessToken", SESSION_COOKIE_OPTIONS);
  res.clearCookie("refreshToken", SESSION_COOKIE_OPTIONS);
};
