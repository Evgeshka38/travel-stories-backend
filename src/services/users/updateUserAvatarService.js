import { User } from "../../models/user.js";

export const updateUserAvatarService = async (userId, avatarUrl) => {
  return User.findOneAndUpdate(
    { _id: userId },
    { avatarUrl },
    { returnDocument: "after" },
  );
};
