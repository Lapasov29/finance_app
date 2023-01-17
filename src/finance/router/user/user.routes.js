import { Router } from "express";
import {userCreateHandler, userDeleteHandler, userGetHandler, userUpdateHandler} from "../../handler/user/user.handler.js";
import {userValidation} from "../../middleware/validation.js";

const route = Router()

route.post('/sign', userValidation, userCreateHandler)
route.get('/:_id', userGetHandler)
route.put('/', userUpdateHandler)
route.delete('/:_id', userDeleteHandler)

export default route