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