const express = require('express')
const cors=require('cors')
const path = require('path')
require('dotenv').config();
require("./database").connect();
const userRouter = require('./router/user')
const app = express();
app.use(cors())
app.use(express.json());


var multer = require('multer');
var fs = require('fs');

//. . . 
const port=3001
app.listen(port, ()=>{
    console.log('We are live on' + port);
    });

var upload = multer({dest:'public\images'});

 app.post('/post', upload.single('file'), function(req, res) {
  console.log(req.file);
 res.send("file saved on server");
 });

app.use("/static",express.static(path.join(__dirname, 'public')))
app.use(userRouter)

const path = require("path");
app.use(express.static(path.join(__dirname, '/public/images')));

module.exports = app;