import crypto from "crypto";
import {
  DAY_IN_MILLISECONDS,
  MINUTE_IN_MILLISECONDS,
} from "../../constants/timeConstants.js";
import { Session } from "../../models/session.js";

export const createSession = async (userId) => {
  const accessToken = crypto.randomUUID();
  const refreshToken = crypto.randomUUID();

  return Session.create({
    userId,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + 15 * MINUTE_IN_MILLISECONDS),
    refreshTokenValidUntil: new Date(Date.now() + DAY_IN_MILLISECONDS),
  });
}