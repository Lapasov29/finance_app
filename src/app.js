import express from 'express'
import {ENV} from "./common/config.js";
import ConnectDb from "./common/db/connect.db.js"

// routes
import UserRoutes from "./finance/router/user/user.routes.js"
import CashboxRoutes from "./finance/router/cashbox/cashbox.routes.js"
import authToken from './finance/middleware/authToken.js';

const app = new express()

app.use(express.json())

app.use('/user', UserRoutes)
app.use(authToken)
app.use('/cashbox', CashboxRoutes)

async function start(){
    console.log('server is running')
    ConnectDb()
}

app.listen(ENV.PORT, start())