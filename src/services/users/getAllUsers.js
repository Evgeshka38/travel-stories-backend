import { User } from "../../models/index.js";

export const getAllUsersService = async (query) => {
  const { page = 1, limit = 12 } = query;

  const skip = (page - 1) * limit;

  const [totalItems, users] = await Promise.all([
    User.countDocuments(),
    User.find()
      .select("name avatarUrl description articlesAmount")
      .skip(skip)
      .limit(limit),
  ]);

  const hasNextPage = skip + users.length < totalItems;

  return {
    users,
    page: Number(page),
    perPage: Number(limit),
    totalItems,
    hasNextPage,
  };
};