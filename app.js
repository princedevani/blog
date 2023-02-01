const express = require('express')

require('dotenv').config();
require("./database").connect();
const userRouter = require('./router/user')



const app = express();

app.use(express.json());
app.use(userRouter)
module.exports = app;