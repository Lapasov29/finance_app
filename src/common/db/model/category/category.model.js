import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema({
  name: String,
  type: String,
  color: String,
});

export default mongoose.model("CATEGORY", CategorySchema);
