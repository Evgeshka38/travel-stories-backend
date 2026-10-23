import { getTravellerProfileService } from "../../services/users/getTravellerProfile.js";
import { getAllUsersService } from "../../services/users/getAllUsers.js";
import { getCurrentUserService } from "../../services/users/getCurrentUser.js";
import { saveFileToCloudinary } from "../../utils/saveFileToCloudinary.js";
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

export const getCurrentUser = async (req, res) => {
  const userId = req.user._id;
  const user = await getCurrentUserService(userId);

  res.status(200).json({
    status: 200,
    message: "Successfully found current user profile",
    data: user,
  });
};

export const updateUserAvatar = async (req, res) => {
  const { file, user } = req;

  if (!file) {
    throw createHttpError(400, "No file");
  }

  const result = await saveFileToCloudinary(file.buffer, user._id);

  const updatedUser = await updateUserAvatarService(
    user._id,
    result.secure_url,
  );

  res.status(200).json({
    status: 200,
    message: "Avatar updated successfully",
    data: {
      url: updatedUser.avatarUrl,
    },
  });
};