import { randomUUID } from "node:crypto";
import { storiesService } from "../../services/index.js";
import { saveStoryCoverToCloudinary } from "../../utils/saveStoryCoverToCloudinary.js";
import { Category } from "../../models/category.js";

export const createStory = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      status: 400,
      message: "Необхідна обкладинка історії",
    });
  }
  const categoryExists = await Category.findById(req.body.category);

  if (!categoryExists) {
    return res.status(404).json({
      status: 404,
      message: "Category not found",
    });
  }

  const coverId = randomUUID();
  const cover = await saveStoryCoverToCloudinary(req.file.buffer, coverId);

  const story = await storiesService.createStory({
    ...req.body,
    img: cover.secure_url ? cover.secure_url : null,
    ownerId: req.user._id,
    date: new Date().toISOString().slice(0, 10),
  });

  res.status(201).json({
    status: 201,
    message: "Історія успішно створена!",
    data: story,
  });
};
