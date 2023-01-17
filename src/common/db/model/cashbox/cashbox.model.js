import mongoose from "mongoose";

export const CashboxSchema = new mongoose.Schema({
  name: String,
  categoryId: Number,
  balance: Number,
  isInTotal: Boolean,
  userId: Number,
});

export default mongoose.model("CASHBOX", CashboxSchema);
