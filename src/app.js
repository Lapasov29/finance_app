import express from 'express'
import {ENV} from "./common/config.js";
import ConnectDb from "./common/db/connect.db.js"

// routes
import UserRoutes from "./finance/router/user/user.routes.js"

const app = new express()

app.use(express.json())

app.use('/sign', UserRoutes)

async function start(){
    console.log('server is running')
    ConnectDb()
}

app.listen(ENV.PORT, start())