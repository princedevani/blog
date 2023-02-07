const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
require("./database").connect();
const userRouter = require("./router/user");
const app = express();
app.use(cors());
app.use(express.json());

app.use(userRouter);

app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
