import categoryValidationSchema from "../../common/validation/category/category.validation.js";

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
