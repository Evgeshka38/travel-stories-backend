import { Session } from "../../models/index.js";
import { authService } from "../../services/index.js";

export const logoutUser = async (req, res) => {
  const { sessionId } = req.cookies;

  if (sessionId) {
    await Session.deleteOne({ _id: sessionId });
  }

  authService.clearSessionCookies(res);

  res.status(204).send();
};
