import cashboxModel from "../../db/model/cashbox/cashbox.model.js";

export async function createCashboxService(data) {

  try {
    const cashbox = await cashboxModel.create(data);
    return cashbox;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getCashboxByQueryService(query = {}) {
  try {
    const get = await cashboxModel.find(query, { __v: 0 });
    return get;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteCashboxByQueryService(query) {
  try {
    const deleted = await cashboxModel.deleteOne(query);
    return deleted;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function updateCashboxByQueryService(query) {
  try {
    const updated = await cashboxModel.updateOne(query);
    return updated;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
