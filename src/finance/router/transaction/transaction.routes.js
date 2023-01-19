import { Router } from "express";
import { transactionCreateHandler } from "../../handler/transaction/transaction.handler.js";
import { transactionGetHandler } from "../../handler/transaction/transaction.handler.js";
import { transactionUpdateHandler } from "../../handler/transaction/transaction.handler.js";
import { transactionDeleteHandler } from "../../handler/transaction/transaction.handler.js";
import { transactionValidation } from "../../middleware/transaction.validation.js";

const route = Router();

route.post("/", transactionValidation, transactionCreateHandler);
route.get("/get", transactionGetHandler);
route.put("/upd", transactionUpdateHandler);
route.delete("/del", transactionDeleteHandler);


export default route;
