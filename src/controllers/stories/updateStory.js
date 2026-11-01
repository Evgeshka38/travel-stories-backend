import { randomUUID } from "node:crypto";
import { storiesService } from "../../services/index.js";
import { saveStoryCoverToCloudinary } from "../../utils/saveStoryCoverToCloudinary.js";
import { Category } from "../../models/category.js";

export const updateStory = async (req, res) => {
  const { storyId } = req.params;
  const { title, article, category } = req.body ?? {};

  const updateData = { title, article, category };

  Object.keys(updateData).forEach((key) => {
    if (updateData[key] === undefined) {
      delete updateData[key];
    }
  });

  if (Object.keys(updateData).length === 0 && !req.file) {
    return res.status(400).json({
      status: 400,
      message: "Немає даних для оновлення",
    });
  }

  if (category) {
    const categoryExists = await Category.findById(category);

    if (!categoryExists) {
      return res.status(404).json({
        status: 404,
        message: "Category not found",
      });
    }
  }

  if (req.file) {
    const coverId = randomUUID();
    const cover = await saveStoryCoverToCloudinary(req.file.buffer, coverId);
    updateData.img = cover.secure_url;
  }

  const story = await storiesService.updateStory(
    storyId,
    updateData,
    req.user._id,
  );

  if (!story) {
    return res.status(404).json({
      status: 404,
      message: "Story not found",
    });
  }

  res.status(200).json({
    status: 200,
    message: "Successfully updated a story!",
    data: story,
  });
};
