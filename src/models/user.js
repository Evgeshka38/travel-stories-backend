import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    avatarUrl: {
      type: String,
      default: 'https://ac.goit.global/fullstack/react/default-avatar.jpg',
    },
    description: {
      type: String,
      default: '',
    },
    articlesAmount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const User = model("User", userSchema);