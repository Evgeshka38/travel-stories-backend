import createHttpError from "http-errors";
// import { Story } from "../../models.js";
import { storiesService } from "../../services/index.js";
import { updateUserService } from "../../services/users/updateUser.js";

export const addFavoriteStory = async (req, res) => {
  const { storyId } = req.params;
  const story = await Story.findById(storyId);

  if (!story) {
    throw createHttpError(404, "Story not found");
  }

  const isInFavorites = req.user.favorites.some((id) => id.equals(storyId));

  if (isInFavorites) {
    //? throw createHttpError(400, "Story already in favorites");

    return res.status(200).json({
      user: req.user,
      story,
    });
  }

  const updateStoryData = {
    favoriteCount: story.favoriteCount + 1,
  };

  const updatedStory = await storiesService.updateStory(
    storyId,
    updateStoryData,
    story.ownerId,
  );

  if (!updatedStory)
    throw createHttpError(500, "Failed to add story to favorites");

  const updateUserData = {
    favorites: [...req.user.favorites, storyId],
  };

  const updatedUser = await updateUserService(req.user.id, updateUserData);

  if (!updatedUser)
    throw createHttpError(500, "Failed to add story to favorites");

  res.status(200).json({
    user: updatedUser,
    story: updatedStory,
  });
};
