const express = require('express')
const cors=require('cors')
require('dotenv').config();
require("./database").connect();
const userRouter = require('./router/user')

const app = express();
app.use(cors())
app.use(express.json());
app.use(userRouter)
module.exports = app;