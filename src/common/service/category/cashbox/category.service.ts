import categoryModel from '../../../db/model/category/category.model'

export async function createCategoryService(data) {
    try {
        const category = await categoryModel.create(data)
        return category
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function getCategoryService(id) {
    try {
        const category = await categoryModel.findById(id)
        return category
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function updateCategoryService(id, data) {
    try {
        console.log(id, data);
        await categoryModel.updateOne({_id: id}, {$set: data})
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function deleteCategoryService(id) {
    try {
        await categoryModel.deleteOne({_id: id})
    } catch (error) {
        console.log(error.message);
        throw error
    }
}