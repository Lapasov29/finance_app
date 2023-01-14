import {createCashboxService, deleteCashboxService, getCashboxService, updateCashboxService} from "../../../common/service/cashbox/cashbox.service.js"

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

export async function cashboxGetHandler(request, response){
    try {
        const {_id} = request.params
        let cashbox = await getCashboxService(_id)
        return response.json({
            status: 200,
            data: cashbox
        })
    } catch (error) {
        response.json({
            status: 400,
            message: error.message
        })
    }
}

export async function cashboxUpdateHandler(request, response){
    try {
        const {_id} = request.body
        console.log(request.body);
        await updateCashboxService(_id, request.body)
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

export async function cashboxDeleteHandler(request, response){
    try { 
        const {_id} = request.params
        await deleteCashboxService(_id)
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