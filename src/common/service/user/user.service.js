import userModel from "../../db/model/user/user.model.js";

export async function createUserService(data) {
    try {
        const user = await userModel.create(data)
        return user
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function getUserService(id){
    try {
        const user = await userModel.findById(id)
        return user
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function updateService(id, data){
    try {
        console.log(id, data);
        await userModel.updateOne({ _id: id }, { $set: data })
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function deleteService(id){
    try {
        await userModel.deleteOne({_id: id})
    } catch (error) {
        console.log(error.message);
        throw error
    }
}