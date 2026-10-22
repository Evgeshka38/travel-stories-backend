import { Schema, model } from "mongoose";

const storySchema = new Schema(
  {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 80,
    },
    article: {
      type: String,
      required: true,
      maxLength: 2500,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    favoriteCount: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

storySchema.index({ category: 1, date: -1 });

export const Story = model("Story", storySchema);