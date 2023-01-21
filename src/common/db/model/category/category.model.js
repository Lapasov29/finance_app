import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema({
  name: String,
  type: String,
  color: String,
  userId: mongoose.SchemaTypes.ObjectId
});

export default mongoose.model("CATEGORY", CategorySchema);
