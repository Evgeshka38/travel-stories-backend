import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({});

export const Category = mongoose.model("Category", categorySchema);
