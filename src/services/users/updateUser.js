import createHttpError from 'http-errors';
import { User } from '../../models/user.js';

export const updateUserService = async (userId, updateData) => {
  if (updateData.email) {
    const existingUser = await User.findOne({
      email: updateData.email,
      _id: { $ne: userId },
    });

    if (existingUser) {
      throw createHttpError(409, 'Email is already in use');
    }
  }

  try {
    const user = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true,
    });

    return user;
  } catch (error) {
    if (error.code === 11000 && error.keyPattern?.email) {
      throw createHttpError(409, 'Email is already in use');
    }

    throw error;
  }
};
