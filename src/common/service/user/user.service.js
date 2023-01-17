import userModel from "../../db/model/user/user.model.js";
import sha256 from "sha256";

export async function createUserService(data) {
    try {
        data.password=sha256(data.password)
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

export async function loginService(data){
    try {
        let password=sha256(data.password)
        const login = await userModel.findOne({password:password,email:data.email})
        return login
    } catch (error) {
        console.log(error.message);
        throw error
    }
}