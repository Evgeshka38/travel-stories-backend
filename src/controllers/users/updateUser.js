import { updateUserService } from '../../services/users/updateUser.js';

export const updateUser = async (req, res) => {
  const { name, email, description } = req.body;

  const updateData = { name, email, description };

  Object.keys(updateData).forEach(key => {
    if (updateData[key] === undefined) {
      delete updateData[key];
    }
  });

  const user = await updateUserService(req.user._id, updateData);

  if (!user) {
    return res.status(404).json({
      status: 404,
      message: 'User not found',
    });
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully updated user profile',
    data: user,
  });
};
