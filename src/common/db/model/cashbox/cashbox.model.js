import mongoose from "mongoose";

export const CashboxSchema = new mongoose.Schema({
    name: String,
    categoryId: mongoose.SchemaTypes.ObjectId,
    balance: Number,
    isInTotal: Boolean,
    userId: mongoose.SchemaTypes.ObjectId
})

export default mongoose.model("CASHBOX", CashboxSchema)