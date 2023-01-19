import transactionModel from "../../db/model/transaction/transaction.model.js";

export async function createTransactionService(data) {
  try {
    const create = await transactionModel.create(data);
    return create;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getTransactionByQueryService(query = {}) {
  try {
    const get = await transactionModel.find(query, { __v: 0 });
    return get;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteTransactionByQueryService(id) {
  try {
    const deleted = await transactionModel.deleteOne({_id: id});
    return deleted;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function updateTransactionByQueryService(query) {
  try {
    const updated = await transactionModel.updateOne(query);
    return updated;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
