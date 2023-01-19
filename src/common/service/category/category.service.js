import categoryModel from "../../db/model/category/category.model.js";

export async function createCategoryService(data) {
  try {
    const create = await categoryModel.create(data);
    return create;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getCategoryByQueryService(query = {}) {
  try {
    const get = await categoryModel.find(query, { __v: 0 });
    return get;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteCategoryByQueryService(query) {
  try {
    const deleted = await categoryModel.deleteOne(query);
    return deleted;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function updateCategoryByQueryService(query) {
  try {
    const updated = await categoryModel.updateOne(query);
    return updated;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
