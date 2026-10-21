import mongoose from "mongoose";

const storySchema = new mongoose.Schema({});

export const Story = mongoose.model("Story", storySchema);
