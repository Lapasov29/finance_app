import {createUserService, deleteService, getUserService, updateService} from "../../../common/service/user/user.service.js"
import jwt from "../../../common/utils/jwt.js"

export async function userCreateHandler(request, response){
    try {
        const data = request.body
        const res = await createUserService(data)
        const token = jwt.sign(data)
        return response.json({
            status: 200,
            message: "Ok",
            token,
            data: res
        })
    } catch (error) {
        response.json({
            status: 400,
            message: error.message
        })
    }
}

export async function userGetHandler(request, response){
    try {
        const {_id} = request.params
        let user = await getUserService(_id)
        return response.json({
            status: 200,
            data: user
        })
    } catch (error) {
        response.json({
            status: 400,
            message: error.message
        })
    }
}

export async function userUpdateHandler(request, response){
    try {
        const {_id} = request.body
        console.log(request.body);
        await updateService(_id, request.body)
        return response.json({
            status: 200,
            data: _id
        })
    } catch (error) {
        response.json({
            status: 400,
            message: error.message
        })
    }
}

export async function userDeleteHandler(request, response){
    try { 
        const {_id} = request.params
        await deleteService(_id)
        return response.json({
            status: 200,
            data: _id
        })
    } catch (error) {
        response.json({
            status: 400,
            message: error.message
        })
    }
}