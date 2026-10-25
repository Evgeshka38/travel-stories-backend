import { authService } from "../../services/index.js";

export const getSessionUser = async (req, res) => {
  const { accessToken } = req.cookies;

  const user = await authService.getSessionUser(accessToken);

  res.status(200).json({
    status: 200,
    message: user
      ? "Successfully found current session user"
      : "User is not authenticated",
    data: user,
  });
};
