import cashboxModel from '../../db/model/cashbox/cashbox.model.js'

export async function createCashboxService(data) {
    try {
        const cashbox = await cashboxModel.create(data)
        return cashbox
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

    export async function getCashboxService(id) {
    try {
        const cashbox = await cashboxModel.findById(id)
        return cashbox
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function updateCashboxService(id, data) {
    try {
        console.log(id, data);
        await cashboxModel.updateOne({_id: id}, {$set: data})
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function deleteCashboxService(id) {
    try {
        await cashboxModel.deleteOne({_id: id})
    } catch (error) {
        console.log(error.message);
        throw error
    }
}