import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({});

export const Session = mongoose.model("Session", sessionSchema);
