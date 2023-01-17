import transactionValidationSchema from "../../common/validation/transaction/transaction.validation.js";

export async function transactionValidation(request, response, next) {
  try {
    const value = await transactionValidationSchema.validateAsync(request.body);
    console.log(value);
    next();
  } catch (err) {
    response.json({
      status: 404,
      message: err.message,
    });
  }
}
