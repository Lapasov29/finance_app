import {createCategoryService} from "../../../common/service/category/cashbox/category.service.js"

export async function categoryCreateHandler(request, response){
    try {
        const data = request.body
        const res = await createCategoryService(data)
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