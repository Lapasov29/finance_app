import userModel from "../../db/model/user/user.model.js";

export async function createUserService(data) {
  try {
    const create = await userModel.create(data);
    return create;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getUserByQueryService(query = {}) {
  try {
    const get = await userModel.findOne(query, { __v: 0 });
    return get;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteUserByQueryService(query) {
  try {
    const deleted = await userModel.deleteOne(query);
    return deleted;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function updateUserByQueryService(query) {
  try {
    const updated = await userModel.updateOne(query);
    return updated
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
