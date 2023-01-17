import createModel from "../../../common/db/model/category/category.model.js"

export async function createCategoryService(data) {
    try {
        const cashbox = await createModel.create(data)
        return cashbox
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

    export async function getCategoryService(id) {
    try {
        const cashbox = await createModel.findById(id)
        return cashbox
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function updateCategoryService(id, data) {
    try {
        console.log(id, data);
        await createModel.updateOne({_id: id}, {$set: data})
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function deleteCategoryService(id) {
    try {
        await createModel.deleteOne({_id: id})
    } catch (error) {
        console.log(error.message);
        throw error
    }
}