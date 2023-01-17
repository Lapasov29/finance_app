import cashboxModel from "../../db/model/cashbox/cashbox.model.js";

export async function createCashboxService(data) {
    try {
        const cashbox = await cashboxModel.create(data)
        return cashbox
    } catch (error) {
        console.log(error.message);
        throw error
    }
}