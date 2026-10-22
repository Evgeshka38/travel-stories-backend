import { User } from '../../models/user.js';

export const updateUserService = async (userId, updateData) => {
  const user = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
    runValidators: true,
  });
  return user;
};
