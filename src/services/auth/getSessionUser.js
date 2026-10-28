import { Session, User } from "../../models/index.js";

export const getSessionUser = async (accessToken) => {
  if (!accessToken) {
    return null;
  }

  const session = await Session.findOne({
    accessToken,
    accessTokenValidUntil: { $gt: new Date() },
  });

  if (!session) {
    return null;
  }

  const user = await User.findById(session.userId).select(
    "name avatarUrl description articlesAmount",
  );

  return user ?? null;
};
