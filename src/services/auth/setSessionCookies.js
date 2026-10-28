import { SESSION_COOKIE_OPTIONS } from "../../constants/cookiesOptions.js";
import {
  DAY_IN_MILLISECONDS,
  MINUTE_IN_MILLISECONDS,
} from "../../constants/timeConstants.js";

export const setSessionCookies = async (res, session) => {
  res.cookie("accessToken", session.accessToken, {
    ...SESSION_COOKIE_OPTIONS,
    maxAge: 15 * MINUTE_IN_MILLISECONDS,
  });

  res.cookie("refreshToken", session.refreshToken, {
    ...SESSION_COOKIE_OPTIONS,
    maxAge: DAY_IN_MILLISECONDS,
  });

  res.cookie("sessionId", session._id, {
    ...SESSION_COOKIE_OPTIONS,
    maxAge: DAY_IN_MILLISECONDS,
  });
};
