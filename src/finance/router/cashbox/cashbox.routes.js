import {
  cashboxCreateHandler,
  cashboxDeleteHandler,
  cashboxGetHandler,
  cashboxUpdateHandler,
} from "../../handler/cashbox/cashbox.handler.js";
import { cashboxValidation } from "../../middleware/cashbox.validation.js";

const router = Router();

router
  .route("/")
  .get(cashboxGetHandler)
  .post(cashboxValidation, cashboxCreateHandler)
  .delete(cashboxDeleteHandler)
  .put(cashboxUpdateHandler);
  
export default router;
