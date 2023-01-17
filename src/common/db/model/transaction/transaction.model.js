import mongoose from "mongoose";

export const TransactionSchema = new mongoose.Schema({
  type: String,
  amount: Number,
  cashboxId: mongoose.SchemaTypes.ObjectId,
  categoryId: mongoose.SchemaTypes.ObjectId,
  date: Number,
  comment: String,
});

export default mongoose.model("TRANSACTION", TransactionSchema);
