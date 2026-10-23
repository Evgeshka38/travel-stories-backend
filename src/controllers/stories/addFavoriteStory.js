import createHttpError from "http-errors";
import { Story } from "../../models/story.js";
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

  let updatedUser;

  try {
    updatedUser = await updateUserService(req.user.id, updateUserData);

    if (!updatedUser) {
      throw createHttpError(500, "Failed to update user favorites");
    }
  } catch (error) {
    try {
      const restoredStory = await storiesService.updateStory(
        storyId,
        { favoriteCount: updatedStory.favoriteCount - 1 },
        story.ownerId,
      );

      if (!restoredStory) {
        throw createHttpError(500, "Failed to restore story favorite count");
      }
    } catch {
      throw createHttpError(
        500,
        "Failed to add story to favorites and restore story favorite count",
      );
    }

    throw error;
  }

  res.status(200).json({
    user: updatedUser,
    story: updatedStory,
  });
};
