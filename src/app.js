import express from "express";
import { ENV } from "./common/config.js";
import ConnectDb from "./common/db/connect.db.js";

// routes
import UserRoutes from "./finance/router/user/user.routes.js";
import TransactionRoutes from "./finance/router/transaction/transaction.routes.js";
import CategoryRoutes from "./finance/router/category/category.routes.js";
import CashboxRoutes from "./finance/router/cashbox/cashbox.routes.js";

const app = new express();

app.use(express.json());

app.use("/sign", UserRoutes);
app.use("/transaction", TransactionRoutes);
app.use("/category", CategoryRoutes)
app.use("/cashbox", CashboxRoutes)

async function start() {
  console.log("server is running");
  ConnectDb();
}

app.listen(ENV.PORT, start());
