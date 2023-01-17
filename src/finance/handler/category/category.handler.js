import {createCategoryService,getCategoryService,updateCategoryService,deleteCategoryService } from "../../../common/service/category/category.service.js";
import jwt from "../../../common/utils/jwt.js"

export async function categoryCreateHandler(request, response){
    try {
        const data = request.body
        const res = await createCategoryService(data)
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

export async function categoryGetHandler(request, response){
    try {
        const {_id} = request.params
        let user = await getCategoryService(_id)
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

export async function categoryUpdateHandler(request, response){
    try {
        const {_id} = request.body
        console.log(request.body);
        await updateCategoryService(_id, request.body)
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

export async function categoryDeleteHandler(request, response){
    try { 
        const {_id} = request.params
        await deleteCategoryService(_id)
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