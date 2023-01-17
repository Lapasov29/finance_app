import { Router } from "express";
import { categoryCreateHandler, categoryGetHandler,categoryUpdateHandler,categoryDeleteHandler} from "../../handler/category/category.handler.js";
import {categoryValidation} from "../../middleware/validation.js";

const route = Router()

route.post('/', categoryValidation, categoryCreateHandler)
route.get('/:_id', categoryGetHandler)
route.put('/', categoryUpdateHandler)
route.delete('/:_id', categoryDeleteHandler)

export default route