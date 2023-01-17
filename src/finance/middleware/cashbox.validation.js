import cashboxValidationSchema from "../../common/validation/cashbox/cashbox.validation.js";

export async function cashboxValidation(request, response, next) {
  try {
    const value = await cashboxValidationSchema.validateAsync(request.body);
    console.log(value);
    next();
  } catch (err) {
    response.json({
      status: 404,
      message: err.message,
    });
  }
}
