import { Router } from "express";
import {
  categoryCreateHandler,
  categoryDeleteHandler,
  categoryGetHandler,
  categoryUpdateHandler,
} from "../../handler/category/category.handler.js";
import { categoryValidation } from "../../middleware/category.validaton.js";

const router = Router();

router
  .route("/")
  .get(categoryGetHandler)
  .post(categoryValidation, categoryCreateHandler)
  .delete(categoryDeleteHandler)
  .put(categoryUpdateHandler);

export default router;
