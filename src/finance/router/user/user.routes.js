import { Router } from "express";
import {
  userCreateHandler,
  userDeleteHandler,
  userGetHandler,
  UserUpdateHandler,
} from "../../handler/user/user.handler.js";
import { userValidation } from "../../middleware/user.validation.js";

const router = Router();

router
  .route("/")
  .get(userGetHandler)
  .post(userValidation, userCreateHandler)
  .delete(userDeleteHandler)
  .put(UserUpdateHandler);

export default router;
