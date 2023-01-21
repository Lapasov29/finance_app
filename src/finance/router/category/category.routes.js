import { Router } from "express";
import {
  categoryCreateHandler,
  categoryDeleteHandler,
  categoryGetHandler,
  categoryUpdateHandler,
} from "../../handler/category/category.handler.js";
import {categoryValidation} from "../../middleware/category.validation.js";

const router = Router();

router
  .route("/")
  .get(categoryGetHandler)
  .post(categoryValidation, categoryCreateHandler)
  .put(categoryUpdateHandler);

router.delete('/:_id', categoryDeleteHandler)

export default router;
