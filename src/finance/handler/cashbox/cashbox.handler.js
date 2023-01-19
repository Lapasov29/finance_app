import {createCashboxService} from "../../../common/service/cashbox/cashbox.service.js"
import {
  createCashboxService,
  deleteCashboxByQueryService,
  getCashboxByQueryService,
  updateCashboxByQueryService,
} from "../../../common/service/cashbox/cashbox.service.js";

export async function cashboxCreateHandler(request, response) {
  try {
    const data = request.body;
    const res = await createCashboxService(data);
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

export async function cashboxGetHandler(request, response) {
  try {
    const get = await getCashboxByQueryService();
    return response.json({
      status: 200,
      message: "ok",
      data: get,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function cashboxDeleteHandler(request, response) {
  try {
    const data = request.body;
    const deleted = await deleteCashboxByQueryService(data);
    return response.json({
      status: 200,
      message: "ok",
      data: deleted,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function cashboxUpdateHandler(request, response) {
  try {
    const data = request.body;
    const update = await updateCashboxByQueryService(data);
    return response.json({
      status: 200,
      message: "OK",
      data: update,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}
