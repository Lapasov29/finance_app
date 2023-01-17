import { Router } from "express";
import {cashboxCreateHandler, cashboxGetHandler, cashboxUpdateHandler, cashboxDeleteHandler} from "../../handler/cashbox/cashbox.handler.js";
import {cashboxValidation} from "../../middleware/validation.js";
const route = Router()

route.post('/', cashboxValidation, cashboxCreateHandler)
route.get('/:_id', cashboxGetHandler)
// route.get('/', userGetHandler)
route.put('/', cashboxUpdateHandler)
route.delete('/:_id', cashboxDeleteHandler)

export default route