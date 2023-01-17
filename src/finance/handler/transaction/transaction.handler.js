import { createTransactionService } from "../../../common/service/transaction/transaction.service.js";
import { getTransactionByQueryService } from "../../../common/service/transaction/transaction.service.js";
import { updateTransactionService } from "../../../common/service/transaction/transaction.service.js";
import { deleteTransactionService } from "../../../common/service/transaction/transaction.service.js";



export async function transactionGetHandler(request, response) {
  try {
    const data = request.body;
    const res = await getTransactionByQueryService(data);
    return response.json({
      status: 200,
      message: "Ok",
      data: res,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function transactionCreateHandler(request, response) {
  try {
    const data = request.body;
    const res = await createTransactionService(data);
    return response.json({
      status: 200,
      message: "Ok",
      data: res,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function transactionUpdateHandler(request, response) {
  try {
    const data = request.body;
    const res = await updateTransactionService(data);
    return response.json({
      status: 200,
      message: "Ok",
      data: res,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function transactionDeleteHandler(request, response) {
  try {
    const data = request.body;
    const res = await deleteTransactionService(data);
    return response.json({
      status: 200,
      message: "Ok",
      data: res,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

