import transactionModel from "../../db/model/transaction/transaction.model.js";

export async function createTransactionService(data) {
    try {
        const transaction = await transactionModel.create(data)
        return transaction
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function getTransactionService(id) {
    try {
        const transaction = await transactionModel.findById(id)
        return transaction
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function updateTransactionService(id, data) {
    try {
        console.log(id, data);
        await transactionModel.updateOne({_id: id}, {$set: data})
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function deleteTransactionService(id) {
    try {
        await transactionModel.deleteOne({_id: id})
    } catch (error) {
        console.log(error.message);
        throw error
    }
}