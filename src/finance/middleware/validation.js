import userValidationSchema from "../../common/validation/user/user.validation.js";
import cashboxValidationSchema from "../../common/validation/cashbox/cashbox.validation.js";


export async function userValidation(request, response, next){
    try {
        const value = await userValidationSchema.validateAsync(request.body);
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

export async function cashboxValidation(request, response, next){
    try {
        const value = await cashboxValidationSchema.validateAsync(request.body);
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