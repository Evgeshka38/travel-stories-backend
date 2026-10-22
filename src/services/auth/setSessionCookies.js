import {
  DAY_IN_MILLISECONDS,
  MINUTE_IN_MILLISECONDS,
} from "../../constants/timeConstants.js";

export const setSessionCookies = async (res, session) => {
  res.cookie("accessToken", session.accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 15 * MINUTE_IN_MILLISECONDS,
  });

  res.cookie("refreshToken", session.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: DAY_IN_MILLISECONDS,
  });

  res.cookie("sessionId", session._id, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: DAY_IN_MILLISECONDS,
  });
};
