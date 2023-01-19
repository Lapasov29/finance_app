

import {
  createCategoryService,
  deleteCategoryByQueryService,
  getCategoryByQueryService,
  updateCategoryByQueryService,
} from "../../../common/service/category/category.service.js";

export async function categoryCreateHandler(request, response) {
  try {
    const data = request.body;
    const res = await createCategoryService(data);
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

export async function categoryGetHandler(request, response) {
  try {
    const get = await getCategoryByQueryService();
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

export async function categoryDeleteHandler(request, response) {
  try {
    const data = request.body;
    const deleted = await deleteCategoryByQueryService(data);
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

export async function categoryUpdateHandler(request, response) {
  try {
    const data = request.body;
    const update = await updateCategoryByQueryService(data);
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
