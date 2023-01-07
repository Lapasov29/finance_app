import {createUserService} from "../../../common/service/user/user.service.js"

export async function userCreateHandler(request, response){
    try {
        const data = request.body
        const res = await createUserService(data)
        return response.json({
            status: 200,
            message: "Ok",
            data: res
        })
    } catch (error) {
        response.json({
            status: 400,
            message: error.message
        })
    }
}