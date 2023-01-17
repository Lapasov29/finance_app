import {createCashboxService} from "../../../common/service/cashbox/cashbox.service.js"

export async function cashboxCreateHandler(request, response){
    try {
        const data = request.body
        const res = await createCashboxService(data)
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