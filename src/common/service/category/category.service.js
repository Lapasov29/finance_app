import categoryModel from "../../db/model/category/category.model.js";

const defaultCategory = [
  { 
    name: "Eating",
    type: "expanse",
    color: "yellow",
    userId: null
  },
  { 
    name: "Home",
    type: "expanse",
    color: "white",
    userId: null
  },
  { 
    name: "Car",
    type: "expanse",
    color: "Black",
    userId: null
  },
  { 
    name: "Salary",
    type: "income",
    color: "green",
    userId: null
  },
  { 
    name: "Gift",
    type: "income",
    color: "grey",
    userId: null
  },
  { 
    name: "Bussiness",
    type: "income",
    color: "blue",
    userId: null
  }
]

export async function createCategoryService(data) {
  try {
    const create = await categoryModel.create(data);
    return create;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getCategoryByQueryService(id) {
  try {
    const query = {
      $or: [
        {userId: id},
        {userId: null}
      ]
    }
    let categories = await categoryModel.find(query, { __v: 0 });
    if(!categories.length){
      await categoryModel.create(defaultCategory)
      categories = await categoryModel.find(query, { __v: 0 });  
    }
    return categories;
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
