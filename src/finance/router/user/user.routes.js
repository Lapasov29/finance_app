import { Router } from "express";
import {userCreateHandler} from "../../handler/user/user.handler.js";
import {userValidation} from "../../middleware/user.validation.js";

const route = Router()

route.post('/', userValidation, userCreateHandler)

export default route