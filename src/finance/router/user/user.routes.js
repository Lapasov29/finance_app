import { Router } from "express";
import {userCreateHandler} from "../../handler/user/user.handler.js";

const route = Router()

route.post('/', userCreateHandler)

export default route