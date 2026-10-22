import { getTravellerProfileService } from "../../services/users/getTravellerProfile.js";
import { getAllUsersService } from "../../services/users/getAllUsers.js";
import { getCurrentUserService } from "../../services/users/getCurrentUser.js";

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
    message: "Succesfully found current user profile",
    data: user,
  });
};