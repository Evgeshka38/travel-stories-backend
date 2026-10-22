import createHttpErrorfrom from "http-errors";
import { User } from "../../models/user"

export const getCurrentUserService = async (userId) => {
    const user = await User.findById(userId).select("nave avatarUrl description articlesAmount",);

    if (!user) {
        throw createHttpError(404, "User not Found");
    }
    return user;
}