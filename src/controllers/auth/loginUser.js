import bcrypt from 'bcrypt';
import { User, Session } from '../../models/index.js';
import { authService } from '../../services/index.js';
import createHttpError from 'http-errors';

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw createHttpError(401, 'Неправильні облікові дані');

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw createHttpError(401, 'Неправильні облікові дані');

  const userId = user._id;

  await Session.deleteOne({ userId });

  const newSession = await authService.createSession(userId);
  authService.setSessionCookies(res, newSession);

  res.status(200).json({
    status: 200,
    message: 'Увійшли успішно',
    data: user,
  });
};
