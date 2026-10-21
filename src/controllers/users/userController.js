import { getTravellerProfileService } from "../../services/users/getTravellerProfile.js";

export const getTravellerProfile = async (req, res) => {
  const { id } = req.params;
  const data = await getTravellerProfileService(id, req.query);

  res.status(200).json({
    status: 200,
    message: "Successfully found traveller profile and stories",
    data,
  });
};