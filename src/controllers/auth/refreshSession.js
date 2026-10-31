import createHttpError from 'http-errors';

import { Session } from '../../models/session.js';
import { authService } from '../../services/index.js';

export const refreshSession = async (req, res) => {
  const { sessionId, refreshToken } = req.cookies;

  if (!sessionId || !refreshToken) {
    throw createHttpError(401, 'Missing refresh session credentials');
  }

  const session = await Session.findOne({
    _id: sessionId,
    refreshToken,
    refreshTokenValidUntil: { $gt: new Date() },
  });

  if (!session) {
    throw createHttpError(401, 'Refresh session not found or expired');
  }

  const { userId } = session;

  await Session.deleteOne({ _id: session._id });

  const newSession = await authService.createSession(userId);
  await authService.setSessionCookies(res, newSession);

  res.status(200).json({
    status: 200,
    message: 'Successfully refreshed a session',
    data: null,
  });
};
