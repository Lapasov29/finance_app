import transactionModel from "../../db/model/transaction/transaction.model.js";

export async function getTransactionByQueryService(query = {}){
    try {
        const transaction = await transactionModel.findOne(query, {__v: 0})
        return transaction
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function createTransactionService(data) {
    try {
        const transaction = await transactionModel.create(data)
        return transaction
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function updateTransactionService(query) {
    try {
        const transaction = await transactionModel.updateOne(query)
        return transaction
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function deleteTransactionService(query) {
    try {
        const transaction = await transactionModel.deleteOne(query)
        return transaction
    } catch (error) {
        console.log(error.message);
        throw error
    }
}