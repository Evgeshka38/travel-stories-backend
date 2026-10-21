import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      required: false,
      default: "https://ac.goit.global/fullstack/react/default-avatar.jpg",
    },
    description: {
      type: String,
      required: false,
      trim: true,
      default: "",
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

export const User = mongoose.model("User", userSchema);
