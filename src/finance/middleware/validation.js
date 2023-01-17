import {register,loginUsers} from "../../common/validation/user/user.validation.js";
import cashboxValidationSchema from "../../common/validation/cashbox/cashbox.validation.js";
import categoryValidationSchema from "../../common/validation/category/category.validation.js"

export async function userRegister(request, response, next){
    try {
        const registe = await register.validateAsync(request.body);
        console.log(44,registe);
        next()
    }
    catch (err) {
        response.json({
            status: 404,
            message: err.message
        })
    }
}


export async function usersValidation(request,response,next){
    try {
        console.log("asd");
        const validation = await loginUsers.validateAsync(request.body)
        console.log(55,validation);
        next()
    } catch (error) {
        response.json({
            status: 400,
            message: error.message
        })
        
    }
}

export async function cashboxValidation(request, response, next){
    try {
        const value = await cashboxValidationSchema.validateAsync(request.body);
        console.log(44,value);
        next()
    }
    catch (err) {
        response.json({
            status: 401,
            message: err.message
        })
    }
}



export async function categoryValidation(request, response, next){
    try {
        const value = await categoryValidationSchema.validateAsync(request.body);
        console.log(44,value);
        next()
    }
    catch (err) {
        response.json({
            status: 404,
            message: err.message
        })
    }
}