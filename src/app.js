import express from 'express'
import {ENV} from "./common/config.js";
import ConnectDb from "./common/db/connect.db.js"

const app = new express()

app.use(express.json())

async function start(){
    console.log('server is running')
    ConnectDb()
}

app.listen(ENV.PORT, start())