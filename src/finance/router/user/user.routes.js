import { Router } from "express";
import {userCreateHandler, userDeleteHandler, userGetHandler, userUpdateHandler,userLoginHandler} from "../../handler/user/user.handler.js";
import {userRegister,usersValidation} from "../../middleware/validation.js";

const route = Router()

route.post('/sign', userRegister, userCreateHandler)
route.post('/log',usersValidation,userLoginHandler)
route.get('/:_id', userGetHandler)
route.put('/', userUpdateHandler)
route.delete('/:_id', userDeleteHandler)

export default route