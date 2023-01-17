import { Router } from "express";
import {
  transactionCreateHandler,
  transactionDeleteHandler,
  transactionGetHandler,
  transactionUpdateHandler,
} from "../../handler/transaction/transaction.handler.js";
import { transactionValidation } from "../../middleware/transaction.validation.js";

const route = Router();

route
  .route("/")
  .get(transactionGetHandler)
  .post(transactionValidation, transactionCreateHandler)
  .delete(transactionDeleteHandler)
  .put(transactionUpdateHandler);

export default route;
