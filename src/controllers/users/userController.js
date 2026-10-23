import { getTravellerProfileService } from "../../services/users/getTravellerProfile.js";
import { getAllUsersService } from "../../services/users/getAllUsers.js";
import { saveFileToCloudinary } from "../../utils/saveFileToCloudinary.js";
import { User } from "../../models/user.js";
import createHttpError from "http-errors";
import { updateUserAvatarService } from "../../services/users/updateUserAvatarService.js";

export const getTravellerProfile = async (req, res) => {
  const { id } = req.params;
  const data = await getTravellerProfileService(id, req.query);

  res.status(200).json({
    status: 200,
    message: "Successfully found traveller profile and stories",
    data,
  });
};

export const getAllUsers = async (req, res) => {
  const data = await getAllUsersService(req.query);

  res.status(200).json({
    status: 200,
    message: "Successfully found travellers",
    data,
  });
};

export const updateUserAvatar = async (req, res) => {
  const { file, user } = req;
  if (!req.file) {
    throw createHttpError(400, "No file");
  }
  const result = await saveFileToCloudinary(file.buffer, user._id);

  const updateUser = await updateUserAvatarService(user._id, result.secure_url);

  res.status(200).json({
    status: 200,
    message: "Avatar updated successfully",
    data: {
      url: updateUser.avatarUrl,
    },
  });
};
